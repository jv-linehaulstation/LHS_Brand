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
      className={`${label} rounded-btn px-[30px] py-[17px] text-ink shadow-[0_12px_28px_rgba(0,0,0,0.4)] transition hover:brightness-110 hover:-translate-y-px`}
      style={{ background: `linear-gradient(135deg, ${accent}, ${accentDark})` }}
    >
      {children} <span aria-hidden>→</span>
    </a>
  );
}

/** Ghost CTA — carbon fill, chrome hairline, accent edge on hover. */
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
      className={`${label} group rounded-btn border border-chrome/30 bg-carbon/70 px-[30px] py-[17px] text-white transition hover:border-white`}
      style={{ ["--ac" as string]: accent }}
    >
      {children}
    </a>
  );
}
