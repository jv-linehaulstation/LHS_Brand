import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import ParallaxImage from "@/components/motion/ParallaxImage";
import { PrimaryCTA, GhostCTA } from "@/components/CTA";
import { SectionHead, StatusChip, DataTag, CoinImage, ChromeFrame, Coin } from "@/components/Bits";
import { BuildVsBelong, RelayDiagram, Timeline, SoloVsRelay } from "@/components/Signatures";
import RenderingsGallery from "@/components/RenderingsGallery";
import { RENDER_GROUPS } from "@/lib/renderGroups";
import LaneConnector from "@/components/LaneConnector";
import HowItWorks, { type Step } from "@/components/HowItWorks";
import JoinForm from "@/components/JoinForm";
import OneHomeCalculator from "@/components/calculators/OneHomeCalculator";
import FlexSpaceCalculator from "@/components/calculators/FlexSpaceCalculator";
import { audiences, AudienceKey, PHOTOS } from "@/lib/audiences";
import { site } from "@/lib/site";

/* OneHome Copy Playbook (Revised 3-18-26) — verbatim copy for the /drivers rebuild.
   Rule: "OneHome" carries NO star in body copy (the One★Home star is logo-only). */
const ONEHOME = {
  hero: {
    verse: [
      "Truck doesn’t fit in the driveway.",
      "Can’t live out of some truck stop lot.",
      "What if there was a new way for truckers",
      "to make the most of what they’ve got?",
    ],
    blurb: "A smarter way to live on the road — built exclusively for professional drivers.",
    paras: [
      "Truck drivers have always had to choose between two imperfect options: paying for a home they rarely use or living out of truck stops and parking lots.",
      "OneHome introduces a completely new model. Built specifically for professional drivers, it gives you access to a nationwide network of LineHaul Station locations designed to feel like home.",
    ],
  },
  core: {
    kicker: "You’re paying for 365 days. You’re only using about 100.",
    headline: "Here’s A New & Better Option",
    subhead: "Most drivers are paying for a home they barely live in.",
    blurb: "Stop paying for what you don’t use.",
    paras: [
      "Housing is expensive – rent/mortgage, taxes, insurance, utilities, maintenance – and we pay for it 365 DAYS A YEAR whether we’re home or not…. UNTIL NOW. OneHome eliminates the financial waste for truckers so that they keep more of their hard-earned income and better save for retirement. With our proprietary OneHome program, LineHaul Station becomes your new home, and you ONLY PAY FOR THE DAYS YOU USE IT.",
      "Life becomes a much better experience with daily access to resort-quality amenities and options for mail service, personal vehicle parking and self-storage. Start with the number of days you need and increase your use whenever you’re ready. No more flushing money down the drain.",
      "We anticipate truckers could SAVE $15,000 or more per year on ordinary living expenses and those savings could grow into a staggering amount of money if carefully invested over the next 30-40 years!",
    ],
  },
  value: {
    headline: "For a lot less money, a far superior experience.",
    subhead: "What Is Home For You Today?",
    prompt: "How often are you there? Where do you park your truck?",
    prompts: [
      "Renting a Small Basic Apartment?",
      "Renting or Owning a Traditional Home?",
      "Random Parking Lots with No Services?",
    ],
    blurb: "Upgrade your lifestyle on the road — often while spending less.",
    full: [
      "Many drivers spend thousands each month maintaining a home they barely use, while still relying on low-quality options when they’re actually on the road. That means paying full price for an empty apartment — and then parking in a gravel lot at the end of a 12-hour day.",
      "With OneHome, you’re investing in a lifestyle that actually matches your reality. Instead of paying for unused space, you gain access to a private, gated network designed for comfort, safety, and consistency.",
      "The result is a mountain of value: more lifestyle, better rest, and a smarter use of your money.",
    ],
    table: [
      { trad: "Pay for 365 days", one: "Pay only for days you use" },
      { trad: "Use maybe 60–120 days", one: "Start at 60 days, grow anytime" },
      { trad: "Mortgage + interest", one: "No mortgage, no interest" },
      { trad: "Full utilities year-round", one: "No utility burden" },
      { trad: "Maintenance and repairs", one: "Zero maintenance" },
      { trad: "Can’t park your truck", one: "Secure truck parking included" },
      { trad: "Truck stop when on the road", one: "Resort-style network nationwide" },
    ],
  },
  amenities: {
    headline: "Absolutely Amazing Amenities",
    subhead: "Everything you need — built for life on the road.",
    blurb: "Designed to elevate every part of your day.",
    intro:
      "Every LineHaul Station location is built to deliver a premium experience for drivers. From food and relaxation to fitness and convenience, every detail is designed to help you recharge, reset, and enjoy your time off the road in a way that simply hasn’t existed in trucking before.",
    cards: [
      {
        name: "Member’s Grill", meta: "great food • entertainment • relax", img: PHOTOS.clubDining,
        blurb: "A real kitchen for real meals — your days of eating whatever’s under the heat lamp are over.",
        full: [
          "The Member’s Grill gives you a clean, modern space to eat better and live better. Whether you’re cooking for yourself or grabbing something fresh, you’ll find quality food and drinks designed for drivers who are done settling.",
          "Think of it as the kitchen you’d want in your own home — except you don’t have to clean it. Fresh ingredients, inventive drink options, and snacks that are actually worth eating. It’s one of the first things drivers notice when they arrive, and one of the reasons they keep coming back.",
        ],
      },
      {
        name: "Sky Deck", meta: "outdoor firepits • water features • star gazing", img: PHOTOS.skydeck,
        blurb: "Your open-air escape — kick back and take it all in.",
        full: [
          "The Sky Deck is designed to give you something drivers almost never get: real outdoor space that feels good. Perfect for relaxing, socializing, playing games, or just enjoying a quiet moment above the roar of the road.",
          "With fire pits, garden areas, and open-air seating, it’s the kind of space that makes you forget you’re at a truck terminal. It feels like the rooftop of a place you’d actually want to hang out — because it is.",
        ],
      },
      {
        name: "Digital Den", meta: "gamer’s center • billiards • trap & skeet", img: PHOTOS.gamerDen1,
        blurb: "An experiential center built for downtime — unwind after a long day behind the wheel.",
        full: [
          "The Digital Den is where drivers come to blow off steam. It’s built for entertainment, social connection, and personal downtime — with gaming, billiards, private screens, and experiences you won’t find anywhere else on the road.",
          "Whether you want to compete with fellow drivers or just decompress on your own, the Digital Den gives you space and options that go far beyond the usual break room. It’s designed to make your off-hours feel like they actually belong to you.",
        ],
      },
      {
        name: "Fitness Studio", meta: "cardio • weights • showers • lockers", img: PHOTOS.fitness,
        blurb: "Stay strong on the road — everything you need to move, stretch, and recharge.",
        full: [
          "The Fitness Studio gives you a real workout space so you can take care of your body no matter where your route takes you. Cardio equipment, free weights, and enough room to actually move — plus clean showers and lockers so you’re ready to go.",
          "Driving for a living takes a physical toll, and most drivers have zero access to quality fitness on the road. The Fitness Studio changes that. It’s built for drivers who want to feel their best mile after mile.",
        ],
      },
      {
        name: "Laundry & More", meta: "washers • dryers • daily essentials", img: PHOTOS.laundry,
        blurb: "Clean clothes made easy — feel fresh and ready for the road.",
        full: [
          "There’s nothing better than feeling fresh and clean when you’re out on the road. Our modern laundry facilities give you everything you need to look your absolute best — without the hassle of hunting down a truck stop laundromat.",
          "It’s a simple thing, but it makes a big difference in how you feel day to day. Quality machines, a clean environment, and daily essentials right where you need them.",
        ],
      },
      {
        name: "Gear Shop", meta: "logo apparel • accessories • sundries", img: PHOTOS.gearShop, // TODO(JJ): photo — white ¾-zip + real LHS logo
        blurb: "Everything a driver needs, right where you need it.",
        full: [
          "The Gear Shop is all about convenience paired with quality and value. We’re stocked with essentials, upgrades, and everyday items for life on the road — plus LineHaul Station apparel and gear you’ll actually want to wear.",
          "No more making special trips or ordering things online and hoping they arrive somewhere you’ll actually be. The Gear Shop puts what you need within arm’s reach, every time you stop.",
        ],
      },
      {
        name: "Resort Pool & Spa", meta: "outdoor pool • hot tubs • sun & fun", img: PHOTOS.waterFeature,
        blurb: "Resort-level recovery — because life on the road shouldn’t mean skipping rest.",
        full: [
          "The pool and spa area is designed for real recovery. After long days behind the wheel, drivers deserve more than a quick shower and a cramped sleeper. This is where you actually unwind.",
          "Whether it’s a few laps, a soak, or just sitting by the water and doing absolutely nothing, the pool and spa deliver the kind of experience that makes OneHome feel like the private resort community it’s designed to be.",
        ],
      },
      {
        name: "Camp K9", meta: "dog park • relief stations • driver-friendly", img: PHOTOS.clubPatio,
        blurb: "Your co-pilot deserves a break too.",
        full: [
          "A lot of drivers travel with their best friend, and finding a safe, clean place for them to run is almost impossible on the road. Camp K9 gives your co-pilot room to stretch, play, and just be a dog.",
          "It’s one of those amenities that drivers don’t expect — but once they see it, they never want to go back to a place that doesn’t have one. Safe, fenced, and built with the road-life pet owner in mind.",
        ],
      },
    ],
  },
  fleet: {
    headline: "Fleet Services",
    subhead: "repairs • maintenance • inspections • truck wash",
    para:
      "It’s no secret that preventive maintenance is critically important for truckers. The trick is finding a nearby shop that does good work at a fair price on your schedule. No matter what type of service you need, LineHaul Station makes it easy as a one-stop shop solution with super convenient access while you’re relaxing at your new home. It doesn’t get any better than this!",
    // TODO(JJ): supply dedicated Fleet Services photos; using LHS facility renderings for now.
    cards: [
      { name: "Repairs", img: PHOTOS.fleetEntry1 },
      { name: "Maintenance", img: PHOTOS.fleetExit },
      { name: "Inspections", img: PHOTOS.fleetEntry2 },
      { name: "Truck Wash", img: PHOTOS.truckWashEntry },
      { name: "Fair Labor Rates", img: PHOTOS.fleetFuel },
    ],
  },
  network: {
    headline: "Everywhere the Road Takes You",
    subhead: "A growing nationwide network of LineHaul Station locations.",
    blurb: "Home isn’t one place. It’s a system.",
    paras: [
      "OneHome is built on a network that continues to grow. As new locations come online, your access expands — giving you more places to call home, wherever the road takes you.",
      "This isn’t just a single destination. It’s a living system designed to move with you. The more the network grows, the more valuable your membership becomes — and the fewer nights you’ll ever need to spend at a truck stop again.",
    ],
    markets: [
      "San Antonio", "El Paso", "Houston", "Dallas", "Mobile", "Jackson", "Memphis", "Knoxville",
      "Charlotte", "Atlanta", "Wilmington", "Richmond", "Carlisle", "Cleveland", "Detroit", "Chicago",
      "Kansas City", "Omaha", "Oklahoma City", "Albuquerque", "Denver", "Salt Lake City", "Phoenix",
      "Los Angeles", "Kingman", "Las Vegas", "San Francisco", "Portland", "Seattle", "Butte",
      "Dickinson", "Minneapolis", "Indianapolis", "Philadelphia", "Savannah", "Tampa", "Nashville", "St. Louis",
    ],
  },
  homehub: {
    headline: "We have EVERYTHING you need.",
    subhead: "Mail Services • Personal Vehicle • Storage Lockers",
    blurb: "Your Home Hub anchors your life on the road.",
    paras: [
      "Every OneHome member selects a Home Hub within the LineHaul Station network. Your Home Hub serves as your personal anchor — it’s where your mailbox lives, where your personal vehicle is securely parked, and where your belongings are stored.",
      "It’s your address, your storage, and your place within the network. But the real power of OneHome is that home doesn’t stop there. The entire LineHaul Station network is your home — your Home Hub is just where your stuff is.",
      "From secure covered or garage parking to private storage units and reliable mail services, your Home Hub gives you a place to manage your life — not just your route.",
    ],
  },
  calc: {
    headline: "The math might surprise you.",
    subhead: "You could save $15,000–$20,000 per year.",
    blurb: "See how your current housing costs compare to a OneHome membership.",
    paras: [
      "Many drivers spend $2,000–$2,500 per month maintaining a home they barely use. By switching to a OneHome 60-day membership, drivers in that range could save over $1,200 every month while upgrading their lifestyle on the road.",
      "The OneHome Lifestyle Calculator shows you exactly how the numbers work. Enter your income, current housing costs, utilities, and other living expenses — and see what your life could look like with OneHome instead.",
      "This isn’t a gimmick. It’s straightforward math. And for most drivers, the numbers tell a story they weren’t expecting.",
    ],
  },
  join: {
    headline: "Join OneHome",
    subhead: "This is a limited early-access program.",
    blurb: "Join the interest list to learn more.",
    paras: [
      "OneHome is currently in pre-launch. By joining now, you’ll get early access to availability, program details, and next steps as locations come online.",
      "LineHaul Station’s OneHome program is a national pre-sales effort. There are no contracts or payments required at this stage — you’re simply getting on the list so that when we’re ready, you’re first in line.",
      "There’s no risk. There’s no commitment. There’s just the chance to be part of something that’s about to change how drivers live on the road.",
    ],
  },
};

export default function AudiencePage({ audience }: { audience: AudienceKey }) {
  const a = audiences[audience];
  const ac = a.accent;
  const hasCalc = audience === "drivers" || audience === "carriers";

  // Minted program coin — OneHome on Drivers, FlexSpace on Carriers.
  const programCoin =
    audience === "drivers"
      ? "/assets/coin-onehome.png"
      : audience === "carriers"
      ? "/assets/coin-flexspace.png"
      : null;

  // Map this lane's "how it works" steps onto the shared pinned HowItWorks module.
  const HOW_IMAGES = [PHOTOS.buildingExterior, PHOTOS.fleetFuel, PHOTOS.crossDock, PHOTOS.skydeck, PHOTOS.truckSunset];
  const howSteps: Step[] = a.how.steps.map((st, i) => ({
    n: String(i + 1).padStart(3, "0"),
    t: st.title,
    d: st.blurb,
    img: HOW_IMAGES[i % HOW_IMAGES.length],
  }));

  /* ============================ HERO — full-bleed, bottom-anchored ============================ */
  const hero = (
    <section className="relative flex min-h-[92dvh] items-end overflow-hidden px-[clamp(20px,6vw,100px)] pb-14 pt-28">
      <ParallaxImage src={a.heroImage} alt={`${a.navLabel} — LineHaul Station`} priority strength={0.24} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.96)_0%,rgba(11,11,11,0.72)_55%,rgba(11,11,11,0.4)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,11,11,0.94),transparent_52%)]" />
      <div className="blueprint pointer-events-none absolute inset-0 opacity-20" />
      {/* bottom fade into the dark section below — matches the homepage hero */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,#0B0B0B,transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] overflow-hidden">
        <div className="scan-once h-full w-full" style={{ ["--ac" as string]: ac }} />
      </div>
      <div className="absolute right-3 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 font-mono text-[11px] tracking-[0.35em] text-chrome xl:block">
        LANE · {a.navLabel.toUpperCase()}
      </div>

      <div className="relative w-full">
        {programCoin && (
          <Reveal className="mb-6">
            <CoinImage
              src={programCoin}
              alt={`${audience === "drivers" ? "OneHome" : "FlexSpace"} challenge coin`}
              size={112}
              glow={`${ac}55`}
            />
          </Reveal>
        )}
        <Reveal>
          <StatusChip chrome label="West Memphis Hub — Open Now" coord="I-40 / I-55" accent={ac} />
        </Reveal>
        <Reveal delay={70}>
          <div className="mt-7 font-label text-[clamp(10px,1.3vw,14px)] uppercase tracking-[0.28em] text-chrome">
            {a.eyebrow}
          </div>
        </Reveal>
        <Reveal delay={130}>
          <h1 className="mt-3 max-w-[16ch] text-balance font-display text-[clamp(36px,6.4vw,92px)] font-black uppercase leading-[0.9] tracking-[-0.025em] text-white">
            {a.heroPunch}
          </h1>
        </Reveal>
        <div className="mt-7 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <Reveal delay={230}>
            {audience === "drivers" ? (
              <div className="font-script text-[clamp(20px,2.7vw,34px)] font-semibold leading-[1.3]" style={{ color: ac }}>
                {ONEHOME.hero.verse.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </div>
            ) : (
              <div className="font-script text-[clamp(24px,3.4vw,44px)] font-semibold" style={{ color: ac }}>
                {a.sub}
              </div>
            )}
            <p className="mt-4 max-w-[52ch] text-pretty font-body text-[clamp(17px,1.8vw,21px)] leading-relaxed text-[#dadada]">
              {a.desc}
            </p>
          </Reveal>
          <Reveal delay={320} className="flex-shrink-0">
            <div className="flex flex-wrap gap-3.5">
              {audience === "drivers" ? (
                <>
                  <a
                    href="/join"
                    className="group inline-flex items-center gap-2.5 rounded-btn px-[30px] py-[17px] font-label text-[12px] uppercase tracking-[0.16em] text-ink shadow-[0_14px_30px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-0.5 hover:brightness-[1.08] active:scale-[0.97]"
                    style={{ background: `linear-gradient(135deg, ${ac}, ${a.accentDark})` }}
                  >
                    Join Free.
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                  <GhostCTA accent={ac} />
                </>
              ) : (
                <>
                  <PrimaryCTA accent={ac} accentDark={a.accentDark} />
                  <GhostCTA accent={ac} />
                </>
              )}
            </div>
            <p className="tnum mt-5 max-w-[34ch] font-mono text-[12px] leading-snug text-chrome">{a.heroNote}</p>
          </Reveal>
        </div>
      </div>
      <a
        href={a.outriders ? "#welcome" : "#problem"}
        className="absolute inset-x-0 bottom-5 mx-auto flex w-fit items-center gap-2 font-label text-[10px] uppercase tracking-[0.2em] text-chrome transition-colors hover:text-white"
      >
        <span className="scroll-nudge inline-block">↓</span> {a.scrollHint}
      </a>
    </section>
  );

  /* ============ NUMBERS (ink) — calculator + counters (drivers/carriers) or a quiet stats beat ============ */
  const numbersBlock = hasCalc ? (
    <Section variant="ink" id="numbers" className="py-[clamp(44px,7vh,96px)]">
      <div className="grid gap-[clamp(28px,4vw,56px)] lg:grid-cols-[1.32fr_0.68fr] lg:items-start">
        <div>
          {audience === "drivers" ? <OneHomeCalculator accent={ac} /> : <FlexSpaceCalculator accent={ac} />}
        </div>
        <div className="lg:sticky lg:top-28">
          <DataTag accent={ac} className="font-label !text-[10px] uppercase tracking-[0.2em]">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full" style={{ background: ac, color: ac }} /> The Numbers
          </DataTag>
          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-[8px] border border-chrome/12 bg-chrome/10 lg:grid-cols-1">
            {a.stats.map((s, i) => (
              <Reveal key={i} delay={i * 80} className="bg-ink px-5 py-6">
                <CountUp value={s.big} style={{ color: ac }} className="tnum font-display text-[clamp(28px,3.4vw,44px)] font-black leading-none" />
                <div className="mt-2 font-body text-[13px] leading-snug text-chrome">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  ) : (
    <Section variant="ink" className="py-[clamp(44px,7vh,96px)]">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[8px] border border-chrome/12 bg-chrome/10 lg:grid-cols-4">
        {a.stats.map((s, i) => (
          <Reveal key={i} delay={i * 80} className="flex min-h-[150px] flex-col justify-between bg-ink p-[clamp(20px,2.4vw,36px)]">
            <CountUp value={s.big} style={{ color: ac }} className="tnum font-display text-[clamp(30px,3.8vw,52px)] font-black leading-none" />
            <div className="mt-5 font-body text-[14px] leading-snug text-chrome">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </Section>
  );

  /* ========================= PROBLEM (white) — editorial split ========================= */
  const problemSection = (
    <Section variant="light" id="problem" className="py-[clamp(70px,11vh,140px)]">
      <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <SectionHead kicker={a.problem.kicker} title={a.problem.headline} accent={ac} size="xl" tone="onLight" />
          <Reveal delay={120}>
            <p className="mt-7 max-w-[54ch] text-pretty font-body text-[clamp(18px,1.9vw,22px)] leading-relaxed text-[#3a3733]">
              {a.problem.body}
            </p>
          </Reveal>
        </div>
        <Reveal delay={140} dir="right" className="rounded-card border border-[#E2DDD6] bg-white p-7 sm:p-9 lg:-mt-6">
          {a.problem.counters.map((c, i) => (
            <div key={i} className="flex items-baseline gap-6 border-t border-[#E2DDD6] py-5 first:border-t-0 first:pt-0">
              <CountUp
                value={c.big}
                style={{ color: ac }}
                className="tnum min-w-[120px] font-display text-[clamp(30px,4vw,42px)] font-black leading-none"
              />
              <span className="font-body text-[15px] leading-snug text-[#6a655e]">{c.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );

  /* ===================== SIGNATURE BANDS (blueprint) — non-drivers ===================== */
  const signatureBands = (
    <>
      {a.ledger && (
        <Section variant="blueprint" className="py-[clamp(70px,11vh,140px)]">
          <BuildVsBelong data={a.ledger} accent={ac} />
        </Section>
      )}
      {a.lanes && (
        <Section variant="blueprint" className="py-[clamp(70px,11vh,140px)]">
          <RelayDiagram data={a.lanes} accent={ac} />
        </Section>
      )}
      {a.timeline && (
        <Section variant="blueprint" className="py-[clamp(70px,11vh,140px)]">
          <Timeline data={a.timeline} accent={ac} />
        </Section>
      )}
    </>
  );

  /* ===================== ROAD DIVIDER (image) ===================== */
  const roadSection = (
    <section className="relative overflow-hidden px-[clamp(20px,6vw,100px)] py-[clamp(96px,14vw,140px)] text-center">
      <ParallaxImage src={a.roadImage ?? PHOTOS.truckSunset} alt={`${a.navLabel} — LineHaul Station`} strength={0.28} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.6),rgba(11,11,11,0.84))]" />
      <Reveal className="relative mx-auto max-w-4xl">
        <h2 className="text-balance font-display text-[clamp(36px,6.8vw,96px)] font-black uppercase leading-[0.9] tracking-[-0.025em] text-white">
          {a.road.headline}
        </h2>
        <p className="mt-5 font-script text-[clamp(22px,3.4vw,38px)] font-semibold text-white/90">
          {a.road.sub}
        </p>
      </Reveal>
    </section>
  );

  /* ===================== HOW IT WORKS — pinned scroll-driven (shared) ===================== */
  const howItWorksSection = (
    <HowItWorks steps={howSteps} accent={ac} title={a.how.headline} />
  );

  /* ============ SOLO vs RELAY (blueprint) — carriers & government ============ */
  const soloRelaySection = a.relay && (
    <Section variant="blueprint" className="py-[clamp(70px,11vh,140px)]">
      <SoloVsRelay data={a.relay} accent={ac} />
    </Section>
  );

  /* ============ CAPABILITIES / AMENITIES (white) — non-drivers (drivers use Services) ============ */
  const capabilitiesSection = a.amenities ? (
    <Section variant="light" className="py-[clamp(70px,11vh,140px)]">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <SectionHead kicker={a.amenities.eyebrow} title={a.amenities.headline} accent={ac} size="xl" tone="onLight" />
        <Reveal delay={120}>
          <p className="text-pretty font-body text-[clamp(18px,1.9vw,21px)] leading-relaxed text-[#3a3733]">{a.amenities.intro}</p>
        </Reveal>
      </div>
      <div className="mt-10 grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[212px] md:grid-cols-4">
        {a.amenities.tiles.map((t, i) => {
          const span = i === 0 ? "col-span-2 row-span-2" : i === 5 ? "col-span-2" : "col-span-1";
          return (
            <Reveal key={i} delay={(i % 4) * 60} className={`group relative overflow-hidden rounded-card border border-chrome/15 ${span}`}>
              <Image src={t.img} alt={t.title} fill className="img-grade object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.05),rgba(11,11,11,0.5)_55%,rgba(11,11,11,0.92))]" />
              <div className="absolute inset-x-0 top-0 h-0.5 opacity-70" style={{ background: `linear-gradient(90deg, ${ac}, transparent)` }} />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className={`font-display font-extrabold uppercase leading-tight text-white ${i === 0 ? "text-[20px]" : "text-[15px]"}`}>{t.title}</div>
                <p className="mt-1 font-body text-[13px] leading-snug text-[#dcdcdc]">{t.blurb}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
      <Reveal delay={120}>
        <p className="mt-8 font-script text-[clamp(22px,3vw,34px)] font-semibold" style={{ color: ac }}>{a.amenities.footnote}</p>
      </Reveal>
    </Section>
  ) : (
    <Section variant="light" className="py-[clamp(70px,11vh,140px)]">
      <SectionHead kicker={a.featuresEyebrow} title={a.featuresTitle} accent={ac} size="xl" tone="onLight" />
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {a.features.map((f, i) => (
          <Reveal key={i} delay={(i % 2) * 80} className="lift group rounded-card border border-[#E2DDD6] bg-white p-6 sm:p-7">
            <div className="flex items-start gap-5">
              <span className="tnum mt-1 font-mono text-[14px]" style={{ color: ac }}>{String(i + 1).padStart(2, "0")}</span>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <div className="font-display text-[19px] font-extrabold uppercase tracking-[0.01em] text-ink">{f.title}</div>
                  <div className="font-mono text-[11px]" style={{ color: ac }}>{f.tag}</div>
                </div>
                <p className="mt-3 font-body text-[15px] leading-relaxed text-[#6a655e]">{f.blurb}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );

  /* ============ OUTRIDERS STORY (ink) — drivers: "Welcome to the Club" + Jeff lockup ============ */
  const storySection = a.outriders && (
    <Section variant="ink" id="welcome" className="py-[clamp(80px,12vh,160px)]">
      <div className="grid gap-[clamp(32px,5vw,72px)] lg:grid-cols-2 lg:items-center">
        {/* story copy */}
        <Reveal>
          <CoinImage src="/assets/coin-outriders.png" alt="Outriders Club challenge coin" size={84} glow={`${ac}55`} className="mb-5" />
          <h2 className="font-script text-[clamp(40px,6vw,76px)] font-semibold leading-[1.02] text-white">{a.outriders.story.headline}</h2>
          <div className="mt-6 space-y-4 font-body leading-relaxed text-[#e2e2e2]">
            {a.outriders.story.paras.map((p, i) =>
              i === 0 ? (
                <p key={i} className="text-[clamp(19px,2.1vw,25px)] font-medium leading-snug text-white">{p}</p>
              ) : (
                <p key={i} className="text-[clamp(16px,1.7vw,19px)]">{p}</p>
              )
            )}
          </div>
        </Reveal>
        {/* webinar invite → video → Jeff credit (the old "We're Ready To Roll" band, merged in) */}
        <Reveal delay={120}>
          <p className="font-body text-[clamp(15px,1.5vw,18px)] leading-relaxed text-chrome">
            {a.outriders.webinar.body}
          </p>
          {/* TODO(JJ): branded poster LHS-Webinar2.png isn't in the repo — Vimeo serves its own thumbnail. */}
          <ChromeFrame variant="steel" className="mt-5">
            <div className="relative aspect-video overflow-hidden bg-carbon">
              <iframe
                src={a.outriders.webinar.video}
                title="LineHaul Station — Monthly Webinar with Jeff Swenson"
                loading="lazy"
                allow="fullscreen; picture-in-picture"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </ChromeFrame>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="font-display text-[16px] font-black uppercase leading-tight text-white">Jeffrey J. Swenson</div>
              <div className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: ac }}>Founder &amp; CEO</div>
            </div>
            <a
              href="https://www.linkedin.com/in/jeff-swenson-2744606"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-btn border border-white/30 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white transition-colors hover:border-[var(--ac)] hover:text-[var(--ac)]"
              style={{ ["--ac" as string]: ac }}
            >
              LinkedIn
            </a>
            {/* TODO(JJ): Facebook profile URL not provided — add the icon/link when available. */}
          </div>
        </Reveal>
      </div>
    </Section>
  );

  /* ============ NOTHING TO LOSE / EVERYTHING TO GAIN (white) — 3-step free membership ============ */
  const stepsSection = a.outriders && (
    <Section variant="light" className="py-[clamp(70px,11vh,140px)]">
      <Reveal className="max-w-3xl">
        <h2 className="font-display text-[clamp(34px,5.6vw,84px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-ink">
          {a.outriders.join.headline.split("/")[0].trim()}
          <br />
          <span style={{ color: ac }}>{a.outriders.join.headline.split("/")[1].trim()}</span>
        </h2>
      </Reveal>
      {/* numbered process rail: 01 — 02 — 03 */}
      <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-3">
        {a.outriders.join.steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 90}>
            <div className="flex items-center gap-4">
              <div
                className="relative z-10 flex h-[52px] w-[52px] flex-none items-center justify-center rounded-full border-2 bg-white"
                style={{ borderColor: ac }}
              >
                <span className="tnum font-display text-[19px] font-black" style={{ color: ac }}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              {i < a.outriders!.join.steps.length - 1 && (
                <span className="hidden h-px flex-1 bg-[#E2DDD6] md:block" aria-hidden />
              )}
            </div>
            <div className="mt-5 font-display text-[18px] font-extrabold uppercase tracking-[0.01em] text-ink">{s.title}</div>
            <p className="mt-2 max-w-[36ch] font-body text-[14px] leading-relaxed text-[#6a655e]">{s.blurb}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );

  /* (Services To Suit You list deleted — the Tour gallery is the single club-amenities visual.) */

  /* ============ §5 FLEET SERVICES (ink) — playbook copy, image cards ============ */
  const fleetSection = audience === "drivers" && (
    <Section variant="ink" className="py-[clamp(70px,11vh,140px)]">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <SectionHead
          title={<><span style={{ color: ac }}>★</span> {ONEHOME.fleet.headline} <span style={{ color: ac }}>★</span></>}
          accent={ac}
          size="xl"
        />
        <Reveal delay={120}>
          <div className="font-mono text-[12px] uppercase tracking-[0.16em]" style={{ color: ac }}>{ONEHOME.fleet.subhead}</div>
          <p className="mt-3 text-pretty font-body text-[clamp(16px,1.6vw,19px)] leading-relaxed text-[#dadada]">{ONEHOME.fleet.para}</p>
        </Reveal>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {ONEHOME.fleet.cards.map((c, i) => (
          <Reveal key={c.name} delay={(i % 5) * 50} className="lift group overflow-hidden rounded-card border border-chrome/15">
            <div className="relative aspect-[4/3] overflow-hidden bg-carbon">
              <Image
                src={c.img}
                alt={c.name}
                fill
                loading="lazy"
                className="img-grade object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(11,11,11,0.85))]" />
              <div className="absolute inset-x-0 top-0 h-0.5 opacity-80" style={{ background: `linear-gradient(90deg, ${ac}, transparent)` }} aria-hidden />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="font-display text-[14px] font-extrabold uppercase leading-tight text-white">{c.name}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );

  /* ============ SPACE (ink) — three ways to get Space ============ */
  const spaceSection = a.outriders && (
    <Section variant="ink" className="py-[clamp(70px,11vh,140px)]">
      <Reveal>
        <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: ac }}>Three ways to get Space</div>
        <h2 className="mt-3 font-display text-[clamp(48px,9vw,120px)] font-black uppercase leading-[0.86] tracking-[-0.03em] text-white">{a.outriders.join.waysTitle}</h2>
        <p className="mt-5 max-w-[52ch] font-body text-[clamp(16px,1.7vw,20px)] leading-relaxed text-[#dadada]">
          Space is your place in the network — secure parking, trailer drop, and terminal access at every LineHaul Station Hub. Here are the three ways to get it.
        </p>
      </Reveal>
      {/* vertical Earn → Request → Purchase path (tone coins + connector) — distinct from the §2 rail */}
      <div className="mt-12 max-w-3xl">
        {a.outriders.join.ways.map((w, i) => (
          <Reveal key={w.title} delay={i * 90} className="relative flex gap-5 pb-9 last:pb-0">
            {i < a.outriders!.join.ways.length - 1 && (
              <span className="absolute bottom-0 left-[31px] top-[68px] w-px bg-chrome/20" aria-hidden />
            )}
            <Coin tone={w.tone} size={64} className="relative z-10 flex-none">{String(i + 1).padStart(2, "0")}</Coin>
            <div className="pt-1.5">
              <div className="font-display text-[clamp(22px,3vw,32px)] font-black uppercase leading-none text-white">{w.title}</div>
              <p className="mt-2.5 max-w-[52ch] font-body text-[15px] leading-relaxed text-chrome">{w.blurb}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120} className="mt-10">
        <a
          href="/join"
          className="group inline-flex items-center gap-2.5 rounded-btn px-[30px] py-[17px] font-label text-[12px] uppercase tracking-[0.16em] text-ink shadow-[0_14px_30px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-0.5 hover:brightness-[1.06] active:scale-[0.97]"
          style={{ background: `linear-gradient(135deg, ${ac}, ${a.accentDark})` }}
        >
          Join Free.
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </Reveal>
    </Section>
  );

  /* (We're Ready To Roll band deleted — the webinar video is merged into Welcome To The Club above.) */

  /* ============ §8 LIFESTYLE CALCULATOR (blueprint) — calculator + playbook lead-in ============ */
  const calcStorySection = audience === "drivers" && (
    <Section variant="blueprint" id="numbers" className="py-[clamp(70px,11vh,140px)]">
      <div className="grid gap-[clamp(28px,4vw,56px)] lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
        <div>
          <OneHomeCalculator accent={ac} />
        </div>
        <div className="lg:sticky lg:top-28">
          <h2 className="font-display text-[clamp(26px,3.4vw,44px)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-white">{ONEHOME.calc.headline}</h2>
          <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.16em]" style={{ color: ac }}>{ONEHOME.calc.subhead}</p>
          <Reveal delay={120}>
            <div className="mt-5 space-y-4 font-body text-[clamp(15px,1.5vw,18px)] leading-relaxed text-[#dadada]">
              {ONEHOME.calc.paras.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );

  /* ===================== TAKE THE TOUR — GALLERY (ink) ===================== */
  const gallerySection = a.gallery && a.gallery.length > 0 && (
    <Section variant="ink" className="py-[clamp(70px,11vh,140px)]">
      <SectionHead title={a.galleryTitle ?? "See The Build."} accent={ac} size="xl" />
      <div className="mt-9">
        <RenderingsGallery groups={RENDER_GROUPS.filter((g) => a.gallery!.includes(g.key))} accent={ac} />
      </div>
    </Section>
  );

  /* ===================== WEST MEMPHIS (image) ===================== */
  const memphisSection = (
    <Section variant="image" image={a.memphisImage} accent={ac} className="py-[clamp(70px,11vh,140px)]">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <Reveal>
          <SectionHead title={a.memphis.headline} accent={ac} size="xl" />
          <p className="mt-6 max-w-[54ch] text-pretty font-body text-[clamp(18px,1.9vw,21px)] leading-relaxed text-[#e2e2e2]">
            {a.memphis.body}
          </p>
          <div className="mt-7 grid grid-cols-3 gap-3">
            {a.memphis.stats.map((s, i) => (
              <Reveal key={i} delay={i * 80} className="rounded-card border border-chrome/20 bg-ink/60 px-4 py-4 backdrop-blur">
                <CountUp value={s.big} className="tnum font-display text-[clamp(18px,2.2vw,24px)] font-black leading-none text-white" />
                <div className="mt-1.5 font-mono text-[11px] text-chrome">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </Reveal>
        <Reveal delay={160} dir="right" className="chrome-frame glint">
          <div className="bg-ink/85 p-7 backdrop-blur">
            <div className="font-label text-[10px] uppercase tracking-[0.2em]" style={{ color: ac }}>The First Hub</div>
            <div className="mt-3 font-display text-[30px] font-black uppercase leading-none text-white">{a.memphis.address}</div>
            <div className="tnum mt-1.5 font-mono text-[13px] text-chrome">{a.memphis.addressSub}</div>
            <div className="chrome-rule mt-5" />
            <div className="mt-5">
              <StatusChip chrome label="Live now" coord="35.14°N / 90.18°W" accent={ac} />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );

  /* ===================== ONE NETWORK — lane connector (blueprint) ===================== */
  const networkSection = (
    <Section variant="blueprint" className="py-[clamp(70px,11vh,140px)]">
      <LaneConnector current={a.key} accent={ac} />
    </Section>
  );

  /* ===================== LET'S TALK (gradient) — content + contact left, form right ===================== */
  const letsTalkSection = (
    <Section variant="gradient" accent={ac} id="contact" className="py-[clamp(70px,11vh,140px)]">
      <div className="grid gap-[clamp(28px,4vw,64px)] lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHead kicker={a.form.eyebrow} title={a.form.headline} accent={ac} size="xl" maxW="max-w-full" />
          <Reveal delay={100}>
            <p className="mt-5 max-w-[44ch] text-pretty font-body text-[clamp(16px,1.6vw,20px)] leading-relaxed text-[#dadada]">
              {a.form.body}
            </p>
          </Reveal>
          <Reveal delay={140}>
            <ChromeFrame className="mt-9">
              <div className="grid grid-cols-1 gap-px overflow-hidden bg-chrome/10 sm:grid-cols-3 lg:grid-cols-1">
                <a href={site.phoneHref} className="bg-ink/80 p-5 backdrop-blur transition-colors hover:bg-ink/95">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: ac }}>Call</div>
                  <div className="tnum mt-2 font-mono text-[15px] text-white">{site.phone}</div>
                </a>
                <a href={site.emailHref} className="bg-ink/80 p-5 backdrop-blur transition-colors hover:bg-ink/95">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: ac }}>Email</div>
                  <div className="mt-2 break-words font-mono text-[15px] text-white">{site.email}</div>
                </a>
                <div className="bg-ink/80 p-5 backdrop-blur">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: ac }}>Visit</div>
                  <div className="mt-2 font-mono text-[15px] text-white">West Memphis, AR</div>
                  <div className="mt-1 font-mono text-[12px] text-chrome">{site.domainLabel}</div>
                </div>
              </div>
            </ChromeFrame>
          </Reveal>
        </div>
        <Reveal delay={120} dir="right">
          <JoinForm accent={ac} accentDark={a.accentDark} />
        </Reveal>
      </div>
    </Section>
  );

  /* ============ §2 CORE SALES BLOCK (white) — lead with money ============ */
  const coreSection = audience === "drivers" && (
    <Section variant="light" id="core" className="py-[clamp(70px,11vh,140px)]">
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: ac }}>{ONEHOME.core.kicker}</div>
          <h2 className="mt-4 text-balance font-display text-[clamp(34px,5.6vw,84px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-ink">{ONEHOME.core.headline}</h2>
          <p className="mt-5 font-script text-[clamp(20px,2.4vw,30px)] font-semibold" style={{ color: ac }}>{ONEHOME.core.subhead}</p>
        </div>
        <Reveal delay={120}>
          <div className="space-y-4 font-body text-[clamp(16px,1.6vw,19px)] leading-relaxed text-[#3a3733]">
            {ONEHOME.core.paras.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <p className="mt-6 font-display text-[clamp(18px,2vw,26px)] font-black uppercase leading-tight text-ink">{ONEHOME.core.blurb}</p>
        </Reveal>
      </div>
    </Section>
  );

  /* ============ §3 VALUE STATEMENT + comparison table (ink) ============ */
  const valueSection = audience === "drivers" && (
    <Section variant="ink" className="py-[clamp(70px,11vh,140px)]">
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <h2 className="text-balance font-display text-[clamp(30px,4.4vw,64px)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-white">{ONEHOME.value.headline}</h2>
          <div className="mt-6 font-mono text-[12px] uppercase tracking-[0.18em]" style={{ color: ac }}>{ONEHOME.value.subhead}</div>
          <p className="mt-2 font-body text-[clamp(15px,1.5vw,18px)] text-chrome">{ONEHOME.value.prompt}</p>
          <ul className="mt-5 space-y-2.5">
            {ONEHOME.value.prompts.map((q) => (
              <li key={q} className="flex items-baseline gap-3 font-body text-[15px] text-[#dadada]">
                <span className="h-1.5 w-1.5 flex-none translate-y-[-2px] rounded-full" style={{ background: ac }} aria-hidden />
                {q}
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-4 text-pretty font-body text-[clamp(15px,1.5vw,18px)] leading-relaxed text-[#dadada]">
            {ONEHOME.value.full.map((p, j) => <p key={j}>{p}</p>)}
          </div>
          <p className="mt-6 font-script text-[clamp(20px,2.4vw,30px)] font-semibold" style={{ color: ac }}>{ONEHOME.value.blurb}</p>
        </div>
        <Reveal delay={120} dir="right">
          <div className="overflow-hidden rounded-[8px] border border-chrome/15">
            <div className="grid grid-cols-2">
              <div className="bg-ink2 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-chrome">Traditional Housing</div>
              <div className="px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink" style={{ background: ac }}>OneHome</div>
            </div>
            {ONEHOME.value.table.map((r) => (
              <div key={r.trad} className="grid grid-cols-2 border-t border-chrome/12">
                <div className="px-5 py-3.5 font-body text-[14px] leading-snug text-chrome">{r.trad}</div>
                <div className="border-l border-chrome/12 px-5 py-3.5 font-body text-[14px] font-semibold leading-snug text-white">{r.one}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );

  /* ============ §4 AMENITIES (white) — 8 image cards; the single club-amenities section ============ */
  const amenitiesSection = audience === "drivers" && (
    <Section variant="light" className="py-[clamp(70px,11vh,140px)]">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <SectionHead title={ONEHOME.amenities.headline} accent={ac} size="xl" tone="onLight" />
        <Reveal delay={120}>
          <p className="font-display text-[clamp(16px,1.7vw,20px)] font-bold uppercase tracking-[0.01em] text-ink">{ONEHOME.amenities.subhead}</p>
          <p className="mt-3 font-body text-[clamp(15px,1.5vw,18px)] leading-relaxed text-[#3a3733]">{ONEHOME.amenities.intro}</p>
        </Reveal>
      </div>
      {/* alternating image/copy rows — room for the playbook's full copy per amenity */}
      <div className="mt-14 space-y-[clamp(48px,7vw,96px)]">
        {ONEHOME.amenities.cards.map((c, i) => (
          <Reveal key={c.name} className="grid items-center gap-x-[clamp(28px,4vw,72px)] gap-y-6 lg:grid-cols-2">
            <div className={`group relative overflow-hidden rounded-card border border-[#E2DDD6] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="relative aspect-[4/3] overflow-hidden bg-carbon">
                <Image src={c.img} alt={c.name} fill loading="lazy" className="img-grade object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-x-0 top-0 h-0.5 opacity-80" style={{ background: `linear-gradient(90deg, ${ac}, transparent)` }} aria-hidden />
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-3">
                <span className="tnum font-mono text-[13px]" style={{ color: ac }}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-[clamp(24px,3vw,40px)] font-black uppercase leading-none tracking-[-0.01em] text-ink">{c.name}</h3>
              </div>
              <div className="mt-2.5 font-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: ac }}>{c.meta}</div>
              <p className="mt-4 text-pretty font-body text-[clamp(16px,1.6vw,19px)] font-semibold leading-snug text-ink">{c.blurb}</p>
              <div className="mt-3 space-y-3 text-pretty font-body text-[clamp(15px,1.5vw,17px)] leading-relaxed text-[#3a3733]">
                {c.full.map((p, j) => <p key={j}>{p}</p>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );

  /* ============ §6 NETWORK / MAP (blueprint) — markets + West Memphis proof ============ */
  const mapSection = audience === "drivers" && (
    <Section variant="blueprint" className="py-[clamp(70px,11vh,140px)]">
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <h2 className="text-balance font-display text-[clamp(34px,5.6vw,84px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">{ONEHOME.network.headline}</h2>
          <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.16em]" style={{ color: ac }}>{ONEHOME.network.subhead}</p>
          <div className="mt-6 space-y-4 font-body text-[clamp(16px,1.6vw,19px)] leading-relaxed text-[#dadada]">
            {ONEHOME.network.paras.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <p className="mt-5 font-script text-[clamp(20px,2.4vw,30px)] font-semibold" style={{ color: ac }}>{ONEHOME.network.blurb}</p>
        </div>
        <Reveal delay={120} dir="right" className="chrome-frame glint">
          <div className="bg-ink/85 p-7 backdrop-blur">
            <div className="font-label text-[10px] uppercase tracking-[0.2em]" style={{ color: ac }}>First Home Hub · Open Now</div>
            <div className="mt-3 font-display text-[30px] font-black uppercase leading-none text-white">{a.memphis.address}</div>
            <div className="tnum mt-1.5 font-mono text-[13px] text-chrome">{a.memphis.addressSub}</div>
            <p className="mt-4 font-body text-[14px] leading-relaxed text-chrome">{a.memphis.body}</p>
            <div className="chrome-rule mt-5" />
            <div className="mt-5"><StatusChip chrome label="Live now" coord="35.14°N / 90.18°W" accent={ac} /></div>
          </div>
        </Reveal>
      </div>
      <div className="mt-12">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-chrome">Current planning markets</div>
        <div className="mt-4 flex flex-wrap gap-2">
          {ONEHOME.network.markets.map((m) => (
            <span key={m} className="rounded-btn border border-chrome/20 bg-ink/50 px-3 py-1.5 font-mono text-[12px] text-chrome">{m}</span>
          ))}
        </div>
      </div>
    </Section>
  );

  /* ============ §7 HOME HUB / SERVICES (white) ============ */
  const homeHubSection = audience === "drivers" && (
    <Section variant="light" className="py-[clamp(70px,11vh,140px)]">
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <h2 className="text-balance font-display text-[clamp(30px,4.6vw,68px)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-ink">{ONEHOME.homehub.headline}</h2>
          <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.16em]" style={{ color: ac }}>{ONEHOME.homehub.subhead}</p>
          <p className="mt-5 font-script text-[clamp(20px,2.4vw,30px)] font-semibold" style={{ color: ac }}>{ONEHOME.homehub.blurb}</p>
        </div>
        <Reveal delay={120}>
          <div className="space-y-4 font-body text-[clamp(16px,1.6vw,19px)] leading-relaxed text-[#3a3733]">
            {ONEHOME.homehub.paras.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </Reveal>
      </div>
    </Section>
  );

  /* ============ §10 JOIN ONEHOME (gradient) — interest form, last ============ */
  /* Contact resolved per JJ: lib/site.ts now uses the playbook's Membership Director
     contact (J.J. Swenson · 602-858-8000 · jj@linehaulstation.com) site-wide. */
  const joinOneHomeSection = audience === "drivers" && (
    <Section variant="gradient" accent={ac} id="contact" className="py-[clamp(70px,11vh,140px)]">
      <div className="grid gap-[clamp(28px,4vw,64px)] lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: ac }}>{ONEHOME.join.subhead}</div>
          <h2 className="mt-3 font-display text-[clamp(34px,5vw,80px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">{ONEHOME.join.headline}</h2>
          <Reveal delay={100}>
            <div className="mt-5 max-w-[46ch] space-y-4 font-body text-[clamp(16px,1.6vw,20px)] leading-relaxed text-[#dadada]">
              {ONEHOME.join.paras.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>
          <Reveal delay={140}>
            <ChromeFrame className="mt-9">
              <div className="grid grid-cols-1 gap-px overflow-hidden bg-chrome/10 sm:grid-cols-3 lg:grid-cols-1">
                <a href={site.phoneHref} className="bg-ink/80 p-5 backdrop-blur transition-colors hover:bg-ink/95">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: ac }}>Call</div>
                  <div className="tnum mt-2 font-mono text-[15px] text-white">{site.phone}</div>
                </a>
                <a href={site.emailHref} className="bg-ink/80 p-5 backdrop-blur transition-colors hover:bg-ink/95">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: ac }}>Email</div>
                  <div className="mt-2 break-words font-mono text-[15px] text-white">{site.email}</div>
                </a>
                <div className="bg-ink/80 p-5 backdrop-blur">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: ac }}>Visit</div>
                  <div className="mt-2 font-mono text-[15px] text-white">West Memphis, AR</div>
                  <div className="mt-1 font-mono text-[12px] text-chrome">{site.domainLabel}</div>
                </div>
              </div>
            </ChromeFrame>
          </Reveal>
        </div>
        <Reveal delay={120} dir="right">
          <JoinForm accent={ac} accentDark={a.accentDark} submitLabel="Join OneHome" />
        </Reveal>
      </div>
    </Section>
  );

  return (
    <main className="min-h-screen bg-ink">
      <Nav accent={ac} active={a.key} />
      {hero}

      {audience === "drivers" ? (
        /* DRIVERS — OneHome Copy Playbook flow, then the Outriders free-membership block, then Join OneHome. */
        <>
          {coreSection}
          {valueSection}
          {amenitiesSection}
          {fleetSection}
          {mapSection}
          {homeHubSection}
          {calcStorySection}
          {/* secondary — Outriders Club (free membership), distinct from paid OneHome */}
          {storySection}
          {stepsSection}
          {spaceSection}
          {joinOneHomeSection}
        </>
      ) : (
        /* CARRIERS / BROKERS / SHIPPERS / GOVERNMENT — template order */
        <>
          {numbersBlock}
          {problemSection}
          {signatureBands}
          {roadSection}
          {howItWorksSection}
          {soloRelaySection}
          {capabilitiesSection}
          {gallerySection}
          {memphisSection}
          {networkSection}
          {letsTalkSection}
        </>
      )}

      <Footer />
    </main>
  );
}
