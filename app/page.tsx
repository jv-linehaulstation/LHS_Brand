import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import ParallaxImage from "@/components/motion/ParallaxImage";
import BackgroundVideo from "@/components/motion/BackgroundVideo";
import ScrollCursor from "@/components/motion/ScrollCursor";
import NetworkMap from "@/components/NetworkMap";
import TerminalTabs from "@/components/TerminalTabs";
import HowItWorks, { type Step } from "@/components/HowItWorks";
import WideSlider, { type Slide } from "@/components/WideSlider";
import AudienceScroll from "@/components/AudienceScroll";
import FilterGallery from "@/components/FilterGallery";
import JoinForm from "@/components/JoinForm";
import { PHOTOS } from "@/lib/audiences";
import { site } from "@/lib/site";

// Golden-hour "Outriders" cowboy clip — remote, ~23 MB; poster shows instantly.
const HERO_VIDEO =
  "https://storage.googleapis.com/msgsndr/vFbdhIphhRpcrSlf4VJF/media/69554d56cb5b716ba310c3dd.mp4";

// Full-width gutter — ~100px on desktop, collapses cleanly on phones.
const PAD = "px-[clamp(20px,6vw,100px)]";
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

const RELAY_STEPS: Step[] = [
  { n: "001", t: "Pull In", d: "Secure, gated entry right off the interstate — no fighting for a spot at 11pm.", img: "/assets/building-seq/01.jpg" },
  { n: "002", t: "Recharge At The Service Center", d: "Rest, eat, train, fuel, and service the truck. A home base you're proud of.", img: PHOTOS.fleetFuel },
  { n: "003", t: "Relay Out", d: "Hand off the load and head home. The freight keeps moving; you don't have to.", img: PHOTOS.truckSunset },
];

const STATS = [
  { big: "133", label: "Spaces · West Memphis" },
  { big: "600", label: "Spaces · future Hubs" },
  { big: "$1,800", label: "Saved per month vs. the old way" },
  { big: "50+", label: "Hubs planned" },
];

function Kick({ children, accent = "#F07820", center = false }: { children: React.ReactNode; accent?: string; center?: boolean }) {
  return (
    <div className={`flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.28em] ${center ? "justify-center" : ""}`} style={{ color: accent }}>
      <span className="h-px w-7" style={{ background: accent }} aria-hidden /> {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-ink">
      <Nav />

      {/* ============ 1. HERO [B] — video, copy higher, fade into next ============ */}
      <section className={`relative flex min-h-[100dvh] items-center overflow-hidden ${PAD} pb-24 pt-32`}>
        <BackgroundVideo src={HERO_VIDEO} poster="/assets/marketing/hero-poster.jpg" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.85),rgba(11,11,11,0.3)_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,11,11,0.65),transparent_45%)]" />
        {/* bottom fade — blends the hero into the next (black) section, no hard seam */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,#0B0B0B,transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] overflow-hidden">
          <div className="scan-once h-full w-full" style={{ ["--ac" as string]: "#F07820" }} />
        </div>

        <div className="relative w-full">
          <Reveal><Kick>We Hear You. Loud &amp; Clear.</Kick></Reveal>
          <Reveal as="h1" delay={90} className="mt-5 font-display text-[clamp(54px,11vw,168px)] font-black uppercase leading-[0.84] tracking-[-0.03em] text-white">
            Change Is{" "}
            <span className="outline-head" style={{ ["--ac" as string]: "#F07820" }}>Coming.</span>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-[56ch] text-pretty font-body text-[clamp(17px,1.8vw,22px)] leading-relaxed text-[#dadada]">
              A modern freight relay network built to get America&apos;s best drivers home — rested,
              respected, and proud of where they park.
            </p>
          </Reveal>
          <Reveal delay={260} className="mt-8 flex flex-wrap gap-3.5">
            <a href={site.scheduleHref} className="group inline-flex items-center gap-2.5 rounded-btn bg-fuel px-[30px] py-[17px] font-label text-[12px] uppercase tracking-[0.16em] text-ink shadow-[0_14px_30px_rgba(0,0,0,0.45)] transition duration-300 hover:brightness-[1.08] active:scale-[0.97]">
              Schedule a Call <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a href="#lanes" className="group inline-flex items-center gap-2.5 rounded-btn border border-white/40 bg-black/25 px-[30px] py-[17px] font-label text-[12px] uppercase tracking-[0.16em] text-white backdrop-blur-sm transition duration-300 hover:border-fuel active:scale-[0.97]">
              Find Your Lane <span aria-hidden className="text-fuel transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </Reveal>
        </div>

        <ScrollCursor />
      </section>

      {/* ============ 2. FIND YOUR LANE [B] — pinned sticky-scroll audiences ============ */}
      <section id="lanes" className={`bg-ink ${PAD} py-[clamp(70px,11vh,140px)]`}>
        <Reveal><Kick>Find Your Lane</Kick></Reveal>
        <Reveal as="h2" className="mt-3 font-display text-[clamp(36px,6vw,92px)] font-black uppercase leading-[0.9] tracking-[-0.025em] text-white">
          One Network. Every Lane.
        </Reveal>
        <AudienceScroll />
      </section>

      {/* ============ 3. WHO WE ARE [W] — Jeff only ============ */}
      <section className={`${PAD} py-[clamp(70px,11vh,140px)]`} style={{ background: WHITE }}>
        <Reveal><Kick>Who We Are</Kick></Reveal>
        <div className="mt-8 grid gap-[clamp(28px,5vw,72px)] lg:grid-cols-[1.4fr_0.85fr] lg:items-start">
          <div>
            <Reveal as="h2" className="font-display text-[clamp(36px,6vw,92px)] font-black uppercase leading-[0.9] tracking-[-0.025em]">
              <span style={{ color: CARBON }}>Built By People Who&apos;ve Done It </span>
              <span className="outline-head" style={{ ["--ac" as string]: "#F07820" }}>Before.</span>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-6 max-w-[34ch] font-body text-[clamp(19px,2.1vw,28px)] font-medium leading-[1.5]" style={{ color: CARBON }}>
                LineHaul Station didn&apos;t start with trucks. It started with a question: why does the
                industry that moves America treat its best drivers the worst?
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-[64ch] font-body text-[clamp(15px,1.4vw,18px)] leading-relaxed" style={{ color: "#3a3733" }}>
                Founder &amp; CEO Jeff Swenson spent 35 years and more than $2&nbsp;billion building
                residential, commercial, and logistics real estate — then brought that standard to freight.
                Real terminals. Real amenities. A home base drivers are proud of.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <Link href="/leadership" className="mt-7 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors hover:text-fuel" style={{ color: "#6a655e" }}>
                Meet the full team &amp; board <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>

          <Reveal dir="right" className="overflow-hidden rounded-[8px] border bg-white lg:max-w-[420px] lg:justify-self-end" style={{ borderColor: LINE_L }}>
            <div className="relative aspect-[4/5] bg-[#ddd]">
              <Image src="https://static.wixstatic.com/media/84a10c_7dfa17aed1604937b1d1dd98258ee10a~mv2.png/v1/fill/w_640,h_800,al_c,q_90/Bio_JS-23-1.png" alt="Jeff Swenson, Founder & CEO" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 420px" />
            </div>
            <div className="p-6">
              <div className="font-display text-[22px] font-black uppercase" style={{ color: CARBON }}>Jeff Swenson</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-fuel">Founder &amp; CEO</div>
              <p className="mt-3 font-body text-[14px] italic leading-relaxed" style={{ color: "#4a463f" }}>
                &ldquo;Treat the industry&apos;s best truck drivers with dignity and respect — and never compromise on quality.&rdquo;
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <a href="https://www.linkedin.com/in/jeff-swenson-2744606" target="_blank" rel="noopener noreferrer" className="rounded-btn border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors hover:border-fuel hover:text-fuel" style={{ borderColor: LINE_L, color: CARBON }}>LinkedIn</a>
                <a href="mailto:js@linehaulstation.com" className="rounded-btn border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors hover:border-fuel hover:text-fuel" style={{ borderColor: LINE_L, color: CARBON }}>js@linehaulstation.com</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 4. WHAT WE BUILT [B] — tab-linked media ============ */}
      <section className={`bg-ink ${PAD} py-[clamp(70px,11vh,140px)]`}>
        <Reveal><Kick>What We Built</Kick></Reveal>
        <Reveal as="h2" className="mt-3 font-display text-[clamp(40px,6.6vw,104px)] font-black uppercase leading-[0.88] tracking-[-0.025em] text-white">
          A Real Terminal.<br />Not A Parking Lot.
        </Reveal>
        <TerminalTabs />
      </section>

      {/* ============ 5. HOW IT WORKS [B] — pinned scroll-driven ============ */}
      <HowItWorks steps={RELAY_STEPS} />

      {/* ============ 6. THE GALLERY — full-screen slider, thumbnails overlaid (no heading) ============ */}
      <div className="bg-ink">
        <WideSlider slides={SLIDES} />
      </div>

      {/* ============ 7. INSIDE THE HUB [W] — filterable gallery ============ */}
      <section className={`${PAD} py-[clamp(70px,11vh,140px)]`} style={{ background: WHITE }}>
        <Reveal><Kick>Inside The Hub</Kick></Reveal>
        <Reveal as="h2" className="mt-3 font-display text-[clamp(36px,6vw,92px)] font-black uppercase leading-[0.9] tracking-[-0.025em]">
          <span style={{ color: CARBON }}>Filter The Tour.</span>
        </Reveal>
        <FilterGallery />
      </section>

      {/* ============ 8. THE NETWORK [B] — map kept ============ */}
      <section id="network" className={`bg-ink ${PAD} py-[clamp(80px,11vw,132px)]`}>
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <Reveal><Kick>The Network</Kick></Reveal>
            <Reveal as="h2" className="mt-3 font-display text-[clamp(36px,6vw,92px)] font-black uppercase leading-[0.9] tracking-[-0.025em] text-white">
              A National Freight Relay.
            </Reveal>
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
      </section>

      {/* ============ 9. BY THE NUMBERS [W] — roomy stats ============ */}
      <section className={`${PAD} py-[clamp(70px,11vh,140px)]`} style={{ background: WHITE }}>
        <Reveal><Kick>By The Numbers</Kick></Reveal>
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[8px] border sm:grid-cols-2 lg:grid-cols-4" style={{ background: LINE_L, borderColor: LINE_L }}>
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 80} className="flex min-h-[180px] flex-col justify-between p-[clamp(28px,3vw,48px)]" style={{ background: WHITE }}>
              <CountUp value={s.big} className="tnum font-display text-[clamp(36px,4.6vw,60px)] font-black leading-none" style={{ color: CARBON }} />
              <div className="mt-6 font-mono text-[12px] uppercase leading-relaxed tracking-[0.08em]" style={{ color: "#6a655e" }}>{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ 10. LET'S TALK [B] — centered Join form + 3-col contact ============ */}
      <section id="contact" className={`relative overflow-hidden ${PAD} py-[clamp(80px,12vw,150px)]`}>
        <ParallaxImage src={PHOTOS.truckSunset} alt="A truck on the open road at sunset" strength={0.24} />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,11,11,0.92),rgba(11,11,11,0.78))]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal><Kick center>Let&apos;s Talk</Kick></Reveal>
          <Reveal as="h2" className="mt-4 font-display text-[clamp(36px,6vw,92px)] font-black uppercase leading-[0.9] tracking-[-0.025em] text-white">
            Build The Future Of Freight With Us.
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-5 max-w-[52ch] font-body text-[clamp(16px,1.6vw,20px)] leading-relaxed text-[#dadada]">
              Join the Outriders free, or reach the team direct — wherever you sit in the supply chain.
            </p>
          </Reveal>
          <Reveal delay={140} className="mt-10 text-left">
            <JoinForm />
          </Reveal>
          <Reveal delay={180}>
            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-[8px] border border-chrome/15 bg-chrome/10 sm:grid-cols-3">
              <a href={site.phoneHref} className="group bg-ink/70 p-6 backdrop-blur transition-colors hover:bg-ink/90">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fuel">Call</div>
                <div className="tnum mt-2 font-mono text-[15px] text-white">{site.phone}</div>
              </a>
              <a href={site.emailHref} className="group bg-ink/70 p-6 backdrop-blur transition-colors hover:bg-ink/90">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fuel">Email</div>
                <div className="mt-2 break-words font-mono text-[15px] text-white">{site.email}</div>
              </a>
              <div className="bg-ink/70 p-6 backdrop-blur">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fuel">Visit</div>
                <div className="mt-2 font-mono text-[15px] text-white">West Memphis, AR</div>
                <div className="mt-1 font-mono text-[12px] text-chrome">{site.domainLabel}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
