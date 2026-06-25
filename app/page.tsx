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
import WideSlider, { type Slide } from "@/components/WideSlider";
import AudienceScroll from "@/components/AudienceScroll";
import FilterGallery from "@/components/FilterGallery";
import JoinForm from "@/components/JoinForm";
import { ChromeFrame, Coin, CoinImage, StatusChip } from "@/components/Bits";
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

// THREE PROGRAMS — restored from 0543462, restyled into the current system.
const PROGRAMS: {
  name: string;
  tagline: string;
  blurb: string;
  accent: string;
  href: string;
  coin: "steel" | "fuel" | "gold";
  coinImg?: string;
}[] = [
  { name: "FlexSpace", tagline: "It's YOUR Terminal Network.", blurb: "Shared-use terminal access sold in increments — Guest Pass, Proprietary Membership, or Dedicated Space. Carrier-facing.", accent: "#4878A8", href: "/carriers", coin: "steel", coinImg: "/assets/coin-flexspace.png" },
  { name: "OneHome", tagline: "Everywhere The Road Takes You.", blurb: "A private, resort-quality community network built exclusively for America's truckers. Driver-facing.", accent: "#F07820", href: "/drivers", coin: "fuel", coinImg: "/assets/coin-onehome.png" },
  { name: "Outriders Club", tagline: "The Rig Carlton.", blurb: "A 25,000+ sq ft private drivers club — restaurant, fitness, showers, gaming, rooftop sky deck, and more.", accent: "#C8A060", href: "/join", coin: "gold", coinImg: "/assets/coin-outriders.png" },
];

// Board advisors (pulled from /leadership) — shown small on the home page.
const ADVISORS = [
  { name: "John Larkin", cred: "Transportation Investment Banking", bio: "35+ years — Stifel, Clarendon Capital, Venture 53. Harvard MBA.", img: "https://static.wixstatic.com/media/84a10c_19734b4587b14454b1bb56e55e424a49~mv2.jpg/v1/fill/w_240,h_240,al_c,q_85/Bio_LARKIN1.jpg" },
  { name: "John Wilbur", cred: "Equipment & Capital Markets", bio: "CEO of Fleet Equipment, the largest U.S. Hyundai trailer dealer. Ex–Goldman Sachs & Citicorp.", img: "https://static.wixstatic.com/media/84a10c_e404ec8d771f43ff9413ef9bb6f20419~mv2.png/v1/fill/w_240,h_240,al_c,q_85/Wilbur_HEADSHOT.png" },
  { name: "Craig Hughes", cred: "Transportation Operations", bio: "40-year veteran. Founder & Chairman of Total Transit; founder of Veyo.", img: "https://static.wixstatic.com/media/84a10c_f2fb54a6c15643b4b6ea3577a56eb4f9~mv2.png/v1/fill/w_240,h_240,al_c,q_85/Hughes_HEADSHOT.png" },
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

      {/* ============ 1.5 STATS RIBBON [B] — quiet count-up ribbon directly under the hero (R8) ============ */}
      <section className={`bg-ink ${PAD} pb-[clamp(8px,2vh,28px)] pt-[clamp(20px,4vh,44px)]`}>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[8px] border border-chrome/12 bg-chrome/10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 70} className="flex min-h-[140px] flex-col justify-between bg-ink p-[clamp(20px,2.4vw,36px)]">
              <CountUp value={s.big} className="tnum font-display text-[clamp(30px,3.8vw,52px)] font-black leading-none text-white" />
              <div className="mt-5 font-mono text-[12px] uppercase leading-relaxed tracking-[0.08em] text-chrome">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ 2. FIND YOUR LANE [B] — pinned sticky-scroll audiences ============ */}
      <section id="lanes" className={`bg-ink ${PAD} py-[clamp(70px,11vh,140px)]`}>
        <Reveal><Kick accent="#7EC8E3">Find Your Lane</Kick></Reveal>
        <Reveal as="h2" className="mt-3 font-display text-[clamp(36px,6vw,92px)] font-black uppercase leading-[0.9] tracking-[-0.025em] text-white">
          One Network. Every Lane.
        </Reveal>
        <AudienceScroll />
      </section>

      {/* ============ 3. WHO WE ARE [W] — 3 columns: narrative · Jeff · board ============ */}
      <section className={`${PAD} py-[clamp(70px,11vh,140px)]`} style={{ background: WHITE }}>
        <div className="grid gap-[clamp(24px,3.5vw,56px)] lg:grid-cols-3 lg:items-start">
          {/* Col 1 — ALL story content: eyebrow + headline + both paragraphs */}
          <Reveal>
            <Kick>The Story</Kick>
            <h2 className="mt-4 text-balance font-display text-[clamp(34px,5.6vw,84px)] font-black uppercase leading-[0.9] tracking-[-0.025em]">
              <span style={{ color: CARBON }}>Built By People Who&apos;ve Done It </span>
              <span className="outline-head" style={{ ["--ac" as string]: "#F07820" }}>Before.</span>
            </h2>
            <p className="mt-5 font-body text-[clamp(16px,1.5vw,19px)] font-medium leading-[1.5]" style={{ color: CARBON }}>
              LineHaul Station didn&apos;t start with trucks. It started with a question: why does the
              industry that moves America treat its best drivers the worst?
            </p>
            <p className="mt-4 font-body text-[clamp(14px,1.35vw,16px)] leading-relaxed" style={{ color: "#3a3733" }}>
              We&apos;re building the answer — real terminals, real amenities, and a national relay that
              lowers the cost of every mile while getting the best drivers home, rested and respected.
              The same standard runs through every Hub, Service Center, and word we write.
            </p>
          </Reveal>

          {/* Col 2 — Jeff (contained square headshot), centered to balance the 3 cols */}
          <Reveal delay={80} className="flex flex-col lg:items-center lg:text-center">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "#6a655e" }}>Founder</div>
            <ChromeFrame variant="dual" glint className="mt-5 w-full max-w-[280px]">
              <div className="relative aspect-square w-full overflow-hidden bg-carbon">
                <Image src="https://static.wixstatic.com/media/84a10c_7dfa17aed1604937b1d1dd98258ee10a~mv2.png/v1/fill/w_640,h_800,al_c,q_90/Bio_JS-23-1.png" alt="Jeff Swenson, Founder & CEO" fill className="object-cover object-top" sizes="280px" />
              </div>
            </ChromeFrame>
            <div className="mt-5 font-display text-[clamp(20px,2.2vw,26px)] font-black uppercase leading-tight" style={{ color: CARBON }}>Jeff Swenson</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-fuel">Founder &amp; CEO</div>
            <p className="mt-4 max-w-[42ch] font-body text-[clamp(14px,1.35vw,16px)] leading-relaxed lg:mx-auto" style={{ color: "#3a3733" }}>
              Jeff spent 35 years and more than $2&nbsp;billion building residential, commercial, and
              logistics real estate — then brought that standard to freight: treat the industry&apos;s best
              drivers with dignity and respect, and never compromise on quality.
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5 lg:justify-center">
              <a href="https://www.linkedin.com/in/jeff-swenson-2744606" target="_blank" rel="noopener noreferrer" className="rounded-btn border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors hover:border-fuel hover:text-fuel" style={{ borderColor: LINE_L, color: CARBON }}>LinkedIn</a>
              <a href="mailto:js@linehaulstation.com" className="rounded-btn border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors hover:border-fuel hover:text-fuel" style={{ borderColor: LINE_L, color: CARBON }}>js@linehaulstation.com</a>
            </div>
          </Reveal>

          {/* Col 3 — Board Advisors (stacked) */}
          <Reveal delay={140}>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "#6a655e" }}>Board Advisors</div>
            <div className="mt-4 flex flex-col">
              {ADVISORS.map((p) => (
                <div key={p.name} className="flex items-start gap-4 border-t py-4 first:border-t-0 first:pt-0" style={{ borderColor: LINE_L }}>
                  <div className="relative h-[56px] w-[56px] flex-none overflow-hidden rounded-full">
                    <Image src={p.img} alt={p.name} fill loading="lazy" className="object-cover" sizes="56px" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display text-[15px] font-black uppercase leading-tight" style={{ color: CARBON }}>{p.name}</div>
                    <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-fuel">{p.cred}</div>
                    <p className="mt-1.5 font-body text-[12.5px] leading-snug" style={{ color: "#6a655e" }}>{p.bio}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/leadership" className="mt-5 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors hover:text-fuel" style={{ color: "#6a655e" }}>
              Meet the full team &amp; board <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ 4. THREE PROGRAMS [B] — 2 cols: content left, cards right ============ */}
      <section className={`bg-ink ${PAD} py-[clamp(70px,11vh,140px)]`}>
        <div className="grid gap-[clamp(28px,4vw,64px)] lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* content left */}
          <div className="lg:sticky lg:top-28">
            <Reveal><Kick accent="#7EC8E3">One Network · Three Programs</Kick></Reveal>
            <Reveal as="h2" className="mt-3 font-display text-[clamp(36px,5vw,80px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">
              Three Ways Into The{" "}
              <span className="text-chrome-fill">Network.</span>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 max-w-[42ch] font-body text-[clamp(16px,1.6vw,20px)] leading-relaxed text-[#dadada]">
                One shared-use network, three ways in — buy the space, come home to it, and belong to it.
                Choose the program that fits how you move freight.
              </p>
            </Reveal>
          </div>

          {/* cards stacked right */}
          <div className="grid gap-4">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <ChromeFrame glint className="lift">
                  <Link
                    href={p.href}
                    className="group relative flex overflow-hidden bg-[#141414] p-7 sm:p-8"
                    style={{ ["--ac" as string]: p.accent }}
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-25 blur-2xl transition-opacity duration-500 group-hover:opacity-50" style={{ background: p.accent }} />
                    {p.coinImg ? (
                      <CoinImage src={p.coinImg} alt={`${p.name} challenge coin`} size={84} className="relative mr-6 mt-0.5" />
                    ) : (
                      <Coin tone={p.coin} className="relative mr-6 mt-1 flex-none">{String(i + 1).padStart(2, "0")}</Coin>
                    )}
                    <div className="relative flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <div className="font-display text-[clamp(24px,2.6vw,34px)] font-black uppercase leading-none text-white">{p.name}</div>
                        <div className="font-script text-[clamp(20px,2.2vw,26px)] font-semibold" style={{ color: p.accent }}>{p.tagline}</div>
                      </div>
                      <p className="mt-4 max-w-[60ch] font-body text-[15px] leading-relaxed text-chrome">{p.blurb}</p>
                      <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white">
                        Explore <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" style={{ color: p.accent }}>→</span>
                      </span>
                    </div>
                  </Link>
                </ChromeFrame>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5. THE GALLERY — full-screen slider, thumbnails overlaid (no heading) ============ */}
      <div className="bg-ink">
        <WideSlider slides={SLIDES} />
      </div>

      {/* ============ 6. INSIDE THE HUB [W] — filterable gallery ============ */}
      <section className={`${PAD} py-[clamp(70px,11vh,140px)]`} style={{ background: WHITE }}>
        <Reveal><Kick>Inside The Hub</Kick></Reveal>
        <Reveal as="h2" className="mt-3 font-display text-[clamp(36px,6vw,92px)] font-black uppercase leading-[0.9] tracking-[-0.025em]">
          <span style={{ color: CARBON }}>Filter The Tour.</span>
        </Reveal>
        <FilterGallery />
      </section>

      {/* ============ 7. THE NETWORK [B] — map kept ============ */}
      <section id="network" className={`bg-ink ${PAD} py-[clamp(70px,11vh,140px)]`}>
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <Reveal className="flex flex-wrap items-center gap-4">
              <Kick accent="#7EC8E3">The Network</Kick>
              <StatusChip chrome label="Open Now · West Memphis" accent="#18A848" />
            </Reveal>
            <Reveal as="h2" className="mt-3 font-display text-[clamp(36px,6vw,92px)] font-black uppercase leading-[0.9] tracking-[-0.025em] text-white">
              A National Freight{" "}
              <span className="text-steel-fill">Relay.</span>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-[44ch] font-body text-[clamp(16px,1.6vw,20px)] leading-relaxed text-[#dadada]">
                The first Hub is open in West Memphis — one block off the I-40 / I-55 interchange.
                Phase-one expansion is underway toward a national network of Hubs, Private Terminals,
                and Service Centers.
              </p>
            </Reveal>
          </div>
          <Reveal dir="right" className="chrome-frame glint">
            <div className="relative aspect-[16/10] overflow-hidden bg-carbon">
              <Image src={PHOTOS.highwayInterchange} alt="A national freight interchange" fill loading="lazy" className="img-grade object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(11,11,11,0.8))]" />
              <div className="absolute inset-x-0 bottom-0 flex p-5">
                <span className="chrome-pill">
                  <span>
                    <span className="h-2 w-2 rounded-full bg-fuel shadow-[0_0_10px_1px_rgba(240,120,32,0.8)]" aria-hidden />
                    <span className="tnum font-mono text-[12px] uppercase tracking-[0.12em] text-white">I-40 / I-55 · ~60,000 trucks a day</span>
                  </span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal dir="left" className="mt-11">
          <NetworkMap />
        </Reveal>
      </section>

      {/* ============ 9. LET'S TALK [B] — 2 cols: content + contact left, form right ============ */}
      <section id="contact" className={`relative overflow-hidden ${PAD} py-[clamp(70px,11vh,140px)]`}>
        <ParallaxImage src={PHOTOS.truckSunset} alt="A truck on the open road at sunset" strength={0.24} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.94),rgba(11,11,11,0.7))]" />
        <div className="relative grid gap-[clamp(28px,4vw,64px)] lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* content + contact info (left) */}
          <div className="lg:sticky lg:top-28">
            <Reveal><Kick accent="#7EC8E3">Let&apos;s Talk</Kick></Reveal>
            <Reveal as="h2" className="mt-4 font-display text-[clamp(34px,5vw,80px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">
              Build The Future Of Freight With Us.
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 max-w-[44ch] font-body text-[clamp(16px,1.6vw,20px)] leading-relaxed text-[#dadada]">
                Join the Outriders free, or reach the team direct — wherever you sit in the supply chain.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <ChromeFrame className="mt-9">
                <div className="grid grid-cols-1 gap-px overflow-hidden bg-chrome/10 sm:grid-cols-3 lg:grid-cols-1">
                  <a href={site.phoneHref} className="bg-ink/80 p-5 backdrop-blur transition-colors hover:bg-ink/95">
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">Call</div>
                    <div className="tnum mt-2 font-mono text-[15px] text-white">{site.phone}</div>
                  </a>
                  <a href={site.emailHref} className="bg-ink/80 p-5 backdrop-blur transition-colors hover:bg-ink/95">
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">Email</div>
                    <div className="mt-2 break-words font-mono text-[15px] text-white">{site.email}</div>
                  </a>
                  <div className="bg-ink/80 p-5 backdrop-blur">
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">Visit</div>
                    <div className="mt-2 font-mono text-[15px] text-white">West Memphis, AR</div>
                    <div className="mt-1 font-mono text-[12px] text-chrome">{site.domainLabel}</div>
                  </div>
                </div>
              </ChromeFrame>
            </Reveal>
          </div>

          {/* form (right) */}
          <Reveal delay={120} dir="right">
            <JoinForm />
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
