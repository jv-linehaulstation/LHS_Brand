import Image from "next/image";
import Reveal from "@/components/motion/Reveal";

/**
 * A row of image boxes — a photo with a Fuel-Orange badge (e.g. "Step #1" or
 * "01"), a title, and a one-line description. Used for the Free Membership
 * steps and the Three Ways To Get Space. TODO(JJ): dedicated per-step imagery.
 */
export type StepItem = { title: string; line: string; img: string };

export default function StepGrid({
  items,
  badge,
  accent = "#F07820",
}: {
  items: StepItem[];
  badge: (i: number) => string;
  accent?: string;
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {items.map((it, i) => (
        <Reveal key={it.title} delay={i * 80}>
          <figure className="group h-full overflow-hidden rounded-[18px] border" style={{ borderColor: "#1C1C20", background: "#16161A" }}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={it.img} alt={it.title} fill loading="lazy" className="img-grade object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(11,11,11,0.8))]" />
              <div className="absolute left-4 top-4 inline-flex items-center rounded-full px-3 py-1 font-label text-[12px] uppercase tracking-[0.14em] text-ink" style={{ background: accent }}>
                {badge(i)}
              </div>
            </div>
            <figcaption className="p-5">
              <div className="font-display text-[22px] font-black uppercase tracking-[0.01em] text-white">{it.title}</div>
              <p className="mt-2 text-[16px] leading-snug" style={{ color: "#a9a9a9" }}>{it.line}</p>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
