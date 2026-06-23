import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Section from "@/components/Section";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import ParallaxImage from "@/components/motion/ParallaxImage";
import { PrimaryCTA, GhostCTA } from "@/components/CTA";
import { SectionHead, StatusChip } from "@/components/Bits";
import NetworkMap from "@/components/NetworkMap";
import RenderingsGallery from "@/components/RenderingsGallery";
import { audiences, AUDIENCE_ORDER, PHOTOS } from "@/lib/audiences";

const leadStat = { big: "96%", label: "of carriers run fewer than 20 trucks — and will never build a terminal." };
const supportStats = [
  { big: "$15M", label: "to build a typical 90-space terminal" },
  { big: "$19", label: "per day in member dues vs $50K+/space/yr" },
  { big: "1st", label: "Hub open now — West Memphis, AR" },
];

// OneHome featured large in the bento; FlexSpace + Outriders stack beside it.
const programs = [
  { name: "OneHome", tagline: "Everywhere The Road Takes You.", blurb: "A private, resort-quality community network built exclusively for American truckers.", accent: "#F07820", img: PHOTOS.skydeckSunset, big: true },
  { name: "FlexSpace", tagline: "It's YOUR Terminal Network.", blurb: "Shared-use terminal access sold in increments — Guest Pass, Membership, or Dedicated Space.", accent: "#4878A8", img: PHOTOS.fleetFuel },
  { name: "Outriders Club", tagline: "The Rig Carlton.", blurb: "A 25,000+ sq ft private drivers club — fitness, showers, gaming, rooftop sky deck, and more.", accent: "#C8A060", img: PHOTOS.clubLounge1 },
];

const laneBlurb: Record<string, string> = {
  drivers: "OneHome & the Outriders Club — keep more of what you earn on the road.",
  carriers: "FlexSpace — buy premium terminal space, not buildings.",
  brokers: "Premium staging, cross-dock, and relay access for the carriers you trust.",
  shippers: "Secure cross-dock and relay capacity across a national Hub network.",
  government: "Freight relay infrastructure — the Modern-Day Pony Express.",
};

const modelPoints = [
  "Pay a refundable participation fee, pay daily dues, and use the network whenever you need it.",
  "Buy the space you need, where you need it — across a growing national network.",
  "On-site LH Fleet Services, cross-docking, gated parking, and the Outriders Club at every Hub.",
  "A superior terminal at a fraction of the cost of owning or leasing.",
];

const markets = ["West Memphis, AR", "Dallas–Fort Worth", "Atlanta", "Indianapolis", "Chicago", "Carlisle"];

export default function Home() {
  return (
    <main className="min-h-screen bg-ink">
      <Nav />

      {/* ===================== HERO — full-bleed, headline anchored bottom ===================== */}
      <section className="relative flex min-h-[94dvh] items-end overflow-hidden px-5 pb-14 pt-28 sm:px-8">
        <ParallaxImage src={PHOTOS.clubAerial} alt="Aerial view of a LineHaul Station Hub and Outriders Club" priority strength={0.25} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.96)_0%,rgba(11,11,11,0.7)_55%,rgba(11,11,11,0.35)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,11,11,0.95),transparent_55%)]" />
        <div className="blueprint pointer-events-none absolute inset-0 opacity-20" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] overflow-hidden">
          <div className="scan-once h-full w-full" style={{ ["--ac" as string]: "#F07820" }} />
        </div>
        {/* editorial vertical edge label */}
        <div className="absolute right-3 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 font-mono text-[11px] tracking-[0.35em] text-chrome xl:block">
          35.1465°N · 90.1845°W — I-40 / I-55
        </div>

        <div className="relative mx-auto w-full max-w-site">
          <Reveal>
            <StatusChip label="West Memphis Hub — Open Now" coord="I-40 / I-55" accent="#F07820" />
          </Reveal>
          <Reveal delay={70}>
            <div className="mt-8 font-label text-[clamp(11px,1.4vw,15px)] uppercase tracking-[0.34em] text-chrome">
              It&apos;s Time To
            </div>
          </Reveal>
          <h1 className="mt-2 font-display font-black uppercase leading-[0.82] tracking-[-0.03em] text-white">
            <Reveal as="span" delay={120} className="block text-[clamp(52px,11.5vw,142px)]">
              Re-Think
            </Reveal>
            <Reveal as="span" delay={200} className="outline-head block text-[clamp(52px,11.5vw,142px)]" style={{ ["--ac" as string]: "#F07820" }}>
              Trucking.
            </Reveal>
          </h1>
          <div className="mt-7 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <Reveal delay={300}>
              <div className="font-script text-[clamp(28px,4vw,52px)] font-semibold text-fuel">Faster. Better. Cheaper.</div>
              <p className="mt-3 max-w-[46ch] text-pretty font-body text-[clamp(18px,1.8vw,22px)] leading-relaxed text-[#dadada]">
                A national network of member-only, shared-use Private Terminals — your terminal network, without the build.
              </p>
            </Reveal>
            <Reveal delay={380} className="flex flex-shrink-0 flex-wrap gap-3.5">
              <PrimaryCTA />
              <GhostCTA />
            </Reveal>
          </div>
        </div>
        <a href="#model" className="absolute inset-x-0 bottom-5 mx-auto flex w-fit items-center gap-2 font-label text-[10px] uppercase tracking-[0.2em] text-chrome transition-colors hover:text-white">
          <span className="scroll-nudge inline-block">↓</span> See the model
        </a>
      </section>

      {/* ===================== THE CASE — asymmetric giant lead stat (carbon) ===================== */}
      <Section variant="carbon" className="py-[clamp(56px,8vw,104px)]">
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <Reveal>
            <div className="mb-3 flex items-center gap-2.5 font-label text-[11px] uppercase tracking-[0.22em] text-fuel">
              <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-fuel" /> The Case
            </div>
            <CountUp value={leadStat.big} className="tnum block font-display text-[clamp(84px,15vw,184px)] font-black leading-[0.78] text-fuel" />
            <p className="mt-4 max-w-[34ch] font-body text-[clamp(18px,1.9vw,22px)] leading-snug text-[#dadada]">
              {leadStat.label}
            </p>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-card bg-chrome/10 sm:grid-cols-3">
            {supportStats.map((s, i) => (
              <Reveal key={i} delay={i * 80} className="flex flex-col justify-between bg-panel p-6 sm:p-7">
                <CountUp value={s.big} style={{ color: "#F07820" }} className="tnum font-display text-[clamp(36px,4.5vw,56px)] font-black leading-none" />
                <div className="mt-4 font-body text-[14px] leading-snug text-chrome">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ===================== THE MODEL — asymmetric editorial split (ink) ===================== */}
      <Section variant="ink" id="model" className="py-[clamp(64px,9vw,116px)]">
        <div className="grid gap-x-14 gap-y-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div>
            <SectionHead size="xl" title={<>Stop Building Terminals. <span className="text-fuel">Start Buying Space.</span></>} />
            <Reveal delay={120}>
              <p className="mt-7 max-w-[56ch] text-pretty font-body text-[clamp(18px,1.9vw,22px)] leading-relaxed text-[#dadada]">
                A shared-economy model — like a private club for terminal space. You wouldn&apos;t build a
                golf course to play a round; you&apos;d join the best club in town. That&apos;s exactly what
                LineHaul Station does for terminal space: first-class Hubs, Private Terminals, and Service
                Centers, sold one space at a time.
              </p>
            </Reveal>
          </div>
          {/* spec sheet offset upward to break the baseline */}
          <Reveal delay={160} dir="right" className="frame lg:-mt-10">
            <div className="bg-panel p-7 sm:p-8">
              <div className="mb-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.12em] text-chrome">
                <span>Spec Sheet</span>
                <span className="text-fuel">04</span>
              </div>
              {modelPoints.map((pt, i) => (
                <div key={i} className="flex items-start gap-4 border-t border-chrome/10 py-4">
                  <span className="tnum mt-0.5 font-mono text-[13px] text-fuel">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-body text-[16px] leading-snug text-[#dadada]">{pt}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ===================== THE PROBLEM — full-bleed data poster, one giant number ===================== */}
      <section className="relative overflow-hidden px-5 py-[clamp(80px,12vw,150px)] sm:px-8">
        <ParallaxImage src={PHOTOS.highwayInterchange} alt="A congested national freight interchange" strength={0.28} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.92),rgba(11,11,11,0.8)_45%,rgba(11,11,11,0.96))]" />
        <div className="relative mx-auto max-w-site">
          <SectionHead kicker="The Problem" size="xl" title="The Math Of A Broken System." />
          <div className="mt-12 grid gap-x-12 gap-y-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <Reveal>
              <CountUp value="1,000,000+" className="tnum block font-display text-[clamp(60px,13vw,176px)] font-black leading-[0.78] text-white" />
              <p className="mt-4 max-w-[36ch] font-body text-[clamp(18px,2vw,24px)] leading-snug text-[#dadada]">
                trucks searching for a place to park each night — against just 312,962 spaces nationwide.
              </p>
            </Reveal>
            <div className="grid gap-px overflow-hidden rounded-card bg-chrome/10">
              {[
                { big: "$94.6B", label: "annual cost of congestion to the trucking industry" },
                { big: "25%", label: "of U.S. transportation emissions come from Class 8 trucks" },
                { big: "54", label: "average driver age — only 7% are women, and the shortage deepens" },
              ].map((s, i) => (
                <Reveal key={i} delay={i * 80} className="flex items-baseline gap-5 bg-ink/70 px-6 py-5 backdrop-blur-sm">
                  <CountUp value={s.big} className="tnum min-w-[5ch] font-display text-[clamp(30px,4vw,46px)] font-black leading-none text-white" />
                  <span className="font-body text-[14px] leading-snug text-chrome">{s.label}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== THREE PROGRAMS — asymmetric bento (panel) ===================== */}
      <Section variant="panel" className="py-[clamp(56px,8vw,96px)]">
        <SectionHead title="Three Ways Into The Network." />
        <div className="mt-10 grid gap-3 lg:grid-cols-2">
          {programs.map((p) => (
            <Reveal
              key={p.name}
              className={`lift group relative flex flex-col justify-end overflow-hidden rounded-card border border-chrome/15 ${
                p.big ? "min-h-[360px] lg:row-span-2 lg:min-h-[560px]" : "min-h-[260px]"
              }`}
            >
              <Image
                src={p.img}
                alt={`${p.name} — ${p.tagline}`}
                fill
                loading="lazy"
                className="img-grade object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.2),rgba(11,11,11,0.6)_50%,rgba(11,11,11,0.95))]" />
              <div className="absolute inset-x-0 top-0 h-0.5 opacity-70" style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }} />
              <div className="relative p-7 sm:p-8">
                <span className="h-2 w-2 rounded-full" style={{ background: p.accent }} />
                <div className={`mt-4 font-display font-black uppercase leading-none text-white ${p.big ? "text-[clamp(34px,4vw,52px)]" : "text-[26px]"}`}>
                  {p.name}
                </div>
                <div className={`mt-2 font-script font-semibold ${p.big ? "text-[clamp(24px,2.6vw,32px)]" : "text-[22px]"}`} style={{ color: p.accent }}>
                  {p.tagline}
                </div>
                <p className="mt-4 max-w-[44ch] font-body text-[15px] leading-relaxed text-[#dadada]">{p.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ===================== FIND YOUR LANE — oversized editorial router (blueprint) ===================== */}
      <Section variant="blueprint" className="py-[clamp(64px,10vw,120px)]">
        <SectionHead kicker="Find Your Lane" size="xl" title="One Network. Built For Everyone Who Moves Freight." maxW="max-w-5xl" />
        <div className="mt-12 border-t border-chrome/15">
          {AUDIENCE_ORDER.map((key, i) => {
            const a = audiences[key];
            return (
              <Reveal key={key} delay={i * 50}>
                <Link
                  href={`/${key}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-5 border-b border-chrome/15 py-6 transition-colors hover:bg-[#161616] sm:gap-x-8 sm:py-7"
                  style={{ ["--ac" as string]: a.accent }}
                >
                  <span className="tnum font-mono text-[clamp(13px,1.4vw,16px)]" style={{ color: a.accent }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <span className="font-display text-[clamp(28px,5vw,64px)] font-black uppercase leading-[0.95] text-white transition-colors group-hover:text-white">
                      {a.navLabel}
                    </span>
                    <p className="mt-1.5 max-w-2xl font-body text-[15px] leading-snug text-chrome sm:text-[16px]">{laneBlurb[key]}</p>
                  </div>
                  <span
                    className="font-display text-[clamp(24px,3vw,40px)] transition-transform duration-300 group-hover:translate-x-2"
                    style={{ color: a.accent }}
                    aria-hidden
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            );
          })}
          <Reveal delay={AUDIENCE_ORDER.length * 50}>
            <a href="#contact" className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-5 py-6 transition-colors hover:bg-[#161616] sm:gap-x-8 sm:py-7">
              <span className="font-mono text-[16px] text-fuel">+</span>
              <div>
                <span className="font-display text-[clamp(28px,5vw,64px)] font-black uppercase leading-[0.95] text-white">Not Sure?</span>
                <p className="mt-1.5 max-w-2xl font-body text-[15px] leading-snug text-chrome sm:text-[16px]">
                  Tell us how you move freight and we&apos;ll point you to the right lane.
                </p>
              </div>
              <span className="font-label text-[11px] uppercase tracking-[0.16em] text-fuel transition-transform duration-300 group-hover:translate-x-1">Connect →</span>
            </a>
          </Reveal>
        </div>
      </Section>

      {/* ===================== LIVE NETWORK — map-led, mirrored composition (carbon) ===================== */}
      <Section variant="carbon" className="py-[clamp(80px,11vw,132px)]">
        <div className="grid gap-x-12 gap-y-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHead kicker="The Network Is Live" size="xl" title="An Expanding National Hub Network." />
          <Reveal delay={120}>
            <p className="text-pretty font-body text-[clamp(18px,1.9vw,21px)] leading-relaxed text-[#dadada]">
              The first Hub is open in West Memphis — one block from the I-40 / I-55 interchange, roughly
              60,000 trucks a day. Phase-one expansion is underway across five key markets.
            </p>
          </Reveal>
        </div>

        {/* map LEFT (mirrors the usual text-left/map-right), directory RIGHT */}
        <div className="mt-11 grid gap-7 lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch">
          <Reveal dir="left">
            <NetworkMap />
          </Reveal>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-3 gap-3">
              {[
                { big: "~1,000", label: "extra-wide spaces per Hub" },
                { big: "24/7", label: "gated, surveilled access" },
                { big: "6", label: "markets in phase one" },
              ].map((f, i) => (
                <Reveal key={i} delay={i * 80} className="rounded-card border border-chrome/15 bg-panel px-4 py-5">
                  <CountUp value={f.big} style={{ color: "#F07820" }} className="tnum font-display text-[clamp(20px,2.4vw,28px)] font-black leading-none" />
                  <div className="mt-2 font-body text-[13px] leading-snug text-chrome">{f.label}</div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120} className="flex-1 rounded-card border border-chrome/15 bg-panel p-5">
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-chrome">Hub Directory</div>
              <div className="flex flex-col">
                {markets.map((m, i) => (
                  <div key={m} className="tnum flex items-center justify-between border-t border-chrome/10 py-2.5 font-mono text-[13px] first:border-t-0" style={{ color: i === 0 ? "#F07820" : "#d8d8d8" }}>
                    <span className="flex items-center gap-2.5">
                      <span className="h-2 w-2 rounded-full" style={{ background: i === 0 ? "#F07820" : "#7EC8E3" }} />
                      {m}
                    </span>
                    <span className="font-label text-[9px] uppercase tracking-[0.14em]">{i === 0 ? "Open" : "Phase 1"}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ===================== INSIDE THE NETWORK — gallery (ink) ===================== */}
      <Section variant="ink" id="tour" className="py-[clamp(64px,9vw,116px)]">
        <SectionHead kicker="Take The Tour" size="xl" title="See The Build. Inside The Network." />
        <Reveal delay={120}>
          <p className="mt-6 max-w-[58ch] text-pretty font-body text-[clamp(18px,1.9vw,21px)] leading-relaxed text-[#dadada]">
            Every Hub is a first-class facility — the arrival, the Outriders Club, the rooftop Sky Deck, and on-site LH Fleet Services.
          </p>
        </Reveal>
        <div className="mt-10">
          <RenderingsGallery />
        </div>
      </Section>

      <Contact
        headline="Something BIG Is Coming To Trucking."
        body="West Memphis is open and phase-one expansion is underway. Wherever you sit in the supply chain, let's talk about how the network works for you."
      />
      <Footer />
    </main>
  );
}
