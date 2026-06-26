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

const CARBON = "#0B0B0B";

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
          <div key={it.name} className="overflow-hidden rounded-card border border-[#E2DDD6]">
            <div className="relative aspect-[16/10]">
              <Image src={it.img} alt={it.name} fill loading="lazy" className="img-grade object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(11,11,11,0.4))]" />
            </div>
            <div className="bg-white p-6">
              <div className="flex items-baseline gap-3">
                <span className="tnum font-mono text-[12px]" style={{ color: accentDark }}>{counter(i)}</span>
                <h3 className="font-display text-[24px] font-black uppercase leading-none" style={{ color: CARBON }}>{it.name}</h3>
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: accentDark }}>{it.meta}</div>
              <p className="mt-3 font-body text-[16px] leading-snug" style={{ color: "#3a3733" }}>{it.blurb}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // ---- Pinned sticky-scroll showcase ----
  return (
    <div className="mt-14 grid gap-[clamp(24px,4vw,64px)] lg:grid-cols-2">
      {/* sticky media — cross-fades to the active amenity */}
      <div className="lg:sticky lg:top-0 lg:h-[100svh] lg:self-start lg:py-[8vh]">
        <div className="relative h-full min-h-[60vh] overflow-hidden rounded-card border border-[#E2DDD6]">
          {items.map((it, i) => (
            <div
              key={it.name}
              className="absolute inset-0 transition-[opacity,transform] duration-700 ease-out"
              style={{ opacity: i === active ? 1 : 0, transform: i === active ? "scale(1)" : "scale(1.05)" }}
            >
              <Image src={it.img} alt={i === active ? `${it.name} — OneHome by LineHaul Station` : ""} fill priority={i === 0} className="img-grade object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
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

      {/* scrolling content — one block per amenity */}
      <div>
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
            <p className="mt-5 max-w-[44ch] font-body text-[clamp(16px,1.7vw,20px)] leading-relaxed" style={{ color: "#3a3733" }}>{it.blurb}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
