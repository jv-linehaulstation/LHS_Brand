"use client";

import { useEffect, useRef, useState } from "react";
import BackgroundVideo from "@/components/motion/BackgroundVideo";

/**
 * "A real terminal — not a parking lot." Left: a muted autoplay/loop video that
 * keeps playing. Right: vaulk-style vertical tabs whose description clips open on
 * select. Auto-advances slowly (paused on hover / under reduced-motion). Renders
 * the video+tabs grid only — the section chrome (kicker, headline) is the page's.
 */
const TABS = [
  { t: "Structure", d: "UHPC-grade construction built to last — owned real estate, not a leased lot." },
  { t: "Amenities", d: "Sky Deck, lounges, fitness, gear shop, laundry — the Outriders Club a driver is proud of." },
  { t: "Service", d: "LH Fleet Services on-site: fuel, truck wash, cross-dock, and bays to keep you rolling." },
  { t: "Security", d: "Gated, monitored, well-lit. No fighting for a spot at 11pm — your space is waiting." },
];

export default function TerminalTabs({
  videoSrc = "/assets/outriders/story.mp4",
  poster = "/assets/deck-library/renderings/chrome-club-skydeck.jpg",
}: {
  videoSrc?: string;
  poster?: string;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % TABS.length), 4200);
    return () => window.clearInterval(id);
  }, [paused, active]);

  return (
    <div className="mt-9 grid items-center gap-[clamp(24px,4vw,56px)] lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] border border-chrome/15 bg-carbon">
        <BackgroundVideo src={videoSrc} poster={poster} className="img-grade absolute inset-0 h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(11,11,11,0.45))]" />
      </div>

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
              className="border-l-2 py-4 pl-5 text-left transition-colors duration-300"
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
