import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import ClipReveal from "@/components/motion/ClipReveal";
import ParallaxImage from "@/components/motion/ParallaxImage";
import BackgroundVideo from "@/components/motion/BackgroundVideo";
import NetworkMap from "@/components/NetworkMap";
import TerminalTabs from "@/components/TerminalTabs";
import WideSlider, { type Slide } from "@/components/WideSlider";
import AudienceShowcase from "@/components/AudienceShowcase";
import FilterGallery from "@/components/FilterGallery";
import { PHOTOS } from "@/lib/audiences";
import { site } from "@/lib/site";

// Golden-hour "Outriders" cowboy clip (LOCKED per R1) — remote, ~23 MB.
const HERO_VIDEO =
  "https://storage.googleapis.com/msgsndr/vFbdhIphhRpcrSlf4VJF/media/69554d56cb5b716ba310c3dd.mp4";

const WHITE = "#F4F2EF";
const CARBON = "#0B0B0B";
const LINE_L = "#E2DDD6";

const SLIDES: Slide[] = [
  { src: "/assets/building-seq/01.jpg", label: "Terminal · Exterior" },
  { src: PHOTOS.skydeck, label: "Sky Deck" },
  { src: PHOTOS.clubLounge1, label: "Member Lounge" },
  { src: PHOTOS.fitness, label: "Fitness" },
  { src: PHOTOS.gearShop, label: "Gear Shop" },
  { src: PHOTOS.gamerDen1, label: "Gamer's Den" },
  { src: PHOTOS.fleetFuel, label: "Fuel & Service" },
  { src: PHOTOS.crossDock, label: "Cross-Dock" },
  { src: PHOTOS.skydeckFireplace, label: "Fireplace Lounge" },
  { src: "/assets/building-seq/07.jpg", label: "Aerial · The Hub" },
];

const STATS = [
  { big: "133", label: "Spaces · West Memphis" },
  { big: "600", label: "Spaces · future Hubs" },
  { big: "$1,800/mo", label: "Saved vs. the old way" },
  { big: "50+", label: "Hubs planned" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-ink">
      <Nav />

      {/* ============ 2. HERO [B] — full-bleed cowboy video ============ */}
      <section className="relative flex min-h-[100dvh] items-end overflow-hidden px-5 pb-[clamp(80px,12vh,130px)] pt-28 sm:px-8">
        <BackgroundVideo
          src={HERO_VIDEO}
          poster="/assets/marketing/hero-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.8),rgba(11,11,11,0.25)_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,11,11,0.92),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] overflow-hidden">
          <div className="scan-once h-full w-full" style={{ ["--ac" as string]: "#F07820" }} />
        </div>

        <div className="relative mx-auto w-full max-w-site">
          <ClipReveal>
            <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.28em] text-fuel">
              <span className="h-px w-7 bg-fuel" aria-hidden /> Re-Think Trucking
            </div>
          </ClipReveal>
          <ClipReveal as="h1" delay={120} className="mt-5 max-w-[14ch] font-display text-[clamp(42px,8.5vw,128px)] font-black uppercase leading-[0.86] tracking-[-0.03em] text-white">
            Home Base For The People Who Move{" "}
            <span className="outline-head" style={{ ["--ac" as string]: "#F07820" }}>America.</span>
          </ClipReveal>
          <ClipReveal delay={260} className="mt-7 flex flex-wrap gap-3.5">
            <a
              href={site.scheduleHref}
              className="group inline-flex items-center gap-2.5 rounded-btn bg-fuel px-[30px] py-[17px] font-label text-[12px] uppercase tracking-[0.16em] text-ink shadow-[0_14px_30px_rgba(0,0,0,0.45)] transition duration-300 hover:brightness-[1.08] active:scale-[0.97]"
            >
              Schedule a Call
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#lanes"
              className="group inline-flex items-center gap-2.5 rounded-btn border border-white/40 bg-black/25 px-[30px] py-[17px] font-label text-[12px] uppercase tracking-[0.16em] text-white backdrop-blur-sm transition duration-300 hover:border-fuel active:scale-[0.97]"
            >
              Find Your Lane
              <span aria-hidden className="text-fuel transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </ClipReveal>
        </div>

        {/* scroll-to-explore */}
        <div className="absolute inset-x-0 bottom-6 z-[3] flex flex-col items-center gap-2.5">
          <span className="scroll-mouse" aria-hidden />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-chrome">Scroll to explore</span>
        </div>
      </section>

      {/* ============ 3. WHO WE ARE + JEFF [W] ============ */}
      <section className="px-5 py-[clamp(70px,11vh,140px)] sm:px-8" style={{ background: WHITE }}>
        <div className="mx-auto max-w-site">
          <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.28em] text-fuel">
            <span className="h-px w-7 bg-fuel" aria-hidden /> Who We Are
          </div>
          <div className="mt-8 grid gap-[clamp(28px,5vw,64px)] lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
            <div>
              <ClipReveal as="h2" className="font-display text-[clamp(34px,5.6vw,84px)] font-black uppercase leading-[0.9] tracking-[-0.025em]" >
                <span style={{ color: CARBON }}>Built By People Who&apos;ve Done It </span>
                <span className="outline-head" style={{ ["--ac" as string]: "#F07820" }}>Before.</span>
              </ClipReveal>
              <p className="mt-6 max-w-[32ch] font-body text-[clamp(19px,2.1vw,26px)] font-medium leading-[1.5]" style={{ color: CARBON }}>
                LineHaul Station didn&apos;t start with trucks. It started with a question: why does the
                industry that moves America treat its best drivers the worst?
              </p>
              <p className="mt-5 max-w-[60ch] font-body text-[clamp(15px,1.4vw,18px)] leading-relaxed" style={{ color: "#3a3733" }}>
                Founder &amp; CEO Jeff Swenson spent 35 years and more than $2&nbsp;billion building
                residential, commercial, and logistics real estate — then brought that standard to freight.
                Real terminals. Real amenities. A home base drivers are proud of.
              </p>
              <Link href="/leadership" className="mt-7 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors hover:text-fuel" style={{ color: "#6a655e" }}>
                Meet the full team &amp; board <span aria-hidden>→</span>
              </Link>
            </div>

            {/* Jeff card */}
            <Reveal dir="right" className="overflow-hidden rounded-[8px] border bg-white" style={{ borderColor: LINE_L }}>
              <div className="relative aspect-[4/5] bg-[#ddd]">
                <Image
                  src="https://static.wixstatic.com/media/84a10c_7dfa17aed1604937b1d1dd98258ee10a~mv2.png/v1/fill/w_640,h_800,al_c,q_90/Bio_JS-23-1.png"
                  alt="Jeff Swenson, Founder & CEO"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="font-display text-[22px] font-black uppercase" style={{ color: CARBON }}>Jeff Swenson</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-fuel">Founder &amp; CEO</div>
                <p className="mt-3 font-body text-[14px] italic leading-relaxed" style={{ color: "#4a463f" }}>
                  &ldquo;Treat the industry&apos;s best truck drivers with dignity and respect — and never
                  compromise on quality.&rdquo;
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <a href="https://www.linkedin.com/in/jeff-swenson-2744606" target="_blank" rel="noopener noreferrer" className="rounded-btn border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors hover:border-fuel hover:text-fuel" style={{ borderColor: LINE_L, color: CARBON }}>
                    LinkedIn
                  </a>
                  <a href="mailto:js@linehaulstation.com" className="rounded-btn border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors hover:border-fuel hover:text-fuel" style={{ borderColor: LINE_L, color: CARBON }}>
                    js@linehaulstation.com
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 4. REAL TERMINAL [B] — video + vertical tabs ============ */}
      <section className="bg-ink px-5 py-[clamp(70px,11vh,140px)] sm:px-8">
        <div className="mx-auto max-w-site">
          <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.28em] text-fuel">
            <span className="h-px w-7 bg-fuel" aria-hidden /> What We Built
          </div>
          <ClipReveal as="h2" className="mt-3 font-display text-[clamp(34px,5.6vw,84px)] font-black uppercase leading-[0.9] tracking-[-0.025em] text-white">
            A Real Terminal.<br />Not A Parking Lot.
          </ClipReveal>
          <TerminalTabs />
        </div>
      </section>

      {/* ============ 5. FULL-WIDTH SLIDER [W] ============ */}
      <section className="py-[clamp(70px,11vh,140px)]" style={{ background: WHITE }}>
        <div className="mx-auto mb-9 max-w-site px-5 sm:px-8">
          <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.28em] text-fuel">
            <span className="h-px w-7 bg-fuel" aria-hidden /> The Gallery
          </div>
          <ClipReveal as="h2" className="mt-3 font-display text-[clamp(34px,5.6vw,84px)] font-black uppercase leading-[0.9] tracking-[-0.025em]" >
            <span style={{ color: CARBON }}>Every Angle Of The Hub.</span>
          </ClipReveal>
        </div>
        <WideSlider slides={SLIDES} gut="clamp(20px,5vw,80px)" />
      </section>

      {/* ============ 6. FIND YOUR LANE [B] — desc left / image right ============ */}
      <section id="lanes" className="bg-ink px-5 py-[clamp(70px,11vh,140px)] sm:px-8">
        <div className="mx-auto max-w-site">
          <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.28em] text-fuel">
            <span className="h-px w-7 bg-fuel" aria-hidden /> Find Your Lane
          </div>
          <ClipReveal as="h2" className="mt-3 font-display text-[clamp(34px,5.6vw,84px)] font-black uppercase leading-[0.9] tracking-[-0.025em] text-white">
            One Network. Every Lane.
          </ClipReveal>
          <AudienceShowcase />
        </div>
      </section>

      {/* ============ 7. INSIDE THE HUB [W] — filterable gallery ============ */}
      <section className="px-5 py-[clamp(70px,11vh,140px)] sm:px-8" style={{ background: WHITE }}>
        <div className="mx-auto max-w-site">
          <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.28em] text-fuel">
            <span className="h-px w-7 bg-fuel" aria-hidden /> Inside The Hub
          </div>
          <ClipReveal as="h2" className="mt-3 font-display text-[clamp(34px,5.6vw,84px)] font-black uppercase leading-[0.9] tracking-[-0.025em]" >
            <span style={{ color: CARBON }}>Filter The Tour.</span>
          </ClipReveal>
          <FilterGallery />
        </div>
      </section>

      {/* ============ 8. THE NETWORK [B] — map kept ============ */}
      <section id="network" className="bg-ink px-5 py-[clamp(80px,11vw,132px)] sm:px-8">
        <div className="mx-auto max-w-site">
          <div className="grid gap-x-12 gap-y-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.28em] text-fuel">
                <span className="h-px w-7 bg-fuel" aria-hidden /> The Network
              </div>
              <ClipReveal as="h2" className="mt-3 font-display text-[clamp(34px,5.6vw,84px)] font-black uppercase leading-[0.9] tracking-[-0.025em] text-white">
                A National Freight Relay.
              </ClipReveal>
              <Reveal delay={120}>
                <p className="mt-6 max-w-[44ch] font-body text-[clamp(16px,1.6vw,20px)] leading-relaxed text-[#dadada]">
                  The first Hub is open in West Memphis — one block off the I-40 / I-55 interchange.
                  Phase-one expansion is underway toward a national network of Hubs, Private Terminals,
                  and Service Centers.
                </p>
              </Reveal>
            </div>
            <Reveal dir="right" className="frame">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] bg-carbon">
                <Image src={PHOTOS.highwayInterchange} alt="A national freight interchange" fill loading="lazy" className="img-grade object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(11,11,11,0.8))]" />
                <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5">
                  <span className="h-2 w-2 rounded-full bg-fuel shadow-[0_0_10px_1px_rgba(240,120,32,0.8)]" aria-hidden />
                  <span className="tnum font-mono text-[12px] uppercase tracking-[0.12em] text-white">I-40 / I-55 · ~60,000 trucks a day</span>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal dir="left" className="mt-11">
            <NetworkMap />
          </Reveal>
        </div>
      </section>

      {/* ============ 9. BY THE NUMBERS [W] ============ */}
      <section className="px-5 py-[clamp(70px,11vh,140px)] sm:px-8" style={{ background: WHITE }}>
        <div className="mx-auto max-w-site">
          <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.28em] text-fuel">
            <span className="h-px w-7 bg-fuel" aria-hidden /> By The Numbers
          </div>
          <div className="mt-8 grid grid-cols-2 gap-px border md:grid-cols-4" style={{ background: LINE_L, borderColor: LINE_L }}>
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 80} className="p-7 sm:p-8" style={{ background: WHITE }}>
                <CountUp value={s.big} className="tnum font-display text-[clamp(32px,4.2vw,56px)] font-black leading-none" style={{ color: CARBON }} />
                <div className="mt-2.5 font-mono text-[11px] uppercase tracking-[0.08em]" style={{ color: "#6a655e" }}>{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 10. CLOSING CTA [B] — full-bleed parallax ============ */}
      <section id="contact" className="relative flex min-h-[80vh] items-center overflow-hidden px-5 py-[clamp(80px,12vw,150px)] sm:px-8">
        <ParallaxImage src={PHOTOS.truckSunset} alt="A truck on the open road at sunset" strength={0.26} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.85),rgba(11,11,11,0.35))]" />
        <div className="relative mx-auto w-full max-w-site">
          <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.28em] text-fuel">
            <span className="h-px w-7 bg-fuel" aria-hidden /> Let&apos;s Talk
          </div>
          <ClipReveal as="h2" className="mt-4 max-w-[18ch] font-display text-[clamp(34px,5.6vw,84px)] font-black uppercase leading-[0.9] tracking-[-0.025em] text-white">
            Build The Future Of Freight With Us.
          </ClipReveal>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <a href={site.emailHref} className="group inline-flex items-center gap-2.5 rounded-btn bg-fuel px-[30px] py-[17px] font-label text-[12px] uppercase tracking-[0.16em] text-ink shadow-[0_14px_30px_rgba(0,0,0,0.45)] transition duration-300 hover:brightness-[1.08] active:scale-[0.97]">
              Connect With Us <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a href={site.phoneHref} className="inline-flex items-center gap-2.5 rounded-btn border border-white/40 bg-black/25 px-[30px] py-[17px] font-label text-[12px] uppercase tracking-[0.16em] text-white backdrop-blur-sm transition duration-300 hover:border-fuel active:scale-[0.97]">
              Schedule a Call
            </a>
          </div>
          <div className="tnum mt-8 flex flex-wrap items-center gap-x-7 gap-y-2 font-mono text-[13px] text-[#e6e6e6]">
            <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
            <span className="text-white/40">·</span>
            <a href={site.emailHref} className="hover:text-white">{site.email}</a>
            <span className="text-white/40">·</span>
            <span>{site.domainLabel}</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
