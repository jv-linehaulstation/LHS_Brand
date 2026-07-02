// Public data layer for the editable /drivers page (the DriversPage global).
// Reads from Payload (Local API) when the CMS is configured, and falls back to
// the CURRENT hardcoded copy otherwise — sourced verbatim from lib/onehome.ts
// (ONEHOME) + lib/audiences.ts (audiences.drivers) and the section consts that
// live inside components/OneHomePage.tsx. Mirrors lib/testimonials.ts /
// lib/siteSettings.ts. Only components/OneHomePageCmsTest.tsx reads this.
import config from "@payload-config";
import { getPayload } from "payload";

import { audiences, PHOTOS } from "./audiences";
import { ONEHOME } from "./onehome";

// ---- resolved content shape (images are already-resolved url strings) --------
export type StepImg = { title: string; line: string; img: string };
export type AmenitySlide = { src: string; name: string; spec: string };
export type EverythingTile = { group: "Home Hub" | "Fleet Services"; label: string; line: string; img: string };
export type ClubMenuGroup = { category: string; items: string[] };
export type ComparisonRow = { trad: string; one: string };
export type Faq = { q: string; a: string };

export type DriversPageContent = {
  // 1 Hero
  heroVideoUrl: string;
  eyebrow: string;
  heroPunch: string;
  verseLines: string[];
  heroBlurb: string;
  heroNote: string;
  scrollHint: string;
  // 2 Welcome / Story
  coinImage: string;
  storyEyebrow: string;
  storyHeadline: string;
  storyParas: string[];
  webinarBody: string;
  webinarVideoUrl: string;
  founderName: string;
  founderTitle: string;
  joinHeadline: string; // two-tone "A / B"
  // 3 Membership steps
  membershipSteps: StepImg[];
  // 4 Join Free band
  joinFreeHeadline: string; // two-tone "A / B"
  joinFreeBody: string;
  joinFreeBullets: string[];
  // 5 Core / Math
  coreKicker: string;
  coreHeadline: string; // two-tone "A / B"
  coreSubhead: string;
  coreParas: string[];
  coreBlurb: string;
  // 6 Amenities
  amenitiesHeadline: string;
  amenitiesIntro: string;
  amenitySlides: AmenitySlide[];
  amenitiesFootnote: string;
  // 7 Value comparison
  valueHeadline: string;
  valueSubhead: string;
  valuePrompt: string;
  valuePrompts: string[];
  valueBlurb: string;
  comparisonRows: ComparisonRow[];
  // 8 Space
  spaceHeadline: string; // two-tone "A / B"
  spaceSteps: StepImg[];
  // 9 Everything / Home Hub
  homeHubHeadline: string;
  homeHubBlurb: string;
  everythingTiles: EverythingTile[];
  fleetDetail: string;
  clubMenu: ClubMenuGroup[];
  // 10 Network
  networkHeadline: string;
  networkSubhead: string;
  networkParas: string[];
  networkBlurb: string;
  planningMarkets: string[];
  hubAddress: string;
  hubAddressSub: string;
  hubBody: string;
  // 11 FAQ
  faqItems: Faq[];
};

const A = audiences.drivers;
const O = A.outriders!;

// ---- SEED = the exact copy the live page renders today -----------------------
// Two-tone headlines carry a "/" so OneHomePageCmsTest renders them accent-split,
// matching the hardcoded spans in the live component.
const SEED: DriversPageContent = {
  // 1 Hero
  heroVideoUrl:
    "https://storage.googleapis.com/msgsndr/vFbdhIphhRpcrSlf4VJF/media/69554d56cb5b716ba310c3dd.mp4",
  eyebrow: A.eyebrow,
  heroPunch: A.heroPunch,
  verseLines: ONEHOME.hero.verse,
  heroBlurb: ONEHOME.hero.blurb,
  heroNote: A.heroNote,
  scrollHint: A.scrollHint,
  // 2 Welcome / Story
  coinImage: "/assets/coin-outriders.png",
  storyEyebrow: O.story.eyebrow,
  storyHeadline: O.story.headline,
  storyParas: O.story.paras.slice(0, 3),
  webinarBody: O.webinar.body,
  webinarVideoUrl: O.webinar.video,
  founderName: "Jeffrey J. Swenson",
  founderTitle: "Founder & CEO",
  joinHeadline: O.join.headline, // "Nothing To Lose / Everything To Gain"
  // 3 Membership steps (from OneHomePage.tsx MEMBERSHIP)
  membershipSteps: [
    { title: "Free Membership", line: "Always 100% free — agree to the Code of Conduct and you're in.", img: "/assets/steps/step-1.png" },
    { title: "Create Your Profile", line: "Unlock member features and career-changing information.", img: "/assets/steps/step-2.png" },
    { title: "Get Others Excited!", line: "Three ways to get Space — earn it, request it, or purchase it.", img: "/assets/steps/step-3.png" },
  ],
  // 4 Join Free band (from OneHomePage.tsx hardcoded copy)
  joinFreeHeadline: "Claim Your Free / Driver Membership.",
  joinFreeBody:
    "The Outriders Club driver membership is 100% free — agree to the Code of Conduct and you're in. Full club access and founding-member OneHome pricing, at every Hub.",
  joinFreeBullets: [
    "Always free — no cost, no catch.",
    "Access every Hub across the network.",
    "Lock in founding-member OneHome pricing.",
  ],
  // 5 Core / Math
  coreKicker: ONEHOME.core.kicker,
  coreHeadline: "Here's A New & / Better Option.",
  coreSubhead: ONEHOME.core.subhead,
  coreParas: ONEHOME.core.paras,
  coreBlurb: ONEHOME.core.blurb,
  // 6 Amenities (from OneHomePage.tsx AMENITY_SLIDES)
  amenitiesHeadline: ONEHOME.amenities.headline,
  amenitiesIntro: ONEHOME.amenities.intro,
  amenitySlides: [
    { src: PHOTOS.clubDining, name: "Member's Grill", spec: "great food • entertainment • relax" },
    { src: PHOTOS.skydeck, name: "Sky Deck", spec: "outdoor firepits • water features • star gazing" },
    { src: PHOTOS.gamerDen1, name: "Digital Den", spec: "gamer's center • billiards • trap & skeet" },
    { src: PHOTOS.fitness, name: "Fitness Studio", spec: "cardio • weights • showers • lockers" },
    { src: PHOTOS.laundry, name: "Laundry & More", spec: "washers • dryers • daily essentials" },
    { src: PHOTOS.gearShop, name: "Gear Shop", spec: "logo apparel • accessories • sundries" },
    { src: PHOTOS.waterFeature, name: "Resort Pool & Spa", spec: "outdoor pool • hot tubs • sun & fun" },
    { src: PHOTOS.clubPatio, name: "Camp K9", spec: "dog park • relief stations • driver-friendly" },
  ],
  amenitiesFootnote: A.amenities!.footnote,
  // 7 Value comparison
  valueHeadline: ONEHOME.value.headline,
  valueSubhead: ONEHOME.value.subhead,
  valuePrompt: ONEHOME.value.prompt,
  valuePrompts: ONEHOME.value.prompts,
  valueBlurb: ONEHOME.value.blurb,
  comparisonRows: ONEHOME.value.table.map((r) => ({ trad: r.trad, one: r.one })),
  // 8 Space (from OneHomePage.tsx SPACE)
  spaceHeadline: "Three Ways To / Get Space.",
  spaceSteps: [
    { title: "Earn Your Space", line: "Sponsor ten great drivers → a lifetime of free Space.", img: "/assets/building-seq/05.jpg" },
    { title: "Request Your Space", line: "Use The LineHaul List to find a carrier or fleet that backs you.", img: "/assets/building-seq/02.jpg" },
    { title: "Purchase Your Space", line: "Special pricing for anyone with a steering wheel in their hand.", img: "/assets/building-seq/07.jpg" },
  ],
  // 9 Everything / Home Hub (from OneHomePage.tsx EVERYTHING_TILES / FLEET_DETAIL / CLUB_MENU)
  homeHubHeadline: ONEHOME.homehub.headline,
  homeHubBlurb: ONEHOME.homehub.blurb,
  everythingTiles: [
    { group: "Home Hub", label: "Mail Services", line: "A real mailing address on the road.", img: PHOTOS.clubShop },
    { group: "Home Hub", label: "Personal Vehicle", line: "Secure covered parking for your car.", img: PHOTOS.gateHouse },
    { group: "Home Hub", label: "Storage Lockers", line: "Private storage for your belongings.", img: PHOTOS.laundry },
    { group: "Fleet Services", label: "Repairs", line: "On-site repair to get you rolling.", img: PHOTOS.fleetEntry1 },
    { group: "Fleet Services", label: "Maintenance", line: "Preventive service on your schedule.", img: PHOTOS.fleetExit },
    { group: "Fleet Services", label: "Inspections", line: "DOT-ready, compliant, and quick.", img: PHOTOS.fleetEntry2 },
    { group: "Fleet Services", label: "Truck Wash", line: "Keep the rig sharp between hauls.", img: PHOTOS.truckWashEntry },
    { group: "Fleet Services", label: "Cross Dock", line: "Transload and stage freight on site.", img: PHOTOS.crossDock },
  ],
  fleetDetail:
    "Tire Pressure Management · Pre & Post-Trip Inspection · DOT Annual Inspection · Tractor/Trailer Service · Routine PM Repairs",
  clubMenu: [
    { category: "Food & Drink", items: ["Member's Grill & Bar", "Coffee & Juice Bar", "Grab-and-Go Market", "Snacks & Provisions"] },
    { category: "Entertainment", items: ["Digital Den & Gaming", "Billiards & Game Tables", "Trap & Skeet", "Sky Deck & Firepits"] },
    { category: "Amenities", items: ["Fitness Studio", "Resort Pool & Spa", "Sauna & Wellness", "Barbershop", "Laundry & More", "Gear Shop", "Conference Center", "Camp K9"] },
  ],
  // 10 Network
  networkHeadline: ONEHOME.network.headline,
  networkSubhead: ONEHOME.network.subhead,
  networkParas: ONEHOME.network.paras,
  networkBlurb: ONEHOME.network.blurb,
  planningMarkets: ONEHOME.network.markets,
  hubAddress: A.memphis.address,
  hubAddressSub: A.memphis.addressSub,
  hubBody: A.memphis.body,
  // 11 FAQ (from OneHomePage.tsx FAQ_ITEMS)
  faqItems: [
    { q: "How does “pay only for the days you use” work?", a: "You choose how many days a year you actually need a Home Hub and pay only for those — not 365 days of rent on a place you’re rarely in. Start around 60 days and grow your membership whenever you’re ready." },
    { q: "Is the driver membership really free?", a: "Yes. The Outriders Club driver membership is 100% free — agree to the Code of Conduct and you’re in. OneHome (your paid Home Hub access) is separate and priced by the days you use, with no mortgage, lease, or year-round rent." },
    { q: "Where are locations, and when does West Memphis open?", a: "The first Home Hub is open now in West Memphis, AR — one block off the I-40 / I-55 interchange, the busiest freight crossroads in America. More markets are in planning across the country, and your access grows as the network grows." },
    { q: "How much could I actually save vs. my apartment?", a: "Many drivers spend $2,000–$2,500 a month on a home they barely use. Switching to a 60-day OneHome membership can save over $1,200 every month — $15,000+ a year you can keep or invest." },
    { q: "Can I store my vehicle and get mail there?", a: "Yes. Your Home Hub anchors your life on the road: a real mailing address, secure covered parking for your personal vehicle, and private storage for your belongings." },
  ],
};

function payloadConfigured(): boolean {
  return Boolean(process.env.DATABASE_URI && process.env.PAYLOAD_SECRET);
}

// ---- helpers to read a Payload doc with per-field fallback to SEED -----------
type Dict = Record<string, unknown>;

function str(v: unknown): string {
  return v == null ? "" : String(v);
}
function pickStr(v: unknown, fallback: string): string {
  const s = str(v).trim();
  return s ? str(v) : fallback;
}
// A Payload upload field (depth 1) → its public url, else the seed path.
function uploadUrl(v: unknown, fallback: string): string {
  if (v && typeof v === "object" && "url" in (v as Dict)) {
    const u = str((v as Dict).url);
    if (u) return u;
  }
  return fallback;
}
function arr(v: unknown): Dict[] {
  return Array.isArray(v) ? (v as Dict[]) : [];
}
// Map a CMS array to strings via `f`; empty CMS array → seed.
function pickArr<T>(v: unknown, f: (row: Dict, i: number) => T, fallback: T[]): T[] {
  const rows = arr(v);
  return rows.length ? rows.map(f) : fallback;
}

function mapGlobal(g: Dict): DriversPageContent {
  return {
    // 1 Hero
    heroVideoUrl: pickStr(g.heroVideoUrl, SEED.heroVideoUrl),
    eyebrow: pickStr(g.eyebrow, SEED.eyebrow),
    heroPunch: pickStr(g.heroPunch, SEED.heroPunch),
    verseLines: pickArr(g.verseLines, (r) => str(r.line), SEED.verseLines),
    heroBlurb: pickStr(g.heroBlurb, SEED.heroBlurb),
    heroNote: pickStr(g.heroNote, SEED.heroNote),
    scrollHint: pickStr(g.scrollHint, SEED.scrollHint),
    // 2 Welcome / Story
    coinImage: uploadUrl(g.coinImage, SEED.coinImage),
    storyEyebrow: pickStr(g.storyEyebrow, SEED.storyEyebrow),
    storyHeadline: pickStr(g.storyHeadline, SEED.storyHeadline),
    storyParas: pickArr(g.storyParas, (r) => str(r.paragraph), SEED.storyParas),
    webinarBody: pickStr(g.webinarBody, SEED.webinarBody),
    webinarVideoUrl: pickStr(g.webinarVideoUrl, SEED.webinarVideoUrl),
    founderName: pickStr(g.founderName, SEED.founderName),
    founderTitle: pickStr(g.founderTitle, SEED.founderTitle),
    joinHeadline: pickStr(g.joinHeadline, SEED.joinHeadline),
    // 3 Membership steps
    membershipSteps: pickArr(
      g.membershipSteps,
      (r, i) => ({ title: str(r.title), line: str(r.line), img: uploadUrl(r.image, SEED.membershipSteps[i]?.img ?? "") }),
      SEED.membershipSteps
    ),
    // 4 Join Free
    joinFreeHeadline: pickStr(g.joinFreeHeadline, SEED.joinFreeHeadline),
    joinFreeBody: pickStr(g.joinFreeBody, SEED.joinFreeBody),
    joinFreeBullets: pickArr(g.joinFreeBullets, (r) => str(r.bullet), SEED.joinFreeBullets),
    // 5 Core / Math
    coreKicker: pickStr(g.coreKicker, SEED.coreKicker),
    coreHeadline: pickStr(g.coreHeadline, SEED.coreHeadline),
    coreSubhead: pickStr(g.coreSubhead, SEED.coreSubhead),
    coreParas: pickArr(g.coreParas, (r) => str(r.paragraph), SEED.coreParas),
    coreBlurb: pickStr(g.coreBlurb, SEED.coreBlurb),
    // 6 Amenities
    amenitiesHeadline: pickStr(g.amenitiesHeadline, SEED.amenitiesHeadline),
    amenitiesIntro: pickStr(g.amenitiesIntro, SEED.amenitiesIntro),
    amenitySlides: pickArr(
      g.amenitySlides,
      (r, i) => ({ src: uploadUrl(r.image, SEED.amenitySlides[i]?.src ?? ""), name: str(r.name), spec: str(r.spec) }),
      SEED.amenitySlides
    ),
    amenitiesFootnote: pickStr(g.amenitiesFootnote, SEED.amenitiesFootnote),
    // 7 Value
    valueHeadline: pickStr(g.valueHeadline, SEED.valueHeadline),
    valueSubhead: pickStr(g.valueSubhead, SEED.valueSubhead),
    valuePrompt: pickStr(g.valuePrompt, SEED.valuePrompt),
    valuePrompts: pickArr(g.valuePrompts, (r) => str(r.question), SEED.valuePrompts),
    valueBlurb: pickStr(g.valueBlurb, SEED.valueBlurb),
    comparisonRows: pickArr(g.comparisonRows, (r) => ({ trad: str(r.traditional), one: str(r.oneHome) }), SEED.comparisonRows),
    // 8 Space
    spaceHeadline: pickStr(g.spaceHeadline, SEED.spaceHeadline),
    spaceSteps: pickArr(
      g.spaceSteps,
      (r, i) => ({ title: str(r.title), line: str(r.line), img: uploadUrl(r.image, SEED.spaceSteps[i]?.img ?? "") }),
      SEED.spaceSteps
    ),
    // 9 Everything / Home Hub
    homeHubHeadline: pickStr(g.homeHubHeadline, SEED.homeHubHeadline),
    homeHubBlurb: pickStr(g.homeHubBlurb, SEED.homeHubBlurb),
    everythingTiles: pickArr(
      g.everythingTiles,
      (r, i) => ({
        group: (str(r.group) === "Fleet Services" ? "Fleet Services" : "Home Hub") as EverythingTile["group"],
        label: str(r.label),
        line: str(r.line),
        img: uploadUrl(r.image, SEED.everythingTiles[i]?.img ?? ""),
      }),
      SEED.everythingTiles
    ),
    fleetDetail: pickStr(g.fleetDetail, SEED.fleetDetail),
    clubMenu: pickArr(
      g.clubMenu,
      (r) => ({ category: str(r.category), items: arr(r.items).map((it) => str(it.item)) }),
      SEED.clubMenu
    ),
    // 10 Network
    networkHeadline: pickStr(g.networkHeadline, SEED.networkHeadline),
    networkSubhead: pickStr(g.networkSubhead, SEED.networkSubhead),
    networkParas: pickArr(g.networkParas, (r) => str(r.paragraph), SEED.networkParas),
    networkBlurb: pickStr(g.networkBlurb, SEED.networkBlurb),
    planningMarkets: pickArr(g.planningMarkets, (r) => str(r.market), SEED.planningMarkets),
    hubAddress: pickStr(g.hubAddress, SEED.hubAddress),
    hubAddressSub: pickStr(g.hubAddressSub, SEED.hubAddressSub),
    hubBody: pickStr(g.hubBody, SEED.hubBody),
    // 11 FAQ
    faqItems: pickArr(g.faqItems, (r) => ({ q: str(r.question), a: str(r.answer) }), SEED.faqItems),
  };
}

/** The editable /drivers content, with a full fallback to the current copy. */
export async function getDriversPage(): Promise<DriversPageContent> {
  if (!payloadConfigured()) return SEED;
  try {
    const payload = await getPayload({ config });
    const g = await payload.findGlobal({ slug: "drivers-page", depth: 1 });
    return mapGlobal(g as unknown as Dict);
  } catch {
    return SEED;
  }
}
