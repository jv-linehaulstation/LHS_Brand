// LineHaul Station — full audience content, ported from the static HTML pages
// (drivers/carriers/brokers/shippers/government.html) and the brand "Landing
// Pages" artifact. Copy is preserved as written by the team; only formatting
// (curly→straight quotes where needed) is normalized.

export const PHOTOS = {
  // Real LineHaul Station building renders (optimized from BUILDING PREVIEWS).
  buildingFront: "/assets/photos/building-front.jpg",
  buildingAerial: "/assets/photos/building-aerial.jpg",
  buildingSide: "/assets/photos/building-side.jpg",
  building2: "/assets/photos/building-2.jpg",
  building3: "/assets/photos/building-3.jpg",
  building4: "/assets/photos/building-4.jpg",
  road: "/assets/photos/road-sunset.jpg",
  // Aliases kept so existing references resolve to the real renders.
  terminalDay: "/assets/photos/building-front.jpg",
  terminalDusk: "/assets/photos/building-side.jpg",
  terminalRendering: "/assets/photos/building-2.jpg",
  clubLounge: "/assets/photos/building-aerial.jpg",
  clubShop: "/assets/photos/building-3.jpg",
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
    heroImage: PHOTOS.terminalDay,
    memphisImage: PHOTOS.clubLounge,
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
        { title: "Member's Grill", blurb: "Hot meals, real cooking — no truck-stop microwave.", img: "/assets/amenities/grill.jpg" },
        { title: "Sky Deck", blurb: "Open-air lounge to decompress after the haul.", img: "/assets/amenities/sky-deck.jpg" },
        { title: "Digital Den", blurb: "Fast Wi-Fi, screens, quiet desks for the paperwork.", img: "/assets/amenities/digital-den.jpg" },
        { title: "Fitness Studio", blurb: "Stay road-strong with real equipment.", img: "/assets/amenities/fitness.jpg" },
        { title: "Laundry & More", blurb: "Fresh clothes without losing a day.", img: "/assets/amenities/laundry.jpg" },
        { title: "Gear Shop", blurb: "Parts, supplies, and road essentials on site.", img: "/assets/amenities/gear-shop.jpg" },
        { title: "Resort Pool & Spa", blurb: "Recover like the miles are worth it.", img: "/assets/amenities/pool-spa.jpg" },
        { title: "Camp K9", blurb: "Your co-pilot gets cared for too.", img: "/assets/amenities/camp-k9.jpg" },
      ],
      footnote: "Members call the 25,000 sq ft private drivers club “The Rig Carlton.”",
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
    heroImage: PHOTOS.terminalDusk,
    memphisImage: PHOTOS.terminalDay,
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
    heroImage: PHOTOS.terminalRendering,
    memphisImage: PHOTOS.terminalDusk,
    eyebrow: "For freight brokers & 3PLs",
    heroPunch: "Cover every load with a network behind you.",
    sub: "Premium terminal access in every key market.",
    desc: "LineHaul Station gives brokers physical positioning in the markets that matter — reliable drop space, carrier-friendly Terminals, and a relay network that keeps freight moving and your carriers coming back.",
    heroNote: "Built for the brokers and 3PLs who keep America's freight covered.",
    scrollHint: "Why coverage is the whole game",
    stats: [
      { big: "1", label: "First Hub open in West Memphis, AR" },
      { big: "5+", label: "Phase-one markets in expansion" },
      { big: "24/7", label: "Gated, surveilled facility access" },
      { big: "30-day", label: "Advance booking by app or web" },
    ],
    problem: {
      kicker: "Why loads fall through",
      headline: "Coverage is the whole game",
      body: "When a lane has no safe place to drop and no carrier wants the run, the load slips. Brokers win on capacity and positioning — exactly what a physical network provides.",
      counters: [
        { big: "60K", label: "Trucks past our West Memphis Hub every day." },
        { big: "133", label: "Secure spaces at the first Hub on I-40 / I-55." },
        { big: "24/7", label: "Access and on-site service, around the clock." },
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
    featuresEyebrow: "Network Capabilities",
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
    heroImage: PHOTOS.building3,
    memphisImage: PHOTOS.terminalRendering,
    eyebrow: "For shippers & supply chains",
    heroPunch: "A supply chain that doesn't stall at the yard.",
    sub: "A national network of Private Terminals.",
    desc: "LineHaul Station gives shippers dependable terminal capacity, lower private-fleet overhead, and real-time visibility — so freight shows up when it's supposed to.",
    heroNote: "Built for shippers who can't afford a stalled supply chain.",
    scrollHint: "What an unreliable yard really costs",
    stats: [
      { big: "24/7", label: "Secure, gated, surveilled facilities" },
      { big: "~25%", label: "Projected freight cost reduction via relay" },
      { big: "300K+", label: "Potential miles per truck per year" },
      { big: "1st", label: "Hub open — West Memphis, AR" },
    ],
    problem: {
      kicker: "Where the supply chain stalls",
      headline: "Your freight is only as reliable as the yard",
      body: "A missed dock window or a truck with nowhere to drop ripples through your whole network. Reliability starts with infrastructure on the ground.",
      counters: [
        { big: "60K", label: "Trucks past our West Memphis Hub every day." },
        { big: "133", label: "Secure spaces at the first Hub on I-40 / I-55." },
        { big: "24/7", label: "Access and on-site service, around the clock." },
      ],
    },
    road: {
      eyebrow: "LineHaul Station",
      headline: "Everywhere your freight needs to be",
      sub: "A Terminal waiting at the end of every run.",
    },
    how: {
      eyebrow: "How it works",
      headline: "Reliability you can build a plan on",
      steps: [
        { title: "Dependable capacity", blurb: "Secure space and staffed Terminals in key markets mean your freight always has somewhere to go." },
        { title: "Lower fleet cost", blurb: "Use shared infrastructure instead of building and staffing private yards." },
        { title: "Visibility & control", blurb: "Real-time asset visibility keeps delivery windows honest and surfaces exceptions early." },
        { title: "On-site service", blurb: "Repair, fuel, and amenities keep trucks moving and drivers ready." },
      ],
    },
    featuresEyebrow: "Service Capabilities",
    featuresTitle: "A Network Built To Deliver",
    features: [
      { title: "Cross-Docking Operations", tag: "Transfers · Staging", blurb: "Load shifts, trailer transfers, and staging capacity to keep your freight in motion." },
      { title: "Secure Gated Facilities", tag: "24/7 Surveillance", blurb: "Member-only, access-controlled terminals with state-of-the-art surveillance." },
      { title: "National Hub Network", tag: "Key Markets", blurb: "A growing footprint of Private Terminals positioned at major interchanges." },
      { title: "Relay-Ready", tag: "Modern-Day Pony Express", blurb: "Infrastructure designed for freight that moves 24/7 across the country." },
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
    heroImage: PHOTOS.buildingAerial,
    memphisImage: PHOTOS.building4,
    eyebrow: "For government & infrastructure",
    heroPunch: "Freight infrastructure that strengthens America.",
    sub: "Freight moves 24/7. Drivers get home daily.",
    desc: "LineHaul Station builds real, shared-use terminal infrastructure — strengthening supply-chain resilience, lowering freight costs, getting drivers home safely, and supporting American manufacturing.",
    heroNote: "A real-estate-based solution to a national logistics problem.",
    scrollHint: "The infrastructure case",
    stats: [
      { big: "24/7", label: "Continuous freight movement via relay" },
      { big: "300K+", label: "Potential miles per truck per year (from ~80K)" },
      { big: "~25%", label: "Projected reduction in freight cost" },
      { big: "Daily", label: "Drivers home with their families every day" },
    ],
    problem: {
      kicker: "A national bottleneck",
      headline: "The yard is a weak link in the supply chain.",
      body: "Truck-parking shortages, congested terminals, and exhausted drivers raise costs and risk across the freight system. Infrastructure fixes infrastructure problems.",
      counters: [
        { big: "$40K", label: "Cost per space in the LineHaul Station model." },
        { big: "$196K", label: "Benchmark public cost per space." },
        { big: "133", label: "Spaces live at West Memphis, scaling toward 600." },
      ],
    },
    road: {
      eyebrow: "Infrastructure & Government",
      headline: "Infrastructure where the freight already moves",
      sub: "A network of Terminals and Hubs at the nation's busiest crossroads.",
    },
    how: {
      eyebrow: "How it works",
      headline: "Infrastructure that pays for itself.",
      steps: [
        { title: "Supply-chain resilience", blurb: "A network of secure Terminals keeps freight moving through disruptions." },
        { title: "Lower national freight cost", blurb: "Shared infrastructure built far below typical public per-space cost." },
        { title: "Drivers home safely", blurb: "Relay legs and safe, serviced Hubs get drivers off the road at night." },
        { title: "American manufacturing", blurb: "Reliable freight infrastructure strengthens domestic supply chains and jobs." },
      ],
    },
    featuresEyebrow: "Strategic Capabilities",
    featuresTitle: "Built For The Next Century Of Freight",
    features: [
      { title: "National Hub Network", tag: "Interchange-Sited", blurb: "Terminals positioned at major interstate interchanges — West Memphis at the I-40 / I-55 crossing leads the way." },
      { title: "Cross-Dock Relay Points", tag: "Baton Hand-Off", blurb: "Trailers passed terminal-to-terminal so freight never stops and drivers never leave their region." },
      { title: "Driver Welfare Standards", tag: "Dignity · Safety", blurb: "Resort-quality facilities that raise the standard of life — and safety — for American truckers." },
      { title: "Economic Impact", tag: "Utilization · Cost", blurb: "Utilization could rise from 80,000 to 300,000+ miles per truck per year, with ~25% lower freight cost." },
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
