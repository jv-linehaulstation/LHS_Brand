// LineHaul Station — full audience content, ported from the static HTML pages
// (drivers/carriers/brokers/shippers/government.html) and the brand "Landing
// Pages" artifact. Copy is preserved as written by the team; only formatting
// (curly→straight quotes where needed) is normalized.

// Real LineHaul Station imagery from the company pitch decks.
const REN = "/assets/deck-library/renderings";
const PHO = "/assets/deck-library/photos";
export const PHOTOS = {
  // Context / road
  road: "/assets/photos/road-sunset.jpg",
  truckSunset: `${PHO}/context-truck-sunset.jpg`,
  truckSunset2: `${PHO}/context-truck-sunset-2.jpg`,
  highwayInterchange: `${PHO}/context-highway-interchange.jpg`,
  citySkyline: `${PHO}/context-city-skyline.jpg`,
  courthouse: `${PHO}/context-civic-courthouse.jpg`,
  groundbreaking: `${PHO}/context-groundbreaking-shovel.jpg`,
  // Building & arrival
  buildingAerial: `${PHO}/building-terminal-aerial.jpg`,
  buildingExterior: `${PHO}/building-exterior-day.jpg`,
  clubEntry: `${REN}/chrome-club-entry.jpg`,
  clubEntry2: `${REN}/chrome-club-entry-2.jpg`,
  clubAerial: `${REN}/chrome-club-aerial-view.jpg`,
  gateHouse: `${REN}/gate-house-entry-drive.jpg`,
  entryWelcome: `${REN}/entry-drive-welcome.jpg`,
  obliqueSitePlan: `${REN}/oblique-site-plan.jpg`,
  // Outriders Club + Sky Deck
  skydeck: `${REN}/chrome-club-skydeck.jpg`,
  skydeckEntry: `${REN}/skydeck-entry.jpg`,
  skydeckFireplace: `${REN}/skydeck-fireplace.jpg`,
  skydeckSunset: `${PHO}/lifestyle-skydeck-sunset.jpg`,
  clubPatio: `${REN}/chrome-club-patio.jpg`,
  cornHole: `${REN}/corn-hole-courts.jpg`,
  waterFeature: `${REN}/water-feature.jpg`,
  clubLounge1: `${REN}/chrome-club-lounge-1.jpg`,
  clubLounge2: `${REN}/chrome-club-lounge-2.jpg`,
  clubDining: `${PHO}/interior-club-dining.jpg`,
  clubLoungePhoto: `${PHO}/interior-club-lounge.jpg`,
  clubShop: `${PHO}/interior-club-shop.jpg`,
  overdriveLounge: `${PHO}/interior-overdrive-lounge.jpg`,
  fitness: `${REN}/fitness-studio.jpg`,
  gamerDen1: `${REN}/gamer-s-den-1.jpg`,
  gamerDen2: `${REN}/gamer-s-den-2.jpg`,
  gamerDen3: `${REN}/gamer-s-den-3.jpg`,
  gearShop: `${REN}/gear-shop.jpg`,
  laundry: `${REN}/laundry-center.jpg`,
  barber: `${REN}/vintage-barber-shop.jpg`,
  // Fleet Services
  fleetFuel: `${REN}/fleet-services-fuel.jpg`,
  fleetEntry1: `${REN}/fleet-services-entry-1.jpg`,
  fleetEntry2: `${REN}/fleet-services-entry-2.jpg`,
  fleetExit: `${REN}/fleet-services-exit.jpg`,
  crossDock: `${REN}/cross-dock.jpg`,
  truckWashEntry: `${REN}/truck-wash-entry.jpg`,
  truckWashExit: `${REN}/truck-wash-exit.jpg`,
  // People
  driverInCab: `${PHO}/people-driver-in-cab.jpg`,
  leadershipGroup: `${PHO}/people-leadership-group.jpg`,
};

export type Stat = { big: string; label: string };
export type Step = { title: string; blurb: string };
export type Feature = { title: string; tag: string; blurb: string };
export type FormField = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  half?: boolean;
};

export type Audience = {
  key: AudienceKey;
  navLabel: string;
  accent: string;
  accentDark: string;
  heroImage: string;
  memphisImage: string;
  roadImage?: string; // full-bleed context image behind the road divider
  gallery?: string[]; // RENDER_GROUPS keys to show in a "Take the Tour" band
  galleryTitle?: string;

  // HERO
  eyebrow: string;
  heroPunch: string; // the H1 (real punchy line from the HTML pages)
  sub: string; // Caveat script line
  desc: string;
  heroNote: string;
  scrollHint: string;

  // STAT STRIP
  stats: Stat[];

  // PROBLEM
  problem: { kicker: string; headline: string; body: string; counters: Stat[] };

  // ROAD DIVIDER
  road: { eyebrow: string; headline: string; sub: string };

  // HOW IT WORKS
  how: { eyebrow: string; headline: string; steps: Step[] };

  // CAPABILITIES (non-drivers) — from the brand artifact
  featuresEyebrow: string;
  featuresTitle: string;
  features: Feature[];

  // AMENITIES (drivers only)
  amenities?: {
    eyebrow: string;
    headline: string;
    intro: string;
    tiles: { title: string; blurb: string; img: string }[];
    footnote: string;
  };

  // OUTRIDERS / JOIN-DRIVERS content (drivers only) — story, free-membership
  // path, recreated services + fleet menus, and the monthly webinar band.
  outriders?: {
    story: { eyebrow: string; headline: string; image: string; paras: string[] };
    services: { eyebrow: string; headline: string; intro: string; items: { name: string; note: string }[] };
    fleet: { eyebrow: string; headline: string; intro: string; items: { name: string; note: string }[] };
    join: {
      eyebrow: string;
      headline: string;
      steps: { title: string; blurb: string }[];
      waysTitle: string;
      ways: { title: string; blurb: string; tone: "fuel" | "steel" | "gold" }[];
    };
    webinar: { eyebrow: string; headline: string; body: string; video: string };
  };

  // SIGNATURE BANDS (one per lane — see AudiencePage). All optional.
  // carriers — "Build vs Belong" cost ledger
  ledger?: {
    kicker: string;
    headline: string;
    buildLabel: string;
    flexLabel: string;
    rows: { label: string; build: string; flex: string }[];
    note?: string;
  };
  // brokers / shippers — relay / chain-of-custody lane diagram
  lanes?: {
    kicker: string;
    headline: string;
    steps: { label: string; sub: string }[];
  };
  // government — the Modern-Day Pony Express timeline
  timeline?: {
    kicker: string;
    headline: string;
    entries: { year: string; title: string; blurb: string }[];
  };
  // carriers / government — SOLO vs RELAY utilization comparison
  relay?: {
    kicker: string;
    headline: string;
    rows: { label: string; solo: string; relay: string }[];
    note?: string;
  };

  // WEST MEMPHIS PROOF
  memphis: {
    kicker: string;
    headline: string;
    body: string;
    stats: Stat[];
    address: string;
    addressSub: string;
  };

  // LEAD FORM
  form: {
    eyebrow: string;
    headline: string;
    body: string;
    fields: FormField[];
    consent?: string;
    success: { headline: string; body: string };
  };

  // CLOSER (used on the homepage router blurb too)
  closerHeadline: string;
  closerBody: string;
};

export type AudienceKey =
  | "drivers"
  | "carriers"
  | "brokers"
  | "shippers"
  | "government";

export const AUDIENCE_ORDER: AudienceKey[] = [
  "drivers",
  "carriers",
  "brokers",
  "shippers",
  "government",
];

const baseFields = (extra: FormField[]): FormField[] => [
  { name: "firstName", label: "First name", required: true, half: true },
  { name: "lastName", label: "Last name", half: true },
  { name: "phone", label: "Mobile", type: "tel", required: true, half: true },
  { name: "email", label: "Email", type: "email", half: true },
  ...extra,
];

export const audiences: Record<AudienceKey, Audience> = {
  drivers: {
    key: "drivers",
    navLabel: "Drivers",
    accent: "#F07820",
    accentDark: "#C85A12",
    heroImage: PHOTOS.skydeckSunset,
    memphisImage: PHOTOS.clubAerial,
    roadImage: PHOTOS.truckSunset,
    gallery: ["club", "skydeck"],
    galleryTitle: "Tour The Outriders Club.",
    eyebrow: "OneHome by LineHaul Station",
    heroPunch: "You're home ~60 days a year. You're paying for 365.",
    sub: "Everywhere the road takes you.",
    desc: "A home you only pay for on the days you're actually in it. OneHome is a resort-quality, gated community built for tractor-trailers that could save you $15,000 or more a year.",
    heroNote: "Driver membership is 100% free — agree to the Code of Conduct and you're in.",
    scrollHint: "See what an empty home really costs",
    stats: [
      { big: "$20K+", label: "Average yearly housing cost for a home you barely use" },
      { big: "$14K+", label: "Potential annual savings with OneHome" },
      { big: "<100", label: "Days a year most drivers actually use their home" },
      { big: "$19/day", label: "You only pay for the days you use it" },
    ],
    problem: {
      kicker: "The math nobody runs",
      headline: "You rent a home you're barely in",
      body: "Long-haul means you live on the road. The apartment back home gets billed every month whether you sleep there or not.",
      counters: [
        { big: "<100", label: "Nights a year most over-the-road drivers actually spend at home." },
        { big: "365", label: "Days that home still bills you — rent, utilities, the works." },
        { big: "$360", label: "What a single night home really costs when you do the division." },
      ],
    },
    road: {
      eyebrow: "OneHome by LineHaul Station",
      headline: "Everywhere the road takes you",
      sub: "A Home Hub waiting at the end of every run.",
    },
    how: {
      eyebrow: "How it works",
      headline: "A home that moves with your run",
      steps: [
        { title: "Pay only for days used", blurb: "No paying twelve months for a place you sleep in two. Your membership scales to how often you're really home." },
        { title: "A network of Home Hubs", blurb: "Premium, secure Home Hubs in key freight markets. Walk in furnished, fed, and rested — wherever the road drops you." },
        { title: "Month-to-month", blurb: "No mortgage, no down payment, no security deposit, no lease trap. Stay as long as the run lasts, leave when it changes." },
        { title: "Furnished & staffed", blurb: "Real beds, real showers, real food, real security. The dignity of a home base without the cost of owning one." },
      ],
    },
    featuresEyebrow: "",
    featuresTitle: "",
    features: [],
    amenities: {
      eyebrow: "Inside the Home Hub",
      headline: "Everything home should be",
      intro: "Tap into a 25,000 sq ft private drivers club at every Hub.",
      tiles: [
        { title: "Member's Grill", blurb: "Hot meals, real cooking — no truck-stop microwave.", img: PHOTOS.clubDining },
        { title: "Sky Deck", blurb: "Open-air lounge to decompress after the haul.", img: PHOTOS.skydeck },
        { title: "Digital Den", blurb: "Fast Wi-Fi, screens, quiet desks for the paperwork.", img: PHOTOS.gamerDen1 },
        { title: "Fitness Studio", blurb: "Stay road-strong with real equipment.", img: PHOTOS.fitness },
        { title: "Laundry & More", blurb: "Fresh clothes without losing a day.", img: PHOTOS.laundry },
        { title: "Gear Shop", blurb: "Parts, supplies, and road essentials on site.", img: PHOTOS.gearShop },
        { title: "Resort Pool & Spa", blurb: "Recover like the miles are worth it.", img: PHOTOS.waterFeature },
        { title: "Camp K9", blurb: "Your co-pilot gets cared for too.", img: PHOTOS.clubPatio },
      ],
      footnote: "Members call the 25,000 sq ft private drivers club “The Rig Carlton.”",
    },
    outriders: {
      story: {
        eyebrow: "The Outriders",
        headline: "Welcome to the Club",
        image: PHOTOS.clubLoungePhoto,
        paras: [
          "Trucking is a great story of entrepreneurship and perseverance.",
          "There is a long legacy of immense pride by truckers that wanted to be the best version of themselves while serving the needs of America with great dignity. LineHaul Station celebrates their independence and success by embracing the very essence of what made trucking appealing to all “Knights of the Highway”.",
          "That’s why we’ve created the Outriders Club, a place for great drivers to relax, unwind, reward themselves and rejuvenate – all in the interest of better health and happiness. The exclusive driver’s club is representative of our commitment to reinvigorate the spirit of the American truck driver as hard-working patriots that deserve our support and respect.",
          "The name “Outriders” is synonymous with a mission to help “lead, guide, and protect” the people we work with and the companies that depend on us each and every day.",
        ],
      },
      services: {
        eyebrow: "The Outriders Club",
        headline: "Services To Suit You",
        intro: "Everything a driver needs to relax, recover, and roll out fresh — inside the 25,000 sq ft private Outriders Club at every Hub.",
        items: [
          { name: "Member’s Grill & Sports Bar", note: "Hot, real cooking and a place to catch the game — no truck-stop microwave." },
          { name: "Rooftop Sky Deck", note: "Open-air lounge to decompress after the haul." },
          { name: "Overdrive Fitness Studio", note: "Real equipment to stay road-strong." },
          { name: "Private Shower Suites", note: "Clean and private, ready the minute you pull in." },
          { name: "The Gamer’s Den", note: "Screens, consoles, and a place to unwind." },
          { name: "Barbershop", note: "Look sharp before the next run." },
          { name: "Gear Shop", note: "Parts, supplies, and road essentials on site." },
          { name: "Laundry Center", note: "Fresh clothes without losing a day." },
          { name: "Resort Pool & Spa", note: "Recover like the miles are worth it." },
          { name: "Digital Den & Business Center", note: "Fast Wi-Fi and quiet desks for the paperwork." },
          { name: "Camp K9", note: "Your co-pilot gets cared for too." },
          { name: "Members’ Lounge", note: "Comfortable space to relax with fellow Outriders." },
        ],
      },
      fleet: {
        eyebrow: "LH Fleet Services",
        headline: "An Ounce Of Prevention",
        intro: "Keep your truck road-ready while you rest — on-site service at fair labor rates, right at the Hub.",
        items: [
          { name: "On-Site Maintenance", note: "Routine service handled at the Hub — don’t lose a day to a shop across town." },
          { name: "Inspection", note: "DOT-ready inspections that keep you compliant and rolling." },
          { name: "Preventive Maintenance", note: "Scheduled PM that catches problems before they catch you." },
          { name: "Repair", note: "An on-site repair partner to get you back on the road fast." },
          { name: "State-Of-The-Art Truck Wash", note: "A professional wash bay to keep the rig sharp." },
          { name: "Fair Labor Rates", note: "Honest pricing — service that respects the driver’s wallet." },
        ],
      },
      join: {
        eyebrow: "Free membership",
        headline: "Nothing To Lose / Everything To Gain",
        steps: [
          { title: "Free Driver Membership", blurb: "The Driver Membership at LineHaul Station is always 100% Free to all drivers, you simply need to agree to the Code of Conduct and you’ll be cleared to use any Hub across the network." },
          { title: "Create Your Profile", blurb: "The first step is to take advantage of your Driver Profile and start to unlock the many features that come with your free membership. We’ll give you special access to career-changing information." },
          { title: "Get Others Excited!", blurb: "We have three ways that drivers can gain access to Space. Drivers can EARN FREE Space with our referral program, PURCHASE Space directly, or REQUEST passes from your carrier or broker." },
        ],
        waysTitle: "Space",
        ways: [
          { title: "Earn Your Space", tone: "fuel", blurb: "We are offering Drivers a fantastic way to earn a Lifetime of FREE Space simply by sponsoring the membership of Ten great drivers, who then sponsor Ten drivers of their own. (conditions apply)" },
          { title: "Request Your Space", tone: "steel", blurb: "We give you all the tools you need to either get your current carrier to support you with space, or access ‘The LineHaul List’ to find a carrier, fleet, or brokerage looking for a driver like you!" },
          { title: "Purchase Your Space", tone: "gold", blurb: "We’re offering special pricing to ‘anyone with a steering wheel in their hand’! Just contact your Membership Director and we can guide you in purchasing FlexSpace." },
        ],
      },
      webinar: {
        eyebrow: "We’re ready to roll",
        headline: "We’re Ready To Roll!",
        body: "Every new member of LineHaul Station will have the opportunity to join the Monthly Webinars that will be quick meetings with Founder & CEO Jeff Swenson about the latest news, and what drivers can do to get the most out of their FREE MEMBERSHIP as we get close to the network launch!",
        video: "https://player.vimeo.com/video/1055748426?title=0&byline=0&portrait=0",
      },
    },
    memphis: {
      kicker: "Open now",
      headline: "The first Home Hub: West Memphis",
      body: "One block off the I-40 / I-55 interchange — the busiest freight crossroads in America. Your bed, your shower, your people, right where your loads already take you.",
      stats: [
        { big: "1 blk", label: "from I-40 / I-55" },
        { big: "24/7", label: "member access" },
        { big: "Now", label: "accepting founders" },
      ],
      address: "1212 MLK Dr",
      addressSub: "West Memphis, AR — I-40 / I-55",
    },
    form: {
      eyebrow: "100% free · Outriders Club",
      headline: "Claim your free driver membership",
      body: "Full Outriders Club access, your Home Hub, and OneHome pricing. No cost, no catch.",
      fields: baseFields([
        { name: "homeBase", label: "Home base / region", half: true },
        { name: "carrier", label: "Carrier (optional)", half: true },
      ]),
      consent: "I agree to the Driver Code of Conduct — that's all it takes.",
      success: {
        headline: "You're in — welcome to the club",
        body: "Your free membership is on its way. Watch your phone to activate your Outriders Club access and set up your Home Hub.",
      },
    },
    closerHeadline: "A Massive Win For The Smartest Truckers.",
    closerBody:
      "OneHome is targeting markets across the country and prioritizing locations based on driver demand. Have a voice on where we build — and get on the list early.",
  },

  carriers: {
    key: "carriers",
    navLabel: "Carriers",
    accent: "#4878A8",
    accentDark: "#2E5070",
    heroImage: PHOTOS.fleetEntry1,
    memphisImage: PHOTOS.buildingAerial,
    roadImage: PHOTOS.truckSunset2,
    gallery: ["fleet"],
    galleryTitle: "Inside LH Fleet Services.",
    eyebrow: "FlexSpace by LineHaul Station",
    heroPunch: "Terminal access without the $15M build.",
    sub: "Built for Today. Designed for Tomorrow.",
    desc: "Secure, shared-use terminal space in the markets you run. Pay only for the space you use — skip the land, the construction, and the overhead.",
    heroNote: "96% of carriers run fewer than 20 trucks. FlexSpace is built for exactly that.",
    scrollHint: "See what a terminal really costs",
    stats: [
      { big: "$15M", label: "To build a typical 90-space terminal" },
      { big: "20%", label: "Average occupancy at most terminals" },
      { big: "96%", label: "Of carriers run fewer than 20 trucks" },
      { big: "$19/day", label: "Member dues — vs $50K+ per occupied space/yr" },
    ],
    problem: {
      kicker: "The build nobody can afford",
      headline: "Owning a terminal is out of reach",
      body: "Land, construction, security, staff, and maintenance — a private terminal runs into the millions before a single truck rolls in.",
      counters: [
        { big: "$15M", label: "To build and equip a terminal of your own." },
        { big: "96%", label: "Of carriers operate fewer than 20 trucks." },
        { big: "$0", label: "Land, down payment, or construction with FlexSpace." },
      ],
    },
    road: {
      eyebrow: "FlexSpace by LineHaul Station",
      headline: "A terminal network you don't have to build",
      sub: "Secure space waiting in the markets you run.",
    },
    how: {
      eyebrow: "How it works",
      headline: "Space that scales with your fleet",
      steps: [
        { title: "Pay for what you use", blurb: "Guest Pass by the day, membership for regulars, or a dedicated space. Match spend to how often you're really there." },
        { title: "A network of Hubs", blurb: "Secure, staffed terminals in key freight markets. Drop, hook, park, and roll without owning an inch of land." },
        { title: "No build, no lease trap", blurb: "No land to buy, no construction, no long lease. Scale up or down as your lanes change." },
        { title: "On-site support", blurb: "Repair partner, fuel, and services on site, so trucks keep moving without detours." },
      ],
    },
    relay: {
      kicker: "Solo vs. Relay",
      headline: "One Truck. Triple The Miles.",
      rows: [
        { label: "Miles per truck / year", solo: "~80,000", relay: "300,000+" },
        { label: "Asset utilization", solo: "1×", relay: "3–4×" },
        { label: "Driver home time", solo: "Weeks out", relay: "Home daily" },
      ],
      note: "Relay turns one truck into three — and gets your drivers home every night.",
    },
    ledger: {
      kicker: "Build vs. Belong",
      headline: "Build Your Own. Or Belong To The Network.",
      buildLabel: "Build Your Own Terminal",
      flexLabel: "Join FlexSpace",
      rows: [
        { label: "Upfront capital", build: "≈ $15M", flex: "$0 down" },
        { label: "Time to first truck", build: "18–24 months", flex: "Same week" },
        { label: "Typical occupancy", build: "≈ 20% utilized", flex: "Pay per use" },
        { label: "Staff · security · upkeep", build: "Your payroll", flex: "Included" },
        { label: "When lanes change", build: "Sell the building", flex: "Scale up or down" },
      ],
      note: "96% of carriers run fewer than 20 trucks. FlexSpace is built for exactly that.",
    },
    featuresEyebrow: "First-Class. Full-Service. Member-Only.",
    featuresTitle: "What You Get",
    features: [
      { title: "Gated Parking", tag: "24/7 · Access-Controlled", blurb: "Private, member-only gated access with state-of-the-art surveillance and extra-wide drive lanes for tractor-trailers." },
      { title: "The Outriders Club", tag: "25,000+ sq ft", blurb: "A private drivers club with restaurant, fitness, shower suites, gaming, rooftop sky deck, barbershop, and laundry." },
      { title: "LH Fleet Services", tag: "Maintenance · Repair · Wash", blurb: "On-site inspection, preventive maintenance, repair, and a state-of-the-art truck wash at fair labor rates." },
      { title: "Cross-Dock Capabilities", tag: "Staging · Transfers", blurb: "Load shifts, trailer transfers, and staging capacity at each Hub." },
      { title: "Digital Pass System", tag: "App · Web Booking", blurb: "Buy bundles of passes and distribute digitally to any driver. Book up to 30 days in advance." },
      { title: "Three Ways In", tag: "$59/day · $19/day · $395/mo", blurb: "Guest Pass, Proprietary Membership, or Dedicated Space — one premium network, three levels of access." },
    ],
    memphis: {
      kicker: "Open now",
      headline: "The first Hub: West Memphis",
      body: "One block off the I-40 / I-55 interchange — the busiest freight crossroads in America, with roughly 60,000 trucks a day. Secure, staffed terminal space with an on-site repair partner, right where your loads already run.",
      stats: [
        { big: "1 blk", label: "from I-40 / I-55" },
        { big: "24/7", label: "secured access" },
        { big: "Now", label: "accepting founders" },
      ],
      address: "1212 MLK Dr",
      addressSub: "West Memphis, AR — I-40 / I-55",
    },
    form: {
      eyebrow: "FlexSpace for Carriers",
      headline: "Get FlexSpace pricing for your fleet",
      body: "Tell us where you run and how many trucks need access. We'll send FlexSpace pricing for your fleet and the Hubs that fit your lanes.",
      fields: baseFields([
        { name: "lane", label: "Primary lane / region", half: true },
        { name: "fleet", label: "Fleet size (trucks)", half: true },
      ]),
      success: {
        headline: "Thanks — we'll be in touch",
        body: "We'll reach out with FlexSpace pricing for your fleet and the Hubs that fit your lanes. Watch your phone.",
      },
    },
    closerHeadline: "Something BIG Is Coming To Trucking.",
    closerBody:
      "West Memphis is open and phase-one expansion is underway in Dallas-Fort Worth, Atlanta, Indianapolis, Chicago, and Carlisle. See how FlexSpace can work for your fleet.",
  },

  brokers: {
    key: "brokers",
    navLabel: "Brokers",
    accent: "#7EC8E3",
    accentDark: "#3E8AB0",
    heroImage: PHOTOS.highwayInterchange,
    memphisImage: PHOTOS.crossDock,
    roadImage: PHOTOS.highwayInterchange,
    eyebrow: "For freight brokers & 3PLs",
    heroPunch: "Cover every load with a network behind you.",
    sub: "Premium terminal access in every key market.",
    desc: "LineHaul Station gives brokers physical positioning in the markets that matter — reliable drop space, carrier-friendly Terminals, and a relay network that keeps freight moving and your carriers coming back.",
    heroNote: "Built for the brokers and 3PLs who keep America's freight covered.",
    scrollHint: "Why coverage is the whole game",
    stats: [
      { big: "96%", label: "Of carriers run fewer than 20 trucks — no terminals of their own" },
      { big: "$2.41", label: "Relay cost per mile — vs. $2.91 for-hire" },
      { big: "3–4×", label: "Asset utilization on a relay network" },
      { big: "30-day", label: "Advance terminal-pass booking, by app or web" },
    ],
    problem: {
      kicker: "Why loads fall through",
      headline: "Your Capacity Is Only As Good As Their Yard.",
      body: "96% of carriers run fewer than 20 trucks and own no terminal infrastructure — so when a lane has nowhere safe to drop, detention and dwell wreck the math and your pickup windows stop being promises. Brokers win on capacity and positioning. That takes real ground.",
      counters: [
        { big: "96%", label: "Of carriers run fewer than 20 trucks — and no terminals." },
        { big: "60K", label: "Trucks past our West Memphis Hub every day." },
        { big: "24/7", label: "Gated drop space and on-site service, around the clock." },
      ],
    },
    road: {
      eyebrow: "For freight brokers & 3PLs",
      headline: "Coverage at every link in the chain",
      sub: "A Terminal waiting at the end of every run.",
    },
    how: {
      eyebrow: "How it works",
      headline: "Infrastructure your competitors can't quote.",
      steps: [
        { title: "Capacity carriers want", blurb: "Secure drop space, repair, fuel, and amenities make your loads the easy yes — and keep carriers coming back." },
        { title: "Positioned on the corridors", blurb: "Hubs on major freight lanes mean coverage where the volume actually moves." },
        { title: "Real-time visibility", blurb: "See yard and asset status before you promise a pickup window to your shipper." },
        { title: "Fewer detention surprises", blurb: "On-site service and live status cut the dwell and detention that wreck your margins." },
      ],
    },
    lanes: {
      kicker: "Coverage, mapped",
      headline: "A Relay Network Behind Every Load.",
      steps: [
        { label: "Origin", sub: "Pickup secured on the lane" },
        { label: "Staging", sub: "Gated drop space, 24/7" },
        { label: "Cross-Dock", sub: "Trailer transfer at the Hub" },
        { label: "Relay", sub: "Fresh driver, same freight" },
        { label: "Delivery", sub: "On the promised window" },
      ],
    },
    relay: {
      kicker: "Relay economics",
      headline: "The Numbers Your Competitors Can’t Quote.",
      rows: [
        { label: "Cost per mile", solo: "$2.91", relay: "$2.41" },
        { label: "Asset utilization", solo: "1×", relay: "3–4×" },
        { label: "Miles per truck / year", solo: "~80,000", relay: "300,000+" },
      ],
      note: "A relay network moves more freight per truck at a lower cost per mile — capacity you can promise and margins detention can’t erode.",
    },
    featuresEyebrow: "What LineHaul Station offers",
    featuresTitle: "Built For Freight Flow",
    features: [
      { title: "Cross-Dock At Every Hub", tag: "Transfers · Staging", blurb: "Load shifts and trailer transfers built into each terminal — keep freight moving between carriers." },
      { title: "Digital Pass Distribution", tag: "Instant · Shareable", blurb: "Issue terminal access to any carrier digitally and book capacity up to 30 days out." },
      { title: "National Hub Network", tag: "Key Markets", blurb: "West Memphis now, with Dallas-Fort Worth, Atlanta, Indianapolis, Chicago, and Carlisle next." },
      { title: "Carrier-Grade Amenities", tag: "Outriders Club", blurb: "The terminal experience that keeps the best carriers — and their drivers — hauling your freight." },
    ],
    memphis: {
      kicker: "Open now",
      headline: "The first Hub: West Memphis",
      body: "One block off the I-40 / I-55 interchange — the busiest freight crossroads in America, with roughly 60,000 trucks a day. Drop space, on-site repair, fuel, and amenities right where your loads already move.",
      stats: [
        { big: "1 blk", label: "from I-40 / I-55" },
        { big: "24/7", label: "carrier access" },
        { big: "Now", label: "accepting partners" },
      ],
      address: "1212 MLK Dr",
      addressSub: "West Memphis, AR — I-40 / I-55",
    },
    form: {
      eyebrow: "For freight brokers & 3PLs",
      headline: "See where we give you coverage",
      body: "Tell us your primary markets and lanes, and we'll show you where LineHaul Station gives you physical positioning, drop space, and carrier-friendly Terminals.",
      fields: baseFields([
        { name: "markets", label: "Primary markets / lanes", half: true },
        { name: "company", label: "Brokerage / company", half: true },
      ]),
      success: {
        headline: "Thanks — we'll be in touch",
        body: "A member of the LineHaul Station team will reach out to map where we give your freight coverage.",
      },
    },
    closerHeadline: "Connect Your Carriers To The Network.",
    closerBody:
      "Bring premium terminal access to the carriers you rely on. West Memphis is open and phase-one expansion is underway.",
  },

  shippers: {
    key: "shippers",
    navLabel: "Shippers",
    accent: "#18A848",
    accentDark: "#0F7A33",
    heroImage: PHOTOS.buildingAerial,
    memphisImage: PHOTOS.crossDock,
    roadImage: PHOTOS.citySkyline,
    eyebrow: "For shippers & supply chains",
    heroPunch: "A supply chain that doesn't stall at the yard.",
    sub: "A national network of Private Terminals.",
    desc: "LineHaul Station gives shippers dependable terminal capacity, lower private-fleet overhead, and real-time visibility — so freight shows up when it's supposed to.",
    heroNote: "Built for shippers who can't afford a stalled supply chain.",
    scrollHint: "What an unreliable yard really costs",
    stats: [
      { big: "33", label: "Major markets across the planned network" },
      { big: "50+", label: "Hubs for in-route, secure trailer staging" },
      { big: "1,035", label: "Tractor / trailer / flex spaces per Hub" },
      { big: "24/7", label: "Gated, surveilled facility access" },
    ],
    problem: {
      kicker: "Where the supply chain stalls",
      headline: "“Don’t Be Early. Don’t Be Late. On Time? Please Wait.”",
      body: "On-site trailer parking runs out, yards overcrowd, and carriers show up early, late, or idling at the gate — racking up detention and dwell while just-in-time arrival stays out of reach. The fix isn’t a bigger yard. It’s secure staging space in route.",
      counters: [
        { big: "Detention", label: "Hours billed back when the yard has no room to take the trailer." },
        { big: "Dwell", label: "Freight sitting idle instead of moving toward its dock window." },
        { big: "Overcrowding", label: "On-site parking limits that cap how much you can stage." },
      ],
    },
    road: {
      eyebrow: "LineHaul Station",
      headline: "Everywhere your freight needs to be",
      sub: "A Terminal waiting at the end of every run.",
    },
    how: {
      eyebrow: "The solution",
      headline: "Faster. Better. Cheaper.",
      steps: [
        { title: "In-route trailer staging", blurb: "Secure, gated staging across 33 major markets lets carriers stage trailers close to the dock — so they arrive just-in-time, not early, late, or idling at your gate." },
        { title: "Faster speed of delivery", blurb: "Relay-ready Hubs keep freight moving 24/7 across the country instead of waiting on one driver and one set of Hours-of-Service." },
        { title: "Better for everyone", blurb: "Less detention and dwell for your carriers, better conditions for their drivers, and relief for your overcrowded yards." },
        { title: "Cheaper cost of trucking", blurb: "Shared infrastructure and a relay model take cost out of every mile — savings that flow straight back to your landed cost." },
      ],
    },
    lanes: {
      kicker: "Chain of custody",
      headline: "Freight That Never Loses The Thread.",
      steps: [
        { label: "Pickup", sub: "Loaded and logged" },
        { label: "Secure Yard", sub: "Gated, surveilled capacity" },
        { label: "Cross-Dock", sub: "Staged and transferred" },
        { label: "Relay", sub: "Moving 24/7 across Hubs" },
        { label: "Dock Window", sub: "Delivered on schedule" },
      ],
    },
    relay: {
      kicker: "What the relay changes",
      headline: "Faster Freight, Lower Landed Cost.",
      rows: [
        { label: "Miles per truck / year", solo: "~80,000", relay: "300,000+" },
        { label: "Asset utilization", solo: "1×", relay: "3–4×" },
        { label: "Cost of trucking", solo: "Today", relay: "~25% lower" },
      ],
      note: "More freight per truck and roughly 25% lower cost — relay savings that flow straight back to your landed cost.",
    },
    featuresEyebrow: "What LineHaul Station offers",
    featuresTitle: "A Network Built To Deliver",
    features: [
      { title: "In-Route Trailer Staging", tag: "33 Markets · 50+ Hubs", blurb: "Secure, in-route staging close to your docks — so you can build just-in-time arrival programs your carriers can actually hit." },
      { title: "Gated, High-Security Access", tag: "24/7 Surveillance", blurb: "Private, member-only Terminals with controlled access and state-of-the-art surveillance for every trailer." },
      { title: "Less Detention & Dwell", tag: "Faster Turns", blurb: "Somewhere to drop and stage means fewer hours billed back and freight that keeps moving toward the dock window." },
      { title: "Scalable, Sustainable Capacity", tag: "50-Acre Hubs", blurb: "50-acre Hubs with roughly 1,035 spaces each — expanding supply-chain capacity with less deadhead, idling, and emissions." },
    ],
    memphis: {
      kicker: "Open now",
      headline: "The first Hub: West Memphis",
      body: "One block off the I-40 / I-55 interchange — the busiest freight crossroads in America, with roughly 60,000 trucks passing daily. Secure capacity and on-site repair, right where your freight already moves.",
      stats: [
        { big: "1 blk", label: "from I-40 / I-55" },
        { big: "24/7", label: "member access" },
        { big: "On-site", label: "repair & service" },
      ],
      address: "1212 MLK Dr",
      addressSub: "West Memphis, AR — I-40 / I-55",
    },
    form: {
      eyebrow: "For shippers & supply chains",
      headline: "Put dependable capacity behind your freight",
      body: "Tell us your lanes and facilities, and we'll show you where LineHaul Station gives your supply chain dependable terminal capacity, lower overhead, and real-time visibility.",
      fields: baseFields([
        { name: "lanes", label: "Primary lanes / facilities", half: true },
        { name: "company", label: "Company", half: true },
      ]),
      success: {
        headline: "Thanks — we'll be in touch",
        body: "We'll reach out to show how LineHaul Station keeps your freight moving — dependable capacity, lower cost, and visibility.",
      },
    },
    closerHeadline: "Build Your Freight On A Stronger Network.",
    closerBody:
      "Secure terminal infrastructure and relay-ready Hubs across the country. West Memphis is open now.",
  },

  government: {
    key: "government",
    navLabel: "Government",
    accent: "#C8A060",
    accentDark: "#8C6E3A",
    heroImage: PHOTOS.courthouse,
    memphisImage: PHOTOS.groundbreaking,
    roadImage: PHOTOS.highwayInterchange,
    eyebrow: "For government & infrastructure",
    heroPunch: "Freight infrastructure that strengthens America.",
    sub: "Freight moves 24/7. Drivers get home daily.",
    desc: "LineHaul Station builds real, shared-use terminal infrastructure — strengthening supply-chain resilience, lowering freight costs, getting drivers home safely, and supporting American manufacturing.",
    heroNote: "A real-estate-based solution to a national logistics problem.",
    scrollHint: "The infrastructure case",
    stats: [
      { big: "Up to 30%", label: "Lower operating cost on a relay network" },
      { big: "3–4×", label: "Asset utilization vs. solo over-the-road" },
      { big: "$2.41", label: "Relay cost per mile — vs. $2.91 for-hire" },
      { big: "Daily", label: "Drivers home with their families every day" },
    ],
    problem: {
      kicker: "The big problems",
      headline: "America Can't Park Its Way Out Of This.",
      body: "There are only 312,962 public and private truck spaces for more than a million over-the-road trucks a day. The driver pool is retiring, congestion keeps climbing, and freight theft, detention, and deadhead emissions all ride along. You can build more parking — or rethink the system.",
      counters: [
        { big: "312,962", label: "Public + private truck spaces for 1,000,000+ daily trucks." },
        { big: "54", label: "Average driver age; just 7% are women, and the pool is retiring." },
        { big: "$94.6B", label: "Annual cost of trucking congestion across the country." },
      ],
    },
    road: {
      eyebrow: "Infrastructure & Government",
      headline: "Infrastructure where the freight already moves",
      sub: "A network of Terminals and Hubs at the nation's busiest crossroads.",
    },
    how: {
      eyebrow: "The solution",
      headline: "Relay Solves The Big Problems.",
      steps: [
        { title: "Safer roads", blurb: "Slip-seat, two-shift trucks on a hub-and-spoke model mean rested, alert drivers, more night moves off the peak, and far fewer Hours-of-Service violations." },
        { title: "Better jobs", blurb: "Drivers home daily, more equitable pay, and lower turnover — a freight career the next generation will actually choose." },
        { title: "Decarbonization", blurb: "Less deadhead and idling, fewer empty miles, and short relay legs that battery-electric trucks can realistically run." },
        { title: "Supply-chain resilience", blurb: "A national network of secure, shared-use Terminals keeps freight moving through disruption and strengthens American manufacturing." },
      ],
    },
    relay: {
      kicker: "Solo vs. Relay",
      headline: "The Efficiency Of A National Relay.",
      rows: [
        { label: "Cost per mile", solo: "$2.91", relay: "$2.41" },
        { label: "Miles per truck / year", solo: "~80,000", relay: "300,000+" },
        { label: "Asset utilization", solo: "1×", relay: "3–4×" },
        { label: "Driver home time", solo: "Weeks out", relay: "Home daily" },
      ],
      note: "Up to 30% lower operating cost. Private carriage runs $3.62 a mile and for-hire $2.91 — a relay brings it to $2.41, with drivers home every night.",
    },
    timeline: {
      kicker: "The Modern-Day Pony Express",
      headline: "Relay Isn't New. The Scale Is.",
      entries: [
        { year: "1860", title: "The Pony Express", blurb: "Riders moved mail coast-to-coast by handing off at relay stations — no single rider, no single point of failure." },
        { year: "Today", title: "The Bottleneck", blurb: "Truck-parking shortages, congested yards, and exhausted drivers raise cost and risk across the freight system." },
        { year: "Now", title: "LineHaul Station", blurb: "A privately built national relay: trailers hand off Hub-to-Hub, freight moves 24/7, and drivers get home every day." },
        { year: "Next", title: "National Resilience", blurb: "Interchange-sited Hubs scaling across key corridors — at roughly $40K per space against a $196K public benchmark." },
      ],
    },
    featuresEyebrow: "What LineHaul Station offers",
    featuresTitle: "Built For The Next Century Of Freight",
    features: [
      { title: "Full-Service Regional Hubs", tag: "50 Acres · 1,035 Spaces", blurb: "Every Hub: roughly 1,035 tractor, trailer, and flex spaces on a 50-acre regional site — high-security surveillance, cross-dock, a full-service repair shop, truck wash, and a private drivers club." },
      { title: "A National Hub Network", tag: "50+ Hubs · Key Markets", blurb: "Interchange-sited Terminals connecting major markets — West Memphis at the I-40 / I-55 crossing leads toward a network of 50+ Hubs." },
      { title: "Built Far Below Public Cost", tag: "$40K vs $196K / Space", blurb: "Privately funded, real-estate-based infrastructure at roughly $40K per space against a $196K public benchmark — the public sector builds on a working model, not a pilot." },
      { title: "Driver Welfare Standards", tag: "Dignity · Safety", blurb: "Resort-quality facilities that raise the standard of life and safety for the truckers the freight system depends on." },
    ],
    memphis: {
      kicker: "Live now",
      headline: "Proof on the ground: West Memphis",
      body: "One block off the I-40 / I-55 interchange — roughly 60,000 trucks a day, the busiest freight crossroads in America. 133 spaces live and scaling toward 600, with on-site repair. A working model of freight infrastructure the public sector can build on.",
      stats: [
        { big: "~60K", label: "trucks/day at I-40 / I-55" },
        { big: "133→600", label: "spaces live, scaling" },
        { big: "On-site", label: "repair & service" },
      ],
      address: "1212 MLK Dr",
      addressSub: "West Memphis, AR — I-40 / I-55",
    },
    form: {
      eyebrow: "For government & infrastructure",
      headline: "Discuss the infrastructure case",
      body: "Tell us your agency and focus, and we'll follow up with the freight-relay infrastructure brief and a working tour of the West Memphis Hub.",
      fields: baseFields([
        { name: "agency", label: "Agency / organization", half: true },
        { name: "role", label: "Role / title", half: true },
      ]),
      success: {
        headline: "Thanks — we'll be in touch",
        body: "A member of the LineHaul Station team will follow up to discuss the freight-relay infrastructure case and a West Memphis tour.",
      },
    },
    closerHeadline: "Infrastructure For The Future Of Freight.",
    closerBody:
      "A privately built national relay network that moves freight 24/7 and gets American truckers home every day. Let's discuss how it serves the national interest.",
  },
};
