import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import { SectionHead } from "@/components/Bits";
import type { Audience } from "@/lib/audiences";

/* ============================================================================
   Per-lane signature bands. Each is a distinct "one moment per page" device:
   carriers → cost ledger, brokers/shippers → relay diagram, government → timeline.
   ========================================================================== */

/** CARRIERS — "Build vs. Belong" cost comparison ledger. */
export function BuildVsBelong({ data, accent }: { data: NonNullable<Audience["ledger"]>; accent: string }) {
  return (
    <>
      <SectionHead index="★" kicker={data.kicker} title={data.headline} accent={accent} />
      <Reveal delay={120} className="mt-9">
        <div className="overflow-hidden rounded-card border border-chrome/15">
          {/* column headers */}
          <div className="grid grid-cols-[1.1fr_1fr_1fr] items-center bg-carbon">
            <div className="px-5 py-4 font-mono text-[11px] uppercase tracking-[0.12em] text-chrome">
              Line item
            </div>
            <div className="border-l border-chrome/10 px-5 py-4 font-label text-[10px] uppercase tracking-[0.14em] text-chrome/80">
              {data.buildLabel}
            </div>
            <div
              className="border-l border-chrome/10 px-5 py-4 font-label text-[10px] uppercase tracking-[0.14em] text-white"
              style={{ background: `${accent}1a` }}
            >
              {data.flexLabel}
            </div>
          </div>
          {data.rows.map((r, i) => (
            <Reveal
              key={i}
              delay={i * 70}
              className="grid grid-cols-[1.1fr_1fr_1fr] items-center border-t border-chrome/10 bg-panel"
            >
              <div className="px-5 py-4 font-body text-[14px] leading-snug text-chrome">{r.label}</div>
              <div className="border-l border-chrome/10 px-5 py-4 font-mono text-[14px] text-[#b8b8b8] line-through decoration-ember/70">
                {r.build}
              </div>
              <div
                className="border-l border-chrome/10 px-5 py-4 font-display text-[16px] font-extrabold uppercase tracking-[0.01em] text-white"
                style={{ background: `${accent}12` }}
              >
                <span style={{ color: accent }}>✓</span> {r.flex}
              </div>
            </Reveal>
          ))}
        </div>
        {data.note && (
          <p className="mt-5 font-script text-[clamp(20px,2.8vw,30px)] font-semibold" style={{ color: accent }}>
            {data.note}
          </p>
        )}
      </Reveal>
    </>
  );
}

/** BROKERS / SHIPPERS — relay / chain-of-custody lane diagram on the blueprint. */
export function RelayDiagram({ data, accent }: { data: NonNullable<Audience["lanes"]>; accent: string }) {
  return (
    <>
      <SectionHead index="★" kicker={data.kicker} title={data.headline} accent={accent} />
      <Reveal delay={120} className="mt-12">
        {/* the lane: nodes connected by a dashed measured line */}
        <div className="relative grid gap-y-8 md:grid-cols-5 md:gap-y-0">
          {/* connecting rail (desktop) */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[18px] hidden h-px md:block"
            style={{
              backgroundImage: `repeating-linear-gradient(90deg, ${accent} 0 10px, transparent 10px 20px)`,
              opacity: 0.5,
            }}
            aria-hidden
          />
          {data.steps.map((s, i) => (
            <Reveal key={i} delay={i * 110} className="relative flex flex-col items-start md:items-center md:text-center">
              <div className="flex items-center gap-3 md:flex-col md:gap-2">
                <span
                  className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border bg-ink font-mono text-[13px]"
                  style={{ borderColor: accent, color: accent }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="font-display text-[15px] font-extrabold uppercase tracking-[0.02em] text-white md:mt-2">
                  {s.label}
                </div>
              </div>
              <p className="mt-2 max-w-[180px] pl-12 font-body text-[13px] leading-snug text-chrome md:pl-0">
                {s.sub}
              </p>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </>
  );
}

/** CARRIERS / GOVERNMENT — SOLO vs RELAY utilization comparison. */
export function SoloVsRelay({ data, accent }: { data: NonNullable<Audience["relay"]>; accent: string }) {
  return (
    <>
      <SectionHead index="★" kicker={data.kicker} title={data.headline} accent={accent} />
      <Reveal delay={120} className="mt-9 grid gap-4 md:grid-cols-2">
        {/* SOLO — the cold baseline */}
        <div className="rounded-card border border-chrome/15 bg-panel p-7">
          <div className="font-label text-[10px] uppercase tracking-[0.18em] text-chrome">Solo Driving</div>
          <div className="mt-5 flex flex-col gap-4">
            {data.rows.map((r, i) => (
              <div key={i} className="flex items-baseline justify-between gap-4 border-t border-chrome/10 pt-4 first:border-t-0 first:pt-0">
                <span className="font-body text-[14px] text-chrome">{r.label}</span>
                <span className="tnum font-display text-[20px] font-black text-[#b8b8b8]">{r.solo}</span>
              </div>
            ))}
          </div>
        </div>
        {/* RELAY — the accent win */}
        <div className="rounded-card border p-7" style={{ borderColor: `${accent}66`, background: `${accent}12` }}>
          <div className="font-label text-[10px] uppercase tracking-[0.18em]" style={{ color: accent }}>
            LineHaul Relay
          </div>
          <div className="mt-5 flex flex-col gap-4">
            {data.rows.map((r, i) => (
              <div key={i} className="flex items-baseline justify-between gap-4 border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                <span className="font-body text-[14px] text-[#dadada]">{r.label}</span>
                <CountUp value={r.relay} style={{ color: accent }} className="tnum font-display text-[clamp(20px,2.6vw,28px)] font-black leading-none" />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      {data.note && (
        <p className="mt-6 font-script text-[clamp(20px,2.8vw,30px)] font-semibold" style={{ color: accent }}>
          {data.note}
        </p>
      )}
    </>
  );
}

/** GOVERNMENT — the Modern-Day Pony Express timeline. */
export function Timeline({ data, accent }: { data: NonNullable<Audience["timeline"]>; accent: string }) {
  return (
    <>
      <SectionHead index="★" kicker={data.kicker} title={data.headline} accent={accent} />
      <div className="mt-10 grid gap-px overflow-hidden rounded-card border border-chrome/15 bg-chrome/10 md:grid-cols-4">
        {data.entries.map((e, i) => (
          <Reveal key={i} delay={i * 100} className="lift bg-panel p-6">
            <div className="tnum font-display text-[clamp(28px,3.2vw,40px)] font-black leading-none" style={{ color: accent }}>
              {e.year}
            </div>
            <div className="mt-4 font-display text-[16px] font-extrabold uppercase leading-tight text-white">
              {e.title}
            </div>
            <p className="mt-2.5 font-body text-[14px] leading-relaxed text-chrome">{e.blurb}</p>
          </Reveal>
        ))}
      </div>
    </>
  );
}
