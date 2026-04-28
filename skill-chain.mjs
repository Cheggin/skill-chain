#!/usr/bin/env node
/**
 * Skill Chain Enforcer — PreToolUse hook on Edit/Write.
 *
 * Enforces deterministic phase ordering for multi-skill workflows.
 * Reads the session transcript to determine which skills have fired,
 * then blocks file edits if earlier phases are incomplete.
 *
 * Works with both Claude Code and Codex CLI.
 *
 * Protocol:
 *   stdin  → JSON { tool_name, tool_input, transcript_path, cwd }
 *   stdout → same JSON (passthrough = allow)
 *   stderr → error message
 *   exit 2 → block the tool call
 */

import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const GATED_TOOLS = new Set(['Edit', 'Write', 'file_edit', 'file_write']);

export function phaseSkills(phase) {
  if ('required' in phase) return phase.required;
  if ('oneOf' in phase) return phase.oneOf;
  return phase.anyOf.of;
}

export function isPhaseComplete(phase, fired) {
  if ('required' in phase) return phase.required.every(s => fired.has(s));
  if ('oneOf' in phase) return phase.oneOf.some(s => fired.has(s));
  const hits = phase.anyOf.of.filter(s => fired.has(s)).length;
  return hits >= phase.anyOf.min;
}

export function missingFromPhase(phase, fired) {
  if ('required' in phase) return phase.required.filter(s => !fired.has(s));
  if ('oneOf' in phase) return phase.oneOf.some(s => fired.has(s)) ? [] : phase.oneOf;
  const missing = phase.anyOf.of.filter(s => !fired.has(s));
  const need = phase.anyOf.min - (phase.anyOf.of.length - missing.length);
  return need > 0 ? missing : [];
}

export function phaseIndexOfSkill(phases, skill) {
  for (let i = 0; i < phases.length; i++) {
    if (phaseSkills(phases[i]).includes(skill)) return i;
  }
  return -1;
}

function globMatch(path, pattern) {
  const re = new RegExp(
    '^' +
    pattern
      .replace(/[.+^$()|[\]\\]/g, '\\$&')
      .replace(/\*\*/g, '::DOUBLESTAR::')
      .replace(/\*/g, '[^/]*')
      .replace(/::DOUBLESTAR::/g, '.*')
      .replace(/\?/g, '[^/]') +
    '$'
  );
  return re.test(path);
}

export function matchesGate(filePath, patterns) {
  return patterns.some(p => globMatch(filePath, p));
}

export function findActiveFlow(chains, skillHistory) {
  let latest = null;
  for (const [name, flow] of Object.entries(chains.flows)) {
    const idx = skillHistory.lastIndexOf(flow.trigger_skill);
    if (idx >= 0 && (!latest || idx > latest.idx)) {
      latest = { idx, name, flow };
    }
  }
  return latest ? { name: latest.name, flow: latest.flow } : null;
}

export function evaluate(chains, filePath, skillHistory) {
  const active = findActiveFlow(chains, skillHistory);
  if (!active) return { decision: 'ALLOW' };

  const { name, flow } = active;
  if (!matchesGate(filePath, flow.gate_patterns)) return { decision: 'ALLOW' };

  const fired = new Set(skillHistory);
  const postTrigger = skillHistory.slice(
    skillHistory.lastIndexOf(flow.trigger_skill) + 1
  );
  const lastPhaseSkill = [...postTrigger]
    .reverse()
    .find(s => phaseIndexOfSkill(flow.phases, s) >= 0);

  if (!lastPhaseSkill) {
    const firstPhase = flow.phases[0];
    return {
      decision: 'DENY',
      message:
        `[skill-chain] Flow "${name}" is active but no phase skill has fired yet. ` +
        `Start phase 1 "${firstPhase.name}" by invoking: ${phaseSkills(firstPhase).join(', ')}.`,
    };
  }

  const currentPhaseIdx = phaseIndexOfSkill(flow.phases, lastPhaseSkill);
  for (let i = 0; i <= currentPhaseIdx; i++) {
    const phase = flow.phases[i];
    if (!isPhaseComplete(phase, fired)) {
      const missing = missingFromPhase(phase, fired);
      return {
        decision: 'DENY',
        message:
          `[skill-chain] Flow "${name}", phase ${i + 1} "${phase.name}" is incomplete. ` +
          `Invoke before continuing: ${missing.join(', ')}.`,
      };
    }
  }

  return { decision: 'ALLOW' };
}

function normalizeSkill(name) {
  const idx = name.lastIndexOf(':');
  return idx >= 0 ? name.slice(idx + 1) : name;
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

// CLI runner
const chunks = [];
process.stdin.on('data', c => chunks.push(c.toString()));
process.stdin.on('end', () => {
  const raw = chunks.join('');
  try {
    const input = JSON.parse(raw);
    const cwd = input.cwd || process.cwd();
    const skillHistory = readSkillHistory(input.transcript_path);

    if (input.tool_name === 'Skill') {
      const s = input.tool_input?.skill;
      if (typeof s === 'string') skillHistory.push(normalizeSkill(s));
    }

    if (!GATED_TOOLS.has(input.tool_name)) {
      console.log(raw);
      return;
    }

    const rawFilePath = input.tool_input?.file_path || '';
    if (!rawFilePath) { console.log(raw); return; }

    const filePath = rawFilePath.startsWith(cwd + '/')
      ? rawFilePath.slice(cwd.length + 1)
      : rawFilePath;

    const chains = loadChains(cwd);
    if (!chains) { console.log(raw); return; }

    const result = evaluate(chains, filePath, skillHistory);
    if (result.decision === 'DENY') {
      console.error(result.message || '[skill-chain] blocked');
      process.exit(2);
    }
    console.log(raw);
  } catch {
    console.log(raw);
  }
});
