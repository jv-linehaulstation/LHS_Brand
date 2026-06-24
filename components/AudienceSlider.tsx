"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { audiences, PHOTOS } from "@/lib/audiences";

/**
 * Signature moment #2 — Pinned 5-audience slider (black section).
 * Vaulk's 001/005: pins a sticky stage; as you scroll, the image, counter,
 * title, and copy advance across Drivers → Carriers → Brokers → Shippers →
 * Government, each with an "Explore →" link to its page. Under
 * prefers-reduced-motion (or on mobile) it becomes a static stacked list.
 */
type Case = { key: string; title: string; desc: string; img: string; accent: string; href: string };

const CASES: Case[] = [
  { key: "drivers", title: "Drivers", desc: "OneHome & the Outriders Club — quality of life, real cost savings, and long-term wealth for the people behind the wheel.", img: PHOTOS.skydeck, accent: audiences.drivers.accent, href: "/drivers" },
  { key: "carriers", title: "Carriers", desc: "FlexSpace — flexible terminal capacity that cuts fixed cost and keeps trucks moving in the markets you run.", img: PHOTOS.fleetFuel, accent: audiences.carriers.accent, href: "/carriers" },
  { key: "brokers", title: "Brokers", desc: "Reliable relay points and premium capacity you can promise shippers with confidence.", img: PHOTOS.crossDock, accent: audiences.brokers.accent, href: "/brokers" },
  { key: "shippers", title: "Shippers", desc: "A resilient national network of Private Terminals that lowers landed freight cost end to end.", img: PHOTOS.buildingAerial, accent: audiences.shippers.accent, href: "/shippers" },
  { key: "government", title: "Government", desc: "Real-estate-based infrastructure that strengthens supply-chain resilience and gets drivers home safe.", img: PHOTOS.courthouse, accent: audiences.government.accent, href: "/government" },
];
const N = CASES.length;

export default function AudienceSlider() {
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

  // ---- Static fallback (reduced-motion / mobile): stacked list ----
  if (isStatic) {
    return (
      <section className="bg-ink px-5 py-[clamp(64px,9vw,116px)] sm:px-8">
        <div className="mx-auto max-w-site">
          <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.28em] text-fuel">
            <span className="h-px w-7 bg-fuel" aria-hidden /> Find Your Lane
          </div>
          <div className="mt-8 grid gap-3">
            {CASES.map((c, i) => (
              <Link
                key={c.key}
                href={c.href}
                className="lift group grid grid-cols-[auto_1fr_auto] items-center gap-5 rounded-card border border-chrome/15 bg-panel p-4 transition-colors hover:border-[var(--ac)]"
                style={{ ["--ac" as string]: c.accent }}
              >
                <div className="relative h-20 w-28 flex-none overflow-hidden rounded-[4px]">
                  <Image src={c.img} alt={c.title} fill loading="lazy" className="img-grade object-cover" sizes="120px" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[12px]" style={{ color: c.accent }}>{String(i + 1).padStart(3, "0")} / {String(N).padStart(3, "0")}</div>
                  <div className="mt-1 font-display text-[clamp(20px,3vw,30px)] font-black uppercase leading-none text-white">{c.title}</div>
                  <p className="mt-1.5 max-w-[52ch] font-body text-[13px] leading-snug text-chrome">{c.desc}</p>
                </div>
                <span className="font-display text-[22px] transition-transform group-hover:translate-x-1" style={{ color: c.accent }} aria-hidden>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const c = CASES[active];

  // ---- Pinned slider ----
  return (
    <section ref={ref} className="relative bg-ink" style={{ height: `${(N + 1) * 100}vh` }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-5 sm:px-8">
        <div className="mx-auto grid w-full max-w-site items-center gap-[clamp(24px,4vw,60px)] lg:grid-cols-2">
          {/* stage */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] border border-chrome/15">
            {CASES.map((cc, i) => (
              <div
                key={cc.key}
                className="absolute inset-0 transition-[opacity,transform] duration-700 ease-out"
                style={{ opacity: i === active ? 1 : 0, transform: i === active ? "scale(1)" : "scale(1.06)" }}
              >
                <Image src={cc.img} alt={i === active ? `${cc.title} — LineHaul Station` : ""} fill priority={i === 0} className="img-grade object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            ))}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(11,11,11,0.6))]" />
            <div className="absolute inset-x-0 top-0 h-0.5 transition-colors duration-500" style={{ background: `linear-gradient(90deg, ${c.accent}, transparent)` }} />
          </div>

          {/* text */}
          <div>
            <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.28em] text-fuel">
              <span className="h-px w-7 bg-fuel" aria-hidden /> Find Your Lane
            </div>
            <div className="tnum mt-7 font-mono text-[13px] tracking-[0.18em] transition-colors duration-500" style={{ color: c.accent }}>
              {String(active + 1).padStart(3, "0")} / {String(N).padStart(3, "0")}
            </div>
            <h2 className="mt-3 font-display text-[clamp(34px,5vw,72px)] font-black uppercase leading-[0.92] tracking-[-0.02em] text-white">
              {c.title}
            </h2>
            <p className="mt-5 min-h-[5.5em] max-w-[46ch] font-body text-[clamp(16px,1.6vw,20px)] leading-relaxed text-chrome">
              {c.desc}
            </p>
            <Link
              href={c.href}
              className="group mt-6 inline-flex items-center gap-2.5 rounded-btn border px-7 py-[15px] font-label text-[11px] uppercase tracking-[0.16em] text-white transition-colors"
              style={{ borderColor: c.accent }}
            >
              Explore {c.title}
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" style={{ color: c.accent }}>→</span>
            </Link>
            {/* pips */}
            <div className="mt-8 flex gap-2">
              {CASES.map((cc, i) => (
                <span
                  key={cc.key}
                  className="h-[3px] w-9 rounded-full transition-colors duration-300"
                  style={{ background: i === active ? c.accent : "rgba(176,176,176,0.25)" }}
                  aria-hidden
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
