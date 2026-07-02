/**
 * Seed / migrate the blog into Payload.
 *
 * Imports the 9 bundled posts (lib/blog-seed.json) into Payload's `posts`
 * collection — upserting by slug, so it's safe to run repeatedly. Optionally
 * creates the first admin user when SEED_ADMIN_EMAIL + SEED_ADMIN_PASSWORD are
 * set (otherwise create it via the /admin "first user" screen).
 *
 * Run:  npm run blog:seed
 * (reads DATABASE_URI + PAYLOAD_SECRET from .env.local)
 */
import { getPayload } from "payload";
import config from "../payload.config";
import seed from "../lib/blog-seed.json";

type SeedRow = {
  slug: string;
  title: string;
  kicker: string;
  excerpt: string;
  byline: string;
  date: string; // YYYY-MM-DD
  hero: string;
  hero_alt: string;
  seo_title: string;
  keywords: string[] | null;
  body: string;
  published: boolean;
};

async function main() {
  if (!process.env.DATABASE_URI || !process.env.PAYLOAD_SECRET) {
    throw new Error(
      "DATABASE_URI and PAYLOAD_SECRET must be set in .env.local before seeding."
    );
  }

  const payload = await getPayload({ config });
  const rows = seed as SeedRow[];

  let created = 0;
  let updated = 0;

  for (const r of rows) {
    const data = {
      slug: r.slug,
      title: r.title,
      kicker: r.kicker,
      excerpt: r.excerpt,
      byline: r.byline,
      date: `${r.date}T00:00:00.000Z`,
      hero: r.hero,
      heroAlt: r.hero_alt,
      seoTitle: r.seo_title,
      keywords: r.keywords ?? [],
      body: r.body,
      published: r.published,
    };

    const existing = await payload.find({
      collection: "posts",
      where: { slug: { equals: r.slug } },
      limit: 1,
      depth: 0,
    });

    if (existing.docs.length > 0) {
      await payload.update({
        collection: "posts",
        id: existing.docs[0].id,
        data,
      });
      updated += 1;
      console.log(`  ~ updated  ${r.slug}`);
    } else {
      await payload.create({ collection: "posts", data });
      created += 1;
      console.log(`  + created  ${r.slug}`);
    }
  }

  console.log(`\nPosts: ${created} created, ${updated} updated.`);

  // Optional first-admin creation.
  const email = process.env.SEED_ADMIN_EMAIL;
  const password = process.env.SEED_ADMIN_PASSWORD;
  if (email && password) {
    const users = await payload.find({ collection: "users", limit: 1 });
    if (users.totalDocs === 0) {
      await payload.create({
        collection: "users",
        data: { email, password, name: "LineHaul Station" },
      });
      console.log(`Admin user created: ${email}`);
    } else {
      console.log("Admin user already exists — skipped.");
    }
  } else {
    console.log(
      "No SEED_ADMIN_* env set — create the first admin at /admin (first-user screen)."
    );
  }

  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
