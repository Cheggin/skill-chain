#!/usr/bin/env node
/**
 * Skill Chain Stop Hook — prevents the agent from stopping until
 * all phases in the active chain are complete.
 *
 * If a chain is active (trigger_skill was invoked) and any phase
 * has incomplete skills, the hook blocks the stop with a message
 * telling the agent which skills still need to run.
 *
 * Protocol:
 *   stdin  → JSON { hook_event_name, transcript_path, cwd }
 *   exit 2 → block the stop (agent continues working)
 *   exit 0 → allow the stop
 */

import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

function normalizeSkill(name) {
  const idx = name.lastIndexOf(':');
  return idx >= 0 ? name.slice(idx + 1) : name;
}

function phaseSkills(phase) {
  if ('required' in phase) return phase.required;
  if ('oneOf' in phase) return phase.oneOf;
  return phase.anyOf.of;
}

function isPhaseComplete(phase, fired) {
  if ('required' in phase) return phase.required.every(s => fired.has(s));
  if ('oneOf' in phase) return phase.oneOf.some(s => fired.has(s));
  const hits = phase.anyOf.of.filter(s => fired.has(s)).length;
  return hits >= phase.anyOf.min;
}

function missingFromPhase(phase, fired) {
  if ('required' in phase) return phase.required.filter(s => !fired.has(s));
  if ('oneOf' in phase) return phase.oneOf.some(s => fired.has(s)) ? [] : phase.oneOf;
  const missing = phase.anyOf.of.filter(s => !fired.has(s));
  const need = phase.anyOf.min - (phase.anyOf.of.length - missing.length);
  return need > 0 ? missing : [];
}

function loadChains(cwd) {
  const pluginRoot = process.env.CLAUDE_PLUGIN_ROOT;
  const candidates = [
    resolve(cwd, 'skill-chains.json'),
    resolve(cwd, 'chains/skill-chains.json'),
    resolve(cwd, '.harness/skill-chains.json'),
    pluginRoot ? resolve(pluginRoot, 'skill-chains.json') : null,
    pluginRoot ? resolve(pluginRoot, 'chains/skill-chains.json') : null,
  ].filter(Boolean);
  for (const path of candidates) {
    if (!existsSync(path)) continue;
    try {
      const parsed = JSON.parse(readFileSync(path, 'utf-8'));
      if (parsed.flows) return parsed;
    } catch { continue; }
  }
  return null;
}

function readSkillHistory(transcriptPath) {
  if (!transcriptPath || !existsSync(transcriptPath)) return [];
  const skills = [];
  try {
    const raw = readFileSync(transcriptPath, 'utf-8');
    for (const line of raw.split('\n')) {
      if (!line.trim()) continue;
      let entry;
      try { entry = JSON.parse(line); } catch { continue; }
      if (entry.type !== 'assistant') continue;
      const content = entry.message?.content;
      if (!Array.isArray(content)) continue;
      for (const c of content) {
        if (c && typeof c === 'object' && c.type === 'tool_use' && c.name === 'Skill') {
          const skill = c.input?.skill;
          if (typeof skill === 'string') skills.push(normalizeSkill(skill));
        }
      }
    }
  } catch {}
  return skills;
}

function findActiveFlow(chains, skillHistory) {
  let latest = null;
  for (const [name, flow] of Object.entries(chains.flows)) {
    const idx = skillHistory.lastIndexOf(flow.trigger_skill);
    if (idx >= 0 && (!latest || idx > latest.idx)) {
      latest = { idx, name, flow };
    }
  }
  return latest ? { name: latest.name, flow: latest.flow } : null;
}

const chunks = [];
process.stdin.on('data', c => chunks.push(c.toString()));
process.stdin.on('end', () => {
  const raw = chunks.join('');
  try {
    const input = JSON.parse(raw);
    const cwd = input.cwd || process.cwd();

    const chains = loadChains(cwd);
    if (!chains) process.exit(0);

    const skillHistory = readSkillHistory(input.transcript_path);
    const active = findActiveFlow(chains, skillHistory);
    if (!active) process.exit(0);

    const { name, flow } = active;
    const fired = new Set(skillHistory);

    const incomplete = [];
    for (const phase of flow.phases) {
      if (!isPhaseComplete(phase, fired)) {
        const missing = missingFromPhase(phase, fired);
        if (missing.length > 0) {
          incomplete.push({ name: phase.name, missing });
        }
      }
    }

    if (incomplete.length === 0) {
      process.exit(0);
    }

    const phaseList = incomplete
      .map(p => `  - Phase "${p.name}": invoke ${p.missing.join(', ')}`)
      .join('\n');

    console.error(
      `[skill-chain] Flow "${name}" is not complete. ${incomplete.length} phase(s) remaining:\n${phaseList}\n\nInvoke the missing skills before finishing.`
    );
    process.exit(2);
  } catch {
    process.exit(0);
  }
});
