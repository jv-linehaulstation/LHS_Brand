import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { SectionHead } from "@/components/Bits";
import { PHOTOS } from "@/lib/audiences";

/**
 * "Why We Do It" — the brand values band (Four-Stones 4-up). Each cell is a real
 * deck render under a heavy carbon overlay (legible white text), with mono
 * numerals + Archivo titles and a slow hover scale. Renders the header + grid
 * only; the caller wraps it in a <Section>. Shared by the homepage + Leadership.
 */
const PILLARS = [
  { n: "01", t: "Driver Dignity", p: "Get the best drivers home, rested, and respected — every night they're with us.", img: PHOTOS.driverInCab },
  { n: "02", t: "Real Estate", p: "Owned Hubs and Service Centers — assets that appreciate, not parking lots.", img: PHOTOS.buildingAerial },
  { n: "03", t: "Lower Cost", p: "A national relay that takes cost out of every mile of American freight.", img: PHOTOS.crossDock },
  { n: "04", t: "Stewardship", p: "Supply-chain resilience that strengthens American manufacturing.", img: PHOTOS.highwayInterchange },
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
            className="group relative flex min-h-[240px] flex-col justify-end overflow-hidden bg-ink p-7"
          >
            <Image
              src={p.img}
              alt=""
              fill
              loading="lazy"
              className="img-grade object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.74)_25%,rgba(11,11,11,0.9)_75%,rgba(11,11,11,0.96))]" />
            <div
              className="absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
              style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
            />
            <div className="relative">
              <span className="tnum font-mono text-[12px]" style={{ color: accent }}>{p.n}</span>
              <div className="mt-8 font-display text-[clamp(19px,1.6vw,22px)] font-extrabold uppercase tracking-[-0.01em] text-white">
                {p.t}
              </div>
              <p className="mt-2.5 font-body text-[15px] leading-relaxed text-[#cfcfcf]">{p.p}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
