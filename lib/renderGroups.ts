// Category grouping for the facility renders. Server-safe (no "use client") so
// both the client gallery and server components (AudiencePage) can import it.

export type GalleryGroup = { key: string; label: string; shots: string[] };

export const RENDER_GROUPS: GalleryGroup[] = [
  {
    key: "arrival",
    label: "Arrival & Building",
    shots: ["chrome-club-entry", "chrome-club-entry-2", "chrome-club-aerial-view", "entry-drive-welcome", "gate-house-entry-drive", "oblique-site-plan"],
  },
  {
    key: "club",
    label: "The Outriders Club",
    shots: ["chrome-club-lounge-1", "chrome-club-lounge-2", "fitness-studio", "gamer-s-den-1", "gamer-s-den-2", "gamer-s-den-3", "gear-shop", "laundry-center", "vintage-barber-shop", "restrooms"],
  },
  {
    key: "skydeck",
    label: "Sky Deck & Outdoor",
    shots: ["chrome-club-skydeck", "skydeck-entry", "skydeck-fireplace", "chrome-club-patio", "corn-hole-courts", "water-feature"],
  },
  {
    key: "fleet",
    label: "Fleet Services",
    shots: ["fleet-services-fuel", "fleet-services-entry-1", "fleet-services-entry-2", "fleet-services-exit", "cross-dock", "truck-wash-entry", "truck-wash-exit", "parking-lot-restrooms"],
  },
];
