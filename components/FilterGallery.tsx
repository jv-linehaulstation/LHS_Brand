"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

/**
 * "Inside the Hub" (R1.7) — vaulk-style filter chips that animate/expand the
 * grid to the matching deck renders, with a lightbox. Styled for a WHITE
 * section (carbon text, hairline chips). Cells fade+scale in on filter change
 * (motion-safe); reduced-motion just swaps the set. Keyboard-accessible lightbox.
 */
const R = (n: string) => `/assets/deck-library/renderings/${n}.jpg`;

type Shot = { src: string; label: string; cat: string };
const SHOTS: Shot[] = [
  { src: R("chrome-club-skydeck"), label: "Sky Deck", cat: "outdoor" },
  { src: R("chrome-club-lounge-1"), label: "Member Lounge", cat: "club" },
  { src: R("fitness-studio"), label: "Fitness", cat: "club" },
  { src: R("gear-shop"), label: "Gear Shop", cat: "club" },
  { src: R("gamer-s-den-1"), label: "Gamer's Den", cat: "club" },
  { src: R("vintage-barber-shop"), label: "Barber", cat: "club" },
  { src: R("fleet-services-fuel"), label: "Fuel & Service", cat: "fleet" },
  { src: R("cross-dock"), label: "Cross-Dock", cat: "fleet" },
  { src: R("truck-wash-entry"), label: "Truck Wash", cat: "fleet" },
  { src: R("fleet-services-entry-1"), label: "Fleet Entry", cat: "fleet" },
  { src: R("chrome-club-patio"), label: "Patio", cat: "outdoor" },
  { src: R("corn-hole-courts"), label: "Courts", cat: "outdoor" },
  { src: R("water-feature"), label: "Water Feature", cat: "outdoor" },
  { src: R("chrome-club-entry"), label: "Arrival", cat: "facilities" },
  { src: R("gate-house-entry-drive"), label: "Gate House", cat: "facilities" },
  { src: R("laundry-center"), label: "Laundry", cat: "facilities" },
];

const CHIPS: { key: string; label: string }[] = [
  { key: "all", label: "All" },
  { key: "club", label: "Club" },
  { key: "fleet", label: "Fleet Services" },
  { key: "outdoor", label: "Outdoor" },
  { key: "facilities", label: "Facilities" },
];

const LINE = "#E2DDD6";
const CARBON = "#0B0B0B";

export default function FilterGallery() {
  const [filter, setFilter] = useState("all");
  const [lb, setLb] = useState<number | null>(null);

  const shots = useMemo(() => (filter === "all" ? SHOTS : SHOTS.filter((s) => s.cat === filter)), [filter]);

  useEffect(() => setLb(null), [filter]);

  const close = useCallback(() => setLb(null), []);
  const step = useCallback(
    (dir: number) => setLb((i) => (i === null ? i : (i + dir + shots.length) % shots.length)),
    [shots.length]
  );

  useEffect(() => {
    if (lb === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [lb, close, step]);

  return (
    <div>
      {/* chips */}
      <div className="mt-8 flex flex-wrap gap-2.5">
        {CHIPS.map((c) => {
          const on = filter === c.key;
          return (
            <button
              key={c.key}
              type="button"
              onClick={() => setFilter(c.key)}
              aria-pressed={on}
              className="rounded-btn border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors"
              style={{
                background: on ? "#F07820" : "transparent",
                borderColor: on ? "#F07820" : LINE,
                color: on ? CARBON : "#4a463f",
              }}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      {/* grid */}
      <div className="mt-7 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
        {shots.map((s, i) => (
          <button
            key={`${filter}-${s.src}`}
            type="button"
            onClick={() => setLb(i)}
            className="group relative aspect-square overflow-hidden rounded-[8px] text-left outline-none [animation:cellIn_.45s_ease] focus-visible:ring-2 focus-visible:ring-fuel motion-reduce:[animation:none]"
            aria-label={`View ${s.label}`}
          >
            <Image
              src={s.src}
              alt={s.label}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(11,11,11,0.8))]" />
            <span className="absolute bottom-3 left-3 font-display text-[13px] font-extrabold uppercase leading-tight text-white">
              {s.label}
            </span>
          </button>
        ))}
      </div>

      {/* lightbox */}
      {lb !== null && shots[lb] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm motion-safe:animate-[fadeIn_.2s_ease]"
          role="dialog"
          aria-modal="true"
          aria-label={`${shots[lb].label}, ${lb + 1} of ${shots.length}`}
          onClick={close}
        >
          <button type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-chrome/30 bg-carbon/70 text-[20px] text-white transition-colors hover:border-white">✕</button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous" className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full border border-chrome/30 bg-carbon/70 text-[22px] text-white transition-colors hover:border-white sm:left-6">‹</button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next" className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full border border-chrome/30 bg-carbon/70 text-[22px] text-white transition-colors hover:border-white sm:right-6">›</button>
          <figure className="relative flex max-h-[88vh] w-full max-w-5xl flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[70vh] w-full">
              <Image src={shots[lb].src} alt={shots[lb].label} fill priority className="object-contain" sizes="90vw" />
            </div>
            <figcaption className="mt-4 flex items-center justify-between gap-4 px-1">
              <div className="font-display text-[20px] font-black uppercase leading-none text-white">{shots[lb].label}</div>
              <div className="tnum shrink-0 font-mono text-[12px] text-chrome">{String(lb + 1).padStart(2, "0")} / {String(shots.length).padStart(2, "0")}</div>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
