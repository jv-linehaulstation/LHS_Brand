"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Full-bleed, full-screen render carousel. Each slide spans the entire viewport
 * width (no gutters/margins), edge-to-edge, with large imagery + a minimal
 * caption. Drag (native overflow scroll + snap), prev/next arrows overlaid, and
 * slow auto-advance (paused on hover / interaction / reduced-motion).
 */
export type Slide = { src: string; label: string };

export default function WideSlider({ slides }: { slides: Slide[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);
  const [idx, setIdx] = useState(0);

  const step = (dir: number) => {
    const tr = trackRef.current;
    if (!tr) return;
    tr.scrollBy({ left: tr.clientWidth * dir, behavior: "smooth" });
  };

  // Track which slide is centered (for the counter).
  useEffect(() => {
    const tr = trackRef.current;
    if (!tr) return;
    const onScroll = () => setIdx(Math.round(tr.scrollLeft / tr.clientWidth));
    tr.addEventListener("scroll", onScroll, { passive: true });
    return () => tr.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      const tr = trackRef.current;
      if (!tr) return;
      const nearEnd = tr.scrollLeft + tr.clientWidth >= tr.scrollWidth - 24;
      if (nearEnd) tr.scrollTo({ left: 0, behavior: "smooth" });
      else step(1);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="no-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {slides.map((s, i) => (
          <figure
            key={s.src}
            className="relative h-[clamp(58vh,70vw,86vh)] w-screen flex-none snap-center overflow-hidden bg-carbon"
          >
            <Image
              src={s.src}
              alt={s.label}
              fill
              priority={i < 2}
              className="img-grade object-cover"
              sizes="100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(11,11,11,0.55))]" />
            <figcaption className="absolute bottom-6 left-[clamp(20px,5vw,80px)] flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.14em] text-white">
              <span className="tnum">{String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
              <span className="h-px w-6 bg-fuel" aria-hidden />
              {s.label}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* arrows */}
      <button
        type="button"
        onClick={() => step(-1)}
        aria-label="Previous"
        className="absolute left-[clamp(16px,3vw,40px)] top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-ink/40 text-[20px] text-white backdrop-blur-sm transition-colors hover:border-fuel hover:text-fuel disabled:opacity-30"
        disabled={idx <= 0}
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => step(1)}
        aria-label="Next"
        className="absolute right-[clamp(16px,3vw,40px)] top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-ink/40 text-[20px] text-white backdrop-blur-sm transition-colors hover:border-fuel hover:text-fuel disabled:opacity-30"
        disabled={idx >= slides.length - 1}
      >
        ›
      </button>
    </div>
  );
}
