#!/usr/bin/env node
/**
 * Skill Chain Setup — wires the enforcer into Claude Code or Codex CLI.
 *
 * Usage:
 *   node setup.mjs                  # auto-detect runtime
 *   node setup.mjs --runtime claude # Claude Code only
 *   node setup.mjs --runtime codex  # Codex CLI only
 *   node setup.mjs --runtime both   # both runtimes
 */

import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const PROJECT_ROOT = process.cwd();
const ENFORCER = 'node skill-chain.mjs';

function log(msg) {
  console.log(`[skill-chain] ${msg}`);
}

function detectRuntime() {
  const runtimes = [];
  try { execSync('which claude', { stdio: 'ignore' }); runtimes.push('claude'); } catch {}
  try { execSync('which codex', { stdio: 'ignore' }); runtimes.push('codex'); } catch {}
  return runtimes;
}

function setupClaude() {
  const dir = join(PROJECT_ROOT, '.claude');
  mkdirSync(dir, { recursive: true });
  const settingsPath = join(dir, 'settings.json');

  let settings = {};
  if (existsSync(settingsPath)) {
    try { settings = JSON.parse(readFileSync(settingsPath, 'utf-8')); } catch {}
  }

  if (!settings.hooks) settings.hooks = {};
  if (!settings.hooks.PreToolUse) settings.hooks.PreToolUse = [];

  const hookEntry = { type: 'command', command: ENFORCER };

  const editMatcher = settings.hooks.PreToolUse.find(m => m.matcher === 'Edit');
  if (editMatcher) {
    if (!editMatcher.hooks.some(h => h.command === ENFORCER)) {
      editMatcher.hooks.push(hookEntry);
    }
  } else {
    settings.hooks.PreToolUse.push({ matcher: 'Edit', hooks: [hookEntry] });
  }

  const writeMatcher = settings.hooks.PreToolUse.find(m => m.matcher === 'Write');
  if (writeMatcher) {
    if (!writeMatcher.hooks.some(h => h.command === ENFORCER)) {
      writeMatcher.hooks.push(hookEntry);
    }
  } else {
    settings.hooks.PreToolUse.push({ matcher: 'Write', hooks: [hookEntry] });
  }

  writeFileSync(settingsPath, JSON.stringify(settings, null, 2) + '\n');
  log('Wired into .claude/settings.json (Edit + Write hooks)');
}

function setupCodex() {
  const dir = join(PROJECT_ROOT, '.codex');
  mkdirSync(dir, { recursive: true });
  const hooksPath = join(dir, 'hooks.json');

  let hooks = {};
  if (existsSync(hooksPath)) {
    try { hooks = JSON.parse(readFileSync(hooksPath, 'utf-8')); } catch {}
  }

  if (!hooks.pre_tool_use) hooks.pre_tool_use = [];

  const exists = hooks.pre_tool_use.some(h =>
    h.command === ENFORCER &&
    h.matcher?.includes('file_edit')
  );

  if (!exists) {
    hooks.pre_tool_use.push({
      matcher: ['file_edit', 'file_write'],
      command: ENFORCER,
    });
  }

  writeFileSync(hooksPath, JSON.stringify(hooks, null, 2) + '\n');
  log('Wired into .codex/hooks.json (file_edit + file_write hooks)');
}

const args = process.argv.slice(2);
const runtimeFlag = args.indexOf('--runtime');
let targets;

if (runtimeFlag !== -1 && args[runtimeFlag + 1]) {
  const val = args[runtimeFlag + 1];
  targets = val === 'both' ? ['claude', 'codex'] : [val];
} else {
  targets = detectRuntime();
  if (targets.length === 0) {
    log('No supported runtime found. Use --runtime to specify.');
    process.exit(1);
  }
}

log(`Setting up for: ${targets.join(', ')}`);

if (targets.includes('claude')) setupClaude();
if (targets.includes('codex')) setupCodex();

if (!existsSync(join(PROJECT_ROOT, 'skill-chains.json'))) {
  log('No skill-chains.json found. Copy one from the examples or create your own.');
}

log('Done. Skill chain enforcement is active.');
