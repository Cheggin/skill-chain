# Plan — Browser Use landing page

Single viewport (1440x900), dark theme, no scroll.

## Layout
- Full-height flex column: top nav (compact), hero (fills), footer strip (slim)
- Left column (~55%): eyebrow badge, H1, subheadline, CTA row, install snippet, social proof strip
- Right column (~45%): SVG browser-window illustration with animated agent cursor + task list overlay

## Content
- H1: "The browser, controlled by your AI."
- Sub: "Open-source Python & TypeScript SDK for AI agents that navigate, extract, and act on any website."
- CTA primary: `pip install browser-use` (copy) → secondary "View on GitHub"
- Value props (4 icons): Any LLM · Vision + DOM · Self-healing selectors · Python + TS
- Social proof: GitHub stars (60k+), contributors (400+), forks, "used by" row

## Files
- app/page.tsx — full page
- app/layout.tsx — metadata, lock to dark
- app/globals.css — force dark background, disable scroll on body

## Constraints
- No Inter, no sparkles icon, no placeholder images, no !important
- SVG only; icons inline
