"use client";

import { useEffect, useRef } from "react";

/**
 * Interactive national Hub map. Leaflet is loaded from CDN *at runtime* inside
 * useEffect — it is never imported at module scope, so it adds ZERO build/SSR
 * risk: if the CDN or tiles are unreachable the map area just stays empty and
 * the rest of the page is unaffected. Dark Carto basemap keeps it on-brand.
 *
 * Three tiers tell the 50+ Hub national vision: live (West Memphis), phase one
 * (5 markets), and planned (the named expansion markets). A reduced-motion-safe
 * "relay" marker travels a transcontinental corridor to show freight moving 24/7.
 */

type Tier = "live" | "phase1" | "planned";
type Hub = { name: string; sub?: string; lat: number; lng: number; tier: Tier };

const FUEL = "#F07820";
const STEEL = "#7EC8E3";
const PLANNED = "#8E9AA6";

const HUBS: Hub[] = [
  // LIVE
  { name: "West Memphis, AR", sub: "First Hub · I-40 / I-55 · open now", lat: 35.1465, lng: -90.1845, tier: "live" },
  // PHASE ONE
  { name: "Dallas–Fort Worth, TX", sub: "Phase one", lat: 32.9, lng: -97.04, tier: "phase1" },
  { name: "Atlanta, GA", sub: "Phase one", lat: 33.749, lng: -84.388, tier: "phase1" },
  { name: "Indianapolis, IN", sub: "Phase one", lat: 39.768, lng: -86.158, tier: "phase1" },
  { name: "Chicago, IL", sub: "Phase one", lat: 41.85, lng: -87.65, tier: "phase1" },
  { name: "Carlisle, PA", sub: "Phase one", lat: 40.201, lng: -77.2, tier: "phase1" },
  // PLANNED — the named national expansion markets
  { name: "San Antonio, TX", lat: 29.42, lng: -98.49, tier: "planned" },
  { name: "Houston, TX", lat: 29.76, lng: -95.37, tier: "planned" },
  { name: "Laredo, TX", lat: 27.51, lng: -99.51, tier: "planned" },
  { name: "El Paso, TX", lat: 31.76, lng: -106.49, tier: "planned" },
  { name: "Amarillo, TX", lat: 35.22, lng: -101.83, tier: "planned" },
  { name: "Oklahoma City, OK", lat: 35.47, lng: -97.52, tier: "planned" },
  { name: "Tulsa, OK", lat: 36.15, lng: -95.99, tier: "planned" },
  { name: "Little Rock, AR", lat: 34.74, lng: -92.29, tier: "planned" },
  { name: "Kansas City, MO", lat: 39.1, lng: -94.58, tier: "planned" },
  { name: "St. Louis, MO", lat: 38.63, lng: -90.2, tier: "planned" },
  { name: "Wichita, KS", lat: 37.69, lng: -97.34, tier: "planned" },
  { name: "Omaha, NE", lat: 41.26, lng: -95.93, tier: "planned" },
  { name: "Des Moines, IA", lat: 41.59, lng: -93.62, tier: "planned" },
  { name: "Minneapolis, MN", lat: 44.98, lng: -93.27, tier: "planned" },
  { name: "Milwaukee, WI", lat: 43.04, lng: -87.91, tier: "planned" },
  { name: "Detroit, MI", lat: 42.33, lng: -83.05, tier: "planned" },
  { name: "Cleveland, OH", lat: 41.5, lng: -81.69, tier: "planned" },
  { name: "Columbus, OH", lat: 39.96, lng: -82.99, tier: "planned" },
  { name: "Cincinnati, OH", lat: 39.1, lng: -84.51, tier: "planned" },
  { name: "Louisville, KY", lat: 38.25, lng: -85.76, tier: "planned" },
  { name: "Nashville, TN", lat: 36.16, lng: -86.78, tier: "planned" },
  { name: "Knoxville, TN", lat: 35.96, lng: -83.92, tier: "planned" },
  { name: "Birmingham, AL", lat: 33.52, lng: -86.81, tier: "planned" },
  { name: "Mobile, AL", lat: 30.69, lng: -88.04, tier: "planned" },
  { name: "Jackson, MS", lat: 32.3, lng: -90.18, tier: "planned" },
  { name: "Pittsburgh, PA", lat: 40.44, lng: -79.996, tier: "planned" },
  { name: "Buffalo, NY", lat: 42.89, lng: -78.88, tier: "planned" },
  { name: "Newark, NJ", lat: 40.74, lng: -74.17, tier: "planned" },
  { name: "Baltimore, MD", lat: 39.29, lng: -76.61, tier: "planned" },
  { name: "Richmond, VA", lat: 37.54, lng: -77.44, tier: "planned" },
  { name: "Raleigh, NC", lat: 35.78, lng: -78.64, tier: "planned" },
  { name: "Charlotte, NC", lat: 35.23, lng: -80.84, tier: "planned" },
  { name: "Wilmington, NC", lat: 34.23, lng: -77.94, tier: "planned" },
  { name: "Savannah, GA", lat: 32.08, lng: -81.09, tier: "planned" },
  { name: "Jacksonville, FL", lat: 30.33, lng: -81.66, tier: "planned" },
  { name: "Orlando, FL", lat: 28.54, lng: -81.38, tier: "planned" },
  { name: "Tampa, FL", lat: 27.95, lng: -82.46, tier: "planned" },
  { name: "Miami, FL", lat: 25.76, lng: -80.19, tier: "planned" },
  { name: "Denver, CO", lat: 39.74, lng: -104.99, tier: "planned" },
  { name: "Albuquerque, NM", lat: 35.08, lng: -106.65, tier: "planned" },
  { name: "Phoenix, AZ", lat: 33.45, lng: -112.07, tier: "planned" },
  { name: "Las Vegas, NV", lat: 36.17, lng: -115.14, tier: "planned" },
  { name: "Salt Lake City, UT", lat: 40.76, lng: -111.89, tier: "planned" },
  { name: "Los Angeles, CA", lat: 34.05, lng: -118.24, tier: "planned" },
  { name: "Ontario, CA", lat: 34.06, lng: -117.65, tier: "planned" },
  { name: "Sacramento, CA", lat: 38.58, lng: -121.49, tier: "planned" },
  { name: "Portland, OR", lat: 45.52, lng: -122.68, tier: "planned" },
  { name: "Seattle, WA", lat: 47.61, lng: -122.33, tier: "planned" },
];

// Transcontinental corridor the relay marker travels (a southern lane through the live Hub).
const CORRIDOR: [number, number][] = [
  [34.05, -118.24], // Los Angeles
  [33.45, -112.07], // Phoenix
  [31.76, -106.49], // El Paso
  [32.9, -97.04], // Dallas–Fort Worth
  [35.1465, -90.1845], // West Memphis (live)
  [36.16, -86.78], // Nashville
  [35.23, -80.84], // Charlotte
  [37.54, -77.44], // Richmond
  [40.201, -77.2], // Carlisle
];

let loader: Promise<any> | null = null;
function loadLeaflet(): Promise<any> {
  if (typeof window === "undefined") return Promise.reject();
  if ((window as any).L) return Promise.resolve((window as any).L);
  if (loader) return loader;
  loader = new Promise((resolve, reject) => {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(css);
    const s = document.createElement("script");
    s.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    s.async = true;
    s.onload = () => resolve((window as any).L);
    s.onerror = reject;
    document.body.appendChild(s);
  });
  return loader;
}

export default function NetworkMap() {
  const ref = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<any>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let cancelled = false;
    loadLeaflet()
      .then((L) => {
        if (cancelled || !ref.current || mapRef.current) return;
        const map = L.map(ref.current, {
          center: [38.5, -95],
          zoom: 4,
          minZoom: 3,
          maxZoom: 7,
          scrollWheelZoom: false,
          zoomControl: true,
          attributionControl: true,
        });
        mapRef.current = map;

        L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
          subdomains: "abcd",
          maxZoom: 19,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }).addTo(map);

        const wm = HUBS.find((h) => h.tier === "live")!;
        // faint relay lines from West Memphis to each phase-one hub
        HUBS.filter((h) => h.tier === "phase1").forEach((h) => {
          L.polyline(
            [
              [wm.lat, wm.lng],
              [h.lat, h.lng],
            ],
            { color: STEEL, weight: 1, opacity: 0.35, dashArray: "4 6" }
          ).addTo(map);
        });

        // markers — drawn planned → phase1 → live so the live anchor sits on top
        const order: Tier[] = ["planned", "phase1", "live"];
        order.forEach((tier) => {
          HUBS.filter((h) => h.tier === tier).forEach((h) => {
            const color = tier === "live" ? FUEL : tier === "phase1" ? STEEL : PLANNED;
            const m = L.circleMarker([h.lat, h.lng], {
              radius: tier === "live" ? 9 : tier === "phase1" ? 6 : 4,
              color,
              weight: tier === "planned" ? 1.5 : 2,
              fillColor: tier === "live" ? FUEL : tier === "phase1" ? "#0B0B0B" : PLANNED,
              fillOpacity: tier === "live" ? 0.9 : tier === "phase1" ? 1 : 0.25,
            }).addTo(map);
            const label =
              h.sub ?? (tier === "planned" ? "Planned expansion" : "Phase one");
            m.bindTooltip(`<strong>${h.name}</strong><br>${label}`, {
              direction: "top",
              offset: [0, -6],
              opacity: 0.95,
            });
            if (tier === "live") m.bindPopup(`<strong>${h.name}</strong><br>${h.sub}`).openPopup();
          });
        });

        // STRETCH — a "relay" marker travelling the corridor, reduced-motion-safe.
        const reduce =
          typeof window !== "undefined" &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!reduce) {
          // draw the corridor faintly, then run a glowing dot along it
          L.polyline(CORRIDOR, { color: FUEL, weight: 1, opacity: 0.18 }).addTo(map);
          const relay = L.circleMarker(CORRIDOR[0], {
            radius: 5,
            color: "#ffffff",
            weight: 1.5,
            fillColor: FUEL,
            fillOpacity: 1,
          }).addTo(map);

          // cumulative segment lengths for constant-speed interpolation
          const segs = CORRIDOR.slice(1).map((p, i) => {
            const a = CORRIDOR[i];
            return Math.hypot(p[0] - a[0], p[1] - a[1]);
          });
          const total = segs.reduce((s, d) => s + d, 0);
          const DURATION = 17000; // ms for one coast-to-coast pass
          let startT = 0;
          const frame = (t: number) => {
            if (!startT) startT = t;
            const prog = ((t - startT) % DURATION) / DURATION; // 0..1 loop
            let want = prog * total;
            let i = 0;
            while (i < segs.length && want > segs[i]) {
              want -= segs[i];
              i++;
            }
            const a = CORRIDOR[Math.min(i, CORRIDOR.length - 1)];
            const b = CORRIDOR[Math.min(i + 1, CORRIDOR.length - 1)];
            const f = segs[i] ? want / segs[i] : 0;
            relay.setLatLng([a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f]);
            rafRef.current = requestAnimationFrame(frame);
          };
          rafRef.current = requestAnimationFrame(frame);
        }

        setTimeout(() => map.invalidateSize(), 200);
      })
      .catch(() => {
        /* CDN unreachable — leave the container empty, page unaffected */
      });

    return () => {
      cancelled = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={ref}
        role="img"
        aria-label="Map of the LineHaul Station national Hub network: West Memphis open now, five phase-one markets, and 45+ planned expansion markets coast to coast."
        className="h-[380px] w-full overflow-hidden rounded-card border border-chrome/20 bg-[#0E0E0E] md:h-[500px]"
        style={{ zIndex: 0 }}
      />
      {/* legend */}
      <div className="pointer-events-none absolute bottom-3 left-3 z-[500] flex flex-col gap-1.5 rounded-card border border-chrome/20 bg-ink/80 px-3 py-2.5 font-mono text-[13px] text-chrome backdrop-blur-sm">
        <span className="flex items-center gap-2">
          <i className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: FUEL }} /> Open now
        </span>
        <span className="flex items-center gap-2">
          <i className="inline-block h-2.5 w-2.5 rounded-full border" style={{ borderColor: STEEL, background: "#0B0B0B" }} /> Phase one
        </span>
        <span className="flex items-center gap-2">
          <i className="inline-block h-2.5 w-2.5 rounded-full border" style={{ borderColor: PLANNED, background: "rgba(142,154,166,0.25)" }} /> Planned
        </span>
      </div>
    </div>
  );
}
