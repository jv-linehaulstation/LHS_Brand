"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Full-bleed, full-screen render carousel. Each slide spans the entire viewport
 * width (no gutters), edge-to-edge, with a minimal caption. Drag (native scroll
 * + snap) and a THUMBNAIL STRIP below for navigation (active thumb highlighted,
 * keyboard-accessible) — plus slow auto-advance (paused on hover / interaction /
 * reduced-motion). Touch-friendly (swipe + ≥44px thumbs).
 */
export type Slide = { src: string; label: string };

export default function WideSlider({ slides, accent = "#F07820" }: { slides: Slide[]; accent?: string }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);
  const [idx, setIdx] = useState(0);

  const goTo = (i: number) => {
    const tr = trackRef.current;
    if (!tr) return;
    tr.scrollTo({ left: tr.clientWidth * i, behavior: "smooth" });
  };

  useEffect(() => {
    const tr = trackRef.current;
    if (!tr) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setIdx(Math.round(tr.scrollLeft / tr.clientWidth)));
    };
    tr.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      tr.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      const tr = trackRef.current;
      if (!tr) return;
      const nearEnd = tr.scrollLeft + tr.clientWidth >= tr.scrollWidth - 24;
      if (nearEnd) tr.scrollTo({ left: 0, behavior: "smooth" });
      else tr.scrollBy({ left: tr.clientWidth, behavior: "smooth" });
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* full-bleed track */}
      <div
        ref={trackRef}
        className="no-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {slides.map((s, i) => (
          <figure key={s.src} className="relative h-[clamp(52vh,64vw,82vh)] w-screen flex-none snap-center overflow-hidden bg-carbon">
            <Image src={s.src} alt={s.label} fill priority={i < 2} className="img-grade object-cover" sizes="100vw" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_62%,rgba(11,11,11,0.55))]" />
            <figcaption className="absolute bottom-6 left-[clamp(20px,6vw,100px)] flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.14em] text-white">
              <span className="tnum">{String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
              <span className="h-px w-6" style={{ background: accent }} aria-hidden />
              {s.label}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* thumbnail strip */}
      <div className="no-scrollbar mt-3.5 flex gap-2.5 overflow-x-auto px-[clamp(20px,6vw,100px)]" role="tablist" aria-label="Gallery thumbnails">
        {slides.map((s, i) => {
          const on = i === idx;
          return (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-selected={on}
              aria-label={s.label}
              onClick={() => goTo(i)}
              className="relative h-[clamp(48px,7vw,68px)] w-[clamp(64px,9vw,96px)] flex-none overflow-hidden rounded-[5px] outline-none transition-opacity focus-visible:ring-2 focus-visible:ring-fuel"
              style={{ opacity: on ? 1 : 0.5, boxShadow: on ? `0 0 0 2px ${accent}` : "none" }}
            >
              <Image src={s.src} alt="" fill loading="lazy" className="img-grade object-cover" sizes="96px" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
