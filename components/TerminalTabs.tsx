"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PHOTOS } from "@/lib/audiences";

/**
 * "A real terminal — not a parking lot." Left media CHANGES with the active tab
 * (meaningful deck renders, not a generic texture): Structure → the building,
 * Amenities → the Sky Deck, Service → fleet/fuel, Security → the gate house.
 * Crossfade + gentle Ken-Burns drift; slow auto-advance (paused on hover, off
 * under reduced-motion). Tabs are real keyboard-accessible buttons. Renders the
 * media+tabs grid only — the section heading is the page's.
 */
const TABS = [
  { t: "Structure", d: "UHPC-grade construction built to last — owned real estate, not a leased lot.", img: "/assets/building-seq/01.jpg" },
  { t: "Amenities", d: "Sky Deck, lounges, fitness, gear shop, laundry — the Outriders Club a driver is proud of.", img: PHOTOS.skydeck },
  { t: "Service", d: "LH Fleet Services on-site: fuel, truck wash, cross-dock, and bays to keep you rolling.", img: PHOTOS.fleetFuel },
  { t: "Security", d: "Gated, monitored, well-lit. No fighting for a spot at 11pm — your space is waiting.", img: PHOTOS.gateHouse },
];

export default function TerminalTabs() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % TABS.length), 5000);
    return () => window.clearInterval(id);
  }, [paused, active]);

  return (
    <div className="mt-9 grid items-center gap-[clamp(24px,4vw,56px)] lg:grid-cols-[1.1fr_0.9fr]">
      {/* tab-linked media */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] border border-chrome/15 bg-carbon">
        {TABS.map((tab, i) => (
          <div key={tab.t} className="absolute inset-0 transition-opacity duration-700 ease-out" style={{ opacity: i === active ? 1 : 0 }}>
            <Image
              src={tab.img}
              alt={i === active ? `${tab.t} — LineHaul Station` : ""}
              fill
              priority={i === 0}
              className={`img-grade object-cover ${i === active ? "kenburns" : ""}`}
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        ))}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(11,11,11,0.55))]" />
        <div className="absolute bottom-3.5 left-4 rounded-btn bg-ink/55 px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-white backdrop-blur-sm">
          {TABS[active].t}
        </div>
      </div>

      {/* vertical tabs */}
      <div
        className="flex flex-col"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {TABS.map((tab, i) => {
          const on = i === active;
          return (
            <button
              key={tab.t}
              type="button"
              onClick={() => setActive(i)}
              aria-expanded={on}
              className="border-l-2 py-4 pl-5 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuel"
              style={{ borderColor: on ? "#F07820" : "#3a3633" }}
            >
              <span
                className="font-display text-[clamp(18px,2vw,26px)] font-extrabold uppercase tracking-[-0.01em] transition-colors duration-300"
                style={{ color: on ? "#ffffff" : "#6a655e" }}
              >
                {tab.t}
              </span>
              <div
                className="grid transition-[grid-template-rows,opacity] duration-500 ease-out motion-reduce:transition-none"
                style={{ gridTemplateRows: on ? "1fr" : "0fr", opacity: on ? 1 : 0 }}
              >
                <p className="overflow-hidden font-body text-[15px] leading-relaxed text-chrome">
                  <span className="block pt-2.5">{tab.d}</span>
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
