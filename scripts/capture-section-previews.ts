/**
 * Capture a design screenshot of each /drivers-cms-test section into
 * public/assets/admin-previews/<blockType>.png. These feed the Payload admin's
 * "Add Block" picker thumbnails + the collapsed sections-list row previews
 * (globals/DriversPage.ts). Static design snapshots, NOT live content — re-run
 * after significant layout changes.
 *
 * Assumes the dev server is already running (npm run dev) at PREVIEW_BASE.
 * Uses the system Google Chrome (channel: "chrome"), so no Playwright browser
 * download is needed.
 *
 * Run:  npm run drivers:capture-previews
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const BASE = process.env.PREVIEW_BASE || "http://localhost:3000";
const OUT = path.resolve(process.cwd(), "public/assets/admin-previews");

// blockType -> selector on /drivers-cms-test. hero has no id (first <section>);
// membership uses #membership; the rest use their section id anchors. Testimonials
// (#stories) is intentionally excluded — it's not a block.
const SECTIONS: { type: string; selector: string }[] = [
  { type: "hero", selector: "main section" },
  { type: "welcome", selector: "#welcome" },
  { type: "membershipSteps", selector: "#membership" },
  { type: "joinFree", selector: "#join-free" },
  { type: "core", selector: "#core" },
  { type: "amenities", selector: "#amenities" },
  { type: "value", selector: "#value" },
  { type: "space", selector: "#space" },
  { type: "homeHub", selector: "#everything" },
  { type: "network", selector: "#network" },
  { type: "faq", selector: "#faq" },
];

async function main() {
  await mkdir(OUT, { recursive: true });

  const browser = await chromium.launch({ channel: "chrome" });
  const ctx = await browser.newContext({
    viewport: { width: 1024, height: 900 },
    deviceScaleFactor: 1,
    reducedMotion: "reduce", // skip entrance animations so content is visible
  });
  const page = await ctx.newPage();

  console.log(`Loading ${BASE}/drivers-cms-test (first compile can take ~30s)...`);
  await page.goto(`${BASE}/drivers-cms-test`, { waitUntil: "domcontentloaded", timeout: 120000 });
  // Wait until the last section exists, so the whole page has rendered/hydrated.
  await page.waitForSelector("#faq", { timeout: 120000 });
  await page.waitForTimeout(1500);

  let saved = 0;
  for (const s of SECTIONS) {
    const el = s.type === "hero" ? page.locator("main section").first() : page.locator(s.selector).first();
    try {
      await el.scrollIntoViewIfNeeded({ timeout: 15000 });
      await page.waitForTimeout(700); // let scroll-triggered reveals settle
      await el.screenshot({ path: path.join(OUT, `${s.type}.png`) });
      saved += 1;
      console.log(`  ✓ ${s.type}.png`);
    } catch (err) {
      console.error(`  ✗ ${s.type}: ${(err as Error).message}`);
    }
  }

  await browser.close();
  console.log(`\nSaved ${saved}/${SECTIONS.length} previews to public/assets/admin-previews/`);
  if (saved < SECTIONS.length) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
