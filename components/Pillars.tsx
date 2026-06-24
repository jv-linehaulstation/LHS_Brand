import Reveal from "@/components/motion/Reveal";
import { SectionHead } from "@/components/Bits";

/**
 * "Why We Do It" — the brand values band (Four-Stones 4-up). Hairline-divided
 * cells, mono numerals, Archivo titles. Renders the header + grid only; the
 * caller wraps it in a <Section> to control the background variant. Shared by
 * the homepage and the Leadership page so the brand narrative is consistent.
 */
const PILLARS = [
  { n: "01", t: "Driver Dignity", p: "Get the best drivers home, rested, and respected — every night they're with us." },
  { n: "02", t: "Real Estate", p: "Owned Hubs and Service Centers — assets that appreciate, not parking lots." },
  { n: "03", t: "Lower Cost", p: "A national relay that takes cost out of every mile of American freight." },
  { n: "04", t: "Stewardship", p: "Supply-chain resilience that strengthens American manufacturing and the lanes it depends on." },
];

export default function Pillars({
  accent = "#F07820",
  kicker = "Why We Do It",
  title = "Infrastructure With A Conscience.",
}: {
  accent?: string;
  kicker?: string;
  title?: React.ReactNode;
}) {
  return (
    <>
      <SectionHead kicker={kicker} size="xl" title={title} accent={accent} maxW="max-w-3xl" />
      <div className="mt-12 grid gap-px overflow-hidden border border-chrome/12 bg-chrome/12 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((p, i) => (
          <Reveal
            key={p.n}
            delay={i * 80}
            className="flex min-h-[210px] flex-col justify-end bg-ink p-7 transition-colors duration-300 hover:bg-[#121110]"
          >
            <span className="tnum font-mono text-[12px]" style={{ color: accent }}>{p.n}</span>
            <div className="mt-auto pt-8 font-display text-[clamp(19px,1.6vw,22px)] font-extrabold uppercase tracking-[-0.01em] text-white">
              {p.t}
            </div>
            <p className="mt-2.5 font-body text-[15px] leading-relaxed text-chrome">{p.p}</p>
          </Reveal>
        ))}
      </div>
    </>
  );
}
