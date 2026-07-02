// Public data layer for the Blog. Reads from Payload (Local API) when the CMS
// is configured, and falls back to the bundled seed (lib/blog-seed.json)
// otherwise — so local dev and the production build work before DATABASE_URI /
// PAYLOAD_SECRET are set.
//
// To add or edit posts once Payload is connected, use /admin — not this file.
import config from "@payload-config";
import { getPayload } from "payload";
import seed from "./blog-seed.json";

export type Post = {
  slug: string;
  title: string;
  kicker: string;
  excerpt: string;
  byline: string;
  date: string; // ISO (YYYY-MM-DD)
  dateLabel: string; // derived from date
  readTime: string; // derived from body length
  hero: string; // /assets/blog/*.png
  heroAlt: string;
  seoTitle: string;
  keywords: string[];
  body: string; // Markdown
  published: boolean;
};

// Shape of a row in the bundled seed JSON (snake_case, legacy Supabase export).
type SeedRow = {
  slug: string;
  title: string;
  kicker: string;
  excerpt: string;
  byline: string;
  date: string;
  hero: string;
  hero_alt: string;
  seo_title: string;
  keywords: string[] | null;
  body: string;
  published: boolean;
};

function payloadConfigured(): boolean {
  return Boolean(process.env.DATABASE_URI && process.env.PAYLOAD_SECRET);
}

function formatDateLabel(date: string): string {
  const [y, m, d] = date.split("-").map(Number);
  if (!y || !m || !d) return date;
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function readTimeFor(body: string): string {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

// A Payload `posts` doc → the public Post shape.
function mapDoc(d: Record<string, unknown>): Post {
  const body = String(d.body ?? "");
  const date = String(d.date ?? "").slice(0, 10); // ISO timestamp → YYYY-MM-DD
  return {
    slug: String(d.slug ?? ""),
    title: String(d.title ?? ""),
    kicker: String(d.kicker ?? ""),
    excerpt: String(d.excerpt ?? ""),
    byline: String(d.byline ?? "LineHaul Station"),
    date,
    dateLabel: formatDateLabel(date),
    readTime: readTimeFor(body),
    hero: String(d.hero ?? ""),
    heroAlt: String(d.heroAlt ?? ""),
    seoTitle: String(d.seoTitle ?? d.title ?? ""),
    keywords: Array.isArray(d.keywords) ? (d.keywords as string[]) : [],
    body,
    published: Boolean(d.published),
  };
}

function mapSeed(r: SeedRow): Post {
  return {
    slug: r.slug,
    title: r.title,
    kicker: r.kicker,
    excerpt: r.excerpt,
    byline: r.byline,
    date: r.date,
    dateLabel: formatDateLabel(r.date),
    readTime: readTimeFor(r.body),
    hero: r.hero,
    heroAlt: r.hero_alt,
    seoTitle: r.seo_title,
    keywords: r.keywords ?? [],
    body: r.body,
    published: r.published,
  };
}

function seedPosts(): Post[] {
  return (seed as SeedRow[])
    .map(mapSeed)
    .filter((p) => p.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** All published posts, newest first. */
export async function getAllPosts(): Promise<Post[]> {
  if (!payloadConfigured()) return seedPosts();
  try {
    const payload = await getPayload({ config });
    const { docs } = await payload.find({
      collection: "posts",
      where: { published: { equals: true } },
      sort: "-date",
      limit: 1000,
      depth: 0,
    });
    return docs.map((d) => mapDoc(d as Record<string, unknown>));
  } catch {
    return seedPosts();
  }
}

/** A single published post by slug, or null. */
export async function getPost(slug: string): Promise<Post | null> {
  const fromSeed = () => seedPosts().find((p) => p.slug === slug) ?? null;
  if (!payloadConfigured()) return fromSeed();
  try {
    const payload = await getPayload({ config });
    const { docs } = await payload.find({
      collection: "posts",
      where: { and: [{ slug: { equals: slug } }, { published: { equals: true } }] },
      limit: 1,
      depth: 0,
    });
    if (docs.length === 0) return null;
    return mapDoc(docs[0] as Record<string, unknown>);
  } catch {
    return fromSeed();
  }
}

/** Up to n other published posts, for the "Keep Reading" rail. */
export async function getRelatedPosts(slug: string, n = 2): Promise<Post[]> {
  const all = await getAllPosts();
  return all.filter((p) => p.slug !== slug).slice(0, n);
}

/** Published slugs for generateStaticParams. */
export async function getAllSlugs(): Promise<string[]> {
  const all = await getAllPosts();
  return all.map((p) => p.slug);
}
