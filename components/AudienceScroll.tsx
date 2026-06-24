"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { audiences, PHOTOS } from "@/lib/audiences";

/**
 * Find Your Lane — pinned sticky-scroll (same feel as How It Works). The LEFT
 * media stays put (sticky) while the RIGHT content scrolls through each lane —
 * Drivers → Carriers → Brokers → Shippers → Government — each block with a
 * heading, subheading, description, and an "Explore →" CTA. As a block reaches
 * the viewport centre the left media swaps to that lane's render. Reduced-motion
 * / mobile: the five blocks stack statically (no sticky, no swap). Heading is
 * the page's; this renders the grid.
 */
type Lane = { key: string; label: string; sub: string; desc: string; img: string; accent: string; href: string };

const LANES: Lane[] = [
  { key: "drivers", label: "Drivers", sub: "OneHome & the Outriders Club", desc: "Quality of life, real cost savings, and long-term wealth for the people behind the wheel.", img: PHOTOS.skydeck, accent: audiences.drivers.accent, href: "/drivers" },
  { key: "carriers", label: "Carriers", sub: "FlexSpace terminal access", desc: "Flexible terminal capacity that cuts fixed cost and keeps trucks moving in the markets you run.", img: PHOTOS.fleetFuel, accent: audiences.carriers.accent, href: "/carriers" },
  { key: "brokers", label: "Brokers", sub: "Capacity you can promise", desc: "Reliable relay points and premium terminal access you can promise shippers with confidence.", img: PHOTOS.crossDock, accent: audiences.brokers.accent, href: "/brokers" },
  { key: "shippers", label: "Shippers", sub: "A resilient supply chain", desc: "A national network of Private Terminals that lowers landed freight cost end to end.", img: PHOTOS.buildingAerial, accent: audiences.shippers.accent, href: "/shippers" },
  { key: "government", label: "Government", sub: "Infrastructure with a conscience", desc: "Real-estate-based infrastructure that strengthens supply-chain resilience and gets drivers home safe.", img: PHOTOS.courthouse, accent: audiences.government.accent, href: "/government" },
];
const N = LANES.length;

export default function AudienceScroll() {
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
      // a block is "active" only while its centre sits in the central band
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 }
    );
    blocks.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [isStatic]);

  const a = LANES[active];

  const Block = (lane: Lane, i: number, dim: boolean) => (
    <>
      <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.22em]" style={{ color: lane.accent }}>
        <span className="tnum">{String(i + 1).padStart(3, "0")} / {String(N).padStart(3, "0")}</span>
        <span className="h-px w-7" style={{ background: lane.accent }} aria-hidden />
        {lane.sub}
      </div>
      <h3 className="mt-4 font-display text-[clamp(40px,6vw,92px)] font-black uppercase leading-[0.9] tracking-[-0.025em] text-white">
        {lane.label}
      </h3>
      <p className="mt-5 max-w-[44ch] font-body text-[clamp(17px,1.9vw,22px)] leading-relaxed text-[#dadada]">
        {lane.desc}
      </p>
      <Link
        href={lane.href}
        className="group mt-7 inline-flex items-center gap-2.5 rounded-btn border px-7 py-[15px] font-label text-[11px] uppercase tracking-[0.16em] text-white transition-colors"
        style={{ borderColor: lane.accent }}
      >
        Explore {lane.label}
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" style={{ color: lane.accent }}>→</span>
      </Link>
    </>
  );

  // ---- Static fallback (mobile / reduced-motion): stacked cards ----
  if (isStatic) {
    return (
      <div className="mt-9 grid gap-5">
        {LANES.map((lane, i) => (
          <div key={lane.key} className="overflow-hidden rounded-card border border-chrome/15 bg-panel">
            <div className="relative aspect-[16/9]">
              <Image src={lane.img} alt={lane.label} fill loading="lazy" className="img-grade object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(11,11,11,0.7))]" />
            </div>
            <div className="p-6 sm:p-8">{Block(lane, i, false)}</div>
          </div>
        ))}
      </div>
    );
  }

  // ---- Pinned sticky-scroll ----
  return (
    <div className="mt-9 grid gap-[clamp(24px,4vw,64px)] lg:grid-cols-2">
      {/* sticky media (stays put; swaps to active lane) */}
      <div className="lg:sticky lg:top-[14vh] lg:h-[72vh] lg:self-start">
        <div className="relative h-full min-h-[60vh] overflow-hidden rounded-[8px] border border-chrome/15 bg-carbon">
          {LANES.map((lane, i) => (
            <div key={lane.key} className="absolute inset-0 transition-[opacity,transform] duration-700 ease-out" style={{ opacity: i === active ? 1 : 0, transform: i === active ? "scale(1)" : "scale(1.05)" }}>
              <Image src={lane.img} alt={i === active ? `${lane.label} — LineHaul Station` : ""} fill priority={i === 0} className="img-grade object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          ))}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(11,11,11,0.5))]" />
          <div className="absolute inset-x-5 bottom-5 flex gap-2">
            {LANES.map((lane, i) => (
              <span key={lane.key} className="h-[3px] flex-1 rounded-full transition-colors duration-300" style={{ background: i === active ? a.accent : "rgba(176,176,176,0.25)" }} aria-hidden />
            ))}
          </div>
        </div>
      </div>

      {/* scrolling content — one block per lane */}
      <div>
        {LANES.map((lane, i) => (
          <div
            key={lane.key}
            ref={(el) => { blocks.current[i] = el; }}
            data-index={i}
            className="flex min-h-[82vh] flex-col justify-center transition-opacity duration-500"
            style={{ opacity: i === active ? 1 : 0.35 }}
          >
            {Block(lane, i, i !== active)}
          </div>
        ))}
      </div>
    </div>
  );
}
