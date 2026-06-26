"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function rowFromForm(fd: FormData) {
  const keywords = String(fd.get("keywords") ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const title = String(fd.get("title") ?? "").trim();
  let slug = String(fd.get("slug") ?? "").trim();
  if (!slug) slug = slugify(title);
  let seo = String(fd.get("seoTitle") ?? "").trim();
  if (!seo) seo = `${title} | LineHaul Station`;
  let date = String(fd.get("date") ?? "").trim();
  if (!date) date = new Date().toISOString().slice(0, 10);

  return {
    slug,
    title,
    kicker: String(fd.get("kicker") ?? "").trim(),
    excerpt: String(fd.get("excerpt") ?? "").trim(),
    byline: String(fd.get("byline") ?? "").trim() || "LineHaul Station",
    date,
    hero: String(fd.get("hero") ?? "").trim(),
    hero_alt: String(fd.get("heroAlt") ?? "").trim(),
    seo_title: seo,
    keywords,
    body: String(fd.get("body") ?? ""),
    published: fd.get("published") === "on",
  };
}

export async function savePost(fd: FormData) {
  const id = String(fd.get("id") ?? "").trim();
  const row = rowFromForm(fd);

  if (!row.title || !row.slug) {
    throw new Error("Title (and a slug) are required.");
  }

  const supabase = createClient();
  if (id) {
    const { error } = await supabase.from("posts").update(row).eq("id", id);
    if (error) throw new Error(error.message);
  } else {
    const { error } = await supabase.from("posts").insert(row);
    if (error) throw new Error(error.message);
  }

  revalidatePath("/blog");
  revalidatePath(`/blog/${row.slug}`);
  revalidatePath("/admin");
  redirect("/admin");
}

export async function deletePost(fd: FormData) {
  const id = String(fd.get("id") ?? "").trim();
  if (!id) throw new Error("Missing post id.");

  const supabase = createClient();
  const { error } = await supabase.from("posts").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/blog");
  revalidatePath("/admin");
  redirect("/admin");
}

export async function signOut() {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
