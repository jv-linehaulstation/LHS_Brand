// Admin-only reads (all posts, including unpublished). Uses the cookie-bound
// server client, so RLS sees the signed-in admin. Called from admin Server
// Components; the middleware guarantees a session before these run.
import { createClient } from "@/lib/supabase/server";

export type AdminPost = {
  id: string;
  slug: string;
  title: string;
  kicker: string;
  excerpt: string;
  byline: string;
  date: string;
  hero: string;
  heroAlt: string;
  seoTitle: string;
  keywords: string[];
  body: string;
  published: boolean;
  updatedAt: string;
};

type Row = {
  id: string;
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
  updated_at: string;
};

function map(r: Row): AdminPost {
  return {
    id: r.id,
    slug: r.slug,
    title: r.title,
    kicker: r.kicker,
    excerpt: r.excerpt,
    byline: r.byline,
    date: r.date,
    hero: r.hero,
    heroAlt: r.hero_alt,
    seoTitle: r.seo_title,
    keywords: r.keywords ?? [],
    body: r.body,
    published: r.published,
    updatedAt: r.updated_at,
  };
}

export async function getAllPostsAdmin(): Promise<AdminPost[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("date", { ascending: false });
  if (error || !data) return [];
  return (data as Row[]).map(map);
}

export async function getPostById(id: string): Promise<AdminPost | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error || !data) return null;
  return map(data as Row);
}
