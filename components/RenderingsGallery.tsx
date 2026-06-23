"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

/**
 * "Take the Tour" — a filterable, keyboard-accessible gallery + lightbox of the
 * real facility renders. Grouped by category; captions derived from filenames.
 * next/image (lazy), motion-safe hover zoom, prefers-reduced-motion respected.
 */

const R = (n: string) => `/assets/deck-library/renderings/${n}.jpg`;

function humanize(name: string): string {
  const label = name.replace(/-s-/g, "'s-").replace(/-/g, " "); // gamer-s-den-1 → gamer's den 1
  return label
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export type GalleryGroup = { key: string; label: string; shots: string[] };

export const RENDER_GROUPS: GalleryGroup[] = [
  {
    key: "arrival",
    label: "Arrival & Building",
    shots: ["chrome-club-entry", "chrome-club-entry-2", "chrome-club-aerial-view", "entry-drive-welcome", "gate-house-entry-drive", "oblique-site-plan"],
  },
  {
    key: "club",
    label: "The Outriders Club",
    shots: ["chrome-club-lounge-1", "chrome-club-lounge-2", "fitness-studio", "gamer-s-den-1", "gamer-s-den-2", "gamer-s-den-3", "gear-shop", "laundry-center", "vintage-barber-shop", "restrooms"],
  },
  {
    key: "skydeck",
    label: "Sky Deck & Outdoor",
    shots: ["chrome-club-skydeck", "skydeck-entry", "skydeck-fireplace", "chrome-club-patio", "corn-hole-courts", "water-feature"],
  },
  {
    key: "fleet",
    label: "Fleet Services",
    shots: ["fleet-services-fuel", "fleet-services-entry-1", "fleet-services-entry-2", "fleet-services-exit", "cross-dock", "truck-wash-entry", "truck-wash-exit", "parking-lot-restrooms"],
  },
];

type Shot = { src: string; cap: string; cat: string; catLabel: string };

function buildShots(groups: GalleryGroup[]): Shot[] {
  return groups.flatMap((g) =>
    g.shots.map((n) => ({ src: R(n), cap: humanize(n), cat: g.key, catLabel: g.label }))
  );
}

export default function RenderingsGallery({
  groups = RENDER_GROUPS,
  accent = "#F07820",
}: {
  groups?: GalleryGroup[];
  accent?: string;
}) {
  const all = buildShots(groups);
  const [active, setActive] = useState<string>("all");
  const [lb, setLb] = useState<number | null>(null);

  const shots = active === "all" ? all : all.filter((s) => s.cat === active);

  // reset lightbox if the filter changes out from under it
  useEffect(() => {
    setLb(null);
  }, [active]);

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

  const chips: { key: string; label: string }[] = [
    { key: "all", label: "All" },
    ...groups.map((g) => ({ key: g.key, label: g.label })),
  ];

  return (
    <div>
      {/* filter chips — wayfinding tab strip */}
      {groups.length > 1 && (
        <div className="no-scrollbar -mx-1 mb-7 flex gap-2 overflow-x-auto pb-1">
          {chips.map((c) => {
            const on = active === c.key;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => setActive(c.key)}
                aria-pressed={on}
                className="shrink-0 whitespace-nowrap rounded-btn border px-4 py-2 font-label text-[10px] uppercase tracking-[0.14em] transition-colors"
                style={{
                  color: on ? "#0B0B0B" : "#cfcfcf",
                  background: on ? accent : "rgba(20,20,20,0.6)",
                  borderColor: on ? accent : "rgba(176,176,176,0.2)",
                }}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      )}

      {/* grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {shots.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setLb(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-card border border-chrome/15 text-left outline-none focus-visible:ring-2"
            style={{ ["--tw-ring-color" as string]: accent }}
            aria-label={`View ${s.cap} — ${s.catLabel}`}
          >
            <Image
              src={s.src}
              alt={`${s.cap} — LineHaul Station ${s.catLabel}`}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.02),rgba(11,11,11,0.12)_55%,rgba(11,11,11,0.82))]" />
            <div
              className="absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
              style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
            />
            <div className="absolute inset-x-0 bottom-0 p-3.5">
              <div className="font-mono text-[10px] uppercase tracking-[0.08em]" style={{ color: accent }}>
                {s.catLabel}
              </div>
              <div className="mt-0.5 font-display text-[14px] font-extrabold uppercase leading-tight text-white">
                {s.cap}
              </div>
            </div>
            <span
              className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/40 bg-ink/50 text-[13px] text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            >
              ⤢
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
          aria-label={`${shots[lb].cap}, ${lb + 1} of ${shots.length}`}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-chrome/30 bg-carbon/70 text-[20px] text-white transition-colors hover:border-white"
          >
            ✕
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous"
            className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full border border-chrome/30 bg-carbon/70 text-[22px] text-white transition-colors hover:border-white sm:left-6"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next"
            className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full border border-chrome/30 bg-carbon/70 text-[22px] text-white transition-colors hover:border-white sm:right-6"
          >
            ›
          </button>

          <figure className="relative flex max-h-[88vh] w-full max-w-5xl flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[70vh] w-full">
              <Image
                src={shots[lb].src}
                alt={`${shots[lb].cap} — LineHaul Station ${shots[lb].catLabel}`}
                fill
                priority
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-between gap-4 px-1">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.1em]" style={{ color: accent }}>
                  {shots[lb].catLabel}
                </div>
                <div className="mt-1 font-display text-[20px] font-black uppercase leading-none text-white">
                  {shots[lb].cap}
                </div>
              </div>
              <div className="tnum shrink-0 font-mono text-[12px] text-chrome">
                {String(lb + 1).padStart(2, "0")} / {String(shots.length).padStart(2, "0")}
              </div>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
