"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Full-screen, full-bleed render carousel. Each slide spans the entire viewport
 * width and ~viewport height (no gutters). A thumbnail strip is OVERLAID on the
 * bottom of the slide (over a scrim) — no white space below: active thumb
 * highlighted, click/keyboard/touch to jump. Drag (native scroll + snap) + slow
 * auto-advance (paused on hover / interaction / reduced-motion).
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
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* full-screen track */}
      <div
        ref={trackRef}
        className="no-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {slides.map((s, i) => (
          <figure key={s.src} className="relative h-[clamp(560px,90svh,1100px)] w-screen flex-none snap-center overflow-hidden bg-carbon">
            <Image src={s.src} alt={s.label} fill priority={i < 2} className="img-grade object-cover" sizes="100vw" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-[linear-gradient(180deg,transparent,rgba(11,11,11,0.85))]" />
            <figcaption className="absolute left-[clamp(20px,6vw,100px)] top-[clamp(20px,5vw,48px)] flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.14em] text-white">
              <span className="tnum">{String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
              <span className="h-px w-6" style={{ background: accent }} aria-hidden />
              {s.label}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* thumbnails OVERLAID on the slide bottom */}
      <div
        className="no-scrollbar absolute inset-x-0 bottom-[clamp(16px,3vw,36px)] z-10 flex justify-start gap-2.5 overflow-x-auto px-[clamp(20px,6vw,100px)] sm:justify-center"
        role="tablist"
        aria-label="Gallery thumbnails"
      >
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
              className="relative h-[clamp(44px,6vw,62px)] w-[clamp(60px,8vw,88px)] flex-none overflow-hidden rounded-[5px] outline-none transition-all focus-visible:ring-2 focus-visible:ring-fuel"
              style={{ opacity: on ? 1 : 0.45, boxShadow: on ? `0 0 0 2px ${accent}` : "0 0 0 1px rgba(255,255,255,0.25)" }}
            >
              <Image src={s.src} alt="" fill loading="lazy" className="img-grade object-cover" sizes="88px" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
