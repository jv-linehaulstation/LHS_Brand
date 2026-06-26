import Image from "next/image";
import GlassNav from "@/components/GlassNav";
import BackgroundVideo from "@/components/motion/BackgroundVideo";
import ParallaxImage from "@/components/motion/ParallaxImage";
import ParallaxLayer from "@/components/motion/ParallaxLayer";
import ScrollScale from "@/components/motion/ScrollScale";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import MagneticButton from "@/components/motion/MagneticButton";
import OneHomeCalculator from "@/components/calculators/OneHomeCalculator";
import JoinForm from "@/components/JoinForm";
import TestimonialCarousel, { type Voice } from "@/components/onehome/TestimonialCarousel";
import { CoinImage, ChromeFrame, StatusChip, Coin } from "@/components/Bits";
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

// Off-grid amenities collage — per-card layout variation (span, orientation,
// edge-bleed into the gutter, vertical-offset stagger, parallax speed, floating
// caption side). All lg:* only → clean single-column stack on mobile.
const A_LAYOUT = [
  { img: "lg:col-span-7", copy: "lg:col-span-5 lg:col-start-8", aspect: "aspect-[4/3]", bleed: "lg:-ml-[5vw]", off: "", speed: 0.08, cap: "left-5" },
  { img: "lg:col-span-6 lg:col-start-7", copy: "lg:col-span-5 lg:col-start-1 lg:row-start-1", aspect: "aspect-[3/4]", bleed: "lg:-mr-[5vw]", off: "lg:-mt-[5vw]", speed: 0.16, cap: "right-5" },
  { img: "lg:col-span-6", copy: "lg:col-span-5 lg:col-start-8", aspect: "aspect-[5/4]", bleed: "", off: "lg:mt-[3vw]", speed: 0.1, cap: "left-5" },
  { img: "lg:col-span-7 lg:col-start-6", copy: "lg:col-span-5 lg:col-start-1 lg:row-start-1", aspect: "aspect-[16/10]", bleed: "lg:-mr-[6vw]", off: "", speed: 0.17, cap: "right-5" },
  { img: "lg:col-span-5", copy: "lg:col-span-6 lg:col-start-7", aspect: "aspect-[3/4]", bleed: "lg:-ml-[5vw]", off: "lg:-mt-[4vw]", speed: 0.12, cap: "left-5" },
  { img: "lg:col-span-6 lg:col-start-7", copy: "lg:col-span-5 lg:col-start-1 lg:row-start-1", aspect: "aspect-[4/3]", bleed: "", off: "lg:mt-[3vw]", speed: 0.09, cap: "right-5" },
  { img: "lg:col-span-7", copy: "lg:col-span-5 lg:col-start-8", aspect: "aspect-[5/4]", bleed: "lg:-ml-[6vw]", off: "", speed: 0.15, cap: "left-5" },
  { img: "lg:col-span-6 lg:col-start-7", copy: "lg:col-span-5 lg:col-start-1 lg:row-start-1", aspect: "aspect-[3/4]", bleed: "lg:-mr-[5vw]", off: "lg:-mt-[4vw]", speed: 0.11, cap: "right-5" },
] as const;

// In-their-words carousel — see TestimonialCarousel: these are the OneHome
// PROMISE (playbook-approved lines), not fabricated named drivers. TODO(JJ):
// replace with real founding-member testimonials + photos before launch.
const VOICES: Voice[] = [
  { quote: "Stop paying for a home you rarely use. Pay only for the days you need.", name: "More lifestyle. Less waste.", role: "The financial case", initials: "$", badge: "OneHome promise" },
  { quote: "Most drivers use their home under 100 days a year — but pay for all 365.", name: "The 365 vs 100 problem", role: "Why OneHome exists", initials: "%", badge: "OneHome promise" },
  { quote: "It's like giving yourself a $15,000–$20,000 raise without driving an extra mile.", name: "The raise you give yourself", role: "Annual savings", initials: "↑", badge: "OneHome promise" },
  { quote: "Choose your Home Hub. Then the entire LineHaul Station network is your home.", name: "One Home Hub. A nationwide network.", role: "How it works", initials: "⌂", badge: "OneHome promise" },
  { quote: "From truck stops to something far better — club-level living for drivers.", name: "A better life on the road", role: "The lifestyle", initials: "★", badge: "OneHome promise" },
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
          <BackgroundVideo
            src={HERO_VIDEO}
            poster="/assets/marketing/hero-poster.jpg"
            className="absolute inset-0 h-full w-full scale-110 object-cover"
          />
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
            <div className="mt-7 font-label text-[11px] uppercase tracking-[0.22em] text-chrome">
              {a.eyebrow}
            </div>
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
            <p className="mt-6 max-w-[52ch] text-pretty font-body text-[clamp(17px,1.8vw,21px)] leading-relaxed text-[#dadada]">
              {ONEHOME.hero.blurb}
            </p>
          </Reveal>
          <Reveal delay={350} className="mt-8 flex flex-wrap items-center gap-3.5">
            <MagneticButton strength={0.35}>
              <a
                href="#join"
                className="group inline-flex items-center gap-2.5 rounded-btn px-[30px] py-[17px] font-label text-[12px] uppercase tracking-[0.16em] text-ink shadow-[0_14px_30px_rgba(0,0,0,0.45)] transition duration-300 hover:brightness-[1.08] active:scale-[0.97]"
                style={{ background: `linear-gradient(135deg, ${ac}, ${ad})` }}
              >
                Join OneHome
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </MagneticButton>
            <a
              href="#core"
              className="group inline-flex items-center gap-2.5 rounded-btn border border-white/40 bg-black/25 px-[30px] py-[17px] font-label text-[12px] uppercase tracking-[0.16em] text-white backdrop-blur-sm transition duration-300 hover:border-[var(--ac)] active:scale-[0.97]"
              style={{ ["--ac" as string]: ac }}
            >
              See The Math
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" style={{ color: ac }}>→</span>
            </a>
          </Reveal>
          <p className="tnum mt-6 max-w-[40ch] font-mono text-[12px] leading-snug text-chrome">{a.heroNote}</p>
        </ParallaxLayer>

        <a
          href="#core"
          className="absolute inset-x-0 bottom-5 mx-auto flex w-fit items-center gap-2 font-label text-[10px] uppercase tracking-[0.2em] text-chrome transition-colors hover:text-white"
        >
          <span className="scroll-nudge inline-block">↓</span> {a.scrollHint}
        </a>
      </section>

      {/* ============ 2. CORE SALES — big centered "365 vs 100" statement (white) ============ */}
      <section id="core" className={`${PAD} py-[clamp(80px,12vh,160px)]`} style={{ background: WHITE }}>
        <Reveal className="mx-auto max-w-5xl text-center">
          <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: ad }}>
            {ONEHOME.core.kicker}
          </div>
          <h2 className="mx-auto mt-6 max-w-[16ch] text-balance font-display text-[clamp(40px,6vw,96px)] font-black uppercase leading-[0.92] tracking-[-0.025em]" style={{ color: CARBON }}>
            Here&apos;s A New &amp;{" "}
            <span className="outline-head" style={{ ["--ac" as string]: ac }}>Better Option.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[42ch] font-body text-[clamp(18px,2vw,24px)] font-medium leading-snug" style={{ color: CARBON }}>
            {ONEHOME.core.subhead}
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-x-16 gap-y-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <div className="max-w-[60ch] space-y-4 font-body text-[clamp(16px,1.6vw,19px)] leading-relaxed" style={{ color: "#3a3733" }}>
              {ONEHOME.core.paras.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:pt-1">
            <div className="glass-onlight rounded-card p-7 sm:p-9">
              <div className="font-label text-[10px] uppercase tracking-[0.2em]" style={{ color: ad }}>
                Stop paying for what you don&apos;t use
              </div>
              <div className="mt-3 flex items-baseline gap-3">
                <CountUp value="$15,000" className="tnum font-display text-[clamp(40px,6vw,68px)] font-black leading-none" style={{ color: CARBON }} />
                <span className="font-display text-[20px] font-black uppercase" style={{ color: ad }}>+ / yr</span>
              </div>
              <p className="mt-3 font-body text-[15px] leading-relaxed" style={{ color: "#3a3733" }}>
                What drivers could save on ordinary living expenses — money that can compound into a
                staggering sum invested over the next 30–40 years.
              </p>
              <div className="mt-5 h-px w-full" style={{ background: LINE_L }} />
              <a href="#calculator" className="mt-5 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors hover:opacity-70" style={{ color: ad }}>
                Run your own numbers <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 3. VALUE STATEMENT + comparison table (ink) ============ */}
      <section id="value" className={`bg-ink ${PAD} py-[clamp(70px,11vh,140px)]`}>
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <Reveal as="h2" className="text-balance font-display text-[clamp(32px,4.8vw,68px)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-white">
              {ONEHOME.value.headline}
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-7 font-display text-[clamp(18px,2vw,26px)] font-black uppercase tracking-[0.01em]" style={{ color: ac }}>
                {ONEHOME.value.subhead}
              </div>
              <p className="mt-2 font-body text-[clamp(16px,1.6vw,19px)] text-chrome">{ONEHOME.value.prompt}</p>
              <ul className="mt-5 space-y-2.5">
                {ONEHOME.value.prompts.map((q) => (
                  <li key={q} className="flex items-baseline gap-3 font-body text-[16px] text-[#dadada]">
                    <span className="h-1.5 w-1.5 flex-none translate-y-[-2px] rounded-full" style={{ background: ac }} aria-hidden />
                    {q}
                  </li>
                ))}
              </ul>
              <div className="mt-6 max-w-[60ch] space-y-4 text-pretty font-body text-[clamp(16px,1.6vw,18px)] leading-relaxed text-[#dadada]">
                {ONEHOME.value.full.map((p, j) => <p key={j}>{p}</p>)}
              </div>
              <p className="mt-6 font-script text-[clamp(22px,2.6vw,32px)] font-semibold" style={{ color: ac }}>{ONEHOME.value.blurb}</p>
            </Reveal>
          </div>

          {/* Glass comparison table */}
          <Reveal delay={120} dir="right" className="lg:sticky lg:top-28">
            <div className="glass overflow-hidden rounded-card">
              <div className="grid grid-cols-2">
                <div className="px-3 py-4 font-label text-[11px] uppercase tracking-[0.14em] text-chrome sm:px-5">Traditional Housing</div>
                <div className="px-3 py-4 font-label text-[11px] uppercase tracking-[0.14em] text-ink sm:px-5" style={{ background: ac }}>OneHome</div>
              </div>
              {ONEHOME.value.table.map((r) => (
                <div key={r.trad} className="grid grid-cols-2 border-t border-chrome/12">
                  <div className="px-3 py-3.5 font-body text-[14px] leading-snug text-chrome sm:px-5">{r.trad}</div>
                  <div className="border-l border-chrome/12 px-3 py-3.5 font-body text-[14px] font-semibold leading-snug text-white sm:px-5">{r.one}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 4. AMENITIES — off-grid collage: edge-bleed, stagger, multi-speed
          parallax, floating mono captions, zoom-on-hover (off-white) ============ */}
      <section id="amenities" className={`relative overflow-hidden ${PAD} py-[clamp(80px,12vh,160px)]`} style={{ background: WHITE }}>
        <Reveal className="max-w-3xl">
          <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: ad }}>
            {ONEHOME.amenities.subhead}
          </div>
          <h2 className="mt-4 text-balance font-display text-[clamp(34px,5.6vw,84px)] font-black uppercase leading-[0.92] tracking-[-0.025em]" style={{ color: CARBON }}>
            {ONEHOME.amenities.headline}
          </h2>
          <p className="mt-5 max-w-[60ch] font-body text-[clamp(16px,1.7vw,20px)] leading-relaxed" style={{ color: "#3a3733" }}>
            {ONEHOME.amenities.intro}
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-[clamp(48px,7vw,116px)] lg:mt-24">
          {ONEHOME.amenities.cards.map((c, i) => {
            const L = A_LAYOUT[i];
            return (
              <Reveal key={c.name} className={`grid items-center gap-x-[clamp(24px,3vw,56px)] gap-y-7 lg:grid-cols-12 ${L.off}`}>
                {/* Image — parallax drift (varied speed), edge-bleed, floating caption, hover zoom */}
                <figure className={`group relative ${L.img} ${L.bleed}`}>
                  <div className={`relative overflow-hidden rounded-card border border-[#E2DDD6] ${L.aspect}`}>
                    <ParallaxLayer speed={L.speed} className="absolute -inset-y-[9%] inset-x-0">
                      <Image
                        src={AMENITY_IMG[i]}
                        alt={`${c.name} — OneHome by LineHaul Station`}
                        fill
                        loading="lazy"
                        className="img-grade object-cover transition-transform duration-[900ms] ease-out motion-safe:group-hover:scale-[1.08]"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                      />
                    </ParallaxLayer>
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(11,11,11,0.5))]" />
                    <div className="absolute inset-x-0 top-0 h-0.5 opacity-80" style={{ background: `linear-gradient(90deg, ${ac}, transparent)` }} aria-hidden />
                  </div>
                  {/* floating mono caption — half off the image edge */}
                  <figcaption className={`absolute -bottom-3.5 ${L.cap} z-10 inline-flex items-center gap-2 rounded-btn bg-ink/90 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white backdrop-blur`}>
                    <span className="tnum" style={{ color: ac }}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-chrome">{c.meta}</span>
                  </figcaption>
                </figure>

                {/* Copy */}
                <div className={L.copy}>
                  <h3 className="font-display text-[clamp(26px,3.4vw,48px)] font-black uppercase leading-[0.95] tracking-[-0.01em]" style={{ color: CARBON }}>{c.name}</h3>
                  <p className="mt-4 text-pretty font-body text-[clamp(16px,1.6vw,19px)] font-semibold leading-snug" style={{ color: CARBON }}>{c.blurb}</p>
                  <div className="mt-3 max-w-[52ch] space-y-3 text-pretty font-body text-[clamp(15px,1.5vw,17px)] leading-relaxed" style={{ color: "#3a3733" }}>
                    {c.full.map((p, j) => <p key={j}>{p}</p>)}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <p className="mt-16 font-script text-[clamp(22px,3vw,36px)] font-semibold" style={{ color: ad }}>{a.amenities?.footnote}</p>
        </Reveal>
      </section>

      {/* ============ 5. FLEET SERVICES — image cards (ink) ============ */}
      <section id="fleet" className={`bg-ink ${PAD} py-[clamp(70px,11vh,140px)]`}>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <Reveal as="h2" className="text-balance font-display text-[clamp(34px,5.6vw,84px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">
            <span style={{ color: ac }}>★</span> {ONEHOME.fleet.headline} <span style={{ color: ac }}>★</span>
          </Reveal>
          <Reveal delay={120}>
            <div className="font-mono text-[12px] uppercase tracking-[0.16em]" style={{ color: ac }}>{ONEHOME.fleet.subhead}</div>
            <p className="mt-3 max-w-[60ch] text-pretty font-body text-[clamp(16px,1.6vw,19px)] leading-relaxed text-[#dadada]">{ONEHOME.fleet.para}</p>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ONEHOME.fleet.cards.map((c, i) => (
            <Reveal key={c.name} delay={(i % 5) * 50} className="lift group overflow-hidden rounded-card border border-chrome/15">
              <div className="relative aspect-[4/3] overflow-hidden bg-carbon">
                <Image src={c.img} alt={c.name} fill loading="lazy" className="img-grade object-cover transition-transform duration-700 motion-safe:group-hover:scale-105" sizes="(max-width: 768px) 50vw, 20vw" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(11,11,11,0.85))]" />
                <div className="absolute inset-x-0 top-0 h-0.5 opacity-80" style={{ background: `linear-gradient(90deg, ${ac}, transparent)` }} aria-hidden />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="font-display text-[14px] font-extrabold uppercase leading-tight tracking-[0.02em] text-white">{c.name}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ 6. NETWORK / MAP — markets + West Memphis proof (off-white) ============ */}
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
          {/* dark glass proof card pops against the warm off-white */}
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

      {/* ============ 7. HOME HUB — full-bleed scroll-zoom media + glass copy panel ============ */}
      <section id="homehub" className="relative flex min-h-[92vh] items-center overflow-hidden">
        <ScrollScale from={1.06} to={1.22}>
          <Image src="/assets/building-seq/01.jpg" alt="A LineHaul Station terminal — your Home Hub" fill className="img-grade object-cover" sizes="100vw" />
        </ScrollScale>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.92),rgba(11,11,11,0.5)_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,11,11,0.7),transparent_55%)]" />
        <div className={`relative w-full ${PAD} py-[clamp(70px,11vh,140px)]`}>
          <Reveal className="max-w-xl">
            <h2 className="text-balance font-display text-[clamp(34px,5.6vw,80px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">{ONEHOME.homehub.headline}</h2>
            <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.16em]" style={{ color: ac }}>{ONEHOME.homehub.subhead}</p>
            <p className="mt-3 font-script text-[clamp(22px,2.6vw,32px)] font-semibold" style={{ color: ac }}>{ONEHOME.homehub.blurb}</p>
          </Reveal>
          <Reveal delay={120} className="mt-7 max-w-xl">
            <div className="glass-strong rounded-card p-7">
              <div className="space-y-4 font-body text-[clamp(15px,1.5vw,18px)] leading-relaxed text-[#e2e2e2]">
                {ONEHOME.homehub.paras.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 8. LIFESTYLE CALCULATOR — dark calculator card on off-white + §9 lead-in ============ */}
      <section id="calculator" className={`${PAD} py-[clamp(70px,11vh,140px)]`} style={{ background: WHITE }}>
        <div className="grid gap-[clamp(28px,4vw,56px)] lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <Reveal>
            {/* the calculator carries its own chrome-frame; it reads as a premium dark money card on the warm off-white */}
            <OneHomeCalculator accent={ac} accentDark={ad} onLight />
          </Reveal>
          <div className="lg:sticky lg:top-28">
            <Reveal as="h2" className="font-display text-[clamp(26px,3.4vw,44px)] font-black uppercase leading-[0.95] tracking-[-0.02em]" style={{ color: CARBON }}>{ONEHOME.calc.headline}</Reveal>
            <Reveal delay={80}>
              <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.16em]" style={{ color: ad }}>{ONEHOME.calc.subhead}</p>
              <div className="mt-5 max-w-[58ch] space-y-4 font-body text-[clamp(15px,1.5vw,18px)] leading-relaxed" style={{ color: "#3a3733" }}>
                {ONEHOME.calc.paras.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECONDARY — Outriders Club (FREE membership), distinct from paid OneHome
          =================================================================== */}

      {/* Welcome To The Club — story + Vimeo webinar merged (no Jeff portrait) */}
      <section id="welcome" className={`bg-ink ${PAD} py-[clamp(80px,12vh,160px)]`}>
        <div className="grid gap-[clamp(32px,5vw,72px)] lg:grid-cols-2 lg:items-center">
          <Reveal>
            <CoinImage src="/assets/coin-outriders.png" alt="Outriders Club challenge coin" size={84} glow={`${ac}55`} className="mb-5" />
            <div className="font-label text-[11px] uppercase tracking-[0.22em] text-chrome">{a.outriders!.story.eyebrow}</div>
            <h2 className="mt-3 font-script text-[clamp(40px,6vw,76px)] font-semibold leading-[1.02] text-white">{a.outriders!.story.headline}</h2>
            <div className="mt-6 max-w-[62ch] space-y-4 font-body leading-relaxed text-[#e2e2e2]">
              {a.outriders!.story.paras.map((p, i) =>
                i === 0 ? (
                  <p key={i} className="text-[clamp(19px,2.1vw,25px)] font-medium leading-snug text-white">{p}</p>
                ) : (
                  <p key={i} className="text-[clamp(16px,1.7vw,19px)]">{p}</p>
                )
              )}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-body text-[clamp(15px,1.5vw,18px)] leading-relaxed text-chrome">{a.outriders!.webinar.body}</p>
            <ChromeFrame variant="steel" className="mt-5">
              <div className="relative aspect-video overflow-hidden bg-carbon">
                <iframe
                  src={a.outriders!.webinar.video}
                  title="LineHaul Station — Monthly Webinar with Jeff Swenson"
                  loading="lazy"
                  allow="fullscreen; picture-in-picture"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </ChromeFrame>
            <div className="mt-4">
              <div className="font-display text-[16px] font-black uppercase leading-tight tracking-[0.02em] text-white">Jeffrey J. Swenson</div>
              <div className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: ac }}>Founder &amp; CEO</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Nothing To Lose / Everything To Gain — 3-step free-membership process (white) */}
      <section className={`${PAD} py-[clamp(70px,11vh,140px)]`} style={{ background: WHITE }}>
        <Reveal className="max-w-3xl">
          <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: ad }}>{a.outriders!.join.eyebrow}</div>
          <h2 className="mt-4 font-display text-[clamp(34px,5.6vw,84px)] font-black uppercase leading-[0.92] tracking-[-0.025em]" style={{ color: CARBON }}>
            {a.outriders!.join.headline.split("/")[0].trim()}
            <br />
            <span style={{ color: ad }}>{a.outriders!.join.headline.split("/")[1].trim()}</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-3">
          {a.outriders!.join.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="flex items-center gap-4">
                <div className="relative z-10 flex h-[52px] w-[52px] flex-none items-center justify-center rounded-full border-2 bg-white" style={{ borderColor: ad }}>
                  <span className="tnum font-display text-[19px] font-black" style={{ color: ad }}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                {i < a.outriders!.join.steps.length - 1 && <span className="hidden h-px flex-1 bg-[#E2DDD6] md:block" aria-hidden />}
              </div>
              <div className="mt-5 font-display text-[18px] font-extrabold uppercase tracking-[0.02em]" style={{ color: CARBON }}>{s.title}</div>
              <p className="mt-2 max-w-[40ch] font-body text-[15px] leading-relaxed" style={{ color: "#3a3733" }}>{s.blurb}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Space — Earn → Request → Purchase (ink) */}
      <section className={`bg-ink ${PAD} py-[clamp(70px,11vh,140px)]`}>
        <Reveal>
          <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: ac }}>Three ways to get Space</div>
          <h2 className="mt-3 font-display text-[clamp(48px,9vw,120px)] font-black uppercase leading-[0.86] tracking-[-0.03em] text-white">{a.outriders!.join.waysTitle}</h2>
          <p className="mt-5 max-w-[52ch] font-body text-[clamp(16px,1.7vw,20px)] leading-relaxed text-[#dadada]">
            Space is your place in the network — secure parking, trailer drop, and terminal access at every LineHaul Station Hub. Here are the three ways to get it.
          </p>
        </Reveal>
        <div className="mt-12 max-w-3xl">
          {a.outriders!.join.ways.map((w, i) => (
            <Reveal key={w.title} delay={i * 90} className="relative flex gap-5 pb-9 last:pb-0">
              {i < a.outriders!.join.ways.length - 1 && <span className="absolute bottom-0 left-[31px] top-[68px] w-px bg-chrome/20" aria-hidden />}
              <Coin tone={w.tone} size={64} className="relative z-10 flex-none">{String(i + 1).padStart(2, "0")}</Coin>
              <div className="pt-1.5">
                <div className="font-display text-[clamp(22px,3vw,32px)] font-black uppercase leading-none text-white">{w.title}</div>
                <p className="mt-2.5 max-w-[52ch] font-body text-[15px] leading-relaxed text-chrome">{w.blurb}</p>
              </div>
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

      {/* ============ BUILDING PREVIEWS — two tall parallax images, 01/04 counter (off-white) ============ */}
      <section className={`${PAD} py-[clamp(70px,11vh,140px)]`} style={{ background: WHITE }}>
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[clamp(30px,4.4vw,60px)] font-black uppercase leading-none tracking-[-0.02em]" style={{ color: CARBON }}>Building Previews</h2>
          <span className="tnum font-mono text-[13px] tracking-[0.1em]" style={{ color: ad }}>01 <span style={{ color: "#6a655e" }}>/ 04</span></span>
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

      {/* ============ IN THEIR WORDS — voices carousel (ink) ============ */}
      <section className={`bg-ink ${PAD} py-[clamp(70px,11vh,140px)]`}>
        <div className="grid gap-[clamp(28px,4vw,64px)] lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <div className="font-label text-[11px] uppercase tracking-[0.22em] text-chrome">In their words</div>
            <h2 className="mt-3 font-display text-[clamp(30px,4.4vw,64px)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-white">The OneHome promise, in plain numbers.</h2>
            <p className="mt-5 max-w-[40ch] font-body text-[16px] leading-relaxed text-chrome">Founding-member stories arrive as the West Memphis Hub opens. Until then, here&apos;s exactly what OneHome is built to do.</p>
          </Reveal>
          <Reveal delay={120}>
            <TestimonialCarousel items={VOICES} accent={ac} />
          </Reveal>
        </div>
      </section>

      {/* ============ 9. JOIN ONEHOME — interest form (gradient) ============ */}
      <section id="join" className={`relative overflow-hidden ${PAD} py-[clamp(80px,12vh,160px)]`} style={{ background: `linear-gradient(160deg, ${ac}1f, #0B0B0B 58%)` }}>
        <div className="bloom" style={{ ["--bloom" as string]: `${ac}26` }} />
        <div className="blueprint pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative grid gap-[clamp(28px,4vw,64px)] lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: ac }}>{ONEHOME.join.subhead}</div>
            <h2 className="mt-3 font-display text-[clamp(34px,5vw,80px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">{ONEHOME.join.headline}</h2>
            <Reveal delay={100}>
              <div className="mt-5 max-w-[46ch] space-y-4 font-body text-[clamp(16px,1.6vw,20px)] leading-relaxed text-[#dadada]">
                {ONEHOME.join.paras.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="glass mt-9 overflow-hidden rounded-card">
                <div className="grid grid-cols-1 gap-px overflow-hidden bg-chrome/10 sm:grid-cols-3 lg:grid-cols-1">
                  <a href={site.phoneHref} className="bg-ink/70 p-5 backdrop-blur transition-colors hover:bg-ink/90">
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: ac }}>Call</div>
                    <div className="tnum mt-2 font-mono text-[15px] text-white">{site.phone}</div>
                  </a>
                  <a href={site.emailHref} className="bg-ink/70 p-5 backdrop-blur transition-colors hover:bg-ink/90">
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: ac }}>Email</div>
                    <div className="mt-2 break-words font-mono text-[15px] text-white">{site.email}</div>
                  </a>
                  <div className="bg-ink/70 p-5 backdrop-blur">
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: ac }}>Visit</div>
                    <div className="mt-2 font-mono text-[15px] text-white">West Memphis, AR</div>
                    <div className="mt-1 font-mono text-[12px] text-chrome">{site.domainLabel}</div>
                  </div>
                </div>
              </div>
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

      {/* ============ CLOSING CTA + parallax footer ============ */}
      <footer className="relative overflow-hidden">
        <ParallaxImage src="/assets/deck-library/photos/lifestyle-skydeck-sunset.jpg" alt="The Sky Deck at sunset — LineHaul Station" strength={0.26} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.82),rgba(11,11,11,0.94))]" />
        <div className={`relative ${PAD} pb-12 pt-[clamp(80px,14vh,180px)]`}>
          <Reveal className="max-w-4xl">
            <h2 className="text-balance font-display text-[clamp(38px,6.4vw,104px)] font-black uppercase leading-[0.9] tracking-[-0.03em] text-white">{a.closerHeadline}</h2>
            <p className="mt-6 max-w-[52ch] font-body text-[clamp(17px,1.8vw,21px)] leading-relaxed text-[#dadada]">{a.closerBody}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <MagneticButton strength={0.35}>
                <a href="#join" className="group inline-flex items-center gap-2.5 rounded-btn px-[30px] py-[17px] font-label text-[12px] uppercase tracking-[0.16em] text-ink shadow-[0_14px_30px_rgba(0,0,0,0.45)] transition duration-300 hover:brightness-[1.08] active:scale-[0.97]" style={{ background: `linear-gradient(135deg, ${ac}, ${ad})` }}>
                  Join OneHome
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </MagneticButton>
              <a href={site.phoneHref} className="group inline-flex items-center gap-2.5 rounded-btn border border-white/35 bg-black/25 px-[30px] py-[17px] font-label text-[12px] uppercase tracking-[0.16em] text-white backdrop-blur-sm transition duration-300 hover:border-[var(--ac)]" style={{ ["--ac" as string]: ac }}>
                Schedule a Call
                <span aria-hidden style={{ color: ac }}>→</span>
              </a>
            </div>
          </Reveal>

          <div className="mt-[clamp(56px,9vh,120px)] grid gap-8 border-t border-chrome/15 pt-10 md:grid-cols-[1.4fr_1fr_1fr]">
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
              <a href="#calculator" className="w-fit font-label text-[11px] uppercase tracking-[0.12em] text-chrome transition-colors hover:text-fuel">Calculator</a>
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
