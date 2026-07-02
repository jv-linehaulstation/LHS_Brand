// Public data layer for driver testimonials. Reads from Payload (Local API)
// when the CMS is configured, and falls back to a small illustrative seed
// otherwise — so local dev and the production build work before DATABASE_URI /
// PAYLOAD_SECRET are set. Mirrors lib/blog.ts.
//
// To add or edit testimonials once Payload is connected, use /admin.
import config from "@payload-config";
import { getPayload } from "payload";

import type { Voice } from "@/components/onehome/TestimonialCarousel";

export type Testimonial = Voice;

const initialsFrom = (value: string): string =>
  value
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

// NOTE(JJ): the OneHome program is pre-launch, so there are no real founding-
// member testimonials yet. These slots carry the program promise with a
// "founding member" framing — NOT fabricated named drivers with stock faces.
// Add real driver quotes + photos in /admin before launch.
const SEED: Voice[] = [
  {
    quote: "Stop paying for a home you rarely use. Pay only for the days you are actually there.",
    name: "Founding Member",
    role: "OneHome Driver Program",
    initials: "FM",
    badge: "Illustrative",
  },
  {
    quote: "Choose your Home Hub, then the whole network becomes your home on the road.",
    name: "Charter Driver",
    role: "OneHome Driver Program",
    initials: "CD",
    badge: "Illustrative",
  },
  {
    quote: "Club-level living for drivers, a real step up from the truck-stop status quo.",
    name: "Program Preview",
    role: "Outriders Club",
    initials: "PP",
    badge: "Illustrative",
  },
];

function payloadConfigured(): boolean {
  return Boolean(process.env.DATABASE_URI && process.env.PAYLOAD_SECRET);
}

// A Payload `testimonials` doc (depth 1, so `photo` is the populated Media doc) → Voice.
function mapDoc(d: Record<string, unknown>): Voice {
  const name = String(d.name ?? "");
  const photoDoc = d.photo;
  const photo =
    photoDoc && typeof photoDoc === "object"
      ? String((photoDoc as { url?: string }).url ?? "")
      : "";
  const initials = String(d.initials ?? "") || initialsFrom(name);
  const badge = String(d.badge ?? "");
  return {
    quote: String(d.quote ?? ""),
    name,
    role: String(d.role ?? ""),
    initials,
    badge: badge || undefined,
    photo: photo || undefined,
  };
}

/** All published testimonials, in manual `order` then creation order. */
export async function getTestimonials(): Promise<Voice[]> {
  if (!payloadConfigured()) return SEED;
  try {
    const payload = await getPayload({ config });
    const { docs } = await payload.find({
      collection: "testimonials",
      where: { published: { equals: true } },
      sort: ["order", "createdAt"],
      limit: 100,
      depth: 1, // populate the photo upload so we get its public url
    });
    const mapped = docs.map((d) => mapDoc(d as unknown as Record<string, unknown>));
    return mapped.length ? mapped : SEED;
  } catch {
    return SEED;
  }
}
