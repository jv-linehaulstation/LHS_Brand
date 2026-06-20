// LineHaul Station — audience content, verbatim from the Brand System "Landing Pages" artifact.
// Accent colors are the brand-approved per-audience accents over the shared Carbon base.

export type Feature = { title: string; tag: string; blurb: string };
export type Stat = { big: string; label: string };

export type Audience = {
  key: AudienceKey;
  navLabel: string; // short label for the homepage nav / router
  accent: string;
  accentDark: string;
  eyebrow: string;
  headline: string;
  sub: string;
  desc: string;
  stats: Stat[];
  valueEyebrow: string;
  valueHeadline: string;
  valueBody: string;
  valuePoints: string[];
  featuresEyebrow: string;
  featuresTitle: string;
  features: Feature[];
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

export const audiences: Record<AudienceKey, Audience> = {
  drivers: {
    key: "drivers",
    navLabel: "Drivers",
    accent: "#F07820",
    accentDark: "#C85A12",
    eyebrow: "OneHome by LineHaul Station",
    headline: "Everywhere The Road Takes You",
    sub: "Built exclusively for American truckers.",
    desc: "You're paying for a home 365 days a year — but you're only there about 100. OneHome is a resort-quality, gated community built for tractor-trailers that could save you $15,000 or more a year.",
    stats: [
      { big: "$20K+", label: "Average yearly housing cost for a home you barely use" },
      { big: "$14K+", label: "Potential annual savings with OneHome" },
      { big: "<100", label: "Days a year most drivers actually use their home" },
      { big: "$19/day", label: "You only pay for the days you use it" },
    ],
    valueEyebrow: "A New & Better Option",
    valueHeadline: "Stop Paying For A Home You Barely Live In.",
    valueBody:
      "Housing is expensive — rent or mortgage, taxes, insurance, utilities, maintenance — and you pay for it whether you're home or not. OneHome eliminates the waste. LineHaul Station becomes your home, and you only pay for the days you use it.",
    valuePoints: [
      "Eliminate the year-round costs of a mortgage or rent, taxes, insurance, utilities, and maintenance.",
      "A Home Hub for your mailing address, personal vehicle parking, and storage.",
      "The entire national network becomes your home — wherever the road takes you.",
      "Invest your savings and build a brighter financial future. A massive win for the smartest truckers.",
    ],
    featuresEyebrow: "Absolutely Amazing Amenities",
    featuresTitle: "The Outriders Club",
    features: [
      { title: "Member's Grill", tag: "Great Food · Entertainment", blurb: "Our CEO is a fantastic chef and refuses to compromise on quality. Enjoy a great meal, catch a game, savor the moment." },
      { title: "Rooftop Sky Deck", tag: "Firepits · Water · Stars", blurb: "Chill next to the warm glow of a firepit as streaming water falls over rocks, under the brightest stars." },
      { title: "Fitness Studio", tag: "Cardio · Weights · Showers", blurb: "We give you the equipment — you bring the willpower. Top it off with a high-pressure shower in a luxury-hotel bathroom." },
      { title: "Resort Pool & More", tag: "Pool · Hot Tubs · Sun", blurb: "A full resort-quality pool, hot tubs, and lounge. Soak the miles out of your muscles and catch some rays." },
      { title: "Camp K9", tag: "Dog Park · Relief Stations", blurb: "Your co-pilot deserves a break too — a clean, dedicated dog park with relief stations and fresh water." },
      { title: "LH Fleet Services", tag: "Repairs · Maintenance · Wash", blurb: "Have work done on your truck while you're relaxing at home. Quality work at a fair price, super convenient access." },
    ],
    closerHeadline: "A Massive Win For The Smartest Truckers.",
    closerBody:
      "OneHome is targeting markets across the country and prioritizing locations based on driver demand. Have a voice on where we build — and get on the list early.",
  },

  carriers: {
    key: "carriers",
    navLabel: "Carriers",
    accent: "#4878A8",
    accentDark: "#2E5070",
    eyebrow: "FlexSpace",
    headline: "It's YOUR Terminal Network.",
    sub: "Built for Today. Designed for Tomorrow.",
    desc: "America's first national, shared-use, flex-space truck terminal network. Premium infrastructure, one space at a time, at a fraction of the cost of building your own.",
    stats: [
      { big: "$15M", label: "To build a typical 90-space terminal" },
      { big: "20%", label: "Average occupancy at most terminals" },
      { big: "96%", label: "Of carriers run fewer than 20 trucks" },
      { big: "$19/day", label: "Member dues — vs $50K+ per occupied space/yr" },
    ],
    valueEyebrow: "The Flex-Space Model",
    valueHeadline: "Stop Building Terminals. Start Buying Space.",
    valueBody:
      "A shared-economy model — like a private club for terminal space. You wouldn't build a golf course to play a round; you'd join the best club in town. That's exactly what LineHaul Station does for terminal space.",
    valuePoints: [
      "Pay a refundable participation fee, pay daily dues, and use the network whenever you want.",
      "Buy the space you need, where you need it — across a growing national network.",
      "A superior terminal at a fraction of the cost of owning or leasing.",
      "Most of your membership fee is refundable when you exit.",
    ],
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
    closerHeadline: "Something BIG Is Coming To Trucking.",
    closerBody:
      "West Memphis is opening now, with phase-one expansion underway in Dallas-Fort Worth, Atlanta, Indianapolis, Chicago, and Carlisle. See how FlexSpace can work for your fleet.",
  },

  brokers: {
    key: "brokers",
    navLabel: "Brokers",
    accent: "#7EC8E3",
    accentDark: "#3E8AB0",
    eyebrow: "For Brokers",
    headline: "Move Freight Through A Network That Never Stops.",
    sub: "Premium terminal access in every key market.",
    desc: "Give the carriers you trust premium staging, cross-dock, and relay access across a national Hub network — without owning a single building.",
    stats: [
      { big: "1", label: "First Hub open in West Memphis, AR" },
      { big: "5+", label: "Phase-one markets in expansion" },
      { big: "24/7", label: "Gated, surveilled facility access" },
      { big: "30-day", label: "Advance booking by app or web" },
    ],
    valueEyebrow: "Why Brokers Win",
    valueHeadline: "Stronger Carriers. Smoother Lanes.",
    valueBody:
      "When carriers have premium terminal access and amenities, they run your freight better. LineHaul Station gives your network a backbone of Private Terminals and Service Centers in the markets that matter.",
    valuePoints: [
      "Cross-dock and staging capacity at every Hub for seamless load transfers.",
      "Digital passes you can distribute to any carrier, any driver.",
      "A national footprint without national real-estate cost.",
      "Driver amenities that keep your best carriers loyal and rolling.",
    ],
    featuresEyebrow: "Network Capabilities",
    featuresTitle: "Built For Freight Flow",
    features: [
      { title: "Cross-Dock At Every Hub", tag: "Transfers · Staging", blurb: "Load shifts and trailer transfers built into each terminal — keep freight moving between carriers." },
      { title: "Digital Pass Distribution", tag: "Instant · Shareable", blurb: "Issue terminal access to any carrier digitally and book capacity up to 30 days out." },
      { title: "National Hub Network", tag: "Key Markets", blurb: "West Memphis now, with Dallas-Fort Worth, Atlanta, Indianapolis, Chicago, and Carlisle next." },
      { title: "Carrier-Grade Amenities", tag: "Outriders Club", blurb: "The terminal experience that keeps the best carriers — and their drivers — hauling your freight." },
    ],
    closerHeadline: "Connect Your Carriers To The Network.",
    closerBody:
      "Bring premium terminal access to the carriers you rely on. West Memphis is open and phase-one expansion is underway.",
  },

  shippers: {
    key: "shippers",
    navLabel: "Shippers",
    accent: "#18A848",
    accentDark: "#0F7A33",
    eyebrow: "For Shippers",
    headline: "Freight That Keeps Moving. Service You Can Stage.",
    sub: "A national network of Private Terminals.",
    desc: "Cross-dock, staging, and relay capacity across a network of first-class Service Centers — reliable throughput and a driver experience that keeps the best carriers on your freight.",
    stats: [
      { big: "24/7", label: "Secure, gated, surveilled facilities" },
      { big: "~25%", label: "Projected freight cost reduction via relay" },
      { big: "300K+", label: "Potential miles per truck per year" },
      { big: "1st", label: "Hub open — West Memphis, AR" },
    ],
    valueEyebrow: "Why Shippers Win",
    valueHeadline: "Reliable Capacity, Coast To Coast.",
    valueBody:
      "Your freight depends on carriers who can stage, transfer, and relay without friction. LineHaul Station provides the secure terminal infrastructure that makes consistent, on-time movement the norm.",
    valuePoints: [
      "Cross-docking and staging built into every Hub.",
      "Secure, gated facilities protect freight and equipment.",
      "A growing national network for predictable coverage.",
      "Relay-ready infrastructure for 24/7 freight movement.",
    ],
    featuresEyebrow: "Service Capabilities",
    featuresTitle: "A Network Built To Deliver",
    features: [
      { title: "Cross-Docking Operations", tag: "Transfers · Staging", blurb: "Load shifts, trailer transfers, and staging capacity to keep your freight in motion." },
      { title: "Secure Gated Facilities", tag: "24/7 Surveillance", blurb: "Member-only, access-controlled terminals with state-of-the-art surveillance." },
      { title: "National Hub Network", tag: "Key Markets", blurb: "A growing footprint of Private Terminals positioned at major interchanges." },
      { title: "Relay-Ready", tag: "Modern-Day Pony Express", blurb: "Infrastructure designed for freight that moves 24/7 across the country." },
    ],
    closerHeadline: "Build Your Freight On A Stronger Network.",
    closerBody:
      "Secure terminal infrastructure and relay-ready Hubs across the country. West Memphis is open now.",
  },

  government: {
    key: "government",
    navLabel: "Government",
    accent: "#C8A060",
    accentDark: "#8C6E3A",
    eyebrow: "Freight Relay Infrastructure",
    headline: "The Modern-Day Pony Express.",
    sub: "Freight moves 24/7. Drivers get home daily.",
    desc: "LineHaul Station's Hub network enables freight relay — trailers passed like a baton through terminals across the country. A system that moves freight around the clock while drivers work normal shifts and return home every day.",
    stats: [
      { big: "24/7", label: "Continuous freight movement via relay" },
      { big: "300K+", label: "Potential miles per truck per year (from ~80K)" },
      { big: "~25%", label: "Projected reduction in freight cost" },
      { big: "Daily", label: "Drivers home with their families every day" },
    ],
    valueEyebrow: "Infrastructure For The Nation",
    valueHeadline: "A National Relay System For American Freight.",
    valueBody:
      "Trucks make money when the wheels are turning — not sitting in terminals. Freight relay aligns assets and people: freight keeps moving while drivers run normal shifts, dramatically raising utilization and lowering cost across the supply chain.",
    valuePoints: [
      "A coordinated network of Private Terminals at major interchanges.",
      "Cross-dock relay points enabling baton-style trailer hand-offs.",
      "Higher asset utilization and lower per-mile freight cost.",
      "Driver welfare standards that improve safety and retention nationwide.",
    ],
    featuresEyebrow: "Strategic Capabilities",
    featuresTitle: "Built For The Next Century Of Freight",
    features: [
      { title: "National Hub Network", tag: "Interchange-Sited", blurb: "Terminals positioned at major interstate interchanges — West Memphis at the I-40 / I-55 crossing leads the way." },
      { title: "Cross-Dock Relay Points", tag: "Baton Hand-Off", blurb: "Trailers passed terminal-to-terminal so freight never stops and drivers never leave their region." },
      { title: "Driver Welfare Standards", tag: "Dignity · Safety", blurb: "Resort-quality facilities that raise the standard of life — and safety — for American truckers." },
      { title: "Economic Impact", tag: "Utilization · Cost", blurb: "Utilization could rise from 80,000 to 300,000+ miles per truck per year, with ~25% lower freight cost." },
    ],
    closerHeadline: "Infrastructure For The Future Of Freight.",
    closerBody:
      "A privately built national relay network that moves freight 24/7 and gets American truckers home every day. Let's discuss how it serves the national interest.",
  },
};
