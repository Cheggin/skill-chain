export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans relative overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[1100px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(198,244,50,0.10), rgba(198,244,50,0) 70%)",
        }}
      />

      <Nav />

      <main className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col px-8">
        <Hero />
        <ValueProps />
        <SocialProof />
      </main>
    </div>
  );
}

function Nav() {
  return (
    <header className="relative z-20 border-b border-[#1f1f1f]/80">
      <div className="mx-auto flex h-14 w-full max-w-[1200px] items-center justify-between px-8">
        <a href="/" className="flex items-center gap-2">
          <LogoMark />
          <span className="text-[15px] font-semibold tracking-tight">browser-use</span>
        </a>
        <nav className="hidden items-center gap-8 text-[13.5px] text-[#a8a8a8] md:flex">
          <a href="#docs" className="hover:text-white">Docs</a>
          <a href="#examples" className="hover:text-white">Examples</a>
          <a href="#cloud" className="hover:text-white">Cloud</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/browser-use/browser-use"
            className="hidden h-8 items-center gap-2 rounded-md border border-[#2a2a2a] bg-[#111] pl-2 pr-2.5 text-[12.5px] text-[#d4d4d4] hover:border-[#3a3a3a] sm:flex"
          >
            <GithubGlyph className="h-3.5 w-3.5" />
            <span>Star</span>
            <span className="ml-1 rounded border border-[#2a2a2a] bg-[#0a0a0a] px-1.5 py-0.5 font-mono text-[11px] text-[#ededed]">
              62.4k
            </span>
          </a>
          <a
            href="#get-started"
            className="inline-flex h-8 items-center rounded-md bg-[#c6f432] px-3 text-[12.5px] font-semibold text-black transition-transform hover:-translate-y-px"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="grid grid-cols-1 items-center gap-10 pt-14 pb-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#111] py-1 pl-1 pr-3 text-[12px] text-[#cfcfcf]">
          <span className="inline-flex h-5 items-center rounded-full bg-[#c6f432] px-2 font-semibold text-black">
            v0.8
          </span>
          <span>Now with vision, memory, and streaming actions</span>
        </div>
        <h1 className="text-[56px] font-semibold leading-[1.04] tracking-[-0.03em]">
          Let AI agents{" "}
          <span className="relative whitespace-nowrap">
            <span className="relative z-10">use your browser.</span>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-[#c6f432]/35"
            />
          </span>
        </h1>
        <p className="mt-5 max-w-[520px] text-[16.5px] leading-relaxed text-[#a8a8a8]">
          Browser Use is the open-source SDK for connecting any LLM to a real browser.
          Vision, DOM, and actions in one API — so your agent clicks, types, and reads
          pages like a person.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="#get-started"
            className="inline-flex h-11 items-center gap-2 rounded-md bg-[#c6f432] px-5 text-[14px] font-semibold text-black transition-transform hover:-translate-y-px"
          >
            Get started
            <ArrowRight className="h-4 w-4" />
          </a>
          <InstallSnippet />
        </div>

        <div className="mt-7 flex items-center gap-6 text-[12.5px] text-[#8a8a8a]">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6ee7b7]" />
            MIT licensed
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6ee7b7]" />
            Python &amp; TypeScript
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6ee7b7]" />
            Works with OpenAI, Anthropic, Gemini
          </span>
        </div>
      </div>

      <BrowserDemo />
    </section>
  );
}

function InstallSnippet() {
  return (
    <div className="inline-flex h-11 items-center gap-3 rounded-md border border-[#2a2a2a] bg-[#111] pl-3 pr-2 font-mono text-[13px] text-[#d4d4d4]">
      <span className="text-[#c6f432]">$</span>
      <span>
        pip install <span className="text-white">browser-use</span>
      </span>
      <span className="caret inline-block h-4 w-[7px] -translate-y-px bg-[#c6f432]" />
      <button
        aria-label="Copy install command"
        className="ml-1 inline-flex h-7 w-7 items-center justify-center rounded border border-[#2a2a2a] bg-[#0a0a0a] text-[#a8a8a8] hover:text-white"
      >
        <CopyGlyph className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

function BrowserDemo() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-2 rounded-2xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(198,244,50,0.18), rgba(198,244,50,0) 60%)",
          filter: "blur(28px)",
        }}
      />
      <div className="relative rounded-xl border border-[#2a2a2a] bg-[#0e0e0e] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
        {/* Chrome bar */}
        <div className="flex items-center gap-3 border-b border-[#1f1f1f] px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#2a2a2a]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#2a2a2a]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#2a2a2a]" />
          </div>
          <div className="flex-1 truncate rounded-md border border-[#1f1f1f] bg-[#111] px-3 py-1 font-mono text-[11.5px] text-[#8a8a8a]">
            https://flights.example.com/search
          </div>
          <div className="inline-flex h-6 items-center gap-1.5 rounded-full border border-[#c6f432]/30 bg-[#c6f432]/10 px-2 font-mono text-[10.5px] text-[#c6f432]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c6f432] node-pulse" />
            agent · running
          </div>
        </div>

        {/* Viewport */}
        <div className="relative h-[340px] overflow-hidden rounded-b-xl">
          <svg
            viewBox="0 0 560 340"
            className="absolute inset-0 h-full w-full"
            fill="none"
          >
            <defs>
              <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="#1a1a1a" />
              </pattern>
            </defs>
            <rect width="560" height="340" fill="url(#dots)" />

            {/* Sidebar */}
            <rect x="24" y="24" width="130" height="292" rx="8" fill="#111" stroke="#1f1f1f" />
            <rect x="36" y="40" width="70" height="8" rx="2" fill="#2a2a2a" />
            <rect x="36" y="60" width="100" height="6" rx="2" fill="#1f1f1f" />
            <rect x="36" y="74" width="88" height="6" rx="2" fill="#1f1f1f" />
            <rect x="36" y="88" width="92" height="6" rx="2" fill="#1f1f1f" />

            {/* Form card */}
            <rect x="172" y="24" width="364" height="148" rx="10" fill="#111" stroke="#1f1f1f" />
            <rect x="188" y="40" width="110" height="8" rx="2" fill="#2a2a2a" />

            {/* Input: From */}
            <rect x="188" y="60" width="150" height="34" rx="6" fill="#0a0a0a" stroke="#1f1f1f" />
            <text x="198" y="81" fontFamily="ui-monospace, monospace" fontSize="11" fill="#6f6f6f">From</text>
            <text x="230" y="81" fontFamily="ui-monospace, monospace" fontSize="11" fill="#ededed">SFO</text>

            {/* Input: To — highlighted */}
            <rect x="354" y="60" width="166" height="34" rx="6" fill="#0a0a0a" stroke="#c6f432" />
            <text x="364" y="81" fontFamily="ui-monospace, monospace" fontSize="11" fill="#6f6f6f">To</text>
            <text x="384" y="81" fontFamily="ui-monospace, monospace" fontSize="11" fill="#ededed">BER</text>

            {/* Date */}
            <rect x="188" y="106" width="214" height="34" rx="6" fill="#0a0a0a" stroke="#1f1f1f" />
            <text x="198" y="127" fontFamily="ui-monospace, monospace" fontSize="11" fill="#6f6f6f">Depart</text>
            <text x="240" y="127" fontFamily="ui-monospace, monospace" fontSize="11" fill="#ededed">Fri, Apr 26</text>

            {/* Search button */}
            <rect x="418" y="106" width="102" height="34" rx="6" fill="#c6f432" />
            <text x="469" y="127" textAnchor="middle" fontFamily="Geist, system-ui" fontSize="12" fontWeight="600" fill="#0a0a0a">Search</text>

            {/* Results list */}
            <rect x="172" y="184" width="364" height="132" rx="10" fill="#111" stroke="#1f1f1f" />
            <rect x="186" y="198" width="336" height="28" rx="6" fill="#161616" />
            <circle cx="200" cy="212" r="5" fill="#c6f432" />
            <text x="212" y="216" fontFamily="ui-monospace, monospace" fontSize="11" fill="#ededed">UA 930  ·  11h 05m  ·  $612</text>

            <rect x="186" y="232" width="336" height="28" rx="6" fill="#0e0e0e" />
            <circle cx="200" cy="246" r="4" fill="#2a2a2a" />
            <text x="212" y="250" fontFamily="ui-monospace, monospace" fontSize="11" fill="#8a8a8a">LH 457  ·  10h 40m  ·  $688</text>

            <rect x="186" y="266" width="336" height="28" rx="6" fill="#0e0e0e" />
            <circle cx="200" cy="280" r="4" fill="#2a2a2a" />
            <text x="212" y="284" fontFamily="ui-monospace, monospace" fontSize="11" fill="#8a8a8a">AF 83   ·  12h 15m  ·  $574</text>

            {/* Cursor path trace (faint) */}
            <path
              d="M 48 52 L 210 52 L 210 128 L 372 128 L 372 206 L 496 206"
              stroke="#c6f432"
              strokeOpacity="0.22"
              strokeWidth="1.25"
              strokeDasharray="3 4"
              fill="none"
            />
          </svg>

          {/* Animated agent cursor */}
          <div className="cursor-agent absolute left-0 top-0">
            <div className="relative -translate-x-1 -translate-y-1">
              <CursorGlyph className="h-4 w-4 text-white drop-shadow-[0_0_6px_rgba(198,244,50,0.6)]" />
              <div className="absolute left-4 top-4 whitespace-nowrap rounded-md border border-[#c6f432]/40 bg-[#0a0a0a]/95 px-2 py-1 font-mono text-[10.5px] text-[#c6f432]">
                agent.click(&quot;Search&quot;)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ValueProps() {
  const items = [
    {
      icon: <EyeIcon />,
      title: "Vision + DOM, together",
      body: "Agents see the page like a human and query it like a developer — screenshots and the live DOM in one call.",
    },
    {
      icon: <BranchIcon />,
      title: "Any LLM, any framework",
      body: "Plug in OpenAI, Anthropic, Gemini, or a local model. Drop-in tools for LangChain, LlamaIndex, and CrewAI.",
    },
    {
      icon: <BoltIcon />,
      title: "Production-ready runtime",
      body: "Self-healing selectors, session replay, and parallel browsers. Run locally or on Browser Use Cloud.",
    },
  ];
  return (
    <section className="grid grid-cols-1 gap-4 pb-6 md:grid-cols-3">
      {items.map((it) => (
        <div
          key={it.title}
          className="group rounded-xl border border-[#1f1f1f] bg-[#0e0e0e] p-5 transition-colors hover:border-[#2a2a2a]"
        >
          <div className="mb-3 inline-flex h-8 w-8 items-center justify-center text-[#c6f432]">
            {it.icon}
          </div>
          <h3 className="text-[15px] font-semibold tracking-tight text-white">
            {it.title}
          </h3>
          <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#9a9a9a]">
            {it.body}
          </p>
        </div>
      ))}
    </section>
  );
}

function SocialProof() {
  const stats = [
    { label: "GitHub stars", value: "62,413", note: "+142 this week" },
    { label: "Contributors", value: "384", note: "from 47 countries" },
    { label: "Weekly installs", value: "1.2M", note: "pip + npm" },
    { label: "Discord members", value: "18,940", note: "active community" },
  ];
  return (
    <section className="mt-auto border-t border-[#1f1f1f] py-5">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6f6f6f]">
              {s.label}
            </span>
            <span className="mt-1 text-[22px] font-semibold tracking-tight text-white">
              {s.value}
            </span>
            <span className="text-[12px] text-[#8a8a8a]">{s.note}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- SVG glyphs ---------- */

function LogoMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="3" stroke="#ededed" strokeWidth="1.6" />
      <path d="M2 8 H22" stroke="#ededed" strokeWidth="1.6" />
      <circle cx="5" cy="6" r="0.9" fill="#c6f432" />
      <path
        d="M8 13.5 L12 17.5 L17 10"
        stroke="#c6f432"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GithubGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.48.11-3.08 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.78.11 3.08.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.27 5.68.43.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function CopyGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </svg>
  );
}

function CursorGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden>
      <path
        d="M2 1.5 L2 13 L5.2 10 L7.2 14.4 L9.2 13.5 L7.2 9.2 L11.8 9 Z"
        fill="currentColor"
        stroke="#0a0a0a"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function BranchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <circle cx="6" cy="5" r="2" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="8" r="2" />
      <path d="M6 7v10M8 8h4a4 4 0 0 1 4 4v0" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" strokeLinejoin="round" />
    </svg>
  );
}
