"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

/**
 * Lightweight captioned photo grid + keyboard-accessible lightbox for arbitrary
 * image sets (used by /join for the Outriders gallery). Mirrors the look of
 * RenderingsGallery; motion-safe hover zoom, prefers-reduced-motion respected.
 */
export type Shot = { src: string; cap: string; tag?: string };

export default function PhotoGallery({
  shots,
  accent = "#F07820",
}: {
  shots: Shot[];
  accent?: string;
}) {
  const [lb, setLb] = useState<number | null>(null);
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
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {shots.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setLb(i)}
            className={`group relative overflow-hidden rounded-card border border-chrome/15 text-left outline-none focus-visible:ring-2 ${
              i === 0 ? "col-span-2 row-span-2 aspect-square sm:aspect-auto" : "aspect-[4/3]"
            }`}
            style={{ ["--tw-ring-color" as string]: accent }}
            aria-label={`View ${s.cap}`}
          >
            <Image
              src={s.src}
              alt={s.cap}
              fill
              loading="lazy"
              className="img-grade object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.02),rgba(11,11,11,0.12)_55%,rgba(11,11,11,0.82))]" />
            <div
              className="absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
              style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
            />
            <div className="absolute inset-x-0 bottom-0 p-3.5">
              {s.tag && (
                <div className="font-mono text-[10px] uppercase tracking-[0.08em]" style={{ color: accent }}>
                  {s.tag}
                </div>
              )}
              <div className={`mt-0.5 font-display font-extrabold uppercase leading-tight text-white ${i === 0 ? "text-[clamp(16px,2vw,22px)]" : "text-[14px]"}`}>
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
                alt={shots[lb].cap}
                fill
                priority
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-between gap-4 px-1">
              <div className="font-display text-[20px] font-black uppercase leading-none text-white">
                {shots[lb].cap}
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
