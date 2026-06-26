"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Luxe "Featured Masterpieces" peeking-card carousel: a larger centered card
 * with the previous/next cards peeking at the edges, circular prev/next arrows,
 * and a caption row (name + spec) under the active card. Native scroll-snap →
 * drag/swipe works on touch out of the box; the arrows scroll one card. Active
 * card is whichever is nearest the track centre. Reduced-motion safe (smooth
 * scroll degrades to instant via the global scroll-behavior reset).
 */
type Slide = { src: string; name: string; spec: string };

export default function BuildingCarousel({
  slides,
  accent = "#F07820",
}: {
  slides: Slide[];
  accent?: string;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const n = slides.length;

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestD = Infinity;
    cards.current.forEach((el, i) => {
      if (!el) return;
      const c = el.offsetLeft + el.offsetWidth / 2;
      const d = Math.abs(c - center);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    });
    setActive(best);
  };

  useEffect(() => {
    onScroll();
  }, []);

  const goTo = (idx: number) => {
    const el = cards.current[Math.min(n - 1, Math.max(0, idx))];
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <div className="mt-12">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="no-scrollbar peek-pad flex snap-x snap-mandatory gap-5 overflow-x-auto py-2"
      >
        {slides.map((s, i) => (
          <div
            key={s.name}
            ref={(el) => { cards.current[i] = el; }}
            className="w-[clamp(280px,72vw,940px)] flex-none snap-center"
          >
            <figure
              className="overflow-hidden rounded-[20px] border transition-[opacity,transform] duration-500 ease-out"
              style={{
                borderColor: "#1C1C20",
                background: "#16161A",
                opacity: i === active ? 1 : 0.45,
                transform: i === active ? "scale(1)" : "scale(0.93)",
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={s.src} alt={s.name} fill loading="lazy" className="img-grade object-cover" sizes="(max-width: 1024px) 80vw, 940px" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(11,11,11,0.5))]" />
              </div>
            </figure>
          </div>
        ))}
      </div>

      {/* circular arrows + active caption */}
      <div className="mt-7 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          aria-label="Previous"
          disabled={active === 0}
          className="grid h-12 w-12 flex-none place-items-center rounded-full border border-white/25 font-mono text-white transition-colors hover:border-white/60 disabled:opacity-30"
        >
          ←
        </button>
        <div className="min-w-[220px] text-center">
          <div className="font-display text-[clamp(15px,1.8vw,19px)] font-black uppercase tracking-[0.01em] text-white">{slides[active].name}</div>
          <div className="mt-1.5 font-mono text-[11px] tracking-[0.04em]" style={{ color: "#a9a9a9" }}>{slides[active].spec}</div>
          <div className="mt-1 font-mono text-[11px]" style={{ color: accent }}>{String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</div>
        </div>
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          aria-label="Next"
          disabled={active === n - 1}
          className="grid h-12 w-12 flex-none place-items-center rounded-full border border-white/25 font-mono text-white transition-colors hover:border-white/60 disabled:opacity-30"
        >
          →
        </button>
      </div>
    </div>
  );
}
