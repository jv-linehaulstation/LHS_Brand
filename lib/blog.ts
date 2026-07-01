// Public data layer for the Blog. Reads from Supabase when configured, and
// falls back to the bundled seed (lib/blog-seed.json) otherwise — so local
// dev and the production build work before any keys are set. Admin reads and
// writes live in app/admin/actions.ts (they require a signed-in session).
//
// To add or edit posts once Supabase is connected, use /admin — not this file.
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
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

// Shape of a row in the Supabase `posts` table (and the seed JSON).
type Row = {
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

function hasEnv(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

// A cookie-free anon client — safe in Server Components and at build time
// (generateStaticParams). RLS limits anon reads to published posts.
function anon() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth: { persistSession: false } }
  );
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

function mapRow(r: Row): Post {
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
  return (seed as Row[])
    .map(mapRow)
    .filter((p) => p.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** All published posts, newest first. */
export async function getAllPosts(): Promise<Post[]> {
  if (!hasEnv()) return seedPosts();
  try {
    const { data, error } = await anon()
      .from("posts")
      .select("*")
      .eq("published", true)
      .order("date", { ascending: false });
    if (error || !data) return seedPosts();
    return (data as Row[]).map(mapRow);
  } catch {
    return seedPosts();
  }
}

/** A single published post by slug, or null. */
export async function getPost(slug: string): Promise<Post | null> {
  const fromSeed = () => seedPosts().find((p) => p.slug === slug) ?? null;
  if (!hasEnv()) return fromSeed();
  try {
    const { data, error } = await anon()
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle();
    // An infra error (e.g. the posts table isn't created/seeded yet) falls back
    // to the seed — matching getAllPosts — so configuring Supabase before the
    // schema exists doesn't 404 the bundled articles. A clean miss (no error,
    // no row) is a genuine 404.
    if (error) return fromSeed();
    if (!data) return null;
    return mapRow(data as Row);
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
