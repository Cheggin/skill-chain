import Image from "next/image";

const valueProps = [
  {
    label: "01",
    title: "Real browsers, real DOM",
    body: "Agents drive Chromium with full JS execution. No brittle scrapers, no headless surprises.",
  },
  {
    label: "02",
    title: "Vision + structure",
    body: "Pixel-grounded screenshots paired with accessibility trees. Models see what users see.",
  },
  {
    label: "03",
    title: "Drop-in for any LLM",
    body: "Works with Claude, GPT, Gemini, and local models. Bring your own stack, swap in minutes.",
  },
];

export default function Page() {
  return (
    <main className="h-screen w-screen flex flex-col bg-background text-foreground">
      <header className="flex items-center justify-between px-10 h-14 border-b border-[var(--border)] shrink-0">
        <div className="flex items-center gap-2">
          <span className="size-2.5 bg-[var(--accent)]" />
          <span className="font-mono text-[13px] tracking-tight">browser-use</span>
        </div>
        <nav className="flex items-center gap-8 text-[13px] text-[var(--muted)]">
          <a href="#docs" className="hover:text-foreground transition-colors">Docs</a>
          <a href="#examples" className="hover:text-foreground transition-colors">Examples</a>
          <a href="#cloud" className="hover:text-foreground transition-colors">Cloud</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        </nav>
        <a
          href="https://github.com/browser-use/browser-use"
          className="flex items-center gap-2 border border-[var(--border)] px-3 h-9 text-[13px] hover:border-[var(--accent)] transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
            <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.95.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.94 10.94 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.15v3.18c0 .31.21.67.79.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
          </svg>
          <span className="font-mono">62.4k</span>
          <span className="text-[var(--muted)]">stars</span>
        </a>
      </header>

      <section className="flex-1 grid grid-cols-[1.05fr_1fr] min-h-0">
        <div className="flex flex-col justify-between px-10 py-10 border-r border-[var(--border)]">
          <div className="flex items-center gap-2 text-[11px] font-mono text-[var(--muted)] uppercase tracking-[0.18em]">
            <span className="size-1.5 rounded-full bg-[var(--accent)]" />
            v0.4 — pip install browser-use
          </div>

          <div className="max-w-xl">
            <h1 className="text-[56px] leading-[1.02] tracking-tight font-medium">
              Let agents drive
              <br />
              the <span className="relative inline-block">
                browser
                <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[var(--accent)]" />
              </span>.
            </h1>
            <p className="mt-6 text-[15px] leading-[1.6] text-[var(--muted)] max-w-md">
              Browser Use is the open-source toolkit for shipping AI agents that
              click, type, and reason across real websites — exactly like a
              traveler making their way through the web.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://docs.browser-use.com"
                className="inline-flex items-center gap-2 h-11 px-5 bg-[var(--accent)] text-black text-[13px] font-medium hover:brightness-95 transition"
              >
                Start building
                <span className="font-mono">→</span>
              </a>
              <a
                href="#docs"
                className="inline-flex items-center gap-2 h-11 px-5 border border-[var(--border)] text-[13px] hover:border-[var(--muted)] transition"
              >
                Read the docs
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-6 border-t border-[var(--border)]">
            <Metric value="62.4k" label="GitHub stars" />
            <Metric value="412" label="Contributors" />
            <Metric value="1.8M" label="Monthly installs" />
          </div>
        </div>

        <div className="relative overflow-hidden bg-[var(--surface)]">
          <Image
            src="/hero.png"
            alt="Hooded traveler in golden robes — the agent on its journey"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[var(--background)]/40" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between font-mono text-[11px] text-[var(--muted)]">
            <span>FIG. 01 — agent traversal</span>
            <span>step 042 / 128</span>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 border-t border-[var(--border)] shrink-0">
        {valueProps.map((p) => (
          <div
            key={p.label}
            className="px-10 py-6 border-r last:border-r-0 border-[var(--border)]"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[11px] text-[var(--accent)]">{p.label}</span>
              <h3 className="text-[15px] font-medium">{p.title}</h3>
            </div>
            <p className="mt-2 text-[13px] leading-[1.55] text-[var(--muted)] max-w-[36ch]">
              {p.body}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-[22px] tracking-tight">{value}</span>
      <span className="text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">{label}</span>
    </div>
  );
}
