/**
 * Seed / migrate the DriversPage global into the new `sections` blocks shape.
 *
 * The global used to store flat tab fields; it now stores a `sections` blocks
 * array (one block per section). This upserts the global with all 11 blocks
 * populated from lib/driversPageShape.ts's SEED, in canonical order, so /admin
 * shows real seeded blocks instead of an empty sections array. Safe to re-run.
 *
 * Image fields (upload relationships to Media) are intentionally LEFT EMPTY —
 * the resolver falls back to the code image paths until real Media is uploaded
 * in /admin. Text/array copy is fully seeded.
 *
 * Run:  npm run drivers:seed-blocks   (reads DATABASE_URI + PAYLOAD_SECRET from .env.local)
 */
import { getPayload } from "payload";
import config from "../payload.config";
import { SEED } from "../lib/driversPageShape";

function buildSections() {
  return [
    {
      blockType: "hero",
      heroVideoUrl: SEED.heroVideoUrl,
      eyebrow: SEED.eyebrow,
      heroPunch: SEED.heroPunch,
      verseLines: SEED.verseLines.map((line) => ({ line })),
      heroBlurb: SEED.heroBlurb,
      heroNote: SEED.heroNote,
      scrollHint: SEED.scrollHint,
    },
    {
      blockType: "welcome",
      // coinImage left empty → resolver falls back to /assets/coin-outriders.png
      storyEyebrow: SEED.storyEyebrow,
      storyHeadline: SEED.storyHeadline,
      storyParas: SEED.storyParas.map((paragraph) => ({ paragraph })),
      webinarBody: SEED.webinarBody,
      webinarVideoUrl: SEED.webinarVideoUrl,
      founderName: SEED.founderName,
      founderTitle: SEED.founderTitle,
      joinHeadline: SEED.joinHeadline,
    },
    {
      blockType: "membershipSteps",
      membershipSteps: SEED.membershipSteps.map((s) => ({ title: s.title, line: s.line })),
    },
    {
      blockType: "joinFree",
      joinFreeHeadline: SEED.joinFreeHeadline,
      joinFreeBody: SEED.joinFreeBody,
      joinFreeBullets: SEED.joinFreeBullets.map((bullet) => ({ bullet })),
    },
    {
      blockType: "core",
      coreKicker: SEED.coreKicker,
      coreHeadline: SEED.coreHeadline,
      coreSubhead: SEED.coreSubhead,
      coreParas: SEED.coreParas.map((paragraph) => ({ paragraph })),
      coreBlurb: SEED.coreBlurb,
    },
    {
      blockType: "amenities",
      amenitiesHeadline: SEED.amenitiesHeadline,
      amenitiesIntro: SEED.amenitiesIntro,
      amenitySlides: SEED.amenitySlides.map((s) => ({ name: s.name, spec: s.spec })),
      amenitiesFootnote: SEED.amenitiesFootnote,
    },
    {
      blockType: "value",
      valueHeadline: SEED.valueHeadline,
      valueSubhead: SEED.valueSubhead,
      valuePrompt: SEED.valuePrompt,
      valuePrompts: SEED.valuePrompts.map((question) => ({ question })),
      valueBlurb: SEED.valueBlurb,
      comparisonRows: SEED.comparisonRows.map((r) => ({ traditional: r.trad, oneHome: r.one })),
    },
    {
      blockType: "space",
      spaceHeadline: SEED.spaceHeadline,
      spaceSteps: SEED.spaceSteps.map((s) => ({ title: s.title, line: s.line })),
    },
    {
      blockType: "homeHub",
      homeHubHeadline: SEED.homeHubHeadline,
      homeHubBlurb: SEED.homeHubBlurb,
      everythingTiles: SEED.everythingTiles.map((t) => ({ group: t.group, label: t.label, line: t.line })),
      fleetDetail: SEED.fleetDetail,
      clubMenu: SEED.clubMenu.map((g) => ({ category: g.category, items: g.items.map((item) => ({ item })) })),
    },
    {
      blockType: "network",
      networkHeadline: SEED.networkHeadline,
      networkSubhead: SEED.networkSubhead,
      networkParas: SEED.networkParas.map((paragraph) => ({ paragraph })),
      networkBlurb: SEED.networkBlurb,
      planningMarkets: SEED.planningMarkets.map((market) => ({ market })),
      hubAddress: SEED.hubAddress,
      hubAddressSub: SEED.hubAddressSub,
      hubBody: SEED.hubBody,
    },
    {
      blockType: "faq",
      faqItems: SEED.faqItems.map((f) => ({ question: f.q, answer: f.a })),
    },
  ];
}

async function main() {
  if (!process.env.DATABASE_URI || !process.env.PAYLOAD_SECRET) {
    throw new Error("DATABASE_URI and PAYLOAD_SECRET must be set in .env.local before seeding.");
  }

  const payload = await getPayload({ config });
  const sections = buildSections();

  await payload.updateGlobal({
    slug: "drivers-page",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: { sections } as any,
  });

  console.log(`Drivers Page: seeded ${sections.length} blocks (${sections.map((s) => s.blockType).join(", ")}).`);
  console.log("Image fields left empty — they fall back to the code image paths until you upload Media in /admin.");
  process.exit(0);
}

try {
  await main();
} catch (err) {
  console.error(err);
  process.exit(1);
}
