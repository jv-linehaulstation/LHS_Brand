import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Section from "@/components/Section";
import Reveal from "@/components/motion/Reveal";
import BackgroundVideo from "@/components/motion/BackgroundVideo";
import { SectionHead, StatusChip, DataTag, ChromeFrame } from "@/components/Bits";
import JoinForm from "@/components/JoinForm";
import PhotoGallery, { type Shot } from "@/components/PhotoGallery";
import FAQ, { type QA } from "@/components/FAQ";
import LaneConnector from "@/components/LaneConnector";

const ACCENT = "#F07820";
const ACCENT_DARK = "#C85A12";

// hero.mp4 is ~23 MB — kept as a remote source (GHL storage) rather than a heavy
// committed binary. Poster is a committed, optimized render so first paint is instant.
const HERO_VIDEO =
  "https://storage.googleapis.com/msgsndr/vFbdhIphhRpcrSlf4VJF/media/69554d56cb5b716ba310c3dd.mp4";
const O = "/assets/outriders";

export const metadata: Metadata = {
  title: "Join The Outriders — Free Driver Membership | LineHaul Station",
  description:
    "America needs great truck drivers. Join the Outriders Club free — a private drivers' club at every LineHaul Station Hub: restaurant, fitness, showers, gaming, sky deck, and a national community of pros.",
};

const VALUES = [
  {
    n: "01",
    t: "Leave Isolation In The Dust",
    p: "Come join the country's best pro drivers. The Outriders Club is a real place to belong at the end of a run — not another parking lot.",
  },
  {
    n: "02",
    t: "Remarkable Connections",
    p: "You'll meet fellow drivers, swap road stories, and build a network that has your back across every Hub in the country.",
  },
  {
    n: "03",
    t: "Respect & Room To Grow",
    p: "Learn more, gain respect, and spread your wings — with amenities and a community built to treat great drivers the way they've earned.",
  },
];

const GALLERY: Shot[] = [
  { src: `${O}/gallery-3.jpg`, cap: "The Terminal", tag: "West Memphis" },
  { src: `${O}/gallery-2.jpg`, cap: "Restaurant & Sports Bar", tag: "Dine" },
  { src: `${O}/gallery-1.jpg`, cap: "The Gamer's Den", tag: "Recreation" },
  { src: `${O}/gallery-6.jpg`, cap: "Overdrive Fitness", tag: "Train" },
  { src: `${O}/gallery-7.jpg`, cap: "The Sky Deck", tag: "Rooftop" },
  { src: `${O}/gallery-4.jpg`, cap: "Trap & Skeet Simulators", tag: "Recreation" },
  { src: `${O}/gallery-8.jpg`, cap: "The Gear Shop", tag: "Shop" },
  { src: `${O}/gallery-5.jpg`, cap: "The Arrival", tag: "Hub Entry" },
];

// Verbatim from the live membership funnel (membership.linehaulstation.com/join).
const FAQS: QA[] = [
  {
    q: "What is LineHaul Station?",
    a: "LineHaul Station is a planned network of private, member-only truck terminals offering secure parking, trailer drop, and top-tier driver amenities. Our goal is to improve trucking efficiency, safety, and community across the country.",
  },
  {
    q: "Where is the first LineHaul Station?",
    a: "Our first terminal opens in West Memphis, AR, with future locations planned along major freight lanes, eventually creating a network of over 50 flex-space terminals.",
  },
  {
    q: "What is the Outriders Club?",
    a: "The Outriders Club is both a physical drivers' club at LineHaul Station and an exclusive membership. Members enjoy on-site amenities like restaurant, fitness center, showers, gaming, and outdoor patios, plus access to driver app, apparel shop, exclusive discount codes, and special events.",
  },
  {
    q: "Why should I join The Outriders?",
    a: "Membership signals to carriers and brokers your support for shared-use facilities, demonstrates commitment to safer terminals, and connects you with industry partners recognizing driver value.",
  },
  {
    q: "How much does my membership cost?",
    a: "Driver memberships are completely free.",
  },
  {
    q: "What do you do with my information?",
    a: "Your membership is always private. LineHaul Station never shares, sells, or gives your information to any third party.",
  },
];

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-ink">
      <Nav accent={ACCENT} active="join" />

      {/* ============================ HERO — full-bleed video ============================ */}
      <section className="relative flex min-h-[92dvh] items-end overflow-hidden px-[clamp(20px,6vw,100px)] pb-14 pt-28">
        <BackgroundVideo
          src={HERO_VIDEO}
          poster={`${O}/gallery-3.jpg`}
          className="img-grade absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.94)_0%,rgba(11,11,11,0.7)_52%,rgba(11,11,11,0.42)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,11,11,0.95),transparent_55%)]" />
        <div className="blueprint pointer-events-none absolute inset-0 opacity-20" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] overflow-hidden">
          <div className="scan-once h-full w-full" style={{ ["--ac" as string]: ACCENT }} />
        </div>
        <div className="absolute right-3 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 font-mono text-[11px] tracking-[0.35em] text-chrome xl:block">
          THE OUTRIDERS CLUB
        </div>

        <div className="relative w-full">
          <Reveal>
            <StatusChip chrome label="Outriders Membership — Open" coord="Driver-owned community" accent={ACCENT} />
          </Reveal>
          <Reveal delay={70}>
            <div className="mt-7 font-label text-[clamp(10px,1.3vw,14px)] uppercase tracking-[0.28em] text-chrome">
              The Outriders Club
            </div>
          </Reveal>
          <Reveal delay={130}>
            <h1 className="mt-3 max-w-[16ch] text-balance font-display text-[clamp(40px,7.4vw,112px)] font-black uppercase leading-[0.86] tracking-[-0.03em] text-white">
              America Needs Great Truck Drivers.
            </h1>
          </Reveal>
          <div className="mt-7 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <Reveal delay={230}>
              <div className="font-script text-[clamp(26px,3.6vw,46px)] font-semibold" style={{ color: ACCENT }}>
                Be your best with The Outriders.
              </div>
              <p className="mt-3 max-w-[52ch] text-pretty font-body text-[clamp(17px,1.8vw,21px)] leading-relaxed text-[#dadada]">
                Leave isolation in the dust and join the country&apos;s best pro drivers —
                a private club at every Hub, and a community that has your back on every lane.
                Driver memberships are <span className="text-white">completely free.</span>
              </p>
            </Reveal>
            <Reveal delay={320} className="flex-shrink-0">
              <div className="flex flex-wrap gap-3.5">
                <a
                  href="#join-form"
                  className="group inline-flex items-center gap-2.5 overflow-hidden rounded-btn px-[30px] py-[17px] font-label text-[12px] uppercase tracking-[0.16em] text-ink shadow-[0_14px_30px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-0.5 hover:brightness-[1.08] active:scale-[0.97]"
                  style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})` }}
                >
                  Join Free.
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="tel:6028988000"
                  className="inline-flex items-center gap-2.5 rounded-btn border border-chrome/30 bg-carbon/70 px-[30px] py-[17px] font-label text-[12px] uppercase tracking-[0.16em] text-white transition duration-300 hover:border-[var(--ac)] active:scale-[0.97]"
                  style={{ ["--ac" as string]: ACCENT }}
                >
                  Schedule a Call
                </a>
              </div>
              <p className="tnum mt-5 max-w-[34ch] font-mono text-[12px] leading-snug text-chrome">
                Free membership · (602) 898-8000
              </p>
            </Reveal>
          </div>
        </div>
        <a
          href="#why"
          className="absolute inset-x-0 bottom-5 mx-auto flex w-fit items-center gap-2 font-label text-[10px] uppercase tracking-[0.2em] text-chrome transition-colors hover:text-white"
        >
          <span className="scroll-nudge inline-block">↓</span> Why join
        </a>
      </section>

      {/* ====================== WHY JOIN / STORY (light) — white editorial beat ====================== */}
      <Section variant="light" id="why" className="py-[clamp(70px,11vh,140px)]">
        <div className="grid gap-x-14 gap-y-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHead
              kicker="Why Join"
              title={<>It&apos;s More Than A Membership. It&apos;s A <span className="text-fuel">Brotherhood.</span></>}
              accent={ACCENT}
              size="xl"
              maxW="max-w-full"
              tone="onLight"
            />
            <Reveal delay={120}>
              <p className="mt-7 max-w-[54ch] text-pretty font-body text-[clamp(18px,1.9vw,22px)] leading-relaxed text-[#3a3733]">
                The Outriders Club is both a physical drivers&apos; club at every LineHaul
                Station Hub and an exclusive membership. On-site you&apos;ll find a restaurant,
                fitness center, showers, gaming, and outdoor patios — plus the driver app,
                apparel shop, exclusive discount codes, and special events.
              </p>
            </Reveal>
            <div className="mt-9 space-y-px overflow-hidden rounded-card border border-[#E2DDD6] bg-[#E2DDD6]">
              {VALUES.map((v, i) => (
                <Reveal key={v.n} delay={140 + i * 80} className="bg-white p-6 sm:p-7">
                  <div className="flex items-baseline gap-5">
                    <span className="tnum font-mono text-[13px]" style={{ color: ACCENT }}>{v.n}</span>
                    <div>
                      <div className="font-display text-[19px] font-extrabold uppercase leading-tight text-ink">{v.t}</div>
                      <p className="mt-2 font-body text-[15px] leading-relaxed text-[#6a655e]">{v.p}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* story video, offset for rhythm */}
          <Reveal delay={160} dir="right" className="chrome-frame glint lg:-mt-8">
            <div className="relative aspect-[4/5] overflow-hidden bg-carbon">
              <BackgroundVideo
                src={`${O}/story.mp4`}
                poster={`${O}/gallery-2.jpg`}
                className="img-grade absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(11,11,11,0.8))]" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <DataTag accent={ACCENT}>THE OUTRIDERS · WEST MEMPHIS</DataTag>
                <div className="mt-2 font-display text-[22px] font-black uppercase leading-none text-white">
                  This Is Home Base.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ====================== GALLERY (ink) ====================== */}
      <Section variant="ink" className="py-[clamp(70px,11vh,140px)]">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <SectionHead kicker="Inside The Club" title="A First-Class Place To Belong." accent={ACCENT} size="xl" />
          <Reveal delay={120}>
            <p className="text-pretty font-body text-[clamp(18px,1.9vw,21px)] leading-relaxed text-[#dadada]">
              Restaurant and sports bar, the Overdrive fitness center, the Gamer&apos;s Den,
              a rooftop Sky Deck, the gear shop — every amenity earned by the drivers who
              keep America moving.
            </p>
          </Reveal>
        </div>
        <div className="mt-10">
          <PhotoGallery shots={GALLERY} accent={ACCENT} />
        </div>
      </Section>

      {/* ====================== THE FORM (blueprint) ====================== */}
      <Section variant="blueprint" id="join-form" className="py-[clamp(70px,11vh,140px)]">
        <div className="grid gap-x-14 gap-y-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <SectionHead
              kicker="Join Free"
              title={<>Claim Your <span className="text-fuel">Outriders</span> Membership.</>}
              accent={ACCENT}
              size="xl"
              maxW="max-w-full"
            />
            <Reveal delay={120}>
              <p className="mt-6 max-w-[48ch] text-pretty font-body text-[clamp(18px,1.9vw,21px)] leading-relaxed text-[#dadada]">
                It takes a minute and costs nothing. Tell us how you move freight and
                we&apos;ll get you set up with the club, the app, and first-Hub news.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-8 chrome-frame inline-block">
              <div className="relative overflow-hidden bg-carbon">
                <Image
                  src={`${O}/form-art.png`}
                  alt="The Outriders Club — LineHaul Station"
                  width={1549}
                  height={312}
                  className="h-auto w-full max-w-md"
                />
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-[13px] text-chrome">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: ACCENT }} /> 100% Free
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-chrome/50" /> Private — never sold
                </span>
                <a href="tel:6028988000" className="underline transition-colors hover:text-white">
                  (602) 898-8000
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140} dir="right">
            <JoinForm />
          </Reveal>
        </div>
      </Section>

      {/* ====================== FAQ (ink) ====================== */}
      <Section variant="ink" className="py-[clamp(70px,11vh,140px)]">
        <SectionHead kicker="Questions" title="Everything You Need To Know." accent={ACCENT} size="xl" align="center" />
        <div className="mt-12">
          <FAQ items={FAQS} accent={ACCENT} />
        </div>
      </Section>

      {/* ONE NETWORK — lane connector (blueprint) */}
      <Section variant="blueprint" className="py-[clamp(70px,11vh,140px)]">
        <LaneConnector accent={ACCENT} showJoin={false} />
      </Section>

      <Contact
        headline="The Road Is Better With A Crew."
        body="Join the Outriders free, or call and we'll walk you through it. West Memphis is open and the network is growing — come ride with us."
        accent={ACCENT}
        accentDark={ACCENT_DARK}
      />
      <Footer />
    </main>
  );
}
