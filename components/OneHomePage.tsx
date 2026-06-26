import Image from "next/image";
import GlassNav from "@/components/GlassNav";
import BackgroundVideo from "@/components/motion/BackgroundVideo";
import ParallaxImage from "@/components/motion/ParallaxImage";
import ParallaxLayer from "@/components/motion/ParallaxLayer";
import ScrollScale from "@/components/motion/ScrollScale";
import Reveal from "@/components/motion/Reveal";
import MagneticButton from "@/components/motion/MagneticButton";
import OneHomeCalculator from "@/components/calculators/OneHomeCalculator";
import JoinForm from "@/components/JoinForm";
import BuildingCarousel from "@/components/onehome/BuildingCarousel";
import QuoteCarousel from "@/components/onehome/QuoteCarousel";
import ComparisonTable from "@/components/onehome/ComparisonTable";
import MembershipReveal from "@/components/onehome/MembershipReveal";
import NewsletterForm from "@/components/onehome/NewsletterForm";
import FAQ, { type QA } from "@/components/FAQ";
import { CoinImage, ChromeFrame, StatusChip } from "@/components/Bits";
import { ONEHOME } from "@/lib/onehome";
import { audiences, PHOTOS } from "@/lib/audiences";
import { site } from "@/lib/site";

/* ============ "Luxe" dark-luxury skin ============ */
const PAD = "gutter";
const ELEV = "#0E0E10"; // subtly elevated section
const BURG = "#130E10"; // faint burgundy-tinted dark (OneHome nod)
const CARD = "#16161A"; // elevated dark card
const CARD2 = "#1C1C20"; // card hairline edge
const MUT = "#a9a9a9"; // muted body text on dark (AA on #0E0E10)

const HERO_VIDEO =
  "https://storage.googleapis.com/msgsndr/vFbdhIphhRpcrSlf4VJF/media/69554d56cb5b716ba310c3dd.mp4";

// Amenities carousel slides — the 8 club amenities (TODO(JJ): ≥2400px photos).
const AMENITY_SLIDES = [
  { src: PHOTOS.clubDining, name: "Member's Grill", spec: "great food • entertainment • relax" },
  { src: PHOTOS.skydeck, name: "Sky Deck", spec: "outdoor firepits • water features • star gazing" },
  { src: PHOTOS.gamerDen1, name: "Digital Den", spec: "gamer's center • billiards • trap & skeet" },
  { src: PHOTOS.fitness, name: "Fitness Studio", spec: "cardio • weights • showers • lockers" },
  { src: PHOTOS.laundry, name: "Laundry & More", spec: "washers • dryers • daily essentials" },
  { src: PHOTOS.gearShop, name: "Gear Shop", spec: "logo apparel • accessories • sundries" },
  { src: PHOTOS.waterFeature, name: "Resort Pool & Spa", spec: "outdoor pool • hot tubs • sun & fun" },
  { src: PHOTOS.clubPatio, name: "Camp K9", spec: "dog park • relief stations • driver-friendly" },
];

// Membership steps + Space ways — hover-reveal lists. TODO(JJ): one image per item.
const MEMBERSHIP = [
  { n: "01", title: "Free Membership", line: "Always 100% free — agree to the Code of Conduct and you're in.", img: "/assets/amenities/grill.jpg" },
  { n: "02", title: "Create Your Profile", line: "Unlock member features and career-changing information.", img: "/assets/amenities/digital-den.jpg" },
  { n: "03", title: "Get Others Excited!", line: "Three ways to get Space — earn it, request it, or purchase it.", img: "/assets/amenities/sky-deck.jpg" },
];
const SPACE = [
  { n: "01", title: "Earn Your Space", line: "Sponsor ten great drivers → a lifetime of free Space.", img: "/assets/building-seq/05.jpg" },
  { n: "02", title: "Request Your Space", line: "Use The LineHaul List to find a carrier or fleet that backs you.", img: "/assets/building-seq/02.jpg" },
  { n: "03", title: "Purchase Your Space", line: "Special pricing for anyone with a steering wheel in their hand.", img: "/assets/building-seq/07.jpg" },
];

// Home Hub + Fleet merged as image tiles. TODO(JJ): dedicated tile photos.
const EVERYTHING_TILES = [
  { group: "Home Hub", label: "Mail Services", line: "A real mailing address on the road.", img: PHOTOS.clubShop },
  { group: "Home Hub", label: "Personal Vehicle", line: "Secure covered parking for your car.", img: PHOTOS.gateHouse },
  { group: "Home Hub", label: "Storage Lockers", line: "Private storage for your belongings.", img: PHOTOS.laundry },
  { group: "Fleet Services", label: "Repairs", line: "On-site repair to get you rolling.", img: PHOTOS.fleetEntry1 },
  { group: "Fleet Services", label: "Maintenance", line: "Preventive service on your schedule.", img: PHOTOS.fleetExit },
  { group: "Fleet Services", label: "Inspections", line: "DOT-ready, compliant, and quick.", img: PHOTOS.fleetEntry2 },
  { group: "Fleet Services", label: "Truck Wash", line: "Keep the rig sharp between hauls.", img: PHOTOS.truckWashEntry },
  { group: "Fleet Services", label: "Cross Dock", line: "Transload and stage freight on site.", img: PHOTOS.crossDock },
];
const FLEET_DETAIL = "Tire Pressure Management · Pre & Post-Trip Inspection · DOT Annual Inspection · Tractor/Trailer Service · Routine PM Repairs";

// "Everything included" categorized club menu (lives in the Home-Hub section's
// right column so nothing from the live club menu is lost).
const CLUB_MENU = [
  { cat: "Food & Drink", items: ["Member's Grill & Bar", "Coffee & Juice Bar", "Grab-and-Go Market", "Snacks & Provisions"] },
  { cat: "Entertainment", items: ["Digital Den & Gaming", "Billiards & Game Tables", "Trap & Skeet", "Sky Deck & Firepits"] },
  { cat: "Amenities", items: ["Fitness Studio", "Resort Pool & Spa", "Sauna & Wellness", "Barbershop", "Laundry & More", "Gear Shop", "Conference Center", "Camp K9"] },
];

// Founding-member quote cards — honest framing (pre-launch). TODO(JJ): real testimonials.
const QUOTES = [
  { quote: "Stop paying for a home you rarely use. Pay only for the days you need.", name: "The financial case", role: "Founding-member program" },
  { quote: "It's like giving yourself a $15,000–$20,000 raise without an extra mile.", name: "Annual savings", role: "Founding-member program" },
  { quote: "Choose your Home Hub — then the whole network is your home.", name: "How it works", role: "Founding-member program" },
  { quote: "Most drivers use their home under 100 days a year, but pay for all 365.", name: "The 365 vs 100 problem", role: "Founding-member program" },
  { quote: "From truck stops to something far better — club-level living for drivers.", name: "The lifestyle", role: "Founding-member program" },
];

// FAQ — money-first, OneHome-specific. TODO(JJ): confirm final answers.
const FAQ_ITEMS: QA[] = [
  { q: "How does “pay only for the days you use” work?", a: "You choose how many days a year you actually need a Home Hub and pay only for those — not 365 days of rent on a place you’re rarely in. Start around 60 days and grow your membership whenever you’re ready." },
  { q: "Is the driver membership really free?", a: "Yes. The Outriders Club driver membership is 100% free — agree to the Code of Conduct and you’re in. OneHome (your paid Home Hub access) is separate and priced by the days you use, with no mortgage, lease, or year-round rent." },
  { q: "Where are locations, and when does West Memphis open?", a: "The first Home Hub is open now in West Memphis, AR — one block off the I-40 / I-55 interchange, the busiest freight crossroads in America. More markets are in planning across the country, and your access grows as the network grows." },
  { q: "How much could I actually save vs. my apartment?", a: "Many drivers spend $2,000–$2,500 a month on a home they barely use. Switching to a 60-day OneHome membership can save over $1,200 every month — $15,000+ a year you can keep or invest." },
  { q: "Can I store my vehicle and get mail there?", a: "Yes. Your Home Hub anchors your life on the road: a real mailing address, secure covered parking for your personal vehicle, and private storage for your belongings." },
];

// Luxe pill CTAs.
const PILL = "inline-flex items-center gap-2.5 rounded-full px-8 py-[15px] font-label text-[12px] uppercase tracking-[0.14em] transition duration-300 active:scale-[0.97]";

export default function OneHomePage() {
  const a = audiences.drivers;
  const ac = a.accent;
  const ad = a.accentDark;

  return (
    <main className="min-h-screen bg-ink font-sans text-white">
      <GlassNav accent={ac} />

      {/* ============ 1. HERO — full-bleed video + multi-speed parallax ============ */}
      <section className={`relative flex min-h-[100dvh] items-center overflow-hidden ${PAD} pb-24 pt-32`}>
        <ParallaxLayer speed={0.22} className="absolute inset-0">
          <BackgroundVideo src={HERO_VIDEO} poster="/assets/marketing/hero-poster.jpg" className="absolute inset-0 h-full w-full scale-110 object-cover" />
        </ParallaxLayer>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.9),rgba(11,11,11,0.42)_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,11,11,0.78),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,#0B0B0B,transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] overflow-hidden">
          <div className="scan-once h-full w-full" style={{ ["--ac" as string]: ac }} />
        </div>

        <ParallaxLayer speed={-0.06} className="relative w-full">
          <Reveal>
            <StatusChip chrome label="West Memphis Hub — Open Now" coord="I-40 / I-55" accent={ac} />
          </Reveal>
          <Reveal delay={70}>
            <div className="mt-7 font-label text-[11px] uppercase tracking-[0.22em] text-chrome">{a.eyebrow}</div>
          </Reveal>
          <Reveal as="h1" delay={120} className="mt-3 max-w-[15ch] text-balance font-display text-[clamp(40px,7vw,104px)] font-black uppercase leading-[0.9] tracking-[-0.025em] text-white">
            {a.heroPunch}
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-6 max-w-[40ch] text-[clamp(18px,2.1vw,26px)] font-light italic leading-[1.45] text-[#e6e6e6]">
              {ONEHOME.hero.verse.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-6 max-w-[52ch] text-pretty text-[clamp(16px,1.7vw,20px)] leading-relaxed text-[#cfcfcf]">{ONEHOME.hero.blurb}</p>
          </Reveal>
          <Reveal delay={350} className="mt-8 flex flex-wrap items-center gap-3.5">
            <MagneticButton strength={0.35}>
              <a href="#join-free" className={`group ${PILL} text-ink shadow-[0_14px_34px_rgba(0,0,0,0.5)] hover:brightness-[1.08]`} style={{ background: `linear-gradient(135deg, ${ac}, ${ad})` }}>
                Join Free
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </MagneticButton>
            <a href="#core" className={`group ${PILL} border border-white/40 bg-white/[0.04] text-white backdrop-blur-sm hover:border-[var(--ac)]`} style={{ ["--ac" as string]: ac }}>
              See The Math
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" style={{ color: ac }}>→</span>
            </a>
          </Reveal>
          <p className="tnum mt-6 max-w-[40ch] font-mono text-[12px] leading-snug text-chrome">{a.heroNote}</p>
        </ParallaxLayer>

        <a href="#welcome" className="absolute inset-x-0 bottom-5 mx-auto flex w-fit items-center gap-2 font-label text-[10px] uppercase tracking-[0.2em] text-chrome transition-colors hover:text-white">
          <span className="scroll-nudge inline-block">↓</span> {a.scrollHint}
        </a>
      </section>

      {/* ============ 2. WELCOME TO THE CLUB — story + Vimeo (no portrait) [approved, untouched] ============ */}
      <section id="welcome" className={`relative overflow-hidden ${PAD} py-[clamp(80px,12vh,160px)]`} style={{ background: ELEV }}>
        <div className="bloom" style={{ ["--bloom" as string]: "rgba(208,40,60,0.10)" }} aria-hidden />
        <div className="relative grid gap-[clamp(32px,5vw,72px)] lg:grid-cols-2 lg:items-center">
          <Reveal>
            <CoinImage src="/assets/coin-outriders.png" alt="Outriders Club challenge coin" size={84} glow={`${ac}40`} className="mb-5" />
            <div className="font-label text-[11px] uppercase tracking-[0.22em] text-chrome">{a.outriders!.story.eyebrow}</div>
            <h2 className="mt-3 font-display text-[clamp(34px,5.2vw,72px)] font-black uppercase leading-[0.95] tracking-[-0.025em] text-white">{a.outriders!.story.headline}</h2>
            <div className="mt-6 max-w-[60ch] space-y-4 leading-relaxed" style={{ color: MUT }}>
              {a.outriders!.story.paras.slice(0, 3).map((p, i) =>
                i === 0 ? (
                  <p key={i} className="text-[clamp(18px,2vw,24px)] font-medium leading-snug text-white">{p}</p>
                ) : (
                  <p key={i} className="text-[clamp(15px,1.6vw,18px)]">{p}</p>
                )
              )}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[clamp(15px,1.5vw,18px)] leading-relaxed text-chrome">{a.outriders!.webinar.body}</p>
            <ChromeFrame variant="steel" className="mt-5 rounded-[20px] [&>*]:rounded-[19px]">
              <div className="relative aspect-video overflow-hidden rounded-[19px] bg-carbon">
                <iframe src={a.outriders!.webinar.video} title="LineHaul Station — Monthly Webinar with Jeff Swenson" loading="lazy" allow="fullscreen; picture-in-picture" className="absolute inset-0 h-full w-full" />
              </div>
            </ChromeFrame>
            <div className="mt-4">
              <div className="font-display text-[16px] font-black uppercase leading-tight tracking-[0.02em] text-white">Jeffrey J. Swenson</div>
              <div className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: ac }}>Founder &amp; CEO</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 3. JOIN FREE — Outriders Club register (the ONE form on the page) ============ */}
      <section id="join-free" className={`relative overflow-hidden ${PAD} py-[clamp(70px,11vh,140px)]`} style={{ background: BURG }}>
        <div className="bloom" style={{ ["--bloom" as string]: "rgba(208,40,60,0.10)" }} aria-hidden />
        <div className="relative grid gap-[clamp(28px,4vw,64px)] lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: ac }} aria-hidden />
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-chrome">100% Free · Outriders Club</span>
            </div>
            <h2 className="mt-5 text-balance font-display text-[clamp(34px,5.2vw,76px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">
              Claim Your Free <span style={{ color: ac }}>Driver Membership.</span>
            </h2>
            <p className="mt-5 max-w-[48ch] text-[clamp(16px,1.7vw,20px)] leading-relaxed text-[#dadada]">
              The Outriders Club driver membership is 100% free — agree to the Code of Conduct and you&apos;re in. Full club access and founding-member OneHome pricing, at every Hub.
            </p>
            <ul className="mt-6 space-y-3">
              {["Always free — no cost, no catch.", "Access every Hub across the network.", "Lock in founding-member OneHome pricing."].map((b) => (
                <li key={b} className="flex items-baseline gap-3 text-[15px] text-[#dadada]">
                  <span aria-hidden style={{ color: ac }}>✓</span>
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-[12px] text-chrome">
              Want the paid home program?{" "}
              <a href="#core" className="underline transition-colors hover:text-white" style={{ color: ac }}>See the OneHome math ↓</a>
            </p>
          </div>
          <Reveal dir="right">
            <JoinForm accent={ac} accentDark={ad} submitLabel="Join Free." successTitle="Welcome to the Outriders." />
          </Reveal>
        </div>
      </section>

      {/* ============ 4. HERE'S A NEW & BETTER OPTION — stacked: hook → wide calculator → body ============ */}
      <section id="core" className={`relative overflow-hidden ${PAD} py-[clamp(80px,12vh,160px)]`} style={{ background: BURG }}>
        <Reveal className="mx-auto max-w-5xl text-center">
          <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: ac }}>{ONEHOME.core.kicker}</div>
          <h2 className="mx-auto mt-6 max-w-[16ch] text-balance font-display text-[clamp(40px,6vw,96px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">
            Here&apos;s A New &amp;{" "}
            <span className="outline-head" style={{ ["--ac" as string]: ac }}>Better Option.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[44ch] text-[clamp(18px,2vw,24px)] font-medium leading-snug text-[#e2e2e2]">{ONEHOME.core.subhead}</p>
        </Reveal>

        {/* wide, focal glass calculator (the only calculator) */}
        <Reveal className="mx-auto mt-12 max-w-6xl">
          <div id="calculator">
            <OneHomeCalculator accent={ac} accentDark={ad} />
          </div>
        </Reveal>

        {/* the playbook's revised Core Sales copy, below the calculator */}
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="space-y-4 text-[clamp(16px,1.6vw,19px)] leading-relaxed" style={{ color: "#dadada" }}>
            {ONEHOME.core.paras.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <p className="mt-6 font-display text-[clamp(20px,2.4vw,30px)] font-black uppercase leading-tight text-white">{ONEHOME.core.blurb}</p>
        </Reveal>
      </section>

      {/* ============ 5. THE OUTRIDERS CLUB — amenities peeking-card carousel (starts on slide 2) ============ */}
      <section id="amenities" className={`bg-ink ${PAD} py-[clamp(80px,12vh,160px)]`}>
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: ac }}>The Outriders Club</div>
          <h2 className="mt-4 text-balance font-display text-[clamp(34px,5.6vw,84px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">{ONEHOME.amenities.headline}</h2>
          <p className="mt-5 text-[clamp(16px,1.7vw,20px)] leading-relaxed" style={{ color: MUT }}>{ONEHOME.amenities.intro}</p>
        </Reveal>
        <BuildingCarousel slides={AMENITY_SLIDES} accent={ac} initialIndex={1} />
        <Reveal>
          <p className="mt-[clamp(40px,6vw,80px)] text-center text-[clamp(20px,2.6vw,30px)] font-light italic" style={{ color: ac }}>{a.amenities?.footnote}</p>
        </Reveal>
      </section>

      {/* ============ 6. FOR A LOT LESS MONEY — prompts + interactive strikethrough comparison ============ */}
      <section id="value" className={`${PAD} py-[clamp(70px,11vh,140px)]`} style={{ background: ELEV }}>
        <Reveal as="h2" className="max-w-[20ch] text-balance font-display text-[clamp(32px,4.8vw,68px)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-white">
          {ONEHOME.value.headline}
        </Reveal>
        <div className="mt-10 grid gap-x-16 gap-y-10 lg:grid-cols-2 lg:items-stretch">
          <Reveal className="flex flex-col">
            <div className="font-display text-[clamp(20px,2.2vw,30px)] font-black uppercase tracking-[0.01em]" style={{ color: ac }}>{ONEHOME.value.subhead}</div>
            <p className="mt-3 text-[clamp(16px,1.6vw,19px)] text-chrome">{ONEHOME.value.prompt}</p>
            <ul className="mt-6 space-y-4">
              {ONEHOME.value.prompts.map((q, i) => (
                <li key={q} className="flex items-baseline gap-4 border-t border-white/10 pt-4 text-[clamp(17px,1.8vw,21px)] text-[#e6e6e6]">
                  <span className="tnum font-mono text-[13px]" style={{ color: ac }}>{String(i + 1).padStart(2, "0")}</span>
                  {q}
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-8 text-[clamp(18px,2vw,24px)] font-light italic" style={{ color: ac }}>{ONEHOME.value.blurb}</p>
          </Reveal>
          <Reveal delay={120} dir="right" className="lg:h-full">
            <ComparisonTable rows={ONEHOME.value.table} accent={ac} />
          </Reveal>
        </div>
      </section>

      {/* ============ 7. NOTHING TO LOSE / EVERYTHING TO GAIN — membership + Space, one section, hover-reveal ============ */}
      <section id="membership" className={`overflow-x-clip bg-ink ${PAD} py-[clamp(70px,11vh,140px)]`}>
        <Reveal className="max-w-3xl">
          <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: ac }}>{a.outriders!.join.eyebrow}</div>
          <h2 className="mt-4 font-display text-[clamp(32px,5vw,76px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">
            {a.outriders!.join.headline.split("/")[0].trim()}{" "}
            <span style={{ color: ac }}>{a.outriders!.join.headline.split("/")[1].trim()}</span>
          </h2>
        </Reveal>
        <div className="mt-12">
          <MembershipReveal
            groups={[
              { label: "Free Membership", items: MEMBERSHIP },
              { label: "Three Ways To Get Space", items: SPACE },
            ]}
            accent={ac}
          />
        </div>
        <Reveal delay={120} className="mt-10">
          <MagneticButton strength={0.3}>
            <a href="#join-free" className={`group ${PILL} text-ink shadow-[0_14px_30px_rgba(0,0,0,0.45)] hover:brightness-[1.06]`} style={{ background: `linear-gradient(135deg, ${ac}, ${ad})` }}>
              Join Free
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </MagneticButton>
        </Reveal>
      </section>

      {/* ============ 8. WE HAVE EVERYTHING YOU NEED — Home Hub + Fleet tiles + "Everything included" column ============ */}
      <section id="everything">
        <div className="relative h-[clamp(340px,52vh,600px)] overflow-hidden">
          <ScrollScale from={1.06} to={1.22}>
            <Image src="/assets/building-seq/01.jpg" alt="A LineHaul Station terminal — your Home Hub" fill className="img-grade object-cover" sizes="100vw" />
          </ScrollScale>
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,11,11,0.96),rgba(11,11,11,0.4)_62%)]" />
          <div className={`relative flex h-full items-end ${PAD} pb-[clamp(28px,5vw,64px)]`}>
            <Reveal className="max-w-2xl">
              <h2 className="text-balance font-display text-[clamp(34px,5.6vw,80px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">{ONEHOME.homehub.headline}</h2>
              <p className="mt-3 text-[clamp(18px,2vw,24px)] font-light italic" style={{ color: ac }}>{ONEHOME.homehub.blurb}</p>
            </Reveal>
          </div>
        </div>
        <div className={`${PAD} py-[clamp(56px,9vh,110px)]`} style={{ background: ELEV }}>
          <div className="grid gap-x-12 gap-y-12 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_340px]">
            {/* left — the image tiles */}
            <div>
              {["Home Hub", "Fleet Services"].map((group, gi) => (
                <div key={group} className={gi === 1 ? "mt-12" : ""}>
                  <div className="font-mono text-[12px] uppercase tracking-[0.16em]" style={{ color: ac }}>{group}</div>
                  <div className={`mt-5 grid gap-4 ${gi === 0 ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
                    {EVERYTHING_TILES.filter((t) => t.group === group).map((t, i) => (
                      <Reveal key={t.label} delay={i * 60}>
                        <figure className="group overflow-hidden rounded-[16px] border" style={{ borderColor: CARD2, background: CARD }}>
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <Image src={t.img} alt={t.label} fill loading="lazy" className="img-grade object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105" sizes="(max-width: 768px) 50vw, 28vw" />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(11,11,11,0.72))]" />
                          </div>
                          <figcaption className="p-4">
                            <div className="font-display text-[15px] font-black uppercase tracking-[0.01em] text-white">{t.label}</div>
                            <div className="mt-1 text-[13px] leading-snug" style={{ color: MUT }}>{t.line}</div>
                          </figcaption>
                        </figure>
                      </Reveal>
                    ))}
                  </div>
                  {gi === 1 && (
                    <p className="mt-5 font-mono text-[12px] leading-relaxed" style={{ color: MUT }}>
                      <span style={{ color: ac }}>Also: </span>{FLEET_DETAIL}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* right — the full "Everything included" club menu */}
            <Reveal dir="right" className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[20px] border p-6 sm:p-7" style={{ borderColor: CARD2, background: CARD }}>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-chrome">Everything included</div>
                <div className="mt-5 grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
                  {CLUB_MENU.map((g) => (
                    <div key={g.cat}>
                      <div className="font-display text-[15px] font-black uppercase tracking-[0.01em]" style={{ color: ac }}>{g.cat}</div>
                      <ul className="mt-2.5 space-y-1.5">
                        {g.items.map((it) => (
                          <li key={it} className="flex items-baseline gap-2.5 text-[13px] leading-snug text-chrome">
                            <span className="h-1 w-1 flex-none translate-y-[-2px] rounded-full" style={{ background: ac }} aria-hidden />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 9. NETWORK / MAP — Everywhere the Road Takes You + Memphis map ============ */}
      <section id="network" className={`${PAD} py-[clamp(70px,11vh,140px)]`} style={{ background: ELEV }}>
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <Reveal as="h2" className="text-balance font-display text-[clamp(34px,5.6vw,84px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">{ONEHOME.network.headline}</Reveal>
            <Reveal delay={80}>
              <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.16em]" style={{ color: ac }}>{ONEHOME.network.subhead}</p>
              <div className="mt-6 max-w-[62ch] space-y-4 text-[clamp(16px,1.6vw,19px)] leading-relaxed" style={{ color: MUT }}>
                {ONEHOME.network.paras.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <p className="mt-5 text-[clamp(18px,2vw,24px)] font-light italic" style={{ color: ac }}>{ONEHOME.network.blurb}</p>
            </Reveal>
          </div>
          <Reveal delay={120} dir="right">
            <div className="space-y-5">
              {/* West Memphis location map */}
              <div className="relative overflow-hidden rounded-[20px] border" style={{ borderColor: CARD2, background: CARD }}>
                <Image src="/assets/marketing/map-memphis.png" alt="West Memphis Hub — one block off the I-40 / I-55 interchange" width={500} height={345} className="h-auto w-full" sizes="(max-width: 1024px) 100vw, 40vw" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
              </div>
              <div className="rounded-[20px] border p-7" style={{ borderColor: CARD2, background: CARD }}>
                <div className="font-label text-[10px] uppercase tracking-[0.2em]" style={{ color: ac }}>First Home Hub · Open Now</div>
                <div className="mt-3 font-display text-[30px] font-black uppercase leading-none text-white">{a.memphis.address}</div>
                <div className="tnum mt-1.5 font-mono text-[13px] text-chrome">{a.memphis.addressSub}</div>
                <p className="mt-4 text-[14px] leading-relaxed" style={{ color: MUT }}>{a.memphis.body}</p>
                <div className="chrome-rule mt-5" />
                <div className="mt-5"><StatusChip chrome label="Live now" coord="35.14°N / 90.18°W" accent={ac} /></div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mt-12">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-chrome">Current planning markets</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {ONEHOME.network.markets.map((m) => (
              <span key={m} className="rounded-full border border-white/12 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[12px]" style={{ color: MUT }}>{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 10. TESTIMONIALS — warm driver photo + play + quote cards ============ */}
      <section id="stories" className="relative overflow-hidden">
        <div className="relative h-[clamp(360px,52vh,560px)]">
          <ParallaxImage src={a.heroImage} alt="A driver at sunset — LineHaul Station" strength={0.2} />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,11,11,0.95),rgba(11,11,11,0.35)_60%)]" />
          <button type="button" aria-label="Play driver story (video coming soon)" className="group absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-black/30 backdrop-blur-sm transition hover:scale-105 hover:border-white">
            <span className="ml-1 text-[22px] text-white" aria-hidden>▶</span>
          </button>
          <div className={`absolute inset-x-0 bottom-0 ${PAD} pb-8`}>
            <div className="font-label text-[11px] uppercase tracking-[0.22em] text-chrome">Driver stories</div>
            <h2 className="mt-2 max-w-[18ch] text-balance font-display text-[clamp(28px,4.4vw,60px)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-white">In their words.</h2>
          </div>
        </div>
        <div className={`bg-ink ${PAD} pb-[clamp(70px,11vh,140px)] pt-[clamp(28px,5vw,64px)]`}>
          <Reveal>
            <QuoteCarousel items={QUOTES} accent={ac} />
          </Reveal>
        </div>
      </section>

      {/* ============ 11. FAQ — Luxe accordion ============ */}
      <section id="faq" className={`${PAD} py-[clamp(70px,11vh,140px)]`} style={{ background: ELEV }}>
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: ac }}>Good to know</div>
          <h2 className="mt-4 text-balance font-display text-[clamp(32px,5vw,68px)] font-black uppercase leading-[0.95] tracking-[-0.025em] text-white">Frequently Asked Questions</h2>
        </Reveal>
        <div className="mt-12">
          <FAQ items={FAQ_ITEMS} accent={ac} />
        </div>
      </section>

      {/* ============ 12. FOOTER — dark architectural image + Quick Links / Explore / Newsletter ============ */}
      <footer className="relative overflow-hidden">
        <ScrollScale from={1.04} to={1.16}>
          <Image src="/assets/building-seq/07.jpg" alt="A LineHaul Station Hub from above" fill className="img-grade object-cover" sizes="100vw" />
        </ScrollScale>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.88),rgba(11,11,11,0.97))]" />
        <div className={`relative ${PAD} pb-12 pt-[clamp(72px,12vh,150px)]`}>
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
            <div className="max-w-sm">
              <Image src="/assets/logo-horz-light.png" alt="LineHaul Station" width={180} height={32} className="h-[26px] w-auto" />
              <p className="mt-4 text-[15px] leading-relaxed text-chrome">OneHome by LineHaul Station — a smarter way to live on the road, built exclusively for professional drivers.</p>
              <div className="tnum mt-5 inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.03] px-3 py-2 font-mono text-[11px] text-chrome">
                <span className="h-1.5 w-1.5 rounded-full bg-fuel" aria-hidden />
                West Memphis, AR · 35.14°N / 90.18°W
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="font-label text-[9px] uppercase tracking-[0.2em] text-[#8f8f8f]">Quick Links</div>
              {[["#core", "The Math"], ["#amenities", "Amenities"], ["#network", "Network"], ["#faq", "FAQ"]].map(([href, label]) => (
                <a key={href} href={href} className="w-fit font-label text-[11px] uppercase tracking-[0.12em] text-chrome transition-colors hover:text-fuel">{label}</a>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="font-label text-[9px] uppercase tracking-[0.2em] text-[#8f8f8f]">Explore</div>
              <a href="/" className="w-fit font-label text-[11px] uppercase tracking-[0.12em] text-chrome transition-colors hover:text-fuel">Home</a>
              <a href="/carriers" className="w-fit font-label text-[11px] uppercase tracking-[0.12em] text-chrome transition-colors hover:text-fuel">Carriers</a>
              <a href="/leadership" className="w-fit font-label text-[11px] uppercase tracking-[0.12em] text-chrome transition-colors hover:text-fuel">Leadership</a>
              <a href="#join-free" className="w-fit font-label text-[11px] uppercase tracking-[0.12em] text-fuel transition-colors hover:brightness-125">Join Free</a>
            </div>
            <div className="max-w-sm">
              <div className="font-label text-[9px] uppercase tracking-[0.2em] text-[#8f8f8f]">Newsletter</div>
              <p className="mb-3 mt-2 text-[14px] leading-relaxed text-chrome">Launch news and West Memphis founding-rate updates.</p>
              <NewsletterForm accent={ac} />
              <div className="mt-5 flex flex-col gap-1.5 font-mono text-[13px] text-[#d8d8d8]">
                <a href={site.phoneHref} className="tnum w-fit transition-colors hover:text-fuel">{site.phone}</a>
                <a href={site.emailHref} className="w-fit transition-colors hover:text-fuel">{site.email}</a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 font-label text-[9px] uppercase tracking-[0.2em] text-[#8f8f8f] sm:flex-row sm:items-center sm:justify-between">
            <span>{site.tagline}</span>
            <span>© {new Date().getFullYear()} LineHaul Station, LLC</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
