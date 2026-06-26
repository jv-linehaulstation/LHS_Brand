import { PHOTOS } from "@/lib/audiences";

/* OneHome Copy Playbook (Revised 3-18-26) — verbatim copy for the /drivers rebuild.
   Rule: "OneHome" carries NO star in body copy (the One★Home star is logo-only). */
export const ONEHOME = {
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
