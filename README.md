# skill-chain

Deterministic phase-gated skill enforcement for AI coding agents. Forces agents to follow a defined workflow order — no skipping discovery, no jumping straight to code.

Works with **Claude Code** and **OpenAI Codex CLI**. Zero dependencies.

## The Problem

AI coding agents skip steps. Ask one to "build a website" and it jumps straight to writing code — skipping research, design, brand guidelines, accessibility, and quality checks. Prompt instructions help but agents forget ~20% of them. You need mechanical enforcement.

## The Solution

Define a **skill chain** — an ordered sequence of phases that must complete before the agent can edit files:

```json
{
  "flows": {
    "website-design": {
      "trigger_skill": "website-creation",
      "gate_patterns": ["app/**", "components/**", "*.tsx", "*.css"],
      "phases": [
        { "name": "discovery", "required": ["shape", "brand-guidelines"] },
        { "name": "foundation", "required": ["website-creation", "impeccable"] },
        { "name": "refinement", "anyOf": { "of": ["layout", "typeset"], "min": 1 } },
        { "name": "quality", "required": ["polish"] },
        { "name": "ship", "required": ["deploy-pipeline"] }
      ]
    }
  }
}
```

When the agent tries to edit `app/page.tsx` without having invoked `shape` and `brand-guidelines` first:

```
[skill-chain] Flow "website-design", phase 1 "discovery" is incomplete.
Invoke before continuing: shape, brand-guidelines.
```

The edit is **blocked** at the tool level. Not a suggestion — a hard gate.

## How It Works

1. A PreToolUse hook fires on every `Edit`/`Write` call
2. It reads the **session transcript** to extract which skills have been invoked
3. It finds the active flow (whichever chain's `trigger_skill` was most recently called)
4. It checks if the target file matches the chain's `gate_patterns`
5. If gated, it verifies all earlier phases are complete
6. Incomplete phase = `exit 2` = edit blocked with a message naming the missing skills

No state files. No external services. The session transcript is the single source of truth.

## Quick Start

### Option A: Claude Code Plugin (recommended)

```
/plugin marketplace add Cheggin/skill-chain
/plugin install skill-chain@skill-chain
```

This registers the enforcer hook and all 8 example skills automatically. Skills become available as `/skill-chain:<skill-name>`.

### Option B: Copy into your project

```bash
git clone https://github.com/Cheggin/skill-chain
cp skill-chain/skill-chain.mjs your-project/
cp skill-chain/skill-chains.json your-project/
cp -r skill-chain/skills/ your-project/skills/
cd your-project
node skill-chain.mjs  # or use setup.mjs to wire hooks automatically
```

### Option C: Setup script (Claude Code or Codex CLI)

```bash
node setup.mjs              # auto-detects runtime
node setup.mjs --runtime claude  # Claude Code only
node setup.mjs --runtime codex   # Codex CLI only
```

This adds the enforcer as a PreToolUse hook in `.claude/settings.json` or `.codex/hooks.json`.

### 3. Define your chain

Edit `skill-chains.json` to define your flows. Each flow needs:

| Field | Purpose |
|-------|---------|
| `trigger_skill` | Which skill activation starts this flow |
| `gate_patterns` | Glob patterns for files that are gated |
| `phases` | Ordered list of phases with required skills |

### 4. Add skills

Skills are just markdown files at `skills/<name>/SKILL.md` with YAML frontmatter. The enforcer only checks skill **names** (slugs) — it never reads the skill files themselves.

This repo includes 8 example skills for the `website-design` chain. Use them as-is or write your own.

## Phase Completion Modes

Three ways to define what "complete" means for a phase:

```json
// ALL must fire
{ "name": "discovery", "required": ["shape", "brand-guidelines"] }

// At least ONE must fire
{ "name": "styling", "oneOf": ["tailwind-setup", "css-modules-setup"] }

// At least N of M must fire
{ "name": "refinement", "anyOf": { "of": ["layout", "typeset", "colorize", "adapt"], "min": 2 } }
```

## Example: website-design Chain

The included `skill-chains.json` defines a 5-phase website build flow:

| Phase | Skills | What it enforces |
|-------|--------|-----------------|
| Discovery | `shape`, `brand-guidelines` | Research UX and brand before touching code |
| Foundation | `website-creation`, `impeccable` | Set up the project with design principles |
| Refinement | 1+ of `layout`, `typeset` | Apply at least one design refinement pass |
| Quality | `polish` | Final quality pass before shipping |
| Ship | `deploy-pipeline` | Structured deploy process |

### Without skill-chain

```
User: "Build me a landing page"
Agent: *immediately writes app/page.tsx*
Result: Generic layout, no brand consistency, no responsive design, ships broken
```

### With skill-chain

```
User: "Build me a landing page"
Agent: *tries to write app/page.tsx*
[skill-chain] Flow "website-design", phase 1 "discovery" is incomplete.
Invoke before continuing: shape, brand-guidelines.

Agent: *invokes shape, then brand-guidelines*
Agent: *invokes website-creation, impeccable*
Agent: *invokes layout*
Agent: *now can edit app/page.tsx*
Result: Researched, branded, responsive, polished
```

## Chain Definition Schema

See `skill-chains.schema.json` for the full JSON Schema. Editors with JSON Schema support will provide autocomplete and validation.

## Example Skills

This repo includes 8 production skills for the `website-design` chain:

<details>
<summary><strong>View included skills</strong></summary>

| Skill | Phase | Purpose |
|-------|-------|---------|
| `shape` | Discovery | UX/UI planning interview producing a design brief |
| `brand-guidelines` | Discovery | Extract and codify brand identity from design assets |
| `impeccable` | Foundation | Production-grade frontend with high design quality |
| `website-creation` | Foundation | SaaS website build with opinionated design presets |
| `layout` | Refinement | Fix spacing, hierarchy, and visual rhythm |
| `typeset` | Refinement | Typography hierarchy, sizing, weight, readability |
| `polish` | Quality | Final pass on alignment, spacing, consistency |
| `deploy-pipeline` | Ship | Automated deploy to Vercel/Railway/Convex |

</details>

## Creating Your Own Chains

```json
{
  "flows": {
    "api-build": {
      "description": "API-first development with schema validation",
      "trigger_skill": "api-design",
      "gate_patterns": ["src/api/**", "src/routes/**", "*.ts"],
      "phases": [
        { "name": "design", "required": ["api-design", "schema-review"] },
        { "name": "implement", "required": ["api-build"] },
        { "name": "test", "required": ["api-test"] },
        { "name": "docs", "required": ["api-docs"] }
      ]
    }
  }
}
```

## Runtime Support

| Runtime | Hook Format | Tool Names |
|---------|------------|------------|
| Claude Code | `.claude/settings.json` PreToolUse | `Edit`, `Write` |
| Codex CLI | `.codex/hooks.json` pre_tool_use | `file_edit`, `file_write` |

The enforcer handles both tool name conventions automatically.

## License

MIT
