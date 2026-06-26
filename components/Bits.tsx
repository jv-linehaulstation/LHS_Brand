import Image from "next/image";
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
      className={`tnum inline-flex items-center gap-2 font-mono text-[13px] tracking-[0.08em] text-chrome ${className}`}
      style={accent ? { color: accent } : undefined}
    >
      {children}
    </span>
  );
}

/** Live-status chip — the "departures board" landmark.
 *  `chrome` swaps the carbon outline for the v2 metallic chrome-pill bezel. */
export function StatusChip({
  label,
  coord,
  accent = "#F07820",
  live = true,
  chrome = false,
}: {
  label: string;
  coord?: string;
  accent?: string;
  live?: boolean;
  chrome?: boolean;
}) {
  const dot = (
    <span
      className={`relative inline-block h-2 w-2 rounded-full ${live ? "pulse-dot" : ""}`}
      style={{ background: accent, color: accent }}
      aria-hidden
    />
  );
  const inner = (
    <>
      {dot}
      <span className="font-label text-[12px] uppercase tracking-[0.18em] text-white">{label}</span>
      {coord && (
        <span className="tnum hidden font-mono text-[13px] text-chrome sm:inline">{coord}</span>
      )}
    </>
  );

  if (chrome) {
    return (
      <span className="chrome-pill align-middle">
        <span>{inner}</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-3 rounded-btn border border-chrome/20 bg-ink/70 px-3.5 py-2 backdrop-blur-sm">
      {inner}
    </span>
  );
}

/** Metallic bevel frame — wraps any block in the v2 chrome (or dual-metal) border.
 *  Optional `glint` adds the periodic chrome sweep (reduced-motion safe). */
export function ChromeFrame({
  children,
  variant = "chrome",
  glint = false,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "chrome" | "dual" | "steel";
  glint?: boolean;
  className?: string;
}) {
  const frame =
    variant === "dual" ? "dual-frame" : variant === "steel" ? "steel-frame" : "chrome-frame";
  return (
    <div className={`${frame} ${glint ? "glint" : ""} ${className}`}>{children}</div>
  );
}

/** Real minted-coin PNG (OneHome / FlexSpace), crisp with a soft glow.
 *  For the CSS numeral coin use <Coin>. */
export function CoinImage({
  src,
  alt,
  size = 104,
  glow = "rgba(176,176,176,0.28)",
  className = "",
}: {
  src: string;
  alt: string;
  size?: number;
  glow?: string;
  className?: string;
}) {
  return (
    <span
      className={`relative inline-flex flex-none items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <span
        className="pointer-events-none absolute inset-[-12%] rounded-full blur-xl"
        style={{ background: `radial-gradient(circle, ${glow}, transparent 68%)` }}
        aria-hidden
      />
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="relative h-full w-full object-contain drop-shadow-[0_6px_14px_rgba(0,0,0,0.55)]"
      />
    </span>
  );
}

/** Minted "coin" badge — circular metallic index/program mark. */
export function Coin({
  children,
  tone = "chrome",
  size = 44,
  className = "",
}: {
  children: React.ReactNode;
  tone?: "chrome" | "fuel" | "gold" | "steel";
  size?: number;
  className?: string;
}) {
  const toneClass = tone === "chrome" ? "" : `coin--${tone}`;
  return (
    <span
      className={`coin tnum font-display ${toneClass} ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.34 }}
      aria-hidden
    >
      {children}
    </span>
  );
}

/**
 * Section header. A measured rule + index + title. The kicker is OPTIONAL and
 * carried by the rule/index, not by a tracked all-caps eyebrow on every block.
 */
const HEAD_SIZE = {
  base: "text-[clamp(39px,5.75vw,78px)]",
  // Matches the homepage section <h2> scale so inner pages read as the same site.
  xl: "text-[clamp(39px,6.44vw,97px)]",
  display: "text-[clamp(55px,9.77vw,136px)]",
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
  tone = "onDark",
}: {
  index?: string;
  kicker?: string;
  title: React.ReactNode;
  accent?: string;
  align?: "left" | "center";
  size?: keyof typeof HEAD_SIZE;
  className?: string;
  maxW?: string;
  /** onLight = carbon text for white sections; onDark (default) = white text. */
  tone?: "onDark" | "onLight";
}) {
  const titleColor = tone === "onLight" ? "text-ink" : "text-white";
  const kickerColor = tone === "onLight" ? "text-[#6a655e]" : "text-chrome";
  return (
    <Reveal className={`${align === "center" ? `mx-auto ${maxW} text-center` : maxW} ${className}`}>
      {(index || kicker) && (
        <div
          className={`mb-5 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
        >
          {index && (
            <span className="tnum font-mono text-[15px]" style={{ color: accent }}>
              {index}
            </span>
          )}
          <span
            className="measure h-px w-12 opacity-60"
            style={{ color: accent }}
            aria-hidden
          />
          {kicker && (
            <span className={`font-label text-[13px] uppercase tracking-[0.22em] ${kickerColor}`}>
              {kicker}
            </span>
          )}
        </div>
      )}
      <h2
        className={`text-balance font-display ${HEAD_SIZE[size]} font-black uppercase leading-[0.92] tracking-[-0.025em] ${titleColor}`}
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
