"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Amenities as a pinned, scroll-through showcase (Spence-style): the media on
 * the LEFT sticks and cross-fades one amenity at a time while the name + blurb
 * scroll on the RIGHT, tracked by an 01–08 counter. Far fewer images on screen
 * at once — calmer, premium. On mobile / reduced-motion it degrades to a clean
 * stacked sequence (no pin, no scroll-trap). Modeled on AudienceScroll.
 */
type Item = { name: string; meta: string; blurb: string; img: string };

const CARBON = "#ffffff"; // dark "Luxe" skin: amenity names render light on the dark section

export default function AmenityShowcase({
  items,
  accent = "#F07820",
  accentDark = "#C85A12",
}: {
  items: Item[];
  accent?: string;
  accentDark?: string;
}) {
  const N = items.length;
  const [active, setActive] = useState(0);
  const [isStatic, setIsStatic] = useState(false);
  const blocks = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const check = () =>
      setIsStatic(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 1024
      );
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isStatic) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.index);
            setActive((prev) => (prev === i ? prev : i));
          }
        });
      },
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 }
    );
    blocks.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [isStatic]);

  const counter = (i: number) => `${String(i + 1).padStart(2, "0")} / ${String(N).padStart(2, "0")}`;

  // ---- Static fallback (mobile / reduced-motion): clean stacked cards ----
  if (isStatic) {
    return (
      <div className="mt-12 grid gap-6">
        {items.map((it, i) => (
          <div key={it.name} className="overflow-hidden border border-white/12 bg-[#16161A]">
            <div className="relative aspect-[16/10]">
              <Image src={it.img} alt={it.name} fill loading="lazy" className="img-grade object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(11,11,11,0.4))]" />
            </div>
            <div className="p-6">
              <div className="flex items-baseline gap-3">
                <span className="tnum font-mono text-[12px]" style={{ color: accentDark }}>{counter(i)}</span>
                <h3 className="font-display text-[24px] font-black uppercase leading-none" style={{ color: CARBON }}>{it.name}</h3>
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: accentDark }}>{it.meta}</div>
              <p className="mt-3 font-body text-[16px] leading-snug" style={{ color: "#a9a9a9" }}>{it.blurb}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // ---- Pinned sticky-scroll showcase ----
  // The media breaks out of the (1690px) content column to ~49vw and bleeds to
  // the left viewport edge, overlapping the column — matching the reference.
  return (
    <div className="mt-14 lg:mx-[calc(50%_-_50vw)] lg:w-screen lg:[overflow-x:clip]">
      <div className="lg:grid lg:grid-cols-[49vw_minmax(0,1fr)] lg:items-start">
        {/* sticky media (~49vw) — cross-fades to the active amenity */}
        <div className="lg:sticky lg:top-0 lg:h-[100svh] lg:self-start lg:py-[6vh]">
          {/* TODO(JJ): higher-res amenity photos (≥2400px, ideally portrait) — current
              gallery assets are ~1500px and look soft at this 49vw display size. */}
          <div className="relative h-full min-h-[60vh] overflow-hidden border border-white/12 lg:border-l-0">
            {items.map((it, i) => (
              <div
                key={it.name}
                className="absolute inset-0 transition-[opacity,transform] duration-700 ease-out"
                style={{ opacity: i === active ? 1 : 0, transform: i === active ? "scale(1)" : "scale(1.05)" }}
              >
                <Image src={it.img} alt={i === active ? `${it.name} — OneHome by LineHaul Station` : ""} fill priority={i === 0} className="img-grade object-cover" sizes="(max-width: 1024px) 100vw, 49vw" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(11,11,11,0.55))]" />
              </div>
            ))}
            <div className="absolute inset-x-5 bottom-5 flex items-center gap-3">
              <span className="tnum font-mono text-[12px] text-white">{counter(active)}</span>
              <span className="flex flex-1 gap-1.5" aria-hidden>
                {items.map((_, i) => (
                  <span key={i} className="h-[3px] flex-1 rounded-full transition-colors duration-300" style={{ background: i === active ? accent : "rgba(255,255,255,0.3)" }} />
                ))}
              </span>
            </div>
          </div>
        </div>

        {/* scrolling content — aligned to the right edge of the 1690 content column */}
        <div className="px-1 lg:pl-[clamp(28px,3.5vw,72px)] lg:pr-[max(clamp(20px,6vw,100px),calc((100vw_-_1690px)/2))]">
          {items.map((it, i) => (
            <div
              key={it.name}
              ref={(el) => { blocks.current[i] = el; }}
              data-index={i}
              className="flex min-h-[80vh] flex-col justify-center transition-opacity duration-500"
              style={{ opacity: i === active ? 1 : 0.32 }}
            >
              <span className="tnum font-mono text-[13px] tracking-[0.1em]" style={{ color: accentDark }}>{counter(i)}</span>
              <h3 className="mt-3 font-display text-[clamp(34px,5vw,76px)] font-black uppercase leading-[0.9] tracking-[-0.025em]" style={{ color: CARBON }}>{it.name}</h3>
              <div className="mt-3 font-mono text-[12px] uppercase tracking-[0.14em]" style={{ color: accentDark }}>{it.meta}</div>
              <p className="mt-5 max-w-[44ch] font-body text-[clamp(16px,1.7vw,20px)] leading-relaxed" style={{ color: "#a9a9a9" }}>{it.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
