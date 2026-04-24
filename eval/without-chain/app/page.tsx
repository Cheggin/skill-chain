const GITHUB_URL = "https://github.com/browser-use/browser-use";
const STARS = "58.2k";
const CONTRIBUTORS = 420;

const VALUE_PROPS = [
  {
    title: "Any LLM",
    desc: "GPT, Claude, Gemini, Llama, or local.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 3v3M12 18v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M3 12h3M18 12h3M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Vision + DOM",
    desc: "Hybrid element detection that just works.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Multi-tab",
    desc: "Run parallel sessions with shared state.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="3" y="6" width="13" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 6V4.5A1.5 1.5 0 0 1 9.5 3h10A1.5 1.5 0 0 1 21 4.5v10a1.5 1.5 0 0 1-1.5 1.5H18" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "MIT licensed",
    desc: "Self-host. Fork it. Ship it.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M12 3 4 6v6c0 4.5 3.2 8.2 8 9 4.8-.8 8-4.5 8-9V6l-8-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 28 28" className="h-6 w-6" aria-hidden>
        <rect x="1.5" y="1.5" width="25" height="25" rx="5" fill="#c6f432" />
        <circle cx="8" cy="9" r="1.2" fill="#0a0a0a" />
        <circle cx="12" cy="9" r="1.2" fill="#0a0a0a" />
        <circle cx="16" cy="9" r="1.2" fill="#0a0a0a" />
        <path d="M7 19l4-4 3 3 6-6" stroke="#0a0a0a" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[15px] font-semibold tracking-tight">browser-use</span>
    </div>
  );
}

function GithubBadge() {
  return (
    <a
      href={GITHUB_URL}
      className="group flex items-center gap-0 overflow-hidden rounded-md border border-[#262626] bg-[#111] text-xs font-medium transition-colors hover:border-[#333]"
    >
      <span className="flex items-center gap-1.5 px-2.5 py-1.5 text-neutral-300">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.28-1.67-1.28-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.17 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
        </svg>
        GitHub
      </span>
      <span className="flex items-center gap-1 border-l border-[#262626] bg-[#0d0d0d] px-2.5 py-1.5 text-[#c6f432]">
        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden>
          <path d="m12 2 2.9 6.9 7.5.6-5.7 4.9 1.8 7.3L12 17.8 5.5 21.7l1.8-7.3L1.6 9.5l7.5-.6L12 2Z" />
        </svg>
        {STARS}
      </span>
    </a>
  );
}

function BrowserVisual() {
  return (
    <div className="relative h-[420px] w-full max-w-[520px]">
      <div className="absolute inset-0 rounded-xl border border-[#1f1f1f] bg-[#0d0d0d] shadow-[0_0_0_1px_rgba(198,244,50,0.05)]">
        {/* titlebar */}
        <div className="flex items-center gap-1.5 border-b border-[#1a1a1a] px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#2a2a2a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#2a2a2a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#2a2a2a]" />
          <div className="ml-3 flex h-5 flex-1 items-center rounded border border-[#1a1a1a] bg-[#0a0a0a] px-2 font-mono text-[10px] text-neutral-500">
            browser-use.com
          </div>
        </div>

        {/* page content */}
        <div className="relative h-[calc(100%-38px)] p-5">
          <svg viewBox="0 0 440 340" className="h-full w-full">
            {/* header bar */}
            <rect x="0" y="0" width="180" height="14" rx="3" fill="#1a1a1a" />
            <rect x="0" y="24" width="120" height="10" rx="2" fill="#151515" />

            {/* grid of cards */}
            <g>
              <rect x="0" y="52" width="135" height="100" rx="6" fill="#111" stroke="#1f1f1f" />
              <rect x="10" y="62" width="60" height="8" rx="2" fill="#222" />
              <rect x="10" y="76" width="110" height="6" rx="2" fill="#1a1a1a" />
              <rect x="10" y="88" width="90" height="6" rx="2" fill="#1a1a1a" />
              <rect x="10" y="128" width="44" height="14" rx="3" fill="#c6f432" />
            </g>
            <g>
              <rect x="152" y="52" width="135" height="100" rx="6" fill="#111" stroke="#c6f432" strokeWidth="1.5" />
              <rect x="162" y="62" width="60" height="8" rx="2" fill="#2a2a2a" />
              <rect x="162" y="76" width="110" height="6" rx="2" fill="#1a1a1a" />
              <rect x="162" y="88" width="90" height="6" rx="2" fill="#1a1a1a" />
              <rect x="162" y="128" width="44" height="14" rx="3" fill="#c6f432" />
              {/* selection label */}
              <g>
                <rect x="152" y="36" width="86" height="14" rx="3" fill="#c6f432" />
                <text x="158" y="46" fontFamily="var(--font-geist-mono), ui-monospace" fontSize="9" fill="#0a0a0a" fontWeight="600">
                  button.primary
                </text>
              </g>
            </g>
            <g>
              <rect x="304" y="52" width="135" height="100" rx="6" fill="#111" stroke="#1f1f1f" />
              <rect x="314" y="62" width="60" height="8" rx="2" fill="#222" />
              <rect x="314" y="76" width="110" height="6" rx="2" fill="#1a1a1a" />
              <rect x="314" y="88" width="90" height="6" rx="2" fill="#1a1a1a" />
              <rect x="314" y="128" width="44" height="14" rx="3" fill="#1a1a1a" />
            </g>

            {/* form rows */}
            <rect x="0" y="172" width="440" height="34" rx="4" fill="#0f0f0f" stroke="#1a1a1a" />
            <rect x="10" y="183" width="80" height="12" rx="2" fill="#1e1e1e" />
            <rect x="0" y="214" width="440" height="34" rx="4" fill="#0f0f0f" stroke="#1a1a1a" />
            <rect x="10" y="225" width="120" height="12" rx="2" fill="#1e1e1e" />
            <rect x="0" y="256" width="440" height="34" rx="4" fill="#0f0f0f" stroke="#1a1a1a" />
            <rect x="10" y="267" width="60" height="12" rx="2" fill="#1e1e1e" />

            {/* scan line */}
            <g style={{ animation: "scan 3.6s linear infinite" }}>
              <line x1="0" y1="40" x2="440" y2="40" stroke="#c6f432" strokeWidth="0.6" opacity="0.35" />
            </g>
          </svg>

          {/* agent cursor */}
          <div
            className="pointer-events-none absolute left-5 top-5"
            style={{ animation: "cursor-path 6s ease-in-out infinite" }}
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5 drop-shadow-[0_0_6px_rgba(198,244,50,0.6)]">
              <path d="M2 2l6 16 2.5-6.5L17 9 2 2Z" fill="#c6f432" stroke="#0a0a0a" strokeWidth="0.8" />
            </svg>
            <div className="mt-1 inline-flex items-center gap-1 rounded bg-[#0a0a0a] px-1.5 py-0.5 font-mono text-[9px] text-[#c6f432] ring-1 ring-[#c6f432]/40">
              <span className="h-1 w-1 rounded-full bg-[#c6f432]" style={{ animation: "pulse-dot 1.2s ease-in-out infinite" }} />
              agent
            </div>
          </div>
        </div>
      </div>

      {/* code chip */}
      <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-md border border-[#1f1f1f] bg-[#0d0d0d] px-3 py-2 font-mono text-[11px] text-neutral-300">
        <span className="h-1.5 w-1.5 rounded-full bg-[#c6f432]" style={{ animation: "pulse-dot 1.4s ease-in-out infinite" }} />
        agent.run(&quot;book a flight to SFO&quot;)
      </div>

      {/* step chip */}
      <div className="absolute -right-3 top-12 rounded-md border border-[#1f1f1f] bg-[#0d0d0d] px-2.5 py-1.5 text-[11px]">
        <div className="font-mono text-[9px] text-neutral-500">STEP 3/7</div>
        <div className="text-neutral-200">click <span className="text-[#c6f432]">Continue</span></div>
      </div>
    </div>
  );
}

function ContributorRow() {
  const initials = ["GA", "MR", "SJ", "LK", "TN", "PV"];
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2">
        {initials.map((i, idx) => (
          <div
            key={i}
            className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#0a0a0a] bg-[#1a1a1a] font-mono text-[9px] font-medium text-neutral-300"
            style={{ zIndex: 10 - idx }}
          >
            {i}
          </div>
        ))}
        <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#0a0a0a] bg-[#c6f432] font-mono text-[9px] font-semibold text-[#0a0a0a]">
          +{CONTRIBUTORS - initials.length}
        </div>
      </div>
      <span className="text-xs text-neutral-500">
        {CONTRIBUTORS} contributors shipping weekly
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-[#0a0a0a] text-neutral-100">
      {/* NAV */}
      <nav className="flex h-14 shrink-0 items-center justify-between border-b border-[#141414] px-10">
        <Logo />
        <div className="flex items-center gap-6 text-sm text-neutral-400">
          <a href="#docs" className="hover:text-neutral-100">Docs</a>
          <a href="#examples" className="hover:text-neutral-100">Examples</a>
          <a href="#cloud" className="hover:text-neutral-100">Cloud</a>
          <GithubBadge />
        </div>
      </nav>

      {/* HERO */}
      <main className="flex flex-1 items-center px-10">
        <div className="mx-auto grid w-full max-w-[1240px] grid-cols-12 items-center gap-10">
          {/* LEFT */}
          <div className="col-span-7 flex flex-col gap-7">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#1f1f1f] bg-[#111] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-neutral-400">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c6f432]" />
              Open source · v1.4 released
            </div>

            <h1 className="text-[60px] font-semibold leading-[1.02] tracking-[-0.03em] text-neutral-50">
              Let AI agents<br />
              drive the <span className="text-[#c6f432]">browser.</span>
            </h1>

            <p className="max-w-[520px] text-[17px] leading-[1.55] text-neutral-400">
              Browser Use is the open-source framework for building agents that
              click, type, and navigate real websites — with any LLM you choose.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={GITHUB_URL}
                className="group inline-flex items-center gap-3 rounded-md bg-[#c6f432] px-4 py-3 font-mono text-sm font-medium text-[#0a0a0a] transition-transform hover:-translate-y-[1px]"
              >
                <span className="text-neutral-500">$</span>
                pip install browser-use
                <span className="ml-1 rounded-sm border border-[#0a0a0a]/20 px-1.5 py-0.5 text-[10px] uppercase tracking-wider">
                  copy
                </span>
              </a>
              <a
                href={GITHUB_URL}
                className="inline-flex items-center gap-2 rounded-md border border-[#262626] bg-transparent px-4 py-3 text-sm font-medium text-neutral-200 transition-colors hover:border-[#3a3a3a] hover:bg-[#111]"
              >
                View on GitHub
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <ContributorRow />
          </div>

          {/* RIGHT */}
          <div className="col-span-5 flex justify-end">
            <BrowserVisual />
          </div>
        </div>
      </main>

      {/* VALUE PROPS STRIP */}
      <section className="shrink-0 border-t border-[#141414] px-10 py-5">
        <div className="mx-auto grid w-full max-w-[1240px] grid-cols-4 gap-4">
          {VALUE_PROPS.map((v) => (
            <div
              key={v.title}
              className="flex items-center gap-3 rounded-lg border border-[#141414] bg-[#0d0d0d] px-4 py-3"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#1f1f1f] bg-[#111] text-[#c6f432]">
                {v.icon}
              </div>
              <div className="min-w-0">
                <div className="text-sm font-medium text-neutral-100">{v.title}</div>
                <div className="truncate text-xs text-neutral-500">{v.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
