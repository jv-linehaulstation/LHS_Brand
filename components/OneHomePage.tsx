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
import TestimonialCarousel, { type Voice } from "@/components/onehome/TestimonialCarousel";
import AmenityShowcase from "@/components/onehome/AmenityShowcase";
import { CoinImage, ChromeFrame, StatusChip } from "@/components/Bits";
import { ONEHOME } from "@/lib/onehome";
import { audiences } from "@/lib/audiences";
import { site } from "@/lib/site";

const PAD = "gutter";
const WHITE = "#F4F2EF";
const CARBON = "#0B0B0B";
const LINE_L = "#E2DDD6";

// Golden-hour "Outriders" clip — shared with the homepage hero; poster instant.
const HERO_VIDEO =
  "https://storage.googleapis.com/msgsndr/vFbdhIphhRpcrSlf4VJF/media/69554d56cb5b716ba310c3dd.mp4";

// Dedicated amenity photography (1:1 with the playbook's 8 cards).
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

// In-their-words carousel — see TestimonialCarousel: these are the OneHome
// PROMISE (playbook-approved lines), not fabricated named drivers. TODO(JJ):
// replace with real founding-member testimonials + photos before launch.
const VOICES: Voice[] = [
  { quote: "Stop paying for a home you rarely use. Pay only for the days you need.", name: "More lifestyle. Less waste.", role: "The financial case", initials: "$", badge: "Founding-member program" },
  { quote: "Most drivers use their home under 100 days a year — but pay for all 365.", name: "The 365 vs 100 problem", role: "Why OneHome exists", initials: "%", badge: "Founding-member program" },
  { quote: "It's like giving yourself a $15,000–$20,000 raise without driving an extra mile.", name: "The raise you give yourself", role: "Annual savings", initials: "↑", badge: "Founding-member program" },
  { quote: "Choose your Home Hub. Then the entire LineHaul Station network is your home.", name: "One Home Hub. A nationwide network.", role: "How it works", initials: "⌂", badge: "Founding-member program" },
  { quote: "From truck stops to something far better — club-level living for drivers.", name: "A better life on the road", role: "The lifestyle", initials: "★", badge: "Founding-member program" },
];

// §9 Membership + Space — condensed to one tight line each (JJ: "too much info").
// PENDING(JJ): the exact hover-reveal (image preview follows the cursor) lands in
// the Fluid-Glass pass once the reference site URL is provided.
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

export default function OneHomePage() {
  const a = audiences.drivers;
  const ac = a.accent;
  const ad = a.accentDark;

  return (
    <main className="min-h-screen bg-ink">
      <GlassNav accent={ac} />

      {/* ============ 1. HERO — full-bleed video + multi-speed parallax ============ */}
      <section className={`relative flex min-h-[100dvh] items-center overflow-hidden ${PAD} pb-24 pt-32`}>
        <ParallaxLayer speed={0.22} className="absolute inset-0">
          <BackgroundVideo src={HERO_VIDEO} poster="/assets/marketing/hero-poster.jpg" className="absolute inset-0 h-full w-full scale-110 object-cover" />
        </ParallaxLayer>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.88),rgba(11,11,11,0.4)_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,11,11,0.7),transparent_45%)]" />
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
            <div className="mt-6 font-script text-[clamp(20px,2.7vw,34px)] font-semibold leading-[1.3]" style={{ color: ac }}>
              {ONEHOME.hero.verse.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-6 max-w-[52ch] text-pretty font-body text-[clamp(17px,1.8vw,21px)] leading-relaxed text-[#dadada]">{ONEHOME.hero.blurb}</p>
          </Reveal>
          <Reveal delay={350} className="mt-8 flex flex-wrap items-center gap-3.5">
            <MagneticButton strength={0.35}>
              <a href="#join" className="group inline-flex items-center gap-2.5 rounded-btn px-[30px] py-[17px] font-label text-[12px] uppercase tracking-[0.16em] text-ink shadow-[0_14px_30px_rgba(0,0,0,0.45)] transition duration-300 hover:brightness-[1.08] active:scale-[0.97]" style={{ background: `linear-gradient(135deg, ${ac}, ${ad})` }}>
                Join OneHome
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </MagneticButton>
            <a href="#core" className="group inline-flex items-center gap-2.5 rounded-btn border border-white/40 bg-black/25 px-[30px] py-[17px] font-label text-[12px] uppercase tracking-[0.16em] text-white backdrop-blur-sm transition duration-300 hover:border-[var(--ac)] active:scale-[0.97]" style={{ ["--ac" as string]: ac }}>
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

      {/* ============ 2. WELCOME TO THE CLUB — story + Vimeo (no portrait) · right after hero (off-white) ============ */}
      <section id="welcome" className={`${PAD} py-[clamp(80px,12vh,160px)]`} style={{ background: WHITE }}>
        <div className="grid gap-[clamp(32px,5vw,72px)] lg:grid-cols-2 lg:items-center">
          <Reveal>
            <CoinImage src="/assets/coin-outriders.png" alt="Outriders Club challenge coin" size={84} glow={`${ac}40`} className="mb-5" />
            <div className="font-label text-[11px] uppercase tracking-[0.22em]" style={{ color: ad }}>{a.outriders!.story.eyebrow}</div>
            <h2 className="mt-3 font-script text-[clamp(40px,6vw,76px)] font-semibold leading-[1.02]" style={{ color: CARBON }}>{a.outriders!.story.headline}</h2>
            <div className="mt-6 max-w-[60ch] space-y-4 font-body leading-relaxed" style={{ color: "#3a3733" }}>
              {a.outriders!.story.paras.slice(0, 3).map((p, i) =>
                i === 0 ? (
                  <p key={i} className="text-[clamp(19px,2.1vw,25px)] font-medium leading-snug" style={{ color: CARBON }}>{p}</p>
                ) : (
                  <p key={i} className="text-[clamp(16px,1.7vw,19px)]">{p}</p>
                )
              )}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-body text-[clamp(15px,1.5vw,18px)] leading-relaxed" style={{ color: "#3a3733" }}>{a.outriders!.webinar.body}</p>
            <ChromeFrame variant="steel" className="mt-5">
              <div className="relative aspect-video overflow-hidden bg-carbon">
                <iframe src={a.outriders!.webinar.video} title="LineHaul Station — Monthly Webinar with Jeff Swenson" loading="lazy" allow="fullscreen; picture-in-picture" className="absolute inset-0 h-full w-full" />
              </div>
            </ChromeFrame>
            <div className="mt-4">
              <div className="font-display text-[16px] font-black uppercase leading-tight tracking-[0.02em]" style={{ color: CARBON }}>Jeffrey J. Swenson</div>
              <div className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: ad }}>Founder &amp; CEO</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 3. BUILDING PREVIEWS — two tall parallax images, 01/04 counter (carbon) ============ */}
      <section className={`bg-ink ${PAD} py-[clamp(70px,11vh,140px)]`}>
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[clamp(30px,4.4vw,60px)] font-black uppercase leading-none tracking-[-0.02em] text-white">Building Previews</h2>
          <span className="tnum font-mono text-[13px] tracking-[0.1em]" style={{ color: ac }}>01 <span className="text-chrome">/ 04</span></span>
        </Reveal>
        <div className="mt-9 grid gap-5 sm:grid-cols-2">
          {[
            { src: "/assets/building-seq/02.jpg", cap: "Terminal · Exterior", idx: "01", speed: 0.1 },
            { src: "/assets/building-seq/07.jpg", cap: "Aerial · The Hub", idx: "02", speed: 0.18 },
          ].map((g) => (
            <Reveal key={g.idx} className={g.idx === "02" ? "sm:mt-16" : ""}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-card border border-chrome/15">
                <ParallaxLayer speed={g.speed} className="absolute -inset-y-[10%] inset-x-0">
                  <Image src={g.src} alt={g.cap} fill loading="lazy" className="img-grade object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                </ParallaxLayer>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(11,11,11,0.82))]" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                  <span className="font-display text-[clamp(18px,2vw,24px)] font-black uppercase text-white">{g.cap}</span>
                  <span className="tnum font-mono text-[12px]" style={{ color: ac }}>{g.idx} / 04</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ 4. HERE'S A NEW & BETTER OPTION — Core Sales + the MAIN calculator (off-white) ============ */}
      <section id="core" className={`${PAD} py-[clamp(80px,12vh,160px)]`} style={{ background: WHITE }}>
        <Reveal className="mx-auto max-w-5xl text-center">
          <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: ad }}>{ONEHOME.core.kicker}</div>
          <h2 className="mx-auto mt-6 max-w-[16ch] text-balance font-display text-[clamp(40px,6vw,96px)] font-black uppercase leading-[0.92] tracking-[-0.025em]" style={{ color: CARBON }}>
            Here&apos;s A New &amp;{" "}
            <span className="outline-head" style={{ ["--ac" as string]: ac }}>Better Option.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[44ch] font-body text-[clamp(18px,2vw,24px)] font-medium leading-snug" style={{ color: CARBON }}>{ONEHOME.core.subhead}</p>
        </Reveal>

        {/* the MAIN OneHome calculator lives here — no separate Lifestyle Calculator section */}
        <div id="calculator" className="mx-auto mt-14 grid max-w-6xl gap-[clamp(28px,4vw,56px)] lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <Reveal>
            <OneHomeCalculator accent={ac} accentDark={ad} onLight />
          </Reveal>
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <div className="max-w-[58ch] space-y-4 font-body text-[clamp(15px,1.5vw,18px)] leading-relaxed" style={{ color: "#3a3733" }}>
                {ONEHOME.core.paras.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 font-display text-[clamp(18px,2vw,26px)] font-black uppercase leading-tight" style={{ color: CARBON }}>{ONEHOME.core.blurb}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 5. FOR A LOT LESS MONEY — prompts + strikethrough comparison, equal height (carbon) ============ */}
      <section id="value" className={`bg-ink ${PAD} py-[clamp(70px,11vh,140px)]`}>
        <Reveal as="h2" className="max-w-[20ch] text-balance font-display text-[clamp(32px,4.8vw,68px)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-white">
          {ONEHOME.value.headline}
        </Reveal>
        <div className="mt-10 grid gap-x-16 gap-y-10 lg:grid-cols-2 lg:items-stretch">
          {/* left — what is home for you today */}
          <Reveal className="flex flex-col">
            <div className="font-display text-[clamp(20px,2.2vw,30px)] font-black uppercase tracking-[0.01em]" style={{ color: ac }}>{ONEHOME.value.subhead}</div>
            <p className="mt-3 font-body text-[clamp(16px,1.6vw,19px)] text-chrome">{ONEHOME.value.prompt}</p>
            <ul className="mt-6 space-y-4">
              {ONEHOME.value.prompts.map((q, i) => (
                <li key={q} className="flex items-baseline gap-4 border-t border-chrome/12 pt-4 font-body text-[clamp(17px,1.8vw,21px)] text-[#e2e2e2]">
                  <span className="tnum font-mono text-[13px]" style={{ color: ac }}>{String(i + 1).padStart(2, "0")}</span>
                  {q}
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-8 font-script text-[clamp(22px,2.6vw,32px)] font-semibold" style={{ color: ac }}>{ONEHOME.value.blurb}</p>
          </Reveal>

          {/* right — cross out the old way */}
          <Reveal delay={120} dir="right">
            <div className="glass flex h-full flex-col rounded-card p-6 sm:p-8">
              <div className="flex items-center justify-between font-label text-[10px] uppercase tracking-[0.18em]">
                <span className="text-chrome line-through decoration-ember/70 decoration-2">Traditional Housing</span>
                <span className="rounded-btn px-2.5 py-1 text-ink" style={{ background: ac }}>OneHome</span>
              </div>
              <ul className="mt-5 flex flex-1 flex-col">
                {ONEHOME.value.table.map((r) => (
                  <li key={r.trad} className="flex flex-1 flex-col justify-center gap-1 border-t border-chrome/12 py-3.5 first:border-t-0 first:pt-0">
                    <span className="flex items-baseline gap-2.5 font-body text-[clamp(15px,1.5vw,17px)] font-semibold leading-snug text-white">
                      <span aria-hidden style={{ color: ac }}>✓</span>
                      {r.one}
                    </span>
                    <span className="pl-[1.4em] font-body text-[13px] leading-snug text-chrome/80 line-through decoration-ember/60">{r.trad}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 6. AMENITIES — one calm section (Fluid-Glass pass upgrades to a pinned showcase) (off-white) ============ */}
      <section id="amenities" className={`${PAD} py-[clamp(80px,12vh,160px)]`} style={{ background: WHITE }}>
        <Reveal className="max-w-3xl">
          <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: ad }}>{ONEHOME.amenities.subhead}</div>
          <h2 className="mt-4 text-balance font-display text-[clamp(34px,5.6vw,84px)] font-black uppercase leading-[0.92] tracking-[-0.025em]" style={{ color: CARBON }}>{ONEHOME.amenities.headline}</h2>
          <p className="mt-5 max-w-[60ch] font-body text-[clamp(16px,1.7vw,20px)] leading-relaxed" style={{ color: "#3a3733" }}>{ONEHOME.amenities.intro}</p>
        </Reveal>

        <AmenityShowcase
          items={ONEHOME.amenities.cards.map((c, i) => ({ name: c.name, meta: c.meta, blurb: c.blurb, img: AMENITY_IMG[i] }))}
          accent={ac}
          accentDark={ad}
        />
        <Reveal>
          <p className="mt-16 font-script text-[clamp(22px,3vw,36px)] font-semibold" style={{ color: ad }}>{a.amenities?.footnote}</p>
        </Reveal>
      </section>

      {/* ============ 7. WE HAVE EVERYTHING YOU NEED — Home Hub + Fleet combined, scroll-zoom (carbon) ============ */}
      <section id="everything" className="relative flex min-h-[92vh] items-center overflow-hidden">
        <ScrollScale from={1.06} to={1.22}>
          <Image src="/assets/building-seq/01.jpg" alt="A LineHaul Station terminal — your Home Hub" fill className="img-grade object-cover" sizes="100vw" />
        </ScrollScale>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.93),rgba(11,11,11,0.55)_72%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,11,11,0.7),transparent_55%)]" />
        <div className={`relative w-full ${PAD} py-[clamp(70px,11vh,140px)]`}>
          <Reveal className="max-w-2xl">
            <h2 className="text-balance font-display text-[clamp(34px,5.6vw,80px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">{ONEHOME.homehub.headline}</h2>
            <p className="mt-3 font-script text-[clamp(22px,2.6vw,32px)] font-semibold" style={{ color: ac }}>{ONEHOME.homehub.blurb}</p>
          </Reveal>
          <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            <Reveal delay={100}>
              <div className="glass-strong h-full rounded-card p-7">
                <div className="font-mono text-[12px] uppercase tracking-[0.16em]" style={{ color: ac }}>{ONEHOME.homehub.subhead}</div>
                <div className="mt-2 font-display text-[20px] font-black uppercase tracking-[0.01em] text-white">Your Home Hub</div>
                <p className="mt-3 font-body text-[clamp(15px,1.5vw,17px)] leading-relaxed text-[#e2e2e2]">{ONEHOME.homehub.paras[0]}</p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="glass-strong h-full rounded-card p-7">
                <div className="font-mono text-[12px] uppercase tracking-[0.16em]" style={{ color: ac }}>{ONEHOME.fleet.subhead}</div>
                <div className="mt-2 font-display text-[20px] font-black uppercase tracking-[0.01em] text-white">Fleet Services</div>
                <p className="mt-3 font-body text-[clamp(15px,1.5vw,17px)] leading-relaxed text-[#e2e2e2]">{ONEHOME.fleet.para}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 8. NETWORK / MAP — markets + West Memphis proof, once (off-white) ============ */}
      <section id="network" className={`${PAD} py-[clamp(70px,11vh,140px)]`} style={{ background: WHITE }}>
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <Reveal as="h2" className="text-balance font-display text-[clamp(34px,5.6vw,84px)] font-black uppercase leading-[0.92] tracking-[-0.025em]" style={{ color: CARBON }}>{ONEHOME.network.headline}</Reveal>
            <Reveal delay={80}>
              <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.16em]" style={{ color: ad }}>{ONEHOME.network.subhead}</p>
              <div className="mt-6 max-w-[62ch] space-y-4 font-body text-[clamp(16px,1.6vw,19px)] leading-relaxed" style={{ color: "#3a3733" }}>
                {ONEHOME.network.paras.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <p className="mt-5 font-script text-[clamp(22px,2.6vw,32px)] font-semibold" style={{ color: ad }}>{ONEHOME.network.blurb}</p>
            </Reveal>
          </div>
          <Reveal delay={120} dir="right" className="chrome-frame glint">
            <div className="bg-ink/90 p-7">
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
          <div className="font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: "#6a655e" }}>Current planning markets</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {ONEHOME.network.markets.map((m) => (
              <span key={m} className="rounded-btn border bg-white/60 px-3 py-1.5 font-mono text-[12px]" style={{ borderColor: LINE_L, color: "#3a3733" }}>{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 9. MEMBERSHIP + SPACE — condensed (carbon). PENDING(JJ): hover-reveal URL ============ */}
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
                  <li key={it.n} className="group flex items-start gap-4 border-t border-chrome/12 py-5 transition-colors first:border-t-0 first:pt-0 hover:bg-white/[0.03]">
                    <span className="tnum mt-0.5 font-mono text-[13px]" style={{ color: ac }}>{it.n}</span>
                    <div>
                      <div className="font-display text-[clamp(18px,2.1vw,24px)] font-black uppercase leading-tight tracking-[0.01em] text-white transition-colors group-hover:text-[var(--ac)]" style={{ ["--ac" as string]: ac }}>{it.title}</div>
                      <p className="mt-1.5 max-w-[44ch] font-body text-[15px] leading-snug text-chrome">{it.line}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-10">
          <MagneticButton strength={0.3}>
            <a href="/join" className="group inline-flex items-center gap-2.5 rounded-btn px-[30px] py-[17px] font-label text-[12px] uppercase tracking-[0.16em] text-ink shadow-[0_14px_30px_rgba(0,0,0,0.45)] transition duration-300 hover:brightness-[1.06] active:scale-[0.97]" style={{ background: `linear-gradient(135deg, ${ac}, ${ad})` }}>
              Join Free
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </MagneticButton>
        </Reveal>
      </section>

      {/* ============ 10. TESTIMONIALS — voices carousel (off-white) ============ */}
      <section className={`${PAD} py-[clamp(70px,11vh,140px)]`} style={{ background: WHITE }}>
        <div className="grid gap-[clamp(28px,4vw,64px)] lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <div className="font-label text-[11px] uppercase tracking-[0.22em]" style={{ color: ad }}>In their words</div>
            <h2 className="mt-3 font-display text-[clamp(30px,4.4vw,64px)] font-black uppercase leading-[0.95] tracking-[-0.02em]" style={{ color: CARBON }}>The OneHome promise, in plain numbers.</h2>
            <p className="mt-5 max-w-[40ch] font-body text-[16px] leading-relaxed" style={{ color: "#3a3733" }}>Founding-member stories arrive as the West Memphis Hub opens. Until then, here&apos;s exactly what OneHome is built to do.</p>
          </Reveal>
          <Reveal delay={120}>
            <TestimonialCarousel items={VOICES} accent={ac} />
          </Reveal>
        </div>
      </section>

      {/* ============ 11. CLOSING CTA + Join OneHome form — over a full-bleed parallax image (carbon) ============ */}
      <section id="join" className="relative overflow-hidden">
        <ParallaxImage src={a.heroImage} alt="The Sky Deck at sunset — LineHaul Station" strength={0.24} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.95),rgba(11,11,11,0.72)_60%)]" />
        <div className="bloom" style={{ ["--bloom" as string]: `${ac}26` }} />
        <div className={`relative grid gap-[clamp(28px,4vw,64px)] ${PAD} py-[clamp(80px,12vh,160px)] lg:grid-cols-[0.9fr_1.1fr] lg:items-start`}>
          <div className="lg:sticky lg:top-28">
            <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: ac }}>{ONEHOME.join.subhead}</div>
            <Reveal as="h2" className="mt-3 text-balance font-display text-[clamp(36px,5.6vw,88px)] font-black uppercase leading-[0.9] tracking-[-0.03em] text-white">{a.closerHeadline}</Reveal>
            <Reveal delay={100}>
              <p className="mt-6 max-w-[46ch] font-body text-[clamp(16px,1.7vw,21px)] leading-relaxed text-[#dadada]">{a.closerBody}</p>
            </Reveal>
            <Reveal delay={140} className="mt-8 flex flex-wrap items-center gap-3.5">
              <a href={site.phoneHref} className="group inline-flex items-center gap-2.5 rounded-btn border border-white/35 bg-black/25 px-[30px] py-[17px] font-label text-[12px] uppercase tracking-[0.16em] text-white backdrop-blur-sm transition duration-300 hover:border-[var(--ac)]" style={{ ["--ac" as string]: ac }}>
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

      {/* ============ 12. FOOTER — large parallax image behind a minimal footer ============ */}
      <footer className="relative overflow-hidden">
        <ParallaxImage src={a.roadImage ?? a.heroImage} alt="A truck on the open road at sunset — LineHaul Station" strength={0.26} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.86),rgba(11,11,11,0.96))]" />
        <div className={`relative ${PAD} pb-12 pt-[clamp(72px,12vh,150px)]`}>
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
            <div className="max-w-sm">
              <Image src="/assets/logo-horz-light.png" alt="LineHaul Station" width={180} height={32} className="h-[24px] w-auto" />
              <p className="mt-4 font-body text-[15px] leading-relaxed text-chrome">OneHome by LineHaul Station — a smarter way to live on the road, built exclusively for professional drivers.</p>
              <div className="tnum mt-5 inline-flex items-center gap-2.5 rounded-btn border border-chrome/20 bg-carbon/60 px-3 py-2 font-mono text-[11px] text-chrome">
                <span className="h-1.5 w-1.5 rounded-full bg-fuel" aria-hidden />
                West Memphis, AR · 35.14°N / 90.18°W
              </div>
            </div>
            <div className="flex flex-col gap-2 font-mono text-[13px] text-[#d8d8d8]">
              <div className="font-label text-[9px] uppercase tracking-[0.2em] text-[#8f8f8f]">Connect</div>
              <a href={site.phoneHref} className="tnum w-fit transition-colors hover:text-fuel">{site.phone}</a>
              <a href={site.emailHref} className="w-fit transition-colors hover:text-fuel">{site.email}</a>
              <span className="text-chrome">{site.domainLabel}</span>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="font-label text-[9px] uppercase tracking-[0.2em] text-[#8f8f8f]">OneHome</div>
              <a href="#core" className="w-fit font-label text-[11px] uppercase tracking-[0.12em] text-chrome transition-colors hover:text-fuel">The Math</a>
              <a href="#amenities" className="w-fit font-label text-[11px] uppercase tracking-[0.12em] text-chrome transition-colors hover:text-fuel">Amenities</a>
              <a href="#network" className="w-fit font-label text-[11px] uppercase tracking-[0.12em] text-chrome transition-colors hover:text-fuel">Network</a>
              <a href="#join" className="w-fit font-label text-[11px] uppercase tracking-[0.12em] text-fuel transition-colors hover:brightness-125">Join OneHome</a>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t border-chrome/10 pt-6 font-label text-[9px] uppercase tracking-[0.2em] text-[#8f8f8f] sm:flex-row sm:items-center sm:justify-between">
            <span>{site.tagline}</span>
            <span>© {new Date().getFullYear()} LineHaul Station, LLC</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
