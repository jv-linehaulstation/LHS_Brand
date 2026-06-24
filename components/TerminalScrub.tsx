"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

/**
 * Signature moment #1 — Terminal scroll-scrub reveal (white section).
 * Pins a sticky stage and scrubs through the seven BUILDING PREVIEWS renders as
 * you scroll, vaulk-style: one frame swaps to the next, a progress bar fills, a
 * "VIEW 0X / 07" counter ticks. Under prefers-reduced-motion (or on mobile) it
 * collapses to a static, readable image grid + copy — no pin, no scrub.
 */
const FRAMES = Array.from({ length: 7 }, (_, i) => `/assets/building-seq/${String(i + 1).padStart(2, "0")}.jpg`);
const N = FRAMES.length;

const WHITE = "#F4F2EF";
const CARBON = "#0B0B0B";
const FUEL = "#F07820";
const LINE = "#E2DDD6";

export default function TerminalScrub() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);
  const [isStatic, setIsStatic] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsStatic(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 1024
      );
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (isStatic) return;
    const idx = Math.max(0, Math.min(N - 1, Math.floor(p * N)));
    setActive((prev) => (prev === idx ? prev : idx));
  });

  const Copy = (
    <div>
      <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.28em]" style={{ color: FUEL }}>
        <span className="h-px w-7" style={{ background: FUEL }} aria-hidden /> What We Built
      </div>
      <h2 className="mt-4 font-display text-[clamp(36px,6vw,84px)] font-black uppercase leading-[0.9] tracking-[-0.025em]" style={{ color: CARBON }}>
        A Real Terminal.<br />Not A Parking Lot.
      </h2>
      <p className="mt-6 max-w-[46ch] font-body text-[clamp(16px,1.6vw,20px)] leading-relaxed" style={{ color: "#3a3733" }}>
        Scroll to walk the Hub — the arrival, the building, the Service Center, the Outriders Club.
        Every angle is a real render of West Memphis.
      </p>
    </div>
  );

  // ---- Static fallback (reduced-motion / mobile): readable grid, no pin ----
  if (isStatic) {
    return (
      <section id="terminal" className="px-5 py-[clamp(64px,9vw,116px)] sm:px-8" style={{ background: WHITE }}>
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {Copy}
          <div className="grid grid-cols-2 gap-3">
            {FRAMES.map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-card border ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}
                style={{ borderColor: LINE }}
              >
                <Image src={src} alt={`LineHaul Station terminal — view ${i + 1}`} fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ---- Pinned scrub ----
  return (
    <section ref={ref} id="terminal" className="relative" style={{ background: WHITE, height: `${(N + 1) * 60}vh` }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-5 sm:px-8">
        <div className="mx-auto grid w-full max-w-site items-center gap-[clamp(24px,4vw,60px)] lg:grid-cols-2">
          {/* frame stack */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] border" style={{ borderColor: LINE, background: "#ddd" }}>
            {FRAMES.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={i === active ? `LineHaul Station terminal — view ${i + 1} of ${N}` : ""}
                fill
                priority={i === 0}
                className="object-cover transition-opacity duration-300 ease-out"
                style={{ opacity: i === active ? 1 : 0 }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ))}
            <div className="absolute bottom-3 left-3 rounded-btn px-2.5 py-1.5 font-mono text-[12px] text-white backdrop-blur-sm" style={{ background: "rgba(11,11,11,0.55)" }}>
              VIEW {String(active + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
            </div>
          </div>

          {/* copy + progress */}
          <div>
            {Copy}
            <div className="mt-7 h-[3px] w-full overflow-hidden rounded-full" style={{ background: LINE }}>
              <motion.div className="h-full origin-left" style={{ background: FUEL, scaleX: scrollYProgress }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
