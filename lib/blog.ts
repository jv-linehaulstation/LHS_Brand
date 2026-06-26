// Single source of truth for The Dispatch (blog). Add posts here; the /blog
// index and /blog/[slug] template render straight from this file — same pattern
// as lib/audiences.ts. Body is authored as typed blocks (no markdown dep);
// inline **bold** and [text](href) are supported by <BlogBody>.

export type Block =
  | { k: "p"; t: string }
  | { k: "h2"; t: string }
  | { k: "h3"; t: string }
  | { k: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  kicker: string; // small label (e.g. "From the Founder")
  excerpt: string; // card + meta description
  byline: string;
  date: string; // ISO
  dateLabel: string; // display
  readTime: string;
  hero: string; // /assets/blog/*.png
  heroAlt: string;
  seoTitle: string;
  keywords: string[];
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "why-were-building-the-rig-carlton",
    title: "Why We're Building the “Rig Carlton”",
    kicker: "From the Founder",
    excerpt:
      "Founder Jeff Swenson on building resort-grade truck terminals — secure parking, shore power, and the Outriders Drivers Club — that bring back driver pride.",
    byline: "Jeff Swenson, Founder & CEO",
    date: "2026-06-26",
    dateLabel: "June 26, 2026",
    readTime: "4 min read",
    hero: "/assets/blog/rig-carlton.png",
    heroAlt: "Semi truck lit by golden sunlight on the open highway",
    seoTitle: "Why We're Building the “Rig Carlton” | LineHaul Station",
    keywords: [
      "truck terminal network",
      "truck driver amenities",
      "secure truck parking",
      "shared-use truck terminal",
    ],
    body: [
      {
        k: "p",
        t: "I grew up in the early 1970s revering truck drivers. To a young boy, they were icons — men and women who walked tall and proud, hardworking ambassadors of commerce and, the way I saw it, knights of the highway. They were out there to help and protect Americans in need while traveling miles of brand-new freeway. You could tell a driver by the way they carried themselves: neatly dressed, polished boots, confident, full of life. And the rigs — spotless inside and out, chrome shined like a mirror. There was pride in all of it.",
      },
      {
        k: "p",
        t: "Somewhere along the way, the industry stopped honoring that. The job got harder, and the places drivers were expected to rest got worse. The typical terminal became a dingy, poorly lit lot you tolerated, not a place you were proud to pull into. We think that's backwards. So we set out to build the opposite.",
      },
      { k: "h2", t: "A truck terminal that feels like a resort" },
      {
        k: "p",
        t: "LineHaul Station terminals are developed on 50-plus-acre sites at the edge of major metro markets, along the highest-density freight lanes. When you roll through the access-controlled gate, the arrival experience is meant to restore your sense of pride — beautiful landscaping, real architecture, proper lighting. It feels more like driving into a resort than a truck terminal. Some drivers have already nicknamed it the “Rig Carlton.” I'll be honest: I kind of love that.",
      },
      { k: "h3", t: "Built for the way trucks actually move" },
      {
        k: "p",
        t: "Inside the gates, the property is built for real-world driving — extra-wide drive lanes and parking spaces that cut down on the minor accidents that turn into big headaches and delays. Every space has high-speed Wi-Fi and a 50-amp shore power connection, so you can shut the engine off, skip the idling, and sleep in a quiet environment.",
      },
      { k: "h2", t: "Inside the Outriders Drivers Club" },
      {
        k: "p",
        t: "Then there's the Outriders Drivers Club. It's a rustic, hip space loaded with the kind of amenities most drivers never get on the road: a lodge-style bistro, a well-equipped fitness center, clean locker and shower rooms, a vintage barbershop, a gamer studio, our own LineHaul gear shop, and a sky deck with fire pits and cornhole. Your truck gets treated too, with a full-service inspection, maintenance and repair center and a state-of-the-art truck wash.",
      },
      {
        k: "p",
        t: "None of this is luxury for luxury's sake. It's what respect looks like in physical form. You deserve to be treated with dignity for the hard work you do, and we intend to make sure you get it.",
      },
      { k: "h2", t: "This is bigger than a nicer building" },
      {
        k: "p",
        t: "The “Rig Carlton” nickname is fun, but the mission underneath it is serious. We're building the country's first national, shared-use truck terminal network — and we're doing it as a private, member-only network for the truckload freight sector. That model lets us deliver resort-grade facilities at a price that works, because the cost is shared instead of carried alone. (New to how that works? Start with [Shared Terminals 101](/blog/shared-terminals-101).)",
      },
      {
        k: "p",
        t: "We're bringing back the pride that defined trucking's best era. If that resonates with you, come be part of it.",
      },
    ],
  },
  {
    slug: "hidden-cost-of-nowhere-to-park",
    title: "The Hidden Cost of Nowhere to Park",
    kicker: "Driver Quality of Life",
    excerpt:
      "Truck parking shortages cost drivers their safety and carriers real money. Here's the true price of nowhere to park — and how a shared-use terminal network fixes it.",
    byline: "LineHaul Station",
    date: "2026-06-24",
    dateLabel: "June 24, 2026",
    readTime: "4 min read",
    hero: "/assets/blog/nowhere-to-park.png",
    heroAlt: "Semi trucks parked at a rest area at night",
    seoTitle: "The Hidden Cost of Nowhere to Park | LineHaul Station",
    keywords: [
      "truck parking shortage",
      "safe truck parking",
      "hours of service",
      "freight efficiency",
    ],
    body: [
      {
        k: "p",
        t: "Every working driver knows the feeling. The clock on your hours of service is running down, you're still miles from a safe spot, and the lots are already full. So you stop early and burn productive time, or you push your luck and end up parked where you shouldn't — an off-ramp, a side street, a dirty lot, somewhere that isn't legal and isn't safe. It's one of the most stressful, least talked-about parts of the job. And it's costing the industry far more than anyone admits.",
      },
      { k: "h2", t: "A safety problem first" },
      {
        k: "p",
        t: "When a driver can't find legal parking, safety is the first casualty. Off-ramp and shoulder parking puts drivers — and the motoring public — at real risk. Side streets and unlit lots invite theft and worse. None of this is a failure of the driver. It's a failure of infrastructure. There simply aren't enough quality places to stop, and the ones that exist weren't built with the driver's security, rest, or dignity in mind.",
      },
      {
        k: "p",
        t: "We feel strongly that it's high time this changed. Every driver deserves access to a high-quality terminal network — regardless of the size of the fleet they drive for — that provides the security, amenities, and peace of mind they want, in the locations they actually need.",
      },
      { k: "h2", t: "A productivity problem too" },
      {
        k: "p",
        t: "The parking shortage doesn't just wear drivers down; it quietly drags on the whole operation. Stopping early to secure a spot means leaving drive time on the table. Hunting for parking burns fuel and patience. And the ripple effects show up on the carrier's and broker's books — in detention, in out-of-route miles, in trucks and drivers that aren't where they need to be.",
      },
      {
        k: "p",
        t: "This is why we keep saying the win is shared. When drivers have a reliable, secure home base along the freight lanes they run, the companies they serve win big too — with real gains in efficiency and productivity.",
      },
      { k: "h3", t: "What carriers and brokers gain" },
      {
        k: "ul",
        items: [
          "Reduce shipper detention",
          "Increase drop-and-hook",
          "Decrease out-of-route miles",
          "Enable freight relay so more drivers get home daily",
        ],
      },
      { k: "h2", t: "What a real solution looks like" },
      {
        k: "p",
        t: "LineHaul Station is building the country's first national, shared-use truck terminal network to solve exactly this. Our hubs sit on 50-plus-acre sites at the edge of major metros, along the highest-density freight lanes — right where parking pressure is worst. Each space comes with secure, access-controlled entry, extra-wide lanes, high-speed Wi-Fi, and 50-amp shore power so you can rest without idling.",
      },
      {
        k: "p",
        t: "With this new shared infrastructure, it provides solutions where everyone in trucking wins. (Curious how membership and Space ownership work? Read [Shared Terminals 101](/blog/shared-terminals-101).)",
      },
      { k: "h2", t: "Nowhere to park shouldn't be the cost of doing the job" },
      {
        k: "p",
        t: "The current system asks drivers to absorb a problem they didn't create. We think that's unacceptable, and we're building the network to fix it.",
      },
    ],
  },
  {
    slug: "shared-terminals-101",
    title: "Shared Terminals 101: How Membership Works",
    kicker: "How Membership Works",
    excerpt:
      "How LineHaul Station's shared-use terminal network works — free driver membership, Space and FlexSpace ownership, digital passes, and the refundable “one in, one out” program.",
    byline: "LineHaul Station",
    date: "2026-06-22",
    dateLabel: "June 22, 2026",
    readTime: "5 min read",
    hero: "/assets/blog/shared-terminals-101.png",
    heroAlt: "Highway convoy of semi trucks at dusk",
    seoTitle: "Shared Terminals 101: How Membership Works | LineHaul Station",
    keywords: [
      "shared-use truck terminal",
      "truck terminal membership",
      "FlexSpace",
      "digital passes",
    ],
    body: [
      {
        k: "p",
        t: "For decades, a national terminal network was something only the largest carriers could afford to build. The cost of land, construction, and operations put it out of reach for the tens of thousands of small and mid-size carriers and brokers who move the majority of America's freight — and, by extension, out of reach for the more than two million drivers they employ. LineHaul Station changes that by sharing the infrastructure. Here's how the model works in plain terms.",
      },
      { k: "h2", t: "A private, member-only network" },
      {
        k: "p",
        t: "LineHaul Station is a private, member-only terminal network built for the truckload freight sector. “Member-only” matters: it keeps the network accountable, safe, and built around people who act responsibly and have each other's back — the way the best of trucking always worked. There are two levels of membership.",
      },
      { k: "h2", t: "Level 1: Driver membership (currently free)" },
      {
        k: "p",
        t: "Driver membership is currently free and takes about two minutes to complete online. Its purpose is simple — to make sure every member acts responsibly and looks out for the rest. There's no obligation; if you never use it, you've lost nothing. You just complete your membership agreement online. As Jeff puts it, you have nothing to lose and everything to gain.",
      },
      { k: "h2", t: "Level 2: Space membership" },
      {
        k: "p",
        t: "The second level is called **Space**. This is for the company or driver that buys and owns the rights to a space in the network. Think of it like owning a truck terminal of your own — except you don't have to buy the whole terminal. We sell it one space at a time, and in some cases even a fraction of a space.",
      },
      { k: "h3", t: "Dedicated Space vs. FlexSpace" },
      {
        k: "p",
        t: "A Space can be **dedicated** to a single hub, or it can be **FlexSpace** that's usable across the network as it grows. Most carriers and freight brokers purchase Space and then distribute **digital passes** to their drivers for daily use. It's an easy decision, because the cost is far less than independently buying or building a terminal — and members are blown away by the features and amenities, with dues as low as $13 a day.",
      },
      { k: "h2", t: "The “one member in, one member out” program" },
      {
        k: "p",
        t: "Here's the part that makes Space ownership feel different from a typical lease or fee. LineHaul Station runs a **one member in, one member out** program, and the majority of your initial membership fee is refundable when the membership is retired — for whatever reason. Think of it like buying and later selling any other property you own. You're not pouring money into a hole; you're holding an asset.",
      },
      { k: "h2", t: "Why sharing wins for everyone" },
      {
        k: "p",
        t: "Most carriers genuinely try to give drivers the tools of the trade, but some things just aren't economically feasible for a single company to build alone. By sharing space, LineHaul Station creates an enormous win-win for every stakeholder:",
      },
      {
        k: "ul",
        items: [
          "Drivers get secure parking, shore power, showers, food, and a real home base on their lanes.",
          "Carriers and brokers can affordably build or expand their terminal footprint, reduce shipper detention, increase drop-and-hook, decrease out-of-route miles, and enable freight relay so more drivers get home daily.",
          "The industry finally gets the national terminal network it has needed for decades — open to fleets of any size.",
        ],
      },
      { k: "h2", t: "Getting started" },
      {
        k: "p",
        t: "If you're a driver, complete your free membership agreement to join the Outriders. If you're a carrier or broker, the fastest path is a conversation about how much Space fits your lanes and how digital passes would work for your drivers.",
      },
    ],
  },
];

export const allPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function relatedPosts(slug: string, n = 2): Post[] {
  return allPosts.filter((p) => p.slug !== slug).slice(0, n);
}
