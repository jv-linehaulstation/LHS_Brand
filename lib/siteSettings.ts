// Public data layer for editable homepage content (the SiteSettings global).
// Reads from Payload (Local API) when the CMS is configured, and falls back to
// the values currently hardcoded in app/(frontend)/page.tsx, AudienceScroll,
// and lib/site.ts otherwise. Mirrors lib/blog.ts.
//
// To edit this content once Payload is connected, use /admin → Site Settings.
import config from "@payload-config";
import { getPayload } from "payload";

import { site } from "./site";

export type HeroStat = {
  label: string;
  value: number;
  prefix: string;
  suffix: string;
  display: string; // reconstructed string for <CountUp/>, e.g. "$1,800"
};
export type AudienceCard = { title: string; blurb: string; href: string };
export type Contact = {
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  address: string;
};
export type SiteSettings = {
  heroStats: HeroStat[];
  audienceCards: AudienceCard[];
  contact: Contact;
};

function displayFor(value: number, prefix: string, suffix: string): string {
  return `${prefix}${value.toLocaleString("en-US")}${suffix}`;
}

function toHeroStat(s: { label: string; value: number; prefix?: string; suffix?: string }): HeroStat {
  const prefix = s.prefix ?? "";
  const suffix = s.suffix ?? "";
  return { label: s.label, value: s.value, prefix, suffix, display: displayFor(s.value, prefix, suffix) };
}

// ---- Fallback = the current hardcoded homepage values (zero visual change) ----
const FALLBACK: SiteSettings = {
  heroStats: [
    { label: "Spaces · West Memphis", value: 133 },
    { label: "Spaces · future Hubs", value: 600 },
    { label: "Saved per month vs. the old way", value: 1800, prefix: "$" },
    { label: "Hubs planned", value: 50, suffix: "+" },
  ].map(toHeroStat),
  audienceCards: [
    { title: "Drivers", blurb: "OneHome & the Outriders Club", href: "/drivers" },
    { title: "Carriers", blurb: "FlexSpace terminal access", href: "/carriers" },
    { title: "Brokers", blurb: "Capacity you can promise", href: "/brokers" },
    { title: "Shippers", blurb: "A resilient supply chain", href: "/shippers" },
    { title: "Government", blurb: "Infrastructure with a conscience", href: "/government" },
  ],
  contact: {
    phone: site.phone,
    phoneHref: site.phoneHref,
    email: site.email,
    emailHref: site.emailHref,
    address: "West Memphis, AR",
  },
};

function payloadConfigured(): boolean {
  return Boolean(process.env.DATABASE_URI && process.env.PAYLOAD_SECRET);
}

function telHref(phone: string): string {
  const digits = phone.replace(/[^\d]/g, "");
  return digits ? `tel:${digits}` : site.phoneHref;
}

function mapGlobal(g: Record<string, unknown>): SiteSettings {
  const rawStats = Array.isArray(g.heroStats) ? (g.heroStats as Record<string, unknown>[]) : [];
  const heroStats = rawStats
    .filter((s) => s && s.label != null && s.value != null)
    .map((s) =>
      toHeroStat({
        label: String(s.label ?? ""),
        value: Number(s.value ?? 0),
        prefix: s.prefix ? String(s.prefix) : "",
        suffix: s.suffix ? String(s.suffix) : "",
      })
    );

  const rawCards = Array.isArray(g.audienceCards) ? (g.audienceCards as Record<string, unknown>[]) : [];
  const audienceCards = rawCards
    .filter((c) => c && c.title != null && c.href != null)
    .map((c) => ({ title: String(c.title ?? ""), blurb: String(c.blurb ?? ""), href: String(c.href ?? "") }));

  const c = (g.contact as Record<string, unknown> | undefined) ?? {};
  const phone = c.phone ? String(c.phone) : FALLBACK.contact.phone;
  const email = c.email ? String(c.email) : FALLBACK.contact.email;
  const contact: Contact = {
    phone,
    phoneHref: telHref(phone),
    email,
    emailHref: email ? `mailto:${email}` : site.emailHref,
    address: c.address ? String(c.address) : FALLBACK.contact.address,
  };

  // Per-section fallback: an empty array in the CMS keeps the built-in defaults.
  return {
    heroStats: heroStats.length ? heroStats : FALLBACK.heroStats,
    audienceCards: audienceCards.length ? audienceCards : FALLBACK.audienceCards,
    contact,
  };
}

/** The editable homepage settings, with a full fallback to current values. */
export async function getSiteSettings(): Promise<SiteSettings> {
  if (!payloadConfigured()) return FALLBACK;
  try {
    const payload = await getPayload({ config });
    const g = await payload.findGlobal({ slug: "site-settings", depth: 0 });
    return mapGlobal(g as unknown as Record<string, unknown>);
  } catch {
    return FALLBACK;
  }
}
