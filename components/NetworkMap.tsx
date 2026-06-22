"use client";

import { useEffect, useRef } from "react";

/**
 * Interactive national Hub map. Leaflet is loaded from CDN *at runtime* inside
 * useEffect — it is never imported at module scope, so it adds ZERO build/SSR
 * risk: if the CDN or tiles are unreachable the map area just stays empty and
 * the rest of the page is unaffected. Dark Carto basemap keeps it on-brand.
 */

type Hub = { name: string; sub: string; lat: number; lng: number; live?: boolean };

const HUBS: Hub[] = [
  { name: "West Memphis, AR", sub: "First Hub · I-40 / I-55 · open now", lat: 35.1465, lng: -90.1845, live: true },
  { name: "Dallas–Fort Worth, TX", sub: "Phase one", lat: 32.9, lng: -97.04 },
  { name: "Atlanta, GA", sub: "Phase one", lat: 33.749, lng: -84.388 },
  { name: "Indianapolis, IN", sub: "Phase one", lat: 39.768, lng: -86.158 },
  { name: "Chicago, IL", sub: "Phase one", lat: 41.85, lng: -87.65 },
  { name: "Carlisle, PA", sub: "Phase one", lat: 40.201, lng: -77.2 },
];

const FUEL = "#F07820";
const STEEL = "#7EC8E3";

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

  useEffect(() => {
    let cancelled = false;
    loadLeaflet()
      .then((L) => {
        if (cancelled || !ref.current || mapRef.current) return;
        const map = L.map(ref.current, {
          center: [38.5, -90],
          zoom: 4,
          minZoom: 3,
          maxZoom: 7,
          scrollWheelZoom: false,
          zoomControl: true,
          attributionControl: true,
        });
        mapRef.current = map;

        L.tileLayer(
          "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
          {
            subdomains: "abcd",
            maxZoom: 19,
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          }
        ).addTo(map);

        const wm = HUBS.find((h) => h.live)!;
        // faint relay lines from West Memphis to each phase-one hub
        HUBS.filter((h) => !h.live).forEach((h) => {
          L.polyline(
            [
              [wm.lat, wm.lng],
              [h.lat, h.lng],
            ],
            { color: STEEL, weight: 1, opacity: 0.35, dashArray: "4 6" }
          ).addTo(map);
        });

        HUBS.forEach((h) => {
          const m = L.circleMarker([h.lat, h.lng], {
            radius: h.live ? 9 : 6,
            color: h.live ? FUEL : STEEL,
            weight: 2,
            fillColor: h.live ? FUEL : "#0B0B0B",
            fillOpacity: h.live ? 0.9 : 1,
          }).addTo(map);
          m.bindTooltip(
            `<strong>${h.name}</strong><br>${h.sub}`,
            { direction: "top", offset: [0, -6], opacity: 0.95 }
          );
          if (h.live) m.bindPopup(`<strong>${h.name}</strong><br>${h.sub}`).openPopup();
        });

        setTimeout(() => map.invalidateSize(), 200);
      })
      .catch(() => {
        /* CDN unreachable — leave the container empty, page unaffected */
      });

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Map of LineHaul Station Hubs: West Memphis open now, with phase-one markets in Dallas–Fort Worth, Atlanta, Indianapolis, Chicago, and Carlisle."
      className="h-[380px] w-full overflow-hidden rounded-card border border-chrome/20 bg-[#0E0E0E] md:h-[500px]"
      style={{ zIndex: 0 }}
    />
  );
}
