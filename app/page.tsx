import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Section from "@/components/Section";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import ParallaxImage from "@/components/motion/ParallaxImage";
import BackgroundVideo from "@/components/motion/BackgroundVideo";
import { PrimaryCTA } from "@/components/CTA";
import { SectionHead, StatusChip, DataTag } from "@/components/Bits";
import NetworkMap from "@/components/NetworkMap";
import TerminalScrub from "@/components/TerminalScrub";
import AudienceSlider from "@/components/AudienceSlider";
import Pillars from "@/components/Pillars";
import RenderingsGallery from "@/components/RenderingsGallery";
import { PHOTOS } from "@/lib/audiences";

// hero.mp4 lives on GHL storage (~23 MB) — referenced remotely for the cinematic break.
const CINEMATIC_VIDEO =
  "https://storage.googleapis.com/msgsndr/vFbdhIphhRpcrSlf4VJF/media/69554d56cb5b716ba310c3dd.mp4";

const terminalStats = [
  { big: "1st", label: "Hub open now — West Memphis, AR" },
  { big: "~1,000", label: "extra-wide spaces per Hub" },
  { big: "60K", label: "trucks a day at the I-40 / I-55 interchange" },
  { big: "24/7", label: "gated, surveilled access" },
];

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
              <PrimaryCTA>Schedule a Call</PrimaryCTA>
              <a
                href="#lanes"
                className="group inline-flex items-center gap-2.5 rounded-btn border border-chrome/30 bg-carbon/70 px-[30px] py-[17px] font-label text-[12px] uppercase tracking-[0.16em] text-white transition duration-300 hover:border-fuel active:scale-[0.97]"
              >
                Find Your Lane
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1 text-fuel">→</span>
              </a>
            </Reveal>
          </div>
        </div>
        <a href="#story" className="absolute inset-x-0 bottom-5 mx-auto flex w-fit items-center gap-2 font-label text-[10px] uppercase tracking-[0.2em] text-chrome transition-colors hover:text-white">
          <span className="scroll-nudge inline-block">↓</span> Who we are
        </a>
      </section>

      {/* ===================== ORIGIN STORY — asymmetric editorial (carbon) ===================== */}
      <Section variant="carbon" id="story" className="py-[clamp(72px,11vw,140px)]">
        <div className="grid gap-x-[clamp(28px,5vw,72px)] gap-y-10 lg:grid-cols-[0.42fr_1.58fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.28em] text-fuel">
              <span className="h-px w-7 bg-fuel/60" aria-hidden /> Who We Are
            </div>
            <span className="mt-5 block font-mono text-[11px] uppercase tracking-[0.18em] text-[#8a857e]">
              Founded · West Memphis, AR
            </span>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="text-balance font-display text-[clamp(40px,6vw,86px)] font-black uppercase leading-[0.9] tracking-[-0.02em] text-white">
                Built By People Who&apos;ve Done It{" "}
                <span className="outline-head" style={{ ["--ac" as string]: "#F07820" }}>Before.</span>
              </h2>
            </Reveal>
            <div className="mt-9 grid gap-x-12 gap-y-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <Reveal delay={100}>
                  <p className="max-w-[34ch] font-body text-[clamp(20px,2.3vw,27px)] font-medium leading-[1.45] text-[#ededed]">
                    LineHaul Station didn&apos;t start with trucks — it started with a question: why does the
                    industry that moves America treat its best drivers the worst?
                  </p>
                </Reveal>
                <Reveal delay={160}>
                  <p className="mt-6 max-w-[44ch] font-body text-[clamp(16px,1.5vw,18.5px)] leading-relaxed text-[#d8d8d8]">
                    Founder &amp; CEO <strong className="font-medium text-white">Jeff Swenson</strong> spent
                    35 years and <strong className="font-medium text-white">$2 billion</strong> building
                    residential, commercial, and logistics real estate. He brought that standard to freight:
                    real terminals, real amenities, a home base a driver is proud of — and a network that
                    lowers the cost of every mile.
                  </p>
                </Reveal>
              </div>

              {/* human, on-brand — pairs the prose with a real render */}
              <Reveal delay={140} dir="right" className="frame lg:sticky lg:top-28">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-carbon">
                  <Image
                    src={PHOTOS.driverInCab}
                    alt="A LineHaul Station driver in the cab"
                    fill
                    loading="lazy"
                    className="img-grade object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(11,11,11,0.82))]" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-fuel">The People We Build For</div>
                    <div className="mt-1.5 font-display text-[20px] font-black uppercase leading-none text-white">
                      America&apos;s Best Drivers.
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <figure className="mt-10 border-l-2 border-fuel pl-6">
                <blockquote className="font-display text-[clamp(19px,2vw,24px)] font-extrabold leading-[1.3] tracking-[-0.01em] text-white">
                  Treat the industry&apos;s best truck drivers with dignity and respect — and never compromise on quality.
                </blockquote>
                <figcaption className="mt-3.5 font-mono text-[12px] uppercase tracking-[0.12em] text-fuel">
                  — The LineHaul Station ethos
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ===================== TERMINAL SCROLL-SCRUB REVEAL (white) — signature #1 ===================== */}
      <TerminalScrub />

      {/* ===================== FIND YOUR LANE — pinned 5-audience slider (black) — signature #2 ===================== */}
      <div id="lanes">
        <AudienceSlider />
      </div>

      {/* ===================== PILLARS / WHY WE DO IT (panel) ===================== */}
      <Section variant="panel" className="py-[clamp(64px,8vw,108px)]">
        <Pillars />
      </Section>

      {/* ===================== INSIDE A HUB — amenities renderings gallery (ink) ===================== */}
      <Section variant="ink" id="tour" className="py-[clamp(64px,9vw,116px)]">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <SectionHead kicker="Take the Tour" size="xl" title="Inside A Hub." />
          <Reveal delay={120}>
            <p className="text-pretty font-body text-[clamp(17px,1.8vw,21px)] leading-relaxed text-[#dadada]">
              The Outriders Club, the rooftop Sky Deck, fitness, gaming, the gear shop, and on-site
              LH Fleet Services. The amenities sell themselves — take the tour.
            </p>
          </Reveal>
        </div>
        <div className="mt-10">
          <RenderingsGallery />
        </div>
      </Section>

      {/* ===================== THE NETWORK — national Hub map (carbon) ===================== */}
      <Section variant="carbon" id="network" className="py-[clamp(80px,11vw,132px)]">
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <SectionHead kicker="The Network" size="xl" title="An Expanding National Hub Network." />
            <Reveal delay={120}>
              <p className="mt-6 max-w-[44ch] text-pretty font-body text-[clamp(18px,1.9vw,21px)] leading-relaxed text-[#dadada]">
                The first Hub is open in West Memphis — one block off the I-40 / I-55 interchange.
                Phase-one expansion is underway toward a national network of Hubs, Private Terminals,
                and Service Centers.
              </p>
            </Reveal>
          </div>
          {/* real-world context — the map sits in real geography, not on black */}
          <Reveal delay={140} dir="right" className="frame">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] bg-carbon">
              <Image
                src={PHOTOS.highwayInterchange}
                alt="A national freight interchange"
                fill
                loading="lazy"
                className="img-grade object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(11,11,11,0.8))]" />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5">
                <span className="h-2 w-2 rounded-full bg-fuel shadow-[0_0_10px_1px_rgba(240,120,32,0.8)]" aria-hidden />
                <span className="tnum font-mono text-[12px] uppercase tracking-[0.12em] text-white">
                  I-40 / I-55 · ~60,000 trucks a day
                </span>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal dir="left" className="mt-11">
          <NetworkMap />
        </Reveal>
      </Section>

      {/* ===================== FEATURED TERMINALS — full-bleed cards (ink) ===================== */}
      <Section variant="ink" className="py-[clamp(72px,10vw,128px)]">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHead kicker="Experience" size="xl" title="Featured Terminals." />
          <Reveal delay={120}>
            <a
              href="#network"
              className="group inline-flex items-center gap-2 border-b border-chrome/30 pb-1.5 font-mono text-[12px] uppercase tracking-[0.14em] text-chrome transition-colors hover:border-fuel hover:text-fuel"
            >
              View the Network
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </Reveal>
        </div>

        <div className="mt-11 grid gap-4">
          {/* hero card — West Memphis */}
          <TerminalCard
            img={PHOTOS.buildingAerial}
            badge="Open Now"
            live
            name="West Memphis Hub"
            loc="West Memphis, AR · I-40 / I-55"
            big
          />
          <div className="grid gap-4 md:grid-cols-2">
            <TerminalCard img={PHOTOS.gateHouse} badge="Phase One" name="Dallas–Fort Worth" loc="Texas · I-35 Corridor" />
            <TerminalCard img={PHOTOS.buildingExterior} badge="Phase One" name="Atlanta Hub" loc="Georgia · I-20 / I-75" />
          </div>
        </div>
      </Section>

      {/* ===================== PROOF / STATS BAND (image) ===================== */}
      <Section variant="image" image={PHOTOS.entryWelcome} className="py-[clamp(80px,12vw,140px)]">
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <DataTag accent="#F07820" className="font-label !text-[10px] uppercase tracking-[0.2em]">
              <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-fuel" /> The Proof
            </DataTag>
            <h2 className="mt-5 text-balance font-display text-[clamp(38px,6vw,84px)] font-black uppercase leading-[0.9] tracking-[-0.025em] text-white">
              West Memphis Is Open.
            </h2>
            <p className="mt-5 max-w-[44ch] font-body text-[clamp(18px,1.9vw,22px)] leading-relaxed text-[#e2e2e2]">
              This isn&apos;t a rendering of someday. The first Hub is live at the busiest freight crossroads
              in America — and the network is growing from here.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card bg-chrome/12">
            {terminalStats.map((s, i) => (
              <Reveal key={i} delay={i * 80} className="bg-ink/75 p-6 backdrop-blur-sm sm:p-7">
                <CountUp value={s.big} style={{ color: "#F07820" }} className="tnum font-display text-[clamp(32px,4.5vw,54px)] font-black leading-none" />
                <div className="mt-3 font-body text-[14px] leading-snug text-chrome">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ===================== CINEMATIC BREAK — muted video (dark) ===================== */}
      <section className="relative flex min-h-[64vh] items-center overflow-hidden px-5 py-[clamp(80px,12vw,150px)] sm:px-8">
        <BackgroundVideo
          src={CINEMATIC_VIDEO}
          poster={PHOTOS.clubAerial}
          className="img-grade absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.7),rgba(11,11,11,0.82))]" />
        <div className="relative mx-auto max-w-site text-center">
          <Reveal>
            <div className="font-label text-[11px] uppercase tracking-[0.28em] text-fuel">The Modern-Day Pony Express</div>
            <p className="mx-auto mt-5 max-w-4xl text-balance font-display text-[clamp(30px,5vw,68px)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-white">
              Built For The People Who Move America.
            </p>
          </Reveal>
        </div>
      </section>

      <Contact
        headline="Something BIG Is Coming To Trucking."
        body="West Memphis is open and phase-one expansion is underway. Wherever you sit in the supply chain, let's talk about how the network works for you."
      />
      <Footer />
    </main>
  );
}

/** Full-bleed terminal card — slow image scale on hover (motion-safe). */
function TerminalCard({
  img,
  badge,
  name,
  loc,
  live = false,
  big = false,
}: {
  img: string;
  badge: string;
  name: string;
  loc: string;
  live?: boolean;
  big?: boolean;
}) {
  return (
    <Reveal
      className={`group relative flex items-end overflow-hidden rounded-card border border-chrome/15 ${
        big ? "min-h-[clamp(360px,46vw,520px)]" : "min-h-[clamp(300px,38vw,420px)]"
      }`}
    >
      <Image
        src={img}
        alt={`${name} — LineHaul Station`}
        fill
        loading="lazy"
        className="img-grade scale-[1.04] object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(.2,.7,.2,1)] motion-safe:group-hover:scale-110"
        sizes={big ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.05)_30%,rgba(11,11,11,0.62)_70%,rgba(11,11,11,0.92))]" />
      <div className="relative w-full p-[clamp(24px,3vw,40px)]">
        <span className="inline-flex items-center gap-2 rounded-btn border border-chrome/25 bg-ink/50 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-white backdrop-blur-sm">
          {live && <span className="h-1.5 w-1.5 rounded-full bg-fuel shadow-[0_0_10px_1px_rgba(240,120,32,0.8)]" aria-hidden />}
          {badge}
        </span>
        <div className={`mt-4 font-display font-black uppercase leading-[0.92] tracking-[-0.02em] text-white ${big ? "text-[clamp(28px,3.4vw,46px)]" : "text-[clamp(24px,2.6vw,34px)]"}`}>
          {name}
        </div>
        <div className="mt-2 font-mono text-[13px] uppercase tracking-[0.1em] text-fuel">{loc}</div>
        <a
          href="#network"
          className="group/more mt-5 inline-block border-b border-white/35 pb-1.5 font-mono text-[12px] uppercase tracking-[0.14em] text-white transition-colors hover:border-fuel hover:text-fuel"
        >
          Learn More <span aria-hidden>→</span>
        </a>
      </div>
    </Reveal>
  );
}
