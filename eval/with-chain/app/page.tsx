const ACCENT = "#c6f432";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="1.5" y="3.5" width="21" height="17" rx="3" stroke="#ededed" strokeWidth="1.5" />
        <path d="M1.5 8H22.5" stroke="#ededed" strokeWidth="1.5" />
        <circle cx="4.5" cy="5.75" r="0.75" fill={ACCENT} />
        <circle cx="7" cy="5.75" r="0.75" fill="#3a3a3a" />
        <circle cx="9.5" cy="5.75" r="0.75" fill="#3a3a3a" />
        <path d="M10 13.5L13 15.5L10 17.5V13.5Z" fill={ACCENT} />
      </svg>
      <span className="font-mono text-sm tracking-tight">browser-use</span>
    </div>
  );
}

function Nav() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 border-b border-[color:var(--border)]">
      <Logo />
      <div className="hidden md:flex items-center gap-8 text-sm text-[color:var(--muted)]">
        <a href="#docs" className="hover:text-white transition-colors">Docs</a>
        <a href="#examples" className="hover:text-white transition-colors">Examples</a>
        <a href="#cloud" className="hover:text-white transition-colors">Cloud</a>
        <a href="#blog" className="hover:text-white transition-colors">Blog</a>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/browser-use/browser-use"
          className="hidden sm:flex items-center gap-2 text-sm text-[color:var(--muted)] hover:text-white transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 .5C5.73.5.77 5.46.77 11.73c0 4.94 3.2 9.12 7.64 10.6.56.1.76-.24.76-.54v-1.9c-3.1.67-3.76-1.5-3.76-1.5-.5-1.27-1.23-1.6-1.23-1.6-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.58 1.2 3.21.92.1-.72.38-1.2.7-1.47-2.48-.28-5.08-1.24-5.08-5.5 0-1.22.43-2.21 1.14-2.99-.11-.28-.5-1.4.11-2.93 0 0 .93-.3 3.06 1.14a10.6 10.6 0 0 1 5.57 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.65.11 2.93.71.78 1.14 1.77 1.14 2.99 0 4.27-2.6 5.22-5.08 5.5.39.34.74 1 .74 2.02v3c0 .3.2.65.77.54A11.23 11.23 0 0 0 23.23 11.73C23.23 5.46 18.27.5 12 .5Z" />
          </svg>
          <span>62.4k</span>
        </a>
        <a
          href="#start"
          className="text-sm font-medium px-4 py-2 rounded-md text-black hover:brightness-110 transition"
          style={{ background: ACCENT }}
        >
          Start building
        </a>
      </div>
    </nav>
  );
}

function Step({
  color,
  label,
  value,
  done,
  active,
}: {
  color: string;
  label: string;
  value: string;
  done?: boolean;
  active?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="w-1.5 h-1.5 rounded-full shrink-0"
        style={{ background: done || active ? color : "#2a2a2a" }}
      />
      <span className="text-[color:var(--muted)] w-14">{label}</span>
      <span className={done ? "text-[color:var(--foreground)]" : active ? "text-white" : "text-[color:var(--muted)]"}>
        {value}
      </span>
      {active && <span className="ml-1 inline-block w-1 h-3 bg-white animate-pulse" />}
    </div>
  );
}

function BrowserMock() {
  return (
    <div className="relative w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[color:var(--border)]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a2a]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a2a]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a2a]" />
        <div className="ml-3 flex-1 text-xs font-mono text-[color:var(--muted)] bg-black/40 rounded px-3 py-1 border border-[color:var(--border)]">
          linear.app/team/ENG/active
        </div>
      </div>
      <div className="grid grid-cols-[1fr_1.2fr]">
        <div className="p-5 border-r border-[color:var(--border)]">
          <div className="text-[10px] font-mono text-[color:var(--muted)] uppercase tracking-widest mb-3">
            Agent task
          </div>
          <div className="text-sm leading-relaxed">
            Find all P1 issues assigned to me this sprint and export them to CSV.
          </div>
          <div className="mt-5 space-y-2 font-mono text-[11px]">
            <Step color={ACCENT} label="goto" value="linear.app" done />
            <Step color={ACCENT} label="click" value="Filter › Priority" done />
            <Step color={ACCENT} label="select" value="Urgent · High" done />
            <Step color={ACCENT} label="extract" value="12 issues" active />
            <Step color="#3a3a3a" label="export" value="issues.csv" />
          </div>
        </div>
        <div className="relative p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-5 rounded bg-[#5e6ad2]" />
            <span className="text-xs font-medium">Active issues</span>
            <span className="ml-auto text-[10px] font-mono text-[color:var(--muted)]">12 results</span>
          </div>
          <div className="space-y-1.5">
            {[
              ["ENG-412", "Fix retry loop in worker", "Urgent"],
              ["ENG-408", "Queue backpressure on spike", "High"],
              ["ENG-401", "Session token rotation", "High"],
              ["ENG-397", "Timeout on headless restart", "Urgent"],
              ["ENG-390", "Log level noise", "High"],
            ].map(([id, title, pri], i) => (
              <div
                key={id}
                className={`flex items-center gap-3 px-2.5 py-1.5 rounded text-[11px] ${
                  i === 3 ? "ring-1 ring-[color:var(--accent)]/40" : ""
                }`}
                style={i === 3 ? { background: "rgba(198,244,50,0.08)" } : undefined}
              >
                <span className="font-mono text-[color:var(--muted)] w-14">{id}</span>
                <span className="flex-1 truncate">{title}</span>
                <span className={`font-mono ${pri === "Urgent" ? "text-[#ff6b6b]" : "text-[color:var(--muted)]"}`}>
                  {pri}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute pointer-events-none" style={{ right: 24, top: 92 }} aria-hidden>
            <svg width="28" height="28" viewBox="0 0 28 28">
              <path d="M3 3 L3 20 L9 15 L13 24 L16 22 L12 14 L20 13 Z" fill={ACCENT} stroke="#000" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ValueProp({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div style={{ color: ACCENT }}>{icon}</div>
      <div className="text-[13px] font-medium">{title}</div>
      <div className="text-[12px] leading-relaxed text-[color:var(--muted)]">{desc}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col bg-[color:var(--background)] text-[color:var(--foreground)]">
      <Nav />
      <main className="flex-1 min-h-0 px-10 py-8 grid grid-cols-12 gap-10 max-w-[1400px] mx-auto w-full">
        <section className="col-span-5 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 self-start px-2.5 py-1 rounded-full border border-[color:var(--border)] text-[11px] font-mono text-[color:var(--muted)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
            v0.4 — session replay is live
          </div>
          <h1 className="text-[52px] leading-[1.02] font-medium tracking-tight">
            Let AI agents
            <br />
            use the{" "}
            <span className="relative inline-block">
              <span>browser.</span>
              <span
                className="absolute left-0 right-0 -bottom-1 h-[3px]"
                style={{ background: ACCENT }}
                aria-hidden
              />
            </span>
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-[color:var(--muted)] max-w-md">
            Open-source framework that gives any LLM real hands on the web. Read pages,
            click buttons, fill forms — without brittle selectors.
          </p>
          <div className="mt-7 flex items-center gap-3">
            <a
              href="#start"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium text-black"
              style={{ background: ACCENT }}
            >
              Start building
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="black" strokeWidth="1.5" />
              </svg>
            </a>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-mono text-[color:var(--muted)] border border-[color:var(--border)]">
              <span style={{ color: ACCENT }}>$</span>
              pip install browser-use
            </div>
          </div>
          <div className="mt-8 flex items-center gap-6 text-[11px] font-mono text-[color:var(--muted)]">
            <div className="flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.73.5.77 5.46.77 11.73c0 4.94 3.2 9.12 7.64 10.6.56.1.76-.24.76-.54v-1.9c-3.1.67-3.76-1.5-3.76-1.5-.5-1.27-1.23-1.6-1.23-1.6-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.58 1.2 3.21.92.1-.72.38-1.2.7-1.47-2.48-.28-5.08-1.24-5.08-5.5 0-1.22.43-2.21 1.14-2.99-.11-.28-.5-1.4.11-2.93 0 0 .93-.3 3.06 1.14a10.6 10.6 0 0 1 5.57 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.65.11 2.93.71.78 1.14 1.77 1.14 2.99 0 4.27-2.6 5.22-5.08 5.5.39.34.74 1 .74 2.02v3c0 .3.2.65.77.54A11.23 11.23 0 0 0 23.23 11.73C23.23 5.46 18.27.5 12 .5Z" />
              </svg>
              <span className="text-white">62,431</span>
              <span>stars</span>
            </div>
            <div className="w-px h-3 bg-[color:var(--border)]" />
            <div className="flex items-center gap-2">
              <span className="text-white">384</span>
              <span>contributors</span>
            </div>
            <div className="w-px h-3 bg-[color:var(--border)]" />
            <div className="flex items-center gap-2">
              <span className="text-white">2.1M</span>
              <span>downloads / mo</span>
            </div>
          </div>
        </section>

        <section className="col-span-7 flex flex-col justify-center gap-6">
          <BrowserMock />
          <div className="grid grid-cols-4 gap-5 pt-5 border-t border-[color:var(--border)]">
            <ValueProp
              title="Any LLM"
              desc="Plug in GPT, Claude, Gemini, or local. One interface."
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                  <circle cx="12" cy="4" r="1.5" fill="currentColor" />
                  <circle cx="20" cy="12" r="1.5" fill="currentColor" />
                  <circle cx="12" cy="20" r="1.5" fill="currentColor" />
                  <circle cx="4" cy="12" r="1.5" fill="currentColor" />
                </svg>
              }
            />
            <ValueProp
              title="Vision-first"
              desc="Agents see the page like you do. No selectors to maintain."
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="1" fill="currentColor" />
                </svg>
              }
            />
            <ValueProp
              title="Self-healing"
              desc="Tasks keep running when layouts change. No flaky tests."
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12a8 8 0 0 1 14-5.3" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M20 12a8 8 0 0 1-14 5.3" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M18 3v4h-4" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M6 21v-4h4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              }
            />
            <ValueProp
              title="Ship in minutes"
              desc="Ten lines of Python. Local or cloud, your keys, your data."
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              }
            />
          </div>
        </section>
      </main>
    </div>
  );
}
