// Upserts the bundled posts (lib/blog-seed.json) into Supabase, keyed by slug
// (idempotent — safe to re-run). Uses the service-role key, which bypasses RLS.
//
//   npm run blog:seed   (loads .env.local automatically)
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createClient } from "@supabase/supabase-js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.\n" +
      "Set them in .env.local (see .env.local.example), then re-run."
  );
  process.exit(1);
}

const seed = JSON.parse(readFileSync(join(root, "lib/blog-seed.json"), "utf8"));
const supabase = createClient(url, key, { auth: { persistSession: false } });

const { error } = await supabase
  .from("posts")
  .upsert(seed, { onConflict: "slug" });

if (error) {
  console.error("Seed failed:", error.message);
  process.exit(1);
}
console.log(`Seeded ${seed.length} posts into Supabase.`);
