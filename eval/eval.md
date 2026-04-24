# Evaluation Criteria

Screenshot both results at 1440x900 and compare:

| Criteria | Without Chain | With Chain | Winner |
|----------|--------------|------------|--------|
| **Visual hierarchy** — clear focal point, eye flow |  |  |  |
| **Typography** — font pairing, sizing, weight contrast |  |  |  |
| **Spacing** — consistent rhythm, breathing room |  |  |  |
| **Brand coherence** — feels like Browser Use, not generic |  |  |  |
| **Information density** — says enough without overwhelming |  |  |  |
| **CTA clarity** — obvious what to do next |  |  |  |
| **Polish** — alignment, consistency, micro-details |  |  |  |
| **Distinctiveness** — would you remember this page? |  |  |  |

## How to Run

### Without skill-chain (control)
```bash
cd without-chain
claude "$(cat ../prompt.md)"
```

### With skill-chain (treatment)
```bash
cd with-chain
claude "$(cat ../prompt.md)"
```

The `with-chain` directory has skill-chain enforced. The agent will be forced through discovery (shape + brand-guidelines) and foundation (website-creation + impeccable) before it can edit any source files.

## Expected Differences

**Without chain**: Agent immediately writes `app/page.tsx`. Generic dark landing page with standard layout. Functional but forgettable.

**With chain**: Agent is blocked from editing source files until it completes:
1. `shape` — researches Browser Use, plans UX, writes a design brief
2. `brand-guidelines` — extracts Browser Use's actual brand identity
3. `website-creation` + `impeccable` — applies design principles
4. `layout` or `typeset` — refines spacing and typography
5. `polish` — final quality pass

The result should be more researched, more branded, and more polished.
