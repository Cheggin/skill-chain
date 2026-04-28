import Image from "next/image";

const VALUE_PROPS = [
  {
    title: "Any model, any site",
    desc: "Plug GPT, Claude, Gemini, or local models into a real browser.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
  },
  {
    title: "Vision + DOM",
    desc: "Hybrid grounding so agents see pages the way humans do.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Self-correcting",
    desc: "Agents recover from broken selectors, modals, and slow loads.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path d="M21 12a9 9 0 1 1-3.5-7.1" />
        <path d="M21 4v5h-5" />
      </svg>
    ),
  },
  {
    title: "Production-ready",
    desc: "Run headless, parallel, and observable — from laptop to cloud.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 glow pointer-events-none" />

      <header className="relative z-10 flex h-14 items-center justify-between px-8 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-[var(--accent)] grid place-items-center">
            <span className="text-[10px] font-bold text-black">B</span>
          </div>
          <span className="text-sm font-semibold tracking-tight">browser-use</span>
          <span className="ml-3 text-xs text-[var(--muted)] hidden md:inline">
            v0.4 · open source
          </span>
        </div>
        <nav className="flex items-center gap-7 text-sm text-[var(--muted)]">
          <a className="hover:text-white transition" href="#">Docs</a>
          <a className="hover:text-white transition" href="#">Examples</a>
          <a className="hover:text-white transition" href="#">Cloud</a>
          <a className="hover:text-white transition" href="#">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-[var(--muted)] hover:text-white transition">Sign in</a>
          <a
            href="#"
            className="rounded-md bg-white/[0.06] border border-white/10 px-3 py-1.5 text-sm hover:bg-white/[0.1] transition"
          >
            Star on GitHub
          </a>
        </div>
      </header>

      <main className="relative z-10 grid h-[calc(100vh-3.5rem)] grid-cols-12 gap-8 px-8 py-8">
        <section className="col-span-7 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-[var(--muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              Now with Claude 4.7 + Gemini 3 support
            </div>

            <h1 className="mt-6 text-[64px] leading-[1.02] font-semibold tracking-[-0.03em]">
              Send your agent
              <br />
              <span className="text-[var(--muted)]">on a journey</span>
              <br />
              across the web.
            </h1>

            <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-[var(--muted)]">
              Browser Use is the open-source framework that gives AI agents a
              real browser. Book flights, fill forms, scrape data, run QA —
              with a few lines of Python.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-black hover:brightness-95 transition"
              >
                Get started — pip install
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white hover:bg-white/[0.06] transition font-mono"
              >
                <span className="text-[var(--muted)]">$</span> pip install browser-use
              </a>
            </div>

            <div className="mt-7 flex items-center gap-6 text-xs text-[var(--muted)]">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                  <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
                </svg>
                <span className="text-white tabular-nums font-medium">62.4k</span> stars
              </div>
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                  <circle cx="9" cy="8" r="3" /><circle cx="17" cy="10" r="2.5" />
                  <path d="M3 20c.6-3 3.2-5 6-5s5.4 2 6 5M14 20c.5-2.2 2-3.5 4-3.5" />
                </svg>
                <span className="text-white tabular-nums font-medium">412</span> contributors
              </div>
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                  <path d="M4 7h16M4 12h16M4 17h10" />
                </svg>
                <span className="text-white tabular-nums font-medium">1.8M</span> downloads / mo
              </div>
              <div className="hidden lg:flex items-center gap-2 pl-6 border-l border-white/10">
                <span>Trusted by teams at</span>
                <span className="text-white/70">Replit · Vercel · Hugging Face</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 pt-6">
            {VALUE_PROPS.map((p) => (
              <div
                key={p.title}
                className="group rounded-lg border border-white/10 bg-white/[0.02] p-4 hover:bg-white/[0.04] hover:border-white/20 transition"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--accent)]/10 text-[var(--accent)]">
                  {p.icon}
                </div>
                <div className="mt-3 text-sm font-medium text-white">{p.title}</div>
                <div className="mt-1 text-xs leading-snug text-[var(--muted)]">
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="col-span-5 relative">
          <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1407] via-[#0a0a0a] to-[#0a0a0a]">
            <Image
              src="/hero.png"
              alt="A hooded traveler in golden robes — the agent on its journey through the web"
              fill
              priority
              sizes="(max-width: 1440px) 40vw, 560px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                <span className="h-1 w-6 bg-[var(--accent)]" />
                The wanderer
              </div>
              <div className="mt-2 text-sm text-white/80 max-w-[380px] leading-snug">
                Every task is a journey. Browser Use carries your agent step by
                step — through forms, flows, and 404s — until the work is done.
              </div>
            </div>
            <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 backdrop-blur px-3 py-1 text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              agent.run() · live
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
