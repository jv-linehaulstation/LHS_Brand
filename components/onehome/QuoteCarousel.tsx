"use client";

import { useRef } from "react";

/**
 * Testimonial quote-cards row (Luxe pattern): three cards visible on desktop,
 * one (peeking the next) on mobile, with a circular next/prev arrow to cycle
 * more. Native scroll-snap → drag/swipe on touch; arrows scroll by one card.
 */
type Q = { quote: string; name: string; role: string };

export default function QuoteCarousel({ items, accent = "#F07820" }: { items: Q[]; accent?: string }) {
  const track = useRef<HTMLDivElement | null>(null);

  const scroll = (d: number) => {
    const t = track.current;
    if (!t) return;
    const card = t.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 16 : 360;
    t.scrollBy({ left: d * step, behavior: "smooth" });
  };

  return (
    <div>
      <div ref={track} className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1">
        {items.map((q, i) => (
          <div
            key={i}
            data-card
            className="flex flex-none basis-[86%] snap-start flex-col rounded-[20px] border p-7 sm:basis-[calc((100%_-_2rem)/3)]"
            style={{ borderColor: "#1C1C20", background: "#16161A" }}
          >
            <div className="text-[40px] leading-none" style={{ color: accent }} aria-hidden>&ldquo;</div>
            <blockquote className="-mt-2 text-[clamp(16px,1.8vw,20px)] font-medium leading-snug text-white">{q.quote}</blockquote>
            <div className="mt-auto pt-6">
              <div className="font-display text-[14px] font-black uppercase tracking-[0.02em] text-white">{q.name}</div>
              <div className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-chrome">{q.role}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-3">
        <button type="button" onClick={() => scroll(-1)} aria-label="Previous testimonials" className="grid h-12 w-12 place-items-center rounded-full border border-white/25 font-mono text-white transition-colors hover:border-white/60">←</button>
        <button type="button" onClick={() => scroll(1)} aria-label="More testimonials" className="grid h-12 w-12 place-items-center rounded-full border border-white/25 font-mono text-white transition-colors hover:border-white/60">→</button>
      </div>
    </div>
  );
}
