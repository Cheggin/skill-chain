export default function Home() {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-[#07080b] text-zinc-100">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="absolute inset-0 radial-glow" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <Nav />

      <main className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-1 flex-col px-10 pt-6">
        <section className="grid flex-1 grid-cols-12 gap-10 pb-6">
          <HeroCopy />
          <BrowserMock />
        </section>
        <ValueProps />
      </main>
    </div>
  );
}

function Nav() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-[1280px] items-center justify-between px-10 pt-6">
      <div className="flex items-center gap-10">
        <Logo />
        <nav className="flex items-center gap-7 text-sm text-zinc-400">
          <a className="hover:text-zinc-100" href="#">Product</a>
          <a className="hover:text-zinc-100" href="#">Docs</a>
          <a className="hover:text-zinc-100" href="#">Pricing</a>
          <a className="hover:text-zinc-100" href="#">Changelog</a>
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/browser-use/browser-use"
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.06]"
        >
          <GithubIcon className="h-3.5 w-3.5" />
          <span className="font-medium">browser-use/browser-use</span>
          <span className="flex items-center gap-1 text-zinc-400">
            <StarIcon className="h-3 w-3 text-amber-300" />
            62.4k
          </span>
        </a>
        <a
          href="#"
          className="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-zinc-900 transition hover:bg-zinc-200"
        >
          Sign in
        </a>
      </div>
    </header>
  );
}

function HeroCopy() {
  return (
    <div className="col-span-7 flex flex-col justify-center">
      <a
        href="#"
        className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300"
      >
        <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-lime-400" />
        v0.4 — native Chromium control, 40% faster runs
        <ArrowIcon className="h-3 w-3 text-zinc-500" />
      </a>

      <h1 className="text-[64px] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
        Make any AI agent
        <br />
        use the{" "}
        <span className="relative inline-block">
          <span className="relative z-10 bg-gradient-to-r from-lime-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
            browser
          </span>
          <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-lime-400/80 to-transparent" />
        </span>
        .
      </h1>

      <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-zinc-400">
        The open-source toolkit for reliable browser agents. Ship models that
        click, type, scroll, and reason across real websites — in fewer lines of
        code than a cURL request.
      </p>

      <div className="mt-8 flex items-center gap-3">
        <a
          href="#"
          className="group flex items-center gap-2 rounded-full bg-lime-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-lime-200"
        >
          Start building free
          <ArrowIcon className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
        </a>
        <a
          href="#"
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.05]"
        >
          <TerminalIcon className="h-3.5 w-3.5 text-zinc-400" />
          <span className="font-mono text-[13px]">pip install browser-use</span>
        </a>
      </div>

      <div className="mt-10 flex items-center gap-8">
        <Stat value="62.4k" label="GitHub stars" icon={<StarIcon className="h-3.5 w-3.5 text-amber-300" />} />
        <div className="h-6 w-px bg-white/10" />
        <Stat value="418" label="Contributors" icon={<UsersIcon className="h-3.5 w-3.5 text-zinc-300" />} />
        <div className="h-6 w-px bg-white/10" />
        <Stat value="2.1M" label="Monthly runs" icon={<PulseIcon className="h-3.5 w-3.5 text-lime-300" />} />
      </div>
    </div>
  );
}

function Stat({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-1.5">
        {icon}
        <span className="text-lg font-semibold tabular-nums text-white">{value}</span>
      </div>
      <span className="mt-0.5 text-[11px] uppercase tracking-wider text-zinc-500">
        {label}
      </span>
    </div>
  );
}

function BrowserMock() {
  return (
    <div className="col-span-5 flex items-center">
      <div className="relative w-full">
        <div className="absolute -inset-8 rounded-[28px] bg-gradient-to-br from-lime-400/10 via-transparent to-indigo-500/10 blur-2xl" />
        <div className="relative rounded-2xl border border-white/10 bg-[#0c0e13] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <div className="ml-3 flex flex-1 items-center gap-2 rounded-md border border-white/5 bg-white/[0.03] px-3 py-1 text-[11px] text-zinc-400">
              <LockIcon className="h-3 w-3 text-zinc-500" />
              <span className="font-mono">app.browser-use.com/agent/run</span>
            </div>
          </div>

          <div className="grid grid-cols-5">
            <div className="col-span-3 border-r border-white/5 p-5">
              <div className="mb-4 flex items-center gap-2 text-[11px] uppercase tracking-wider text-zinc-500">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-lime-400" />
                Agent running
              </div>
              <div className="space-y-2.5">
                <SkeletonRow w="w-3/4" />
                <SkeletonRow w="w-5/6" />
                <SkeletonRow w="w-2/3" />
                <div className="flex gap-2 pt-1">
                  <div className="h-7 w-20 rounded-md border border-white/5 bg-white/[0.03]" />
                  <div className="h-7 w-24 rounded-md bg-lime-300/90" />
                </div>
                <SkeletonRow w="w-1/2" />
                <SkeletonRow w="w-4/5" />
              </div>

              <div className="relative mt-6 h-32">
                <div className="cursor-trail absolute left-0 top-0 flex items-center gap-2">
                  <CursorIcon className="h-4 w-4 -rotate-12 text-lime-300 drop-shadow-[0_0_8px_rgba(163,230,53,0.6)]" />
                  <span className="rounded-md bg-lime-300 px-2 py-0.5 text-[10px] font-semibold text-zinc-900">
                    click
                  </span>
                </div>
              </div>
            </div>

            <div className="col-span-2 p-4">
              <div className="mb-3 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-zinc-500">
                <CodeIcon className="h-3 w-3" />
                agent.py
              </div>
              <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
                <CodeLine>
                  <span className="text-fuchsia-300">from</span>{" "}
                  <span className="text-zinc-300">browser_use</span>{" "}
                  <span className="text-fuchsia-300">import</span>{" "}
                  <span className="text-zinc-200">Agent</span>
                </CodeLine>
                <CodeLine />
                <CodeLine>
                  <span className="text-zinc-400">agent =</span>{" "}
                  <span className="text-zinc-200">Agent</span>
                  <span className="text-zinc-500">(</span>
                </CodeLine>
                <CodeLine indent>
                  <span className="text-emerald-300">task</span>
                  <span className="text-zinc-500">=</span>
                  <span className="text-amber-200">&quot;book flight&quot;</span>
                  <span className="text-zinc-500">,</span>
                </CodeLine>
                <CodeLine indent>
                  <span className="text-emerald-300">llm</span>
                  <span className="text-zinc-500">=</span>
                  <span className="text-zinc-200">gpt4o</span>
                  <span className="text-zinc-500">,</span>
                </CodeLine>
                <CodeLine>
                  <span className="text-zinc-500">)</span>
                </CodeLine>
                <CodeLine>
                  <span className="text-sky-300">await</span>{" "}
                  <span className="text-zinc-200">agent</span>
                  <span className="text-zinc-500">.</span>
                  <span className="text-lime-300">run</span>
                  <span className="text-zinc-500">()</span>
                  <span className="type-caret ml-0.5 inline-block h-3 w-1.5 align-middle bg-lime-300" />
                </CodeLine>
              </div>

              <div className="mt-5 rounded-md border border-lime-400/20 bg-lime-400/[0.04] p-2.5">
                <div className="flex items-center gap-1.5 text-[10px] text-lime-300">
                  <CheckIcon className="h-3 w-3" />
                  <span className="font-mono">task_complete</span>
                </div>
                <div className="mt-1 text-[10px] text-zinc-400">
                  Booked SFO → JFK, confirmation #A7B92
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkeletonRow({ w }: { w: string }) {
  return (
    <div className={`h-2 ${w} rounded-full bg-white/[0.06]`} />
  );
}

function CodeLine({
  children,
  indent,
}: {
  children?: React.ReactNode;
  indent?: boolean;
}) {
  return (
    <div className={indent ? "pl-4" : ""}>
      {children ?? <span className="opacity-0">.</span>}
    </div>
  );
}

function ValueProps() {
  const props = [
    {
      icon: <ModelIcon />,
      title: "Model agnostic",
      desc: "GPT, Claude, Gemini, or local. Swap with one line.",
    },
    {
      icon: <EyeIcon />,
      title: "Vision + DOM",
      desc: "Pixel-perfect grounding paired with structured selectors.",
    },
    {
      icon: <ShieldIcon />,
      title: "Self-healing",
      desc: "Retries, fallbacks, and replay — production-grade by default.",
    },
    {
      icon: <CloudIcon />,
      title: "Run anywhere",
      desc: "Local Chromium, CI, or our managed cloud. Same API.",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 pb-6">
      {props.map((p) => (
        <div
          key={p.title}
          className="group relative overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 transition hover:border-white/[0.14] hover:bg-white/[0.04]"
        >
          <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-lime-300">
            {p.icon}
          </div>
          <div className="text-sm font-semibold text-white">{p.title}</div>
          <div className="mt-1 text-xs leading-relaxed text-zinc-400">{p.desc}</div>
        </div>
      ))}
    </div>
  );
}

/* ——— Icons (inline SVGs, no external assets) ——— */

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="1.5" y="1.5" width="21" height="21" rx="6" stroke="white" strokeOpacity="0.2" />
        <rect x="1.5" y="1.5" width="21" height="6" rx="3" fill="white" fillOpacity="0.06" />
        <circle cx="5" cy="4.5" r="0.9" fill="#a3e635" />
        <circle cx="7.8" cy="4.5" r="0.9" fill="#ffffff" fillOpacity="0.35" />
        <circle cx="10.6" cy="4.5" r="0.9" fill="#ffffff" fillOpacity="0.2" />
        <path
          d="M8 13.5l3 3 5-6"
          stroke="#a3e635"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-[15px] font-semibold tracking-tight text-white">
        browser use
      </span>
    </div>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 .5C5.73.5.86 5.37.86 11.64c0 4.92 3.19 9.09 7.62 10.57.56.1.76-.24.76-.54v-2.1c-3.1.68-3.75-1.3-3.75-1.3-.5-1.28-1.24-1.62-1.24-1.62-1-.7.08-.69.08-.69 1.11.08 1.7 1.14 1.7 1.14.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.22 1.14-3-.11-.28-.5-1.42.11-2.96 0 0 .94-.3 3.07 1.14a10.65 10.65 0 0 1 5.58 0c2.13-1.44 3.07-1.14 3.07-1.14.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.03.76 2.07v3.06c0 .3.2.65.77.54 4.42-1.48 7.6-5.65 7.6-10.57C23.14 5.37 18.27.5 12 .5z" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 17.3l-5.4 3.2 1.4-6.1L3 10.2l6.2-.5L12 4l2.8 5.7 6.2.5-5 4.2 1.4 6.1z" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="9" cy="8" r="3.2" />
      <circle cx="16.5" cy="9" r="2.3" />
      <path d="M3 19c0-3 3-5 6-5s6 2 6 5" strokeLinecap="round" />
      <path d="M15 19c0-2 2-3.5 4-3.5s2.5 1 2.5 2.5" strokeLinecap="round" />
    </svg>
  );
}

function PulseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 12h4l2-6 4 12 2-6h6" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

function TerminalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 5l3 3-3 3M8 11h5" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <rect x="3.5" y="7" width="9" height="6" rx="1.2" />
      <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" strokeLinecap="round" />
    </svg>
  );
}

function CursorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden>
      <path d="M2 1.5l11 5.2-4.6 1.4-1.6 4.7L2 1.5z" />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5.5 5L2.5 8l3 3M10.5 5l3 3-3 3" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 8.5l3 3 7-7" />
    </svg>
  );
}

function ModelIcon() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
      <circle cx="10" cy="10" r="2" />
      <circle cx="4" cy="5" r="1.5" />
      <circle cx="16" cy="5" r="1.5" />
      <circle cx="4" cy="15" r="1.5" />
      <circle cx="16" cy="15" r="1.5" />
      <path d="M5 6l4 3M15 6l-4 3M5 14l4-3M15 14l-4-3" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M1.5 10S4.5 4 10 4s8.5 6 8.5 6-3 6-8.5 6S1.5 10 1.5 10z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="10" r="2.5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M10 2l6.5 2.5v5c0 4-3 7-6.5 8.5C6.5 16.5 3.5 13.5 3.5 9.5v-5L10 2z" />
      <path d="M7 10l2 2 4-4" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5.5 15h9a3.5 3.5 0 0 0 .4-6.98A5 5 0 0 0 5.1 8.5 3.5 3.5 0 0 0 5.5 15z" />
    </svg>
  );
}
