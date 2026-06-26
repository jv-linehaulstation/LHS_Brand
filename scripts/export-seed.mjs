// One-off: convert the existing typed-block posts in lib/blog.ts into the
// Markdown-bodied seed (lib/blog-seed.json) used as the Supabase seed source
// and the runtime fallback. Run with: node scripts/export-seed.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// lib/blog.ts is TS; rather than depend on a TS loader we extract the `posts`
// array literal and evaluate just that expression in a sandbox-free Function.
// The array is plain data (no imports/refs), so this is safe and deterministic.
const src = readFileSync(join(root, "lib/blog.ts"), "utf8");
const start = src.indexOf("export const posts");
// skip past the `: Post[] =` type annotation to the real array opener
const eq = src.indexOf("=", start);
const arrStart = src.indexOf("[", eq);
// find the matching closing bracket for the array
let depth = 0,
  end = -1;
for (let i = arrStart; i < src.length; i++) {
  const ch = src[i];
  if (ch === "[") depth++;
  else if (ch === "]") {
    depth--;
    if (depth === 0) {
      end = i;
      break;
    }
  }
}
const arrLiteral = src.slice(arrStart, end + 1);
// eslint-disable-next-line no-new-func
const posts = Function(`"use strict"; return (${arrLiteral});`)();

function blocksToMarkdown(body) {
  return body
    .map((b) => {
      if (b.k === "h2") return `## ${b.t}`;
      if (b.k === "h3") return `### ${b.t}`;
      if (b.k === "ul") return b.items.map((i) => `- ${i}`).join("\n");
      return b.t; // paragraph; inline **bold** / [text](href) is already Markdown
    })
    .join("\n\n");
}

const seed = posts.map((p) => ({
  slug: p.slug,
  title: p.title,
  kicker: p.kicker,
  excerpt: p.excerpt,
  byline: p.byline,
  date: p.date,
  hero: p.hero,
  hero_alt: p.heroAlt,
  seo_title: p.seoTitle,
  keywords: p.keywords,
  body: blocksToMarkdown(p.body),
  published: true,
}));

writeFileSync(
  join(root, "lib/blog-seed.json"),
  JSON.stringify(seed, null, 2) + "\n"
);
console.log(`Wrote lib/blog-seed.json with ${seed.length} posts.`);
