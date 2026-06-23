import Reveal from "@/components/motion/Reveal";

/**
 * Shared "wayfinding" primitives for the redesign. All presentational and
 * server-component safe. The point of these is a single, deliberate brand
 * vocabulary (status chips, coordinate readouts, measured section headers)
 * used as *landmarks* — never an eyebrow stamped above every section.
 */

/** Mono data tag — coordinates, mile-markers, indices, route refs. */
export function DataTag({
  children,
  accent,
  className = "",
}: {
  children: React.ReactNode;
  accent?: string;
  className?: string;
}) {
  return (
    <span
      className={`tnum inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.04em] text-chrome ${className}`}
      style={accent ? { color: accent } : undefined}
    >
      {children}
    </span>
  );
}

/** Live-status chip — the "departures board" landmark. */
export function StatusChip({
  label,
  coord,
  accent = "#F07820",
  live = true,
}: {
  label: string;
  coord?: string;
  accent?: string;
  live?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-3 rounded-btn border border-chrome/20 bg-ink/70 px-3.5 py-2 backdrop-blur-sm">
      <span
        className={`relative inline-block h-2 w-2 rounded-full ${live ? "pulse-dot" : ""}`}
        style={{ background: accent, color: accent }}
        aria-hidden
      />
      <span className="font-label text-[10px] uppercase tracking-[0.18em] text-white">
        {label}
      </span>
      {coord && (
        <span className="tnum hidden font-mono text-[11px] text-chrome sm:inline">{coord}</span>
      )}
    </span>
  );
}

/**
 * Section header. A measured rule + index + title. The kicker is OPTIONAL and
 * carried by the rule/index, not by a tracked all-caps eyebrow on every block.
 */
const HEAD_SIZE = {
  base: "text-[clamp(34px,5vw,68px)]",
  xl: "text-[clamp(40px,6.6vw,92px)]",
  display: "text-[clamp(48px,8.5vw,118px)]",
} as const;

export function SectionHead({
  index,
  kicker,
  title,
  accent = "#F07820",
  align = "left",
  size = "base",
  className = "",
  maxW = "max-w-4xl",
}: {
  index?: string;
  kicker?: string;
  title: React.ReactNode;
  accent?: string;
  align?: "left" | "center";
  size?: keyof typeof HEAD_SIZE;
  className?: string;
  maxW?: string;
}) {
  return (
    <Reveal className={`${align === "center" ? `mx-auto ${maxW} text-center` : maxW} ${className}`}>
      {(index || kicker) && (
        <div
          className={`mb-5 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
        >
          {index && (
            <span className="tnum font-mono text-[13px]" style={{ color: accent }}>
              {index}
            </span>
          )}
          <span
            className="measure h-px w-12 opacity-60"
            style={{ color: accent }}
            aria-hidden
          />
          {kicker && (
            <span className="font-label text-[11px] uppercase tracking-[0.22em] text-chrome">
              {kicker}
            </span>
          )}
        </div>
      )}
      <h2
        className={`text-balance font-display ${HEAD_SIZE[size]} font-black uppercase leading-[0.92] tracking-[-0.025em] text-white`}
      >
        {title}
      </h2>
    </Reveal>
  );
}

/** A full-width measured divider rule (engineering hairline). */
export function MeasureRule({ accent = "#F07820" }: { accent?: string }) {
  return (
    <div className="flex items-center gap-3" aria-hidden>
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
      <span className="measure h-px flex-1 text-chrome/40" />
      <span className="h-1.5 w-1.5 rounded-full bg-chrome/30" />
    </div>
  );
}
