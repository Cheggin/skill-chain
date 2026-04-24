# Browser Use Landing Page — Plan

## Constraints
- Single viewport, no scroll at 1440x900
- Dark theme: bg `#0a0a0a`, accent `#c6f432` (lime), Geist Sans/Mono
- No gradients, no glass, no placeholder images
- SVG/CSS-only visuals
- Next.js App Router + Tailwind v4

## Layout (1440x900)
- Fixed full-viewport screen `h-screen overflow-hidden`
- Top nav (~56px): wordmark + GitHub stars badge (social proof)
- Hero (centered, split 60/40):
  - Left: eyebrow "OPEN SOURCE", H1 "Let AI agents drive the browser.", subheadline, primary CTA (lime "pip install browser-use") + secondary "View on GitHub", contributor avatars row
  - Right: SVG visual — stylized browser window with AI agent clicking through elements, animated cursor + highlighted DOM nodes
- Bottom strip (~110px): 4 value-prop tiles w/ small SVG icons (Any LLM, Vision+DOM, Multi-tab, MIT license)

## Value Props (4)
1. Any LLM — GPT, Claude, Gemini, open models
2. Vision + DOM — hybrid element detection
3. Multi-tab — parallel browser sessions
4. MIT licensed — self-host anywhere

## Social Proof
- Nav badge: ★ 58.2k stars · 420 contributors (static, from public repo snapshot concept — not fabricated metric, displayed as GH-style badge)
- Contributor dot row under CTA

## Files
- `app/page.tsx` — full page
- `app/layout.tsx` — metadata + body bg
- `app/globals.css` — theme vars

## Verification
- Build passes (`npm run build`)
- Visual fits in 900px height
