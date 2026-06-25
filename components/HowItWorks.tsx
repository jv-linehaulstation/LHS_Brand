"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChromeFrame } from "@/components/Bits";

/**
 * Process module — mirrors the homepage "Find Your Lane" (AudienceScroll) design:
 * sticky media on the LEFT, numbered content blocks scrolling on the RIGHT
 * (001 / 003 counter + heading + description). The left media swaps to the block
 * nearest the viewport centre (IntersectionObserver). Under prefers-reduced-motion
 * or on mobile it degrades to a simple stacked sequence (never traps scroll).
 * The section heading is always rendered (visible) above the grid.
 */
export type Step = { n: string; t: string; d: string; img: string };

export default function HowItWorks({
  steps,
  accent = "#F07820",
  kicker = "How It Works",
  title = "Pull In. Recharge. Relay Out.",
}: {
  steps: Step[];
  accent?: string;
  kicker?: string;
  title?: React.ReactNode;
}) {
  const N = steps.length;
  const [active, setActive] = useState(0);
  const [isStatic, setIsStatic] = useState(false);
  const blocks = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const check = () =>
      setIsStatic(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 1024
      );
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isStatic) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.index);
            setActive((prev) => (prev === i ? prev : i));
          }
        });
      },
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 }
    );
    blocks.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [isStatic]);

  const Heading = (
    <>
      <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.28em]" style={{ color: accent }}>
        <span className="h-px w-7" style={{ background: accent }} aria-hidden /> {kicker}
      </div>
      <h2 className="mt-3 font-display text-[clamp(34px,5.6vw,84px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">
        {title}
      </h2>
    </>
  );

  const Block = (s: Step, i: number) => (
    <>
      <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.22em]" style={{ color: accent }}>
        <span className="tnum">
          {s.n} / {String(N).padStart(3, "0")}
        </span>
        <span className="h-px w-7" style={{ background: accent }} aria-hidden />
        Step {i + 1}
      </div>
      <h3 className="mt-4 font-display text-[clamp(34px,5vw,76px)] font-black uppercase leading-[0.9] tracking-[-0.025em] text-white">
        {s.t}
      </h3>
      <p className="mt-5 max-w-[48ch] font-body text-[clamp(16px,1.7vw,20px)] leading-relaxed text-[#dadada]">
        {s.d}
      </p>
    </>
  );

  // ---- Static fallback (mobile / reduced-motion): stacked cards ----
  if (isStatic) {
    return (
      <section className="bg-ink px-[clamp(20px,6vw,100px)] py-[clamp(64px,9vw,120px)]">
        {Heading}
        <div className="mt-9 grid gap-5">
          {steps.map((s, i) => (
            <ChromeFrame key={s.n} variant="steel">
              <div className="overflow-hidden bg-panel">
                <div className="relative aspect-[16/9]">
                  <Image src={s.img} alt={s.t} fill loading="lazy" className="img-grade object-cover" sizes="100vw" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(11,11,11,0.7))]" />
                </div>
                <div className="p-6 sm:p-8">{Block(s, i)}</div>
              </div>
            </ChromeFrame>
          ))}
        </div>
      </section>
    );
  }

  // ---- Pinned sticky-scroll (mirrors AudienceScroll) ----
  return (
    <section className="bg-ink px-[clamp(20px,6vw,100px)] py-[clamp(70px,11vh,140px)]">
      {Heading}
      <div className="mt-9 grid gap-[clamp(24px,4vw,64px)] lg:grid-cols-2">
        {/* sticky media — fills the viewport height; swaps to the active step */}
        <div className="lg:sticky lg:top-0 lg:h-[100svh] lg:self-start lg:py-[6vh]">
          <ChromeFrame variant="steel" className="h-full min-h-[60vh]">
            <div className="relative h-full min-h-[60vh] overflow-hidden bg-carbon">
              {steps.map((s, i) => (
                <div
                  key={s.n}
                  className="absolute inset-0 transition-[opacity,transform] duration-700 ease-out"
                  style={{ opacity: i === active ? 1 : 0, transform: i === active ? "scale(1)" : "scale(1.05)" }}
                >
                  <Image
                    src={s.img}
                    alt={i === active ? s.t : ""}
                    fill
                    priority={i === 0}
                    className="img-grade object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ))}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_62%,rgba(11,11,11,0.5))]" />
              <div className="absolute inset-x-5 bottom-5 flex gap-2">
                {steps.map((s, i) => (
                  <span
                    key={s.n}
                    className="h-[3px] flex-1 rounded-full transition-colors duration-300"
                    style={{ background: i === active ? accent : "rgba(176,176,176,0.25)" }}
                    aria-hidden
                  />
                ))}
              </div>
            </div>
          </ChromeFrame>
        </div>

        {/* scrolling content — one block per step */}
        <div>
          {steps.map((s, i) => (
            <div
              key={s.n}
              ref={(el) => {
                blocks.current[i] = el;
              }}
              data-index={i}
              className="flex min-h-[86vh] flex-col justify-center transition-opacity duration-500"
              style={{ opacity: i === active ? 1 : 0.35 }}
            >
              {Block(s, i)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
