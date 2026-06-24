"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Full-width Vogue-style render carousel. Edge-to-edge scroll-snap track with
 * drag (native overflow scroll), prev/next arrows, and slow auto-advance
 * (paused on hover / interaction / reduced-motion). Big imagery, minimal
 * captions. Reduced-motion safe: no auto-advance, scroll still works.
 */
export type Slide = { src: string; label: string };

export default function WideSlider({ slides, gut = "var(--gut, clamp(20px,5vw,80px))" }: { slides: Slide[]; gut?: string }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);

  const step = (dir: number) => {
    const tr = trackRef.current;
    if (!tr) return;
    const amount = Math.min(tr.clientWidth * 0.8, 860) * dir;
    tr.scrollBy({ left: amount, behavior: "smooth" });
  };

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
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-3.5 overflow-x-auto pb-2.5"
        style={{ paddingInline: gut, scrollPaddingInline: gut }}
      >
        {slides.map((s, i) => (
          <figure
            key={s.src}
            className="relative aspect-[16/9] flex-none basis-[86%] snap-center overflow-hidden rounded-[8px] bg-carbon sm:basis-[78%] lg:max-w-[1000px]"
          >
            <Image
              src={s.src}
              alt={s.label}
              fill
              priority={i < 2}
              className="img-grade object-cover"
              sizes="(max-width: 640px) 86vw, 78vw"
            />
            <figcaption className="absolute bottom-3.5 left-4 rounded-btn bg-ink/55 px-2.5 py-1.5 font-mono text-[11px] tracking-[0.1em] text-white backdrop-blur-sm">
              {s.label}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-4 flex gap-2.5" style={{ paddingInline: gut }}>
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous"
          className="grid h-12 w-12 place-items-center rounded-full border text-[18px] transition-colors"
          style={{ borderColor: "#E2DDD6", color: "#0B0B0B" }}
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next"
          className="grid h-12 w-12 place-items-center rounded-full border text-[18px] transition-colors hover:border-fuel hover:text-fuel"
          style={{ borderColor: "#E2DDD6", color: "#0B0B0B" }}
        >
          ›
        </button>
      </div>
    </div>
  );
}
