"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Pinned, scroll-driven process (vaulk/vogue). Media pins on the LEFT; on the
 * right, numbered steps advance as you scroll — 001 → 002 → 003 — and the left
 * media changes with the active step. Drives the active step from the section's
 * scroll progress (plain scroll listener — works with Lenis). Under
 * prefers-reduced-motion or on mobile it becomes a simple static stack (never
 * traps scroll). Section heading is always visible (rendered plainly).
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
  const ref = useRef<HTMLElement | null>(null);
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

  useEffect(() => {
    if (isStatic) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;
        const p = Math.min(1, Math.max(0, -rect.top / Math.max(1, total)));
        const idx = Math.min(steps.length - 1, Math.floor(p * steps.length));
        setActive((prev) => (prev === idx ? prev : idx));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [isStatic, steps.length]);

  const Heading = (
    <>
      <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.28em]" style={{ color: accent }}>
        <span className="h-px w-7" style={{ background: accent }} aria-hidden /> {kicker}
      </div>
      <h2 className="mt-3 font-display text-[clamp(36px,5.5vw,88px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">
        {title}
      </h2>
    </>
  );

  // ---- Static fallback (mobile / reduced-motion): stacked sequence ----
  if (isStatic) {
    return (
      <section className="bg-ink px-[clamp(20px,6vw,100px)] py-[clamp(64px,9vw,120px)]">
        {Heading}
        <div className="mt-10 grid gap-8">
          {steps.map((s, i) => (
            <div key={s.n} className="grid gap-5 sm:grid-cols-[1fr_1.1fr] sm:items-center">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[8px] border border-chrome/15">
                <Image src={s.img} alt={s.t} fill loading="lazy" className="img-grade object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
              </div>
              <div>
                <span className="font-display text-[clamp(40px,9vw,64px)] font-black leading-none" style={{ color: accent }}>{s.n}</span>
                <div className="mt-3 font-display text-[clamp(20px,2.4vw,30px)] font-extrabold uppercase leading-tight text-white">{s.t}</div>
                <p className="mt-2.5 max-w-[46ch] font-body text-[15px] leading-relaxed text-chrome">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // ---- Pinned, scroll-driven ----
  return (
    <section ref={ref} className="relative bg-ink" style={{ height: `${steps.length * 100}vh` }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-[clamp(20px,6vw,100px)]">
        <div className="grid w-full items-center gap-[clamp(24px,4vw,64px)] lg:grid-cols-2">
          {/* pinned media */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] border border-chrome/15 bg-carbon">
            {steps.map((s, i) => (
              <div key={s.n} className="absolute inset-0 transition-[opacity,transform] duration-700 ease-out" style={{ opacity: i === active ? 1 : 0, transform: i === active ? "scale(1)" : "scale(1.05)" }}>
                <Image src={s.img} alt={i === active ? s.t : ""} fill priority={i === 0} className="img-grade object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            ))}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(11,11,11,0.5))]" />
          </div>

          {/* steps */}
          <div>
            {Heading}
            <div className="mt-9 flex flex-col">
              {steps.map((s, i) => {
                const on = i === active;
                return (
                  <div
                    key={s.n}
                    className="border-t border-chrome/12 py-5 transition-opacity duration-500 last:border-b"
                    style={{ opacity: on ? 1 : 0.4 }}
                  >
                    <div className="flex items-baseline gap-5">
                      <span className="tnum font-display text-[clamp(28px,3vw,44px)] font-black leading-none transition-colors duration-500" style={{ color: on ? accent : "#5a564f" }}>
                        {s.n}
                      </span>
                      <div>
                        <div className="font-display text-[clamp(19px,2.2vw,28px)] font-extrabold uppercase leading-tight text-white">{s.t}</div>
                        <div className="grid transition-[grid-template-rows,opacity] duration-500 ease-out" style={{ gridTemplateRows: on ? "1fr" : "0fr", opacity: on ? 1 : 0 }}>
                          <p className="overflow-hidden font-body text-[15px] leading-relaxed text-chrome"><span className="block pt-2">{s.d}</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-7 flex gap-2">
              {steps.map((s, i) => (
                <span key={s.n} className="h-[3px] flex-1 rounded-full transition-colors duration-300" style={{ background: i === active ? accent : "rgba(176,176,176,0.2)" }} aria-hidden />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
