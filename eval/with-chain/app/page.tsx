const VALUE_PROPS = [
  {
    title: "Any LLM",
    body: "Plug in GPT, Claude, Gemini, or local models.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 3l2.3 5.1L20 9l-4 3.9.9 5.6L12 16l-4.9 2.5L8 12.9 4 9l5.7-.9L12 3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Vision + DOM",
    body: "Reads screenshots and structure to pick the right target.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Self-healing",
    body: "Retries, recovers, and re-plans when the page changes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M18 3v4h-4M6 21v-4h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Python & TS",
    body: "One API, two runtimes. Ship to prod on day one.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M8 6l-4 6 4 6M16 6l4 6-4 6M14 4l-4 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const TRUSTED_BY = ["Ramp", "Harvey", "Replit", "Vercel", "Hugging Face"];

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col">
      {/* Nav */}
      <header className="flex h-14 shrink-0 items-center justify-between px-10 border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <LogoMark />
          <span className="text-[15px] font-semibold tracking-tight">
            Browser Use
          </span>
          <span className="ml-2 rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-zinc-400">
            v0.5
          </span>
        </div>
        <nav className="flex items-center gap-8 text-sm text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Docs</a>
          <a href="#" className="hover:text-white transition-colors">Examples</a>
          <a href="#" className="hover:text-white transition-colors">Cloud</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/browser-use/browser-use"
            className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/[0.05] transition-colors"
          >
            <GitHubIcon />
            <span className="font-medium text-white">62.4k</span>
            <span className="text-zinc-500">stars</span>
          </a>
          <a
            href="#"
            className="rounded-md bg-white px-3.5 py-1.5 text-xs font-medium text-black hover:bg-zinc-200 transition-colors"
          >
            Sign in
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="relative flex flex-1 min-h-0 items-center">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-12 gap-10 px-10">
          {/* Left copy */}
          <section className="col-span-7 flex flex-col justify-center">
            <a
              href="#"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300 hover:bg-white/[0.06] transition-colors"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
              New — Cloud runners with residential proxies
              <span className="text-zinc-500 group-hover:text-zinc-300">→</span>
            </a>

            <h1 className="mt-6 text-[58px] font-semibold leading-[1.02] tracking-[-0.035em] text-white">
              The browser,
              <br />
              controlled by your{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">AI.</span>
                <span className="absolute inset-x-0 bottom-1.5 z-0 h-3 bg-[color:var(--accent)]/25 rounded-sm" />
              </span>
            </h1>

            <p className="mt-5 max-w-[540px] text-[17px] leading-[1.55] text-zinc-400">
              Open-source Python &amp; TypeScript SDK for AI agents that
              navigate, extract, and act on any website — with vision, memory,
              and recovery built in.
            </p>

            {/* CTA row */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black hover:bg-zinc-200 transition-colors"
              >
                Get started
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
                  <path
                    d="M6 3l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[13px] text-zinc-200">
                <span className="text-zinc-500">$</span>
                <span>pip install browser-use</span>
                <span className="caret ml-0.5 inline-block h-3.5 w-[1.5px] bg-zinc-400" />
                <button
                  aria-label="Copy install command"
                  className="ml-1 text-zinc-500 hover:text-zinc-200 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                    <rect
                      x="9"
                      y="9"
                      width="11"
                      height="11"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.75"
                    />
                    <path
                      d="M5 15V5a2 2 0 0 1 2-2h10"
                      stroke="currentColor"
                      strokeWidth="1.75"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Value props grid */}
            <ul className="mt-9 grid grid-cols-2 gap-x-6 gap-y-4 max-w-[560px]">
              {VALUE_PROPS.map((p) => (
                <li key={p.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-[color:var(--accent)]">
                    {p.icon}
                  </span>
                  <div>
                    <div className="text-[13.5px] font-medium text-white">
                      {p.title}
                    </div>
                    <div className="text-[12.5px] leading-snug text-zinc-500">
                      {p.body}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Social proof strip */}
            <div className="mt-8 flex items-center gap-6 text-[12px] text-zinc-500">
              <div className="flex items-center gap-2">
                <GitHubIcon />
                <span>
                  <span className="font-semibold text-zinc-200">62,431</span>{" "}
                  stars
                </span>
              </div>
              <span className="h-3 w-px bg-white/10" />
              <span>
                <span className="font-semibold text-zinc-200">418</span>{" "}
                contributors
              </span>
              <span className="h-3 w-px bg-white/10" />
              <span>
                <span className="font-semibold text-zinc-200">12k+</span>{" "}
                projects using
              </span>
              <span className="h-3 w-px bg-white/10" />
              <div className="flex items-center gap-3 text-zinc-400">
                {TRUSTED_BY.map((name) => (
                  <span key={name} className="tracking-tight">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Right visual */}
          <section className="col-span-5 flex items-center">
            <BrowserMockup />
          </section>
        </div>
      </main>

      {/* Footer strip */}
      <footer className="flex h-10 shrink-0 items-center justify-between border-t border-white/[0.06] px-10 text-[11px] text-zinc-500">
        <span>MIT licensed · built in the open</span>
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            All systems operational
          </span>
          <a href="#" className="hover:text-zinc-300 transition-colors">Changelog</a>
          <a href="#" className="hover:text-zinc-300 transition-colors">Discord</a>
          <a href="#" className="hover:text-zinc-300 transition-colors">X</a>
        </div>
      </footer>
    </div>
  );
}

function LogoMark() {
  return (
    <svg viewBox="0 0 28 28" className="h-6 w-6">
      <defs>
        <linearGradient id="bu-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7cf0a3" />
          <stop offset="1" stopColor="#4ec3ff" />
        </linearGradient>
      </defs>
      <rect
        x="2"
        y="2"
        width="24"
        height="24"
        rx="7"
        fill="url(#bu-grad)"
        opacity="0.18"
      />
      <rect
        x="2"
        y="2"
        width="24"
        height="24"
        rx="7"
        stroke="url(#bu-grad)"
        strokeWidth="1.25"
        fill="none"
      />
      <circle cx="10" cy="11" r="1.6" fill="#7cf0a3" />
      <circle cx="14.5" cy="11" r="1.6" fill="#4ec3ff" opacity="0.8" />
      <path
        d="M8 17.5c2 2 3.5 2.5 6 2.5s4-0.5 6-2.5"
        stroke="#fff"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0C17 4.9 18 5.2 18 5.2c.7 1.7.2 3 .1 3.3.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" />
    </svg>
  );
}

function BrowserMockup() {
  return (
    <div className="relative w-full">
      <div className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-br from-emerald-400/10 via-transparent to-sky-400/10 blur-2xl" />
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[color:var(--surface)] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
        {/* Chrome */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="ml-3 flex-1 truncate rounded-md border border-white/5 bg-black/40 px-3 py-1 font-mono text-[11px] text-zinc-400">
            https://app.example.com/orders
          </div>
          <span className="rounded border border-[color:var(--accent)]/40 bg-[color:var(--accent)]/10 px-1.5 py-0.5 font-mono text-[10px] text-[color:var(--accent)]">
            agent · running
          </span>
        </div>

        {/* Body: two-column — task list + fake page */}
        <div className="grid grid-cols-5 gap-0">
          {/* Agent task log */}
          <div className="col-span-2 space-y-2.5 border-r border-white/[0.06] bg-black/20 p-3">
            <div className="text-[10px] uppercase tracking-wider text-zinc-500">
              Agent plan
            </div>
            <TaskRow label="Open orders page" state="done" />
            <TaskRow label="Filter by status=failed" state="done" />
            <TaskRow label="Click export CSV" state="running" />
            <TaskRow label="Email file to ops@" state="queued" />
            <TaskRow label="Report exit code" state="queued" />
          </div>

          {/* Fake page with cursor */}
          <div className="relative col-span-3 h-[260px] bg-gradient-to-br from-white/[0.02] to-transparent p-3">
            <div className="mb-3 flex items-center justify-between">
              <div className="h-3 w-24 rounded bg-white/10" />
              <div className="flex gap-1.5">
                <div className="h-5 w-14 rounded bg-white/[0.06]" />
                <div className="h-5 w-5 rounded bg-[color:var(--accent)]/70" />
              </div>
            </div>
            <div className="space-y-1.5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded border border-white/5 bg-white/[0.02] px-2 py-1.5"
                >
                  <div className="h-2 w-2 rounded-full bg-red-400/70" />
                  <div
                    className="h-2 rounded bg-white/10"
                    style={{ width: `${35 + ((i * 11) % 35)}%` }}
                  />
                  <div className="ml-auto h-2 w-10 rounded bg-white/10" />
                </div>
              ))}
            </div>

            {/* Animated cursor overlay */}
            <svg
              viewBox="0 0 600 260"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              <path
                d="M 40 60 C 140 40, 220 160, 360 120 S 520 220, 560 280"
                stroke="rgba(124,240,163,0.35)"
                strokeWidth="1"
                strokeDasharray="3 4"
                fill="none"
              />
            </svg>
            <div className="agent-cursor pointer-events-none absolute left-0 top-0 flex items-center gap-1.5">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="pulse-ring absolute inset-0 rounded-full bg-[color:var(--accent)]/70" />
                <span className="relative h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              </span>
              <span className="rounded bg-black/80 px-1.5 py-0.5 font-mono text-[9px] text-[color:var(--accent)] border border-[color:var(--accent)]/30">
                click
              </span>
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between border-t border-white/[0.06] px-3 py-2 font-mono text-[10px] text-zinc-500">
          <span>step 3 / 5</span>
          <span>gpt-4o · 1.4s</span>
          <span className="text-[color:var(--accent)]">$0.0041</span>
        </div>
      </div>
    </div>
  );
}

function TaskRow({
  label,
  state,
}: {
  label: string;
  state: "done" | "running" | "queued";
}) {
  return (
    <div className="flex items-center gap-2 text-[11.5px]">
      {state === "done" && (
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-[color:var(--accent)]">
          <path
            d="M3 8.5l3.2 3L13 5"
            stroke="currentColor"
            strokeWidth="1.75"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {state === "running" && (
        <span className="relative flex h-3.5 w-3.5 items-center justify-center">
          <span className="absolute h-3 w-3 animate-ping rounded-full bg-[color:var(--accent)]/60" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
        </span>
      )}
      {state === "queued" && (
        <span className="h-3.5 w-3.5 rounded-full border border-white/15" />
      )}
      <span
        className={
          state === "done"
            ? "text-zinc-500 line-through decoration-zinc-700"
            : state === "running"
              ? "text-white"
              : "text-zinc-400"
        }
      >
        {label}
      </span>
      {state === "running" && (
        <span className="ml-auto h-1 w-16 overflow-hidden rounded-full bg-white/5">
          <span className="row-progress block h-full bg-[color:var(--accent)]/80" />
        </span>
      )}
    </div>
  );
}
