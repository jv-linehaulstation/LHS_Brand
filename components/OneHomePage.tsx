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
import AmenityShowcase from "@/components/onehome/AmenityShowcase";
import NewsletterForm from "@/components/onehome/NewsletterForm";
import FAQ, { type QA } from "@/components/FAQ";
import { CoinImage, ChromeFrame, StatusChip } from "@/components/Bits";
import { ONEHOME } from "@/lib/onehome";
import { audiences } from "@/lib/audiences";
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

const AMENITY_IMG = [
  "/assets/amenities/grill.jpg",
  "/assets/amenities/sky-deck.jpg",
  "/assets/amenities/digital-den.jpg",
  "/assets/amenities/fitness.jpg",
  "/assets/amenities/laundry.jpg",
  "/assets/amenities/gear-shop.jpg",
  "/assets/amenities/pool-spa.jpg",
  "/assets/amenities/camp-k9.jpg",
];

const BUILDINGS = [
  { src: "/assets/building-seq/02.jpg", name: "The First Hub", spec: "West Memphis, AR · I-40 / I-55" },
  { src: "/assets/building-seq/07.jpg", name: "Aerial · The Network", spec: "133 spaces · 24/7 access" },
  { src: "/assets/building-seq/05.jpg", name: "Arrival & Gatehouse", spec: "Gated · secure · driver-first" },
];

// §9 Membership + Space — condensed to one tight line each (JJ: "too much info").
// PENDING(JJ): the exact hover-reveal (image preview follows the cursor) lands
// once the reference site URL is provided.
const MEMBERSHIP = [
  { n: "01", title: "Free Membership", line: "Always 100% free — agree to the Code of Conduct and you're in." },
  { n: "02", title: "Create Your Profile", line: "Unlock member features and career-changing information." },
  { n: "03", title: "Get Others Excited!", line: "Three ways to get Space — earn it, request it, or purchase it." },
];
const SPACE = [
  { n: "01", title: "Earn Your Space", line: "Sponsor ten great drivers → a lifetime of free Space." },
  { n: "02", title: "Request Your Space", line: "Use The LineHaul List to find a carrier or fleet that backs you." },
  { n: "03", title: "Purchase Your Space", line: "Special pricing for anyone with a steering wheel in their hand." },
];

// §10 — three founding-member quote cards. Honest framing (the program is
// pre-launch): the OneHome promise, not fabricated named drivers + stock faces.
// TODO(JJ): replace with real driver testimonials + photos + 5.0 ratings.
const QUOTES = [
  { quote: "Stop paying for a home you rarely use. Pay only for the days you need.", name: "The financial case", role: "Founding-member program" },
  { quote: "It's like giving yourself a $15,000–$20,000 raise without an extra mile.", name: "Annual savings", role: "Founding-member program" },
  { quote: "Choose your Home Hub — then the whole network is your home.", name: "How it works", role: "Founding-member program" },
];

// §11 FAQ — money-first, OneHome-specific. TODO(JJ): confirm final answers.
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
              <a href="#join" className={`group ${PILL} text-ink shadow-[0_14px_34px_rgba(0,0,0,0.5)] hover:brightness-[1.08]`} style={{ background: `linear-gradient(135deg, ${ac}, ${ad})` }}>
                Join OneHome
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

      {/* ============ 2. WELCOME TO THE CLUB — story + Vimeo (no portrait) ============ */}
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

      {/* ============ 3. BUILDING PREVIEWS — framed rounded cards (carousel in the interactions pass) ============ */}
      <section id="buildings" className={`bg-ink ${PAD} py-[clamp(70px,11vh,140px)]`}>
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: ac }}>Our Featured Hubs</div>
          <h2 className="mt-4 text-balance font-display text-[clamp(32px,5vw,68px)] font-black uppercase leading-[0.95] tracking-[-0.025em] text-white">Building Previews</h2>
          <p className="mt-4 text-[clamp(15px,1.6vw,18px)] leading-relaxed" style={{ color: MUT }}>A first look at the network — gated, secure, and built driver-first.</p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BUILDINGS.map((b, i) => (
            <Reveal key={b.name} delay={i * 80} className={i === 1 ? "lg:-mt-8" : ""}>
              <figure className="group overflow-hidden rounded-[20px] border" style={{ borderColor: CARD2, background: CARD }}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={b.src} alt={b.name} fill loading="lazy" className="img-grade object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(11,11,11,0.55))]" />
                </div>
                <figcaption className="flex items-center justify-between gap-3 px-5 py-4">
                  <div>
                    <div className="font-display text-[16px] font-black uppercase tracking-[0.01em] text-white">{b.name}</div>
                    <div className="mt-1 font-mono text-[11px] tracking-[0.04em]" style={{ color: MUT }}>{b.spec}</div>
                  </div>
                  <span className="tnum font-mono text-[12px]" style={{ color: ac }}>{String(i + 1).padStart(2, "0")} / {String(BUILDINGS.length).padStart(2, "0")}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ 4. HERE'S A NEW & BETTER OPTION — Core Sales + MAIN calculator (burgundy-dark) ============ */}
      <section id="core" className={`relative overflow-hidden ${PAD} py-[clamp(80px,12vh,160px)]`} style={{ background: BURG }}>
        <Reveal className="mx-auto max-w-5xl text-center">
          <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: ac }}>{ONEHOME.core.kicker}</div>
          <h2 className="mx-auto mt-6 max-w-[16ch] text-balance font-display text-[clamp(40px,6vw,96px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">
            Here&apos;s A New &amp;{" "}
            <span className="outline-head" style={{ ["--ac" as string]: ac }}>Better Option.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[44ch] text-[clamp(18px,2vw,24px)] font-medium leading-snug text-[#e2e2e2]">{ONEHOME.core.subhead}</p>
        </Reveal>

        {/* the MAIN OneHome calculator lives here — no separate Lifestyle Calculator section */}
        <div id="calculator" className="mx-auto mt-14 grid max-w-6xl gap-[clamp(28px,4vw,56px)] lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <Reveal>
            <OneHomeCalculator accent={ac} accentDark={ad} />
          </Reveal>
          <div className="lg:sticky lg:top-28">
            <Reveal>
              {/* Luxe stat chip */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2">
                <span className="font-display text-[18px] font-black" style={{ color: ac }}>$15K+</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-chrome">saved / yr</span>
              </div>
              <div className="mt-5 max-w-[58ch] space-y-4 text-[clamp(15px,1.5vw,18px)] leading-relaxed" style={{ color: MUT }}>
                {ONEHOME.core.paras.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 font-display text-[clamp(18px,2vw,26px)] font-black uppercase leading-tight text-white">{ONEHOME.core.blurb}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 5. FOR A LOT LESS MONEY — prompts + strikethrough comparison, equal height ============ */}
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

          <Reveal delay={120} dir="right">
            <div className="flex h-full flex-col rounded-[20px] border p-6 sm:p-8" style={{ borderColor: CARD2, background: CARD }}>
              <div className="flex items-center justify-between font-label text-[10px] uppercase tracking-[0.18em]">
                <span className="text-chrome line-through decoration-ember/70 decoration-2">Traditional Housing</span>
                <span className="rounded-full px-3 py-1 text-ink" style={{ background: ac }}>OneHome</span>
              </div>
              <ul className="mt-5 flex flex-1 flex-col">
                {ONEHOME.value.table.map((r) => (
                  <li key={r.trad} className="flex flex-1 flex-col justify-center gap-1 border-t border-white/8 py-3.5 first:border-t-0 first:pt-0">
                    <span className="flex items-baseline gap-2.5 text-[clamp(15px,1.5vw,17px)] font-semibold leading-snug text-white">
                      <span aria-hidden style={{ color: ac }}>✓</span>
                      {r.one}
                    </span>
                    <span className="pl-[1.4em] text-[13px] leading-snug text-chrome/80 line-through decoration-ember/60">{r.trad}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 6. AMENITIES — pinned scroll showcase (49vw media) ============ */}
      <section id="amenities" className={`overflow-x-clip bg-ink ${PAD} py-[clamp(80px,12vh,160px)]`}>
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: ac }}>{ONEHOME.amenities.subhead}</div>
          <h2 className="mt-4 text-balance font-display text-[clamp(34px,5.6vw,84px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">{ONEHOME.amenities.headline}</h2>
          <p className="mt-5 text-[clamp(16px,1.7vw,20px)] leading-relaxed" style={{ color: MUT }}>{ONEHOME.amenities.intro}</p>
        </Reveal>
        <AmenityShowcase
          items={ONEHOME.amenities.cards.map((c, i) => ({ name: c.name, meta: c.meta, blurb: c.blurb, img: AMENITY_IMG[i] }))}
          accent={ac}
          accentDark={ac}
        />
        <Reveal>
          <p className="mt-16 text-center text-[clamp(20px,2.6vw,30px)] font-light italic" style={{ color: ac }}>{a.amenities?.footnote}</p>
        </Reveal>
      </section>

      {/* ============ 7. WE HAVE EVERYTHING YOU NEED — Home Hub + Fleet combined, scroll-zoom ============ */}
      <section id="everything" className="relative flex min-h-[92vh] items-center overflow-hidden">
        <ScrollScale from={1.06} to={1.22}>
          <Image src="/assets/building-seq/01.jpg" alt="A LineHaul Station terminal — your Home Hub" fill className="img-grade object-cover" sizes="100vw" />
        </ScrollScale>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.94),rgba(11,11,11,0.58)_72%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,11,11,0.72),transparent_55%)]" />
        <div className={`relative w-full ${PAD} py-[clamp(70px,11vh,140px)]`}>
          <Reveal className="max-w-2xl">
            <h2 className="text-balance font-display text-[clamp(34px,5.6vw,80px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">{ONEHOME.homehub.headline}</h2>
            <p className="mt-3 text-[clamp(18px,2vw,24px)] font-light italic" style={{ color: ac }}>{ONEHOME.homehub.blurb}</p>
          </Reveal>
          <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            <Reveal delay={100}>
              <div className="glass-strong h-full rounded-[20px] p-7">
                <div className="font-mono text-[12px] uppercase tracking-[0.16em]" style={{ color: ac }}>{ONEHOME.homehub.subhead}</div>
                <div className="mt-2 font-display text-[20px] font-black uppercase tracking-[0.01em] text-white">Your Home Hub</div>
                <p className="mt-3 text-[clamp(15px,1.5vw,17px)] leading-relaxed text-[#e2e2e2]">{ONEHOME.homehub.paras[0]}</p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="glass-strong h-full rounded-[20px] p-7">
                <div className="font-mono text-[12px] uppercase tracking-[0.16em]" style={{ color: ac }}>{ONEHOME.fleet.subhead}</div>
                <div className="mt-2 font-display text-[20px] font-black uppercase tracking-[0.01em] text-white">Fleet Services</div>
                <p className="mt-3 text-[clamp(15px,1.5vw,17px)] leading-relaxed text-[#e2e2e2]">{ONEHOME.fleet.para}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 8. NETWORK / MAP — markets + West Memphis proof, once ============ */}
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
            <div className="rounded-[20px] border p-7" style={{ borderColor: CARD2, background: CARD }}>
              <div className="font-label text-[10px] uppercase tracking-[0.2em]" style={{ color: ac }}>First Home Hub · Open Now</div>
              <div className="mt-3 font-display text-[30px] font-black uppercase leading-none text-white">{a.memphis.address}</div>
              <div className="tnum mt-1.5 font-mono text-[13px] text-chrome">{a.memphis.addressSub}</div>
              <p className="mt-4 text-[14px] leading-relaxed" style={{ color: MUT }}>{a.memphis.body}</p>
              <div className="chrome-rule mt-5" />
              <div className="mt-5"><StatusChip chrome label="Live now" coord="35.14°N / 90.18°W" accent={ac} /></div>
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

      {/* ============ 9. MEMBERSHIP + SPACE — condensed. PENDING(JJ): hover-reveal URL ============ */}
      <section id="membership" className={`bg-ink ${PAD} py-[clamp(70px,11vh,140px)]`}>
        <Reveal className="max-w-3xl">
          <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: ac }}>{a.outriders!.join.eyebrow}</div>
          <h2 className="mt-4 font-display text-[clamp(32px,5vw,76px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">
            {a.outriders!.join.headline.split("/")[0].trim()}{" "}
            <span style={{ color: ac }}>{a.outriders!.join.headline.split("/")[1].trim()}</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-x-12 gap-y-12 lg:grid-cols-2">
          {[
            { label: "Free Membership", items: MEMBERSHIP },
            { label: "Three Ways To Get Space", items: SPACE },
          ].map((group) => (
            <Reveal key={group.label}>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-chrome">{group.label}</div>
              <ul className="mt-5">
                {group.items.map((it) => (
                  <li key={it.n} className="group flex items-start gap-4 border-t border-white/10 py-5 transition-colors first:border-t-0 first:pt-0 hover:bg-white/[0.03]">
                    <span className="tnum mt-0.5 font-mono text-[13px]" style={{ color: ac }}>{it.n}</span>
                    <div>
                      <div className="font-display text-[clamp(18px,2.1vw,24px)] font-black uppercase leading-tight tracking-[0.01em] text-white transition-colors group-hover:text-[var(--ac)]" style={{ ["--ac" as string]: ac }}>{it.title}</div>
                      <p className="mt-1.5 max-w-[44ch] text-[15px] leading-snug text-chrome">{it.line}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-10">
          <MagneticButton strength={0.3}>
            <a href="/join" className={`group ${PILL} text-ink shadow-[0_14px_30px_rgba(0,0,0,0.45)] hover:brightness-[1.06]`} style={{ background: `linear-gradient(135deg, ${ac}, ${ad})` }}>
              Join Free
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </MagneticButton>
        </Reveal>
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
          <div className="grid gap-4 md:grid-cols-3">
            {QUOTES.map((qc, i) => (
              <Reveal key={i} delay={i * 70} className="flex h-full flex-col rounded-[20px] border p-7" style={{ borderColor: CARD2, background: CARD }}>
                <div className="text-[40px] leading-none" style={{ color: ac }} aria-hidden>&ldquo;</div>
                <blockquote className="-mt-2 text-[clamp(17px,1.9vw,21px)] font-medium leading-snug text-white">{qc.quote}</blockquote>
                <div className="mt-auto pt-6">
                  <div className="font-display text-[14px] font-black uppercase tracking-[0.02em] text-white">{qc.name}</div>
                  <div className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-chrome">{qc.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
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

      {/* ============ 12. CLOSING CTA + Join OneHome form — over a full-bleed parallax image ============ */}
      <section id="join" className="relative overflow-hidden">
        <ParallaxImage src={a.roadImage ?? a.heroImage} alt="A truck on the open road at sunset — LineHaul Station" strength={0.24} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.96),rgba(11,11,11,0.74)_60%)]" />
        <div className="bloom" style={{ ["--bloom" as string]: `${ac}22` }} aria-hidden />
        <div className={`relative grid gap-[clamp(28px,4vw,64px)] ${PAD} py-[clamp(80px,12vh,160px)] lg:grid-cols-[0.9fr_1.1fr] lg:items-start`}>
          <div className="lg:sticky lg:top-28">
            <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: ac }}>{ONEHOME.join.subhead}</div>
            <Reveal as="h2" className="mt-3 text-balance font-display text-[clamp(36px,5.6vw,88px)] font-black uppercase leading-[0.9] tracking-[-0.03em] text-white">{a.closerHeadline}</Reveal>
            <Reveal delay={100}>
              <p className="mt-6 max-w-[46ch] text-[clamp(16px,1.7vw,21px)] leading-relaxed text-[#dadada]">{a.closerBody}</p>
            </Reveal>
            <Reveal delay={140} className="mt-8 flex flex-wrap items-center gap-3.5">
              <a href={site.phoneHref} className={`group ${PILL} border border-white/40 bg-white/[0.04] text-white backdrop-blur-sm hover:border-[var(--ac)]`} style={{ ["--ac" as string]: ac }}>
                Schedule a Call
                <span aria-hidden style={{ color: ac }}>→</span>
              </a>
              <a href={site.emailHref} className="font-mono text-[13px] text-chrome underline transition-colors hover:text-white">or email {site.email}</a>
            </Reveal>
          </div>
          <Reveal delay={120} dir="right">
            <JoinForm
              accent={ac}
              accentDark={ad}
              submitLabel="Join OneHome"
              successTitle="You're on the OneHome list."
              successBody="Thanks — you're in line for early access. Watch your phone: we'll share availability, program details, and West Memphis founding-rate news as locations come online."
            />
          </Reveal>
        </div>
      </section>

      {/* ============ 13. FOOTER — dark architectural image + Quick Links / Explore / Newsletter ============ */}
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
              <a href="#join" className="w-fit font-label text-[11px] uppercase tracking-[0.12em] text-fuel transition-colors hover:brightness-125">Join OneHome</a>
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
