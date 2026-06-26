"use client";

import { useEffect, useRef, useState } from "react";

/**
 * "In Their Words" — a glass quote carousel (fade/slide, 01 / 05 counter, swipe
 * on touch, optional autoplay that pauses on hover and is disabled under
 * prefers-reduced-motion).
 *
 * NOTE(JJ): the OneHome program is pre-launch, so there are no real founding-
 * member testimonials yet. These slots are seeded with the program promise and
 * a "founding member" framing — NOT fabricated named drivers with stock faces.
 * Replace `items` with real driver quotes + photos before launch.
 */
export type Voice = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  badge?: string;
};

export default function TestimonialCarousel({
  items,
  accent = "#F07820",
}: {
  items: Voice[];
  accent?: string;
}) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = items.length;
  const go = (d: number) => setI((p) => (p + d + n) % n);
  const downX = useRef<number | null>(null);

  // Gentle autoplay — only when motion is allowed and the user isn't hovering.
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => setI((p) => (p + 1) % n), 6500);
    return () => window.clearTimeout(t);
  }, [i, paused, n]);

  const onDown = (e: React.PointerEvent) => {
    downX.current = e.clientX;
  };
  const onUp = (e: React.PointerEvent) => {
    if (downX.current === null) return;
    const dx = e.clientX - downX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    downX.current = null;
  };

  const active = items[i];

  return (
    <div
      className="glass-strong relative overflow-hidden rounded-card p-7 sm:p-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={onDown}
      onPointerUp={onUp}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-20 blur-3xl"
        style={{ background: accent }}
        aria-hidden
      />
      <div className="relative flex items-center justify-between">
        <span className="tnum font-mono text-[15px] tracking-[0.1em]" style={{ color: accent }}>
          {String(i + 1).padStart(2, "0")} <span className="text-chrome">/ {String(n).padStart(2, "0")}</span>
        </span>
        {active.badge && (
          <span className="rounded-full border border-chrome/25 px-3 py-1 font-label text-[10px] uppercase tracking-[0.18em] text-chrome">
            {active.badge}
          </span>
        )}
      </div>

      {/* Cross-fade region — keyed so React remounts and re-runs the entrance. */}
      <div key={i} className="motion-safe:animate-[fadeIn_.5s_ease]">
        <blockquote className="mt-6 max-w-[34ch] text-balance font-body text-[clamp(23px,2.99vw,35px)] font-medium leading-[1.35] text-white">
          “{active.quote}”
        </blockquote>
        <div className="mt-7 flex items-center gap-4">
          <span
            className="flex h-12 w-12 flex-none items-center justify-center rounded-full font-display text-[17px] font-black text-ink"
            style={{ background: `linear-gradient(135deg, ${accent}, ${accent}bb)` }}
            aria-hidden
          >
            {active.initials}
          </span>
          <div>
            <div className="font-display text-[17px] font-black uppercase tracking-[0.02em] text-white">
              {active.name}
            </div>
            <div className="mt-0.5 font-mono text-[13px] uppercase tracking-[0.1em] text-chrome">
              {active.role}
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-chrome/25 font-mono text-chrome transition-colors hover:border-chrome/60 hover:text-white"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-chrome/25 font-mono text-chrome transition-colors hover:border-chrome/60 hover:text-white"
        >
          →
        </button>
        <div className="ml-2 flex gap-1.5" role="tablist" aria-label="Select quote">
          {items.map((_, j) => (
            <button
              key={j}
              type="button"
              onClick={() => setI(j)}
              aria-label={`Go to quote ${j + 1}`}
              aria-selected={j === i}
              role="tab"
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: j === i ? 26 : 8,
                background: j === i ? accent : "rgba(176,176,176,0.3)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
