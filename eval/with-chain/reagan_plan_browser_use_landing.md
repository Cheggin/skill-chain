# Browser Use Landing Page — Plan

## Scope
Single-viewport landing page for Browser Use. Dark theme (user override of skill's light-mode rule). 1440x900 no-scroll.

## Layout budget (900px)
- Nav: 64px
- Hero (headline, sub, CTA, browser-demo SVG): ~480px
- Value props (3, visual): ~180px
- Social proof bar (stars, contributors, PyPI): ~80px
- Breathing room: ~96px

## Style
- Dark: bg #0a0a0a, surface #111, border #1f1f1f
- Accent: electric lime/green (#c6f432) — matches browser-use brand energy
- Font: Geist Sans (already in layout), Geist Mono for code
- No gradients on text, no glassmorphism, no emojis, no Lucide-in-box

## Hero visual
Custom SVG: stylized browser window with an AI cursor path tracing a form fill → click. Pure SVG, no images.

## Files
- app/page.tsx — full page
- app/layout.tsx — title/desc
- app/globals.css — minor additions if needed
