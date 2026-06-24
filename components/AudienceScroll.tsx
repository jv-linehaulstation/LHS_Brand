"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { audiences, PHOTOS } from "@/lib/audiences";

/**
 * Find Your Lane — pinned sticky-scroll (same feel as the relay steps). The LEFT
 * media fills the full height and stays put (sticky) while the RIGHT content
 * scrolls through each lane — Drivers → Carriers → Brokers → Shippers →
 * Government — each block with a heading, subheading, 1–2 paragraphs, and a
 * full-width "Explore →" block button. As a block reaches the viewport centre
 * the left media swaps to that lane's render. Reduced-motion / mobile: the five
 * blocks stack statically (no sticky, no swap).
 */
type Lane = { key: string; label: string; sub: string; desc: string[]; img: string; accent: string; href: string };

const LANES: Lane[] = [
  {
    key: "drivers", label: "Drivers", sub: "OneHome & the Outriders Club", img: PHOTOS.skydeck, accent: audiences.drivers.accent, href: "/drivers",
    desc: [
      "Long-haul shouldn't mean living out of your cab. OneHome gives you a private, resort-quality home base at every Hub — a real bed, a real shower, and a community of pros who get it.",
      "Keep more of what you earn: pay for the nights you're actually there, not 365 days of rent on an apartment you barely see.",
    ],
  },
  {
    key: "carriers", label: "Carriers", sub: "FlexSpace terminal access", img: PHOTOS.fleetFuel, accent: audiences.carriers.accent, href: "/carriers",
    desc: [
      "Terminal real estate is brutal — $15M to build, years to permit. FlexSpace gives you premium, gated terminal capacity by the increment, in the markets you already run.",
      "Guest Pass, Proprietary Membership, or Dedicated Space — scale up or down as your lanes change, with on-site LH Fleet Services at every Hub.",
    ],
  },
  {
    key: "brokers", label: "Brokers", sub: "Capacity you can promise", img: PHOTOS.crossDock, accent: audiences.brokers.accent, href: "/brokers",
    desc: [
      "You're only as good as the capacity behind you. LineHaul Station gives the carriers you trust reliable relay points and premium terminal access across every key market.",
      "Cover more loads with confidence — gated staging, cross-dock, and 24/7 access mean freight keeps moving and promises get kept.",
    ],
  },
  {
    key: "shippers", label: "Shippers", sub: "A resilient supply chain", img: PHOTOS.buildingAerial, accent: audiences.shippers.accent, href: "/shippers",
    desc: [
      "A supply chain shouldn't stall at the yard. A national network of Private Terminals and a 24/7 relay keep your freight moving and your landed cost down.",
      "Secure cross-dock and surveilled capacity at the nation's busiest crossroads — resilience built into every mile.",
    ],
  },
  {
    key: "government", label: "Government", sub: "Infrastructure with a conscience", img: PHOTOS.courthouse, accent: audiences.government.accent, href: "/government",
    desc: [
      "Freight infrastructure that strengthens America. Owned terminals and a national relay take cost out of the supply chain while getting drivers home rested and safe.",
      "Real-estate-based, privately funded, and built to scale — infrastructure with a conscience at the crossroads that matter most.",
    ],
  },
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
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 }
    );
    blocks.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [isStatic]);

  const a = LANES[active];

  const Block = (lane: Lane, i: number) => (
    <>
      <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.22em]" style={{ color: lane.accent }}>
        <span className="tnum">{String(i + 1).padStart(3, "0")} / {String(N).padStart(3, "0")}</span>
        <span className="h-px w-7" style={{ background: lane.accent }} aria-hidden />
        {lane.sub}
      </div>
      <h3 className="mt-4 font-display text-[clamp(40px,6vw,92px)] font-black uppercase leading-[0.9] tracking-[-0.025em] text-white">
        {lane.label}
      </h3>
      <div className="mt-5 max-w-[48ch] space-y-4 font-body text-[clamp(16px,1.7vw,20px)] leading-relaxed text-[#dadada]">
        {lane.desc.map((para, j) => (
          <p key={j}>{para}</p>
        ))}
      </div>
      <Link
        href={lane.href}
        className="group mt-7 flex w-full items-center justify-between gap-4 rounded-btn border border-chrome/25 bg-ink px-7 py-[18px] font-label text-[12px] uppercase tracking-[0.16em] text-white transition-colors hover:border-[var(--ac)]"
        style={{ ["--ac" as string]: lane.accent }}
      >
        Explore {lane.label}
        <span aria-hidden className="text-[18px] transition-transform duration-300 group-hover:translate-x-1" style={{ color: lane.accent }}>→</span>
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
            <div className="p-6 sm:p-8">{Block(lane, i)}</div>
          </div>
        ))}
      </div>
    );
  }

  // ---- Pinned sticky-scroll ----
  return (
    <div className="mt-9 grid gap-[clamp(24px,4vw,64px)] lg:grid-cols-2">
      {/* sticky media — fills the full viewport height; swaps to active lane */}
      <div className="lg:sticky lg:top-0 lg:h-[100svh] lg:self-start lg:py-[6vh]">
        <div className="relative h-full min-h-[60vh] overflow-hidden rounded-[8px] border border-chrome/15 bg-carbon">
          {LANES.map((lane, i) => (
            <div key={lane.key} className="absolute inset-0 transition-[opacity,transform] duration-700 ease-out" style={{ opacity: i === active ? 1 : 0, transform: i === active ? "scale(1)" : "scale(1.05)" }}>
              <Image src={lane.img} alt={i === active ? `${lane.label} — LineHaul Station` : ""} fill priority={i === 0} className="img-grade object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          ))}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_62%,rgba(11,11,11,0.5))]" />
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
            className="flex min-h-[86vh] flex-col justify-center transition-opacity duration-500"
            style={{ opacity: i === active ? 1 : 0.35 }}
          >
            {Block(lane, i)}
          </div>
        ))}
      </div>
    </div>
  );
}
