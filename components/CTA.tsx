import { site } from "@/lib/site";

const label =
  "font-label text-[12px] uppercase tracking-[0.16em] inline-flex items-center gap-2.5";

/**
 * Primary CTA — the signature Warm Amber gradient fill on Carbon.
 * Per the Brand System "CTA Golden Rule" the only approved labels are
 * "Connect With Us" and "Schedule a Call". `accent`/`accentDark` let an
 * audience page tint the gradient; the homepage uses Fuel Orange.
 */
export function PrimaryCTA({
  children = "Connect With Us",
  href = site.connectHref,
  accent = "#F07820",
  accentDark = "#C85A12",
}: {
  children?: React.ReactNode;
  href?: string;
  accent?: string;
  accentDark?: string;
}) {
  return (
    <a
      href={href}
      className={`${label} group relative overflow-hidden rounded-btn px-[30px] py-[17px] text-ink shadow-[0_14px_30px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-0.5 hover:brightness-[1.08]`}
      style={{ background: `linear-gradient(135deg, ${accent}, ${accentDark})` }}
    >
      {/* one-pass sheen on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/25 opacity-0 transition-all duration-500 group-hover:left-[120%] group-hover:opacity-100"
      />
      <span className="relative">{children}</span>
      <span aria-hidden className="relative transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

/** Ghost CTA — carbon fill, chrome hairline, accent edge + tick on hover. */
export function GhostCTA({
  children = "Schedule a Call",
  href = site.scheduleHref,
  accent = "#F07820",
}: {
  children?: React.ReactNode;
  href?: string;
  accent?: string;
}) {
  return (
    <a
      href={href}
      className={`${label} group rounded-btn border border-chrome/30 bg-carbon/70 px-[30px] py-[17px] text-white transition duration-300 hover:border-[var(--ac)] hover:bg-carbon`}
      style={{ ["--ac" as string]: accent }}
    >
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover:scale-125"
        style={{ background: accent }}
      />
      {children}
    </a>
  );
}
