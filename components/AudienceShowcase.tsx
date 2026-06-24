"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { audiences, PHOTOS } from "@/lib/audiences";

/**
 * Find Your Lane (R1.6) — description on the LEFT, image panel on the RIGHT.
 * Click a lane to switch; the right panel cross-fades to that lane's render and
 * a vaulk 001/005 counter advances. Per-audience accent. Renders the grid only;
 * the section chrome (kicker) is the page's. No pin — readable everywhere.
 */
type Lane = { key: string; title: string; desc: string; img: string; accent: string; href: string };

const LANES: Lane[] = [
  { key: "drivers", title: "Drivers", desc: "OneHome & the Outriders Club — quality of life, real cost savings, and long-term wealth for the people behind the wheel.", img: PHOTOS.skydeck, accent: audiences.drivers.accent, href: "/drivers" },
  { key: "carriers", title: "Carriers", desc: "FlexSpace — flexible terminal capacity that cuts fixed cost and keeps trucks moving in the markets you run.", img: PHOTOS.fleetFuel, accent: audiences.carriers.accent, href: "/carriers" },
  { key: "brokers", title: "Brokers", desc: "Reliable relay points and premium capacity you can promise shippers with confidence.", img: PHOTOS.crossDock, accent: audiences.brokers.accent, href: "/brokers" },
  { key: "shippers", title: "Shippers", desc: "A resilient national network of Private Terminals that lowers landed freight cost end to end.", img: PHOTOS.buildingAerial, accent: audiences.shippers.accent, href: "/shippers" },
  { key: "government", title: "Government", desc: "Real-estate-based infrastructure that strengthens supply-chain resilience and gets drivers home safe.", img: PHOTOS.courthouse, accent: audiences.government.accent, href: "/government" },
];
const N = LANES.length;

export default function AudienceShowcase() {
  const [active, setActive] = useState(0);
  const a = LANES[active];

  return (
    <div className="mt-9 grid items-center gap-[clamp(24px,4vw,56px)] lg:grid-cols-2">
      {/* desc left */}
      <div className="flex flex-col">
        {LANES.map((lane, i) => {
          const on = i === active;
          return (
            <button
              key={lane.key}
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              aria-expanded={on}
              className="border-t border-chrome/15 py-4 text-left last:border-b"
            >
              <span
                className="font-display text-[clamp(22px,2.6vw,38px)] font-black uppercase leading-none tracking-[-0.01em] transition-colors duration-300"
                style={{ color: on ? "#ffffff" : "#6a655e" }}
              >
                {lane.title}
              </span>
              <div
                className="grid transition-[grid-template-rows,opacity] duration-500 ease-out motion-reduce:transition-none"
                style={{ gridTemplateRows: on ? "1fr" : "0fr", opacity: on ? 1 : 0 }}
              >
                <div className="overflow-hidden">
                  <p className="max-w-[46ch] pt-2.5 font-body text-[15px] leading-relaxed text-chrome">{lane.desc}</p>
                  <Link
                    href={lane.href}
                    className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-transform hover:translate-x-0.5"
                    style={{ color: lane.accent }}
                  >
                    Explore {lane.title} →
                  </Link>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* image panel right */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] border border-chrome/15">
        {LANES.map((lane, i) => (
          <div
            key={lane.key}
            className="absolute inset-0 transition-[opacity,transform] duration-700 ease-out"
            style={{ opacity: i === active ? 1 : 0, transform: i === active ? "scale(1)" : "scale(1.05)" }}
          >
            <Image src={lane.img} alt={i === active ? `${lane.title} — LineHaul Station` : ""} fill loading="lazy" className="img-grade object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(11,11,11,0.5))]" />
        <div className="tnum absolute left-4 top-4 font-mono text-[12px] tracking-[0.16em] transition-colors duration-500" style={{ color: a.accent }}>
          {String(active + 1).padStart(3, "0")} / {String(N).padStart(3, "0")}
        </div>
        <div className="absolute inset-x-4 bottom-4 flex gap-2">
          {LANES.map((lane, i) => (
            <span key={lane.key} className="h-[3px] flex-1 rounded-full transition-colors duration-300" style={{ background: i === active ? a.accent : "rgba(176,176,176,0.25)" }} aria-hidden />
          ))}
        </div>
      </div>
    </div>
  );
}
