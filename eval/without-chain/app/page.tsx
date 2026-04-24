const VALUE_PROPS = [
  {
    title: "Natural language control",
    body: "Drive any site with plain English instructions. No selectors, no brittle scripts.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M4 7h16M4 12h10M4 17h7" />
        <circle cx="19" cy="17" r="2" />
      </svg>
    ),
  },
  {
    title: "Multi-model by default",
    body: "Bring your own LLM — GPT, Claude, Gemini, or local. Swap without rewrites.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="6" cy="7" r="2.5" />
        <circle cx="18" cy="7" r="2.5" />
        <circle cx="12" cy="17" r="2.5" />
        <path d="M8 8.5l3 6M16 8.5l-3 6" />
      </svg>
    ),
  },
  {
    title: "Vision + DOM aware",
    body: "Combines screenshots and structured DOM so agents see pages like humans do.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Self-healing runs",
    body: "Agents retry, reason, and recover from failures — workflows keep running when sites change.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <path d="M21 4v5h-5" />
      </svg>
    ),
  },
];

function BrowserMock() {
  return (
    <div className="relative w-full rounded-xl border border-white/10 bg-zinc-950/70 shadow-2xl shadow-black/50 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        <div className="ml-4 flex h-6 flex-1 items-center rounded-md bg-white/5 px-3 font-mono text-[11px] text-zinc-400">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2 h-3 w-3 text-zinc-500">
            <rect x="3" y="11" width="18" height="10" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          https://app.example.com/orders
        </div>
      </div>
      <div className="grid grid-cols-[160px_1fr] gap-0">
        <div className="space-y-2 border-r border-white/5 p-4">
          {["Dashboard", "Orders", "Customers", "Reports"].map((item, i) => (
            <div key={item} className={`flex h-6 items-center rounded-md px-2 text-[11px] ${i === 1 ? "bg-emerald-500/10 text-emerald-300" : "text-zinc-500"}`}>
              <span className={`mr-2 h-1.5 w-1.5 rounded-full ${i === 1 ? "bg-emerald-400" : "bg-zinc-600"}`} />
              {item}
            </div>
          ))}
        </div>
        <div className="relative space-y-3 p-4">
          <div className="flex items-center justify-between">
            <div className="h-3 w-24 rounded bg-white/10" />
            <div className="h-6 w-20 rounded-md bg-emerald-500/20 ring-1 ring-emerald-400/40" />
          </div>
          <div className="space-y-2">
            {[85, 62, 74, 48].map((w, i) => (
              <div key={i} className="flex items-center gap-3 rounded-md border border-white/5 bg-white/[0.02] p-2.5">
                <div className="h-6 w-6 rounded bg-white/5" />
                <div className="flex-1 space-y-1.5">
                  <div className="h-2 rounded bg-white/10" style={{ width: `${w}%` }} />
                  <div className="h-1.5 w-1/3 rounded bg-white/5" />
                </div>
                <div className="h-4 w-12 rounded bg-white/5" />
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute right-8 top-20 flex items-center gap-2">
            <div className="relative h-3 w-3">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative block h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-emerald-950" />
            </div>
            <div className="rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 font-mono text-[10px] text-emerald-300">
              agent.click(&quot;Export&quot;)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative flex h-screen flex-col overflow-hidden bg-[#07080a] text-zinc-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-20%] h-[500px] w-[700px] rounded-full bg-teal-500/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
      </div>

      <header className="flex items-center justify-between px-10 py-5">
        <div className="flex items-center gap-2.5">
          <div className="relative flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-emerald-400 to-teal-600 shadow-lg shadow-emerald-500/20">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-4 w-4 text-black">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M3 9h18" />
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-tight">Browser Use</span>
        </div>
        <nav className="flex items-center gap-7 text-sm text-zinc-400">
          <a href="#" className="hover:text-white">Docs</a>
          <a href="#" className="hover:text-white">Examples</a>
          <a href="#" className="hover:text-white">Cloud</a>
          <a href="#" className="hover:text-white">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-zinc-400 hover:text-white">Sign in</a>
          <a href="#" className="rounded-md bg-white px-3.5 py-1.5 text-sm font-medium text-black hover:bg-zinc-200">
            Get started
          </a>
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-[1240px] flex-1 grid-cols-[1.05fr_1fr] items-center gap-16 px-10 pb-10">
        <div>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            v0.3 — Parallel agents are live
            <span className="text-zinc-500">→</span>
          </a>
          <h1 className="mt-5 text-[54px] font-semibold leading-[1.02] tracking-tight">
            Give your AI a
            <span className="relative mx-3 inline-block">
              <span className="relative z-10 bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">browser</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-emerald-400/15" />
            </span>
            it actually knows how to use.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-zinc-400">
            The open-source toolkit for building agents that browse, click, type, and extract — on any
            website, with any model.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-md bg-emerald-400 px-5 py-2.5 text-sm font-medium text-emerald-950 shadow-lg shadow-emerald-500/20 hover:bg-emerald-300">
              Start building
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-3.5 w-3.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 py-2.5 font-mono text-xs text-zinc-300 hover:bg-white/[0.06]">
              <span className="text-emerald-400">$</span> pip install browser-use
            </a>
          </div>

          <div className="mt-7 flex items-center gap-5 text-xs text-zinc-500">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-zinc-300">
                <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.5.2 2.7.1 3 .8.9 1.2 2 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5Z"/>
              </svg>
              <span className="font-semibold text-zinc-200">58.2k</span>
              <span>stars</span>
            </div>
            <div className="h-3 w-px bg-white/10" />
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                {["#34d399","#22d3ee","#f472b6","#fbbf24","#a78bfa"].map((c) => (
                  <span key={c} className="h-5 w-5 rounded-full ring-2 ring-[#07080a]" style={{ background: c }} />
                ))}
              </div>
              <span className="font-semibold text-zinc-200">412</span>
              <span>contributors</span>
            </div>
            <div className="h-3 w-px bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-zinc-200">8.1k</span>
              <span>projects shipped</span>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4">
            {VALUE_PROPS.map((p) => (
              <div key={p.title} className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-emerald-300">
                  {p.icon}
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-100">{p.title}</div>
                  <div className="mt-0.5 text-xs leading-relaxed text-zinc-500">{p.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-transparent to-teal-500/10 blur-2xl" />
          <BrowserMock />
          <div className="mt-4 flex items-center gap-2 rounded-lg border border-white/10 bg-zinc-950/70 p-3 font-mono text-[12px] backdrop-blur">
            <span className="text-emerald-400">agent</span>
            <span className="text-zinc-500">›</span>
            <span className="truncate text-zinc-300">Find last week&apos;s orders over $500 and export to CSV</span>
            <span className="ml-auto h-1.5 w-6 shrink-0 animate-pulse rounded-full bg-emerald-400/60" />
          </div>
        </div>
      </main>
    </div>
  );
}
