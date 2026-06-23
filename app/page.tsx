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
import { SectionHead, StatusChip, DataTag } from "@/components/Bits";
import NetworkMap from "@/components/NetworkMap";
import RenderingsGallery from "@/components/RenderingsGallery";
import { audiences, AUDIENCE_ORDER, PHOTOS } from "@/lib/audiences";

const heroStats = [
  { big: "96%", label: "of carriers run fewer than 20 trucks — and will never build a terminal" },
  { big: "$15M", label: "to build a typical 90-space terminal — most sit at 20% occupancy" },
  { big: "$19", label: "per day in member dues — versus $50K+ per occupied space each year" },
  { big: "1st", label: "Hub open now — West Memphis, AR, at the I-40 / I-55 interchange" },
];

const programs = [
  { name: "FlexSpace", tagline: "It's YOUR Terminal Network.", blurb: "Shared-use terminal access sold in increments — Guest Pass, Proprietary Membership, or Dedicated Space. Carrier-facing.", accent: "#4878A8", img: PHOTOS.fleetFuel },
  { name: "OneHome", tagline: "Everywhere The Road Takes You.", blurb: "A private, resort-quality community network built exclusively for American truckers. Driver-facing housing program.", accent: "#F07820", img: PHOTOS.skydeckSunset },
  { name: "Outriders Club", tagline: "The Rig Carlton.", blurb: "A 25,000+ sq ft private drivers club — restaurant, fitness, showers, gaming, rooftop sky deck, and more.", accent: "#C8A060", img: PHOTOS.clubLounge1 },
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

const markets = [
  "West Memphis, AR",
  "Dallas–Fort Worth",
  "Atlanta",
  "Indianapolis",
  "Chicago",
  "Carlisle",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-ink">
      <Nav />

      {/* ============================ HERO — LIVE NETWORK BOARD ============================ */}
      <section className="relative flex min-h-[88dvh] items-center overflow-hidden px-5 py-24 sm:px-8">
        <ParallaxImage src={PHOTOS.clubAerial} alt="Aerial view of a LineHaul Station Hub and Outriders Club" priority strength={0.22} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.97)_0%,rgba(11,11,11,0.86)_46%,rgba(11,11,11,0.45)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,11,11,0.85),transparent_40%)]" />
        <div className="blueprint pointer-events-none absolute inset-0 opacity-25" />
        {/* one-pass scan sweep across the top edge */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] overflow-hidden">
          <div className="scan-once h-full w-full" style={{ ["--ac" as string]: "#F07820" }} />
        </div>
        {/* corner coordinate ticks */}
        <DataTag className="absolute left-5 top-24 hidden sm:left-8 lg:block">
          35.1465°N · 90.1845°W
        </DataTag>

        <div className="relative mx-auto w-full max-w-site">
          <div className="max-w-[900px]">
            <Reveal>
              <StatusChip label="West Memphis Hub — Open Now" coord="I-40 / I-55" accent="#F07820" />
            </Reveal>
            <Reveal delay={70}>
              <div className="mt-7 font-label text-[clamp(11px,1.4vw,14px)] uppercase tracking-[0.32em] text-chrome">
                It&apos;s Time To
              </div>
            </Reveal>
            <h1 className="mt-1.5 font-display font-black uppercase leading-[0.86] tracking-[-0.02em] text-white">
              <Reveal as="span" delay={120} className="block text-[clamp(46px,9vw,118px)]">
                Re-Think
              </Reveal>
              <Reveal
                as="span"
                delay={200}
                className="outline-head block text-[clamp(46px,9vw,118px)]"
                style={{ ["--ac" as string]: "#F07820" }}
              >
                Trucking.
              </Reveal>
            </h1>
            <Reveal delay={280}>
              <div className="mt-5 font-script text-[clamp(26px,3.6vw,46px)] font-semibold text-fuel">
                Faster. Better. Cheaper.
              </div>
            </Reveal>
            <Reveal delay={340}>
              <p className="mt-5 max-w-[560px] text-pretty font-body text-[clamp(17px,1.7vw,20px)] leading-relaxed text-[#dadada]">
                A national network of member-only, shared-use Private Terminals — your
                terminal network, without the build.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-8 flex flex-wrap gap-3.5">
                <PrimaryCTA />
                <GhostCTA />
              </div>
            </Reveal>
          </div>
        </div>
        <a
          href="#model"
          className="absolute inset-x-0 bottom-6 mx-auto flex w-fit items-center gap-2 font-label text-[10px] uppercase tracking-[0.2em] text-chrome transition-colors hover:text-white"
        >
          <span className="inline-block animate-bounce">↓</span> See the model
        </a>
      </section>

      {/* ========================= STAT CONSOLE (carbon) ========================= */}
      <Section variant="carbon" className="py-0">
        <div className="flex items-center justify-between border-b border-chrome/10 py-4">
          <DataTag accent="#F07820" className="font-label !text-[10px] uppercase tracking-[0.2em]">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-fuel" /> The Numbers
          </DataTag>
          <DataTag className="hidden sm:inline-flex">SYSTEM STATUS · LIVE</DataTag>
        </div>
        <div className="-mx-5 grid grid-cols-2 sm:-mx-8 md:grid-cols-4">
          {heroStats.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 70}
              className="border-b border-r border-chrome/10 px-6 py-9 last:border-r-0 md:border-b-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
            >
              <CountUp value={s.big} style={{ color: "#F07820" }} className="font-display text-[clamp(30px,3.6vw,46px)] font-black leading-none" />
              <div className="mt-3 font-body text-[14px] leading-snug text-chrome">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ========================= THE MODEL (ink) — editorial split ========================= */}
      <Section variant="ink" id="model" className="py-[clamp(72px,10vw,116px)]">
        <div className="grid items-center gap-x-14 gap-y-10 lg:grid-cols-[1.22fr_0.78fr]">
          <div>
            <SectionHead
              title={<>Stop Building Terminals. <span className="text-fuel">Start Buying Space.</span></>}
            />
            <Reveal delay={120}>
              <p className="mt-6 max-w-[560px] text-pretty font-body text-[19px] leading-relaxed text-[#dadada]">
                A shared-economy model — like a private club for terminal space. You
                wouldn&apos;t build a golf course to play a round; you&apos;d join the best club
                in town. That&apos;s exactly what LineHaul Station does for terminal space:
                first-class Hubs, Private Terminals, and Service Centers, sold one space at a time.
              </p>
            </Reveal>
          </div>
          <Reveal delay={160} dir="right" className="frame">
            <div className="bg-panel p-[30px]">
              <div className="mb-4 flex items-center justify-between font-mono text-[11px] text-chrome">
                <span>SPEC SHEET</span>
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

      {/* ============== THE PROBLEM, BY THE NUMBERS (image) ============== */}
      <section className="relative overflow-hidden px-5 py-[clamp(72px,10vw,116px)] sm:px-8">
        <ParallaxImage src={PHOTOS.highwayInterchange} alt="A congested national freight interchange" strength={0.24} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.9),rgba(11,11,11,0.82)_50%,rgba(11,11,11,0.95))]" />
        <div className="relative mx-auto max-w-site">
          <SectionHead kicker="The Problem" title="The Math Of A Broken System." />
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-9 lg:grid-cols-4">
            {[
              { big: "312,962", label: "truck-parking spaces in the entire country" },
              { big: "1,000,000+", label: "trucks searching for a place to park each night" },
              { big: "$94.6B", label: "annual cost of congestion to the trucking industry" },
              { big: "25%", label: "of U.S. transportation emissions come from Class 8 trucks" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 70}>
                <CountUp value={s.big} style={{ color: "#F07820" }} className="font-display text-[clamp(28px,3.6vw,46px)] font-black leading-none" />
                <div className="mt-3 font-body text-[14px] leading-snug text-chrome">{s.label}</div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="mt-9 max-w-2xl text-pretty font-body text-[17px] leading-relaxed text-[#dadada]">
              And the people who move the freight are running out: the average driver is{" "}
              <strong className="font-semibold text-white">54</strong>, only{" "}
              <strong className="font-semibold text-white">7%</strong> are women, and the
              shortage deepens every year. Infrastructure is the fix.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ==================== THREE PROGRAMS (panel) ==================== */}
      <Section variant="panel" className="py-[clamp(72px,9vw,104px)]">
        <SectionHead title="Three Ways Into The Network." />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 90}
              className="lift group relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-card border border-chrome/15"
            >
              <Image
                src={p.img}
                alt={`${p.name} — ${p.tagline}`}
                fill
                loading="lazy"
                className="img-grade object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.25),rgba(11,11,11,0.62)_52%,rgba(11,11,11,0.95))]" />
              <div
                className="absolute inset-x-0 top-0 h-0.5 opacity-70"
                style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }}
              />
              <div className="relative p-7">
                <div className="flex items-center justify-between">
                  <span className="tnum font-mono text-[13px]" style={{ color: p.accent }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-2 w-2 rounded-full" style={{ background: p.accent }} />
                </div>
                <div className="mt-5 font-display text-[26px] font-black uppercase leading-none text-white">{p.name}</div>
                <div className="mt-1.5 font-script text-[23px] font-semibold" style={{ color: p.accent }}>{p.tagline}</div>
                <p className="mt-4 font-body text-[15px] leading-relaxed text-[#dadada]">{p.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ==================== FIND YOUR LANE (blueprint) — lane router ==================== */}
      <Section variant="blueprint" className="py-[clamp(72px,10vw,116px)]">
        <SectionHead
          kicker="Find Your Lane"
          title="One Network. Built For Everyone Who Moves Freight."
        />
        <Reveal delay={120}>
          <p className="mt-5 max-w-2xl text-pretty font-body text-[18px] leading-relaxed text-[#dadada]">
            Whatever your role in the supply chain, there&apos;s a path into the network. Choose your lane.
          </p>
        </Reveal>

        <div className="mt-10 overflow-hidden rounded-card border border-chrome/15 bg-ink/60 backdrop-blur-sm">
          {AUDIENCE_ORDER.map((key, i) => {
            const a = audiences[key];
            return (
              <Reveal key={key} delay={i * 60}>
                <Link
                  href={`/${key}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-5 border-b border-chrome/10 px-5 py-5 transition-colors hover:bg-[#161616] sm:px-7"
                  style={{ ["--ac" as string]: a.accent }}
                >
                  <span className="tnum font-mono text-[14px]" style={{ color: a.accent }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <span className="font-display text-[clamp(20px,3vw,30px)] font-black uppercase leading-none text-white">
                        {a.navLabel}
                      </span>
                      <span className="font-label text-[9px] uppercase tracking-[0.16em] text-chrome">{a.eyebrow}</span>
                    </div>
                    <p className="mt-2 max-w-xl font-body text-[14px] leading-snug text-chrome">{laneBlurb[key]}</p>
                  </div>
                  <span
                    className="font-label text-[18px] transition-transform duration-300 group-hover:translate-x-1.5"
                    style={{ color: a.accent }}
                    aria-hidden
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            );
          })}
          <Reveal delay={AUDIENCE_ORDER.length * 60}>
            <a
              href="#contact"
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-5 px-5 py-5 transition-colors hover:bg-[#161616] sm:px-7"
            >
              <span className="font-mono text-[14px] text-fuel">+</span>
              <div>
                <span className="font-display text-[clamp(20px,3vw,30px)] font-black uppercase leading-none text-white">
                  Not Sure?
                </span>
                <p className="mt-2 max-w-xl font-body text-[14px] leading-snug text-chrome">
                  Tell us how you move freight and we&apos;ll point you to the right lane.
                </p>
              </div>
              <span className="font-label text-[10px] uppercase tracking-[0.16em] text-fuel transition-transform duration-300 group-hover:translate-x-1">
                Connect →
              </span>
            </a>
          </Reveal>
        </div>
      </Section>

      {/* ==================== LIVE NETWORK CONSOLE (carbon) ==================== */}
      <Section variant="carbon" className="py-[clamp(72px,10vw,116px)]">
        <SectionHead title="An Expanding National Hub Network." />
        <Reveal delay={120}>
          <p className="mt-5 max-w-2xl text-pretty font-body text-[18px] leading-relaxed text-[#dadada]">
            The first Hub is open in West Memphis — one block from the I-40 / I-55
            interchange, roughly 60,000 trucks a day. Phase-one expansion is underway
            across five key markets, and the largest cities will carry multiple Hubs.
          </p>
        </Reveal>

        <div className="mt-9 grid gap-3 sm:grid-cols-2">
          {[
            { src: PHOTOS.highwayInterchange, cap: "Sited on the I-40 / I-55 interchange — ~60,000 trucks a day" },
            { src: PHOTOS.citySkyline, cap: "Hubs at the freight crossroads of America's largest markets" },
          ].map((im, i) => (
            <Reveal key={i} delay={i * 90} className="relative aspect-[16/9] overflow-hidden rounded-card border border-chrome/15">
              <Image src={im.src} alt={im.cap} fill loading="lazy" className="img-grade object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.1),rgba(11,11,11,0.85))]" />
              <div className="absolute inset-x-0 bottom-0 p-4 font-mono text-[12px] leading-snug text-[#e2e2e2]">{im.cap}</div>
            </Reveal>
          ))}
        </div>

        <div className="mt-7 grid gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-3 gap-3">
              {[
                { big: "~1,000", label: "extra-wide truck & trailer spaces per Hub" },
                { big: "24/7", label: "gated, surveilled access" },
                { big: "6", label: "markets in phase one" },
              ].map((f, i) => (
                <Reveal key={i} delay={i * 80} className="rounded-card border border-chrome/15 bg-panel px-4 py-5">
                  <CountUp value={f.big} style={{ color: "#F07820" }} className="font-display text-[clamp(20px,2.4vw,26px)] font-black leading-none" />
                  <div className="mt-2 font-body text-[13px] leading-snug text-chrome">{f.label}</div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120} className="rounded-card border border-chrome/15 bg-panel p-5">
              <div className="mb-3 font-mono text-[11px] text-chrome">HUB DIRECTORY</div>
              <div className="flex flex-col">
                {markets.map((m, i) => (
                  <div
                    key={m}
                    className="tnum flex items-center justify-between border-t border-chrome/10 py-2.5 font-mono text-[13px] first:border-t-0"
                    style={{ color: i === 0 ? "#F07820" : "#d8d8d8" }}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: i === 0 ? "#F07820" : "#7EC8E3" }}
                      />
                      {m}
                    </span>
                    <span className="font-label text-[9px] uppercase tracking-[0.14em]">
                      {i === 0 ? "Open" : "Phase 1"}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-6 border-t border-chrome/10 pt-4 font-mono text-[12px] text-chrome">
                <span className="flex items-center gap-2">
                  <i className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: "#F07820" }} /> Open now
                </span>
                <span className="flex items-center gap-2">
                  <i className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: "#7EC8E3" }} /> Phase one
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} dir="right">
            <NetworkMap />
          </Reveal>
        </div>
      </Section>

      {/* ==================== INSIDE THE NETWORK — GALLERY (ink) ==================== */}
      <Section variant="ink" id="tour" className="py-[clamp(72px,10vw,116px)]">
        <SectionHead
          kicker="Take The Tour"
          title="See The Build. Inside The Network."
        />
        <Reveal delay={120}>
          <p className="mt-5 max-w-2xl text-pretty font-body text-[18px] leading-relaxed text-[#dadada]">
            Every Hub is a first-class facility — the arrival, the Outriders Club, the
            rooftop Sky Deck, and on-site LH Fleet Services. This is the real build.
          </p>
        </Reveal>
        <div className="mt-9">
          <RenderingsGallery />
        </div>
      </Section>

      {/* ==================== CONTACT (gradient) ==================== */}
      <Contact
        headline="Something BIG Is Coming To Trucking."
        body="West Memphis is open and phase-one expansion is underway. Wherever you sit in the supply chain, let's talk about how the network works for you."
      />
      <Footer />
    </main>
  );
}
