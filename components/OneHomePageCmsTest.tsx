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
import NetworkMap from "@/components/NetworkMap";
import FloatingVimeo from "@/components/onehome/FloatingVimeo";
import BuildingCarousel from "@/components/onehome/BuildingCarousel";
import TestimonialCarousel from "@/components/onehome/TestimonialCarousel";
import ComparisonTable from "@/components/onehome/ComparisonTable";
import StepGrid from "@/components/onehome/StepGrid";
import Spotlight from "@/components/onehome/Spotlight";
import LuxeFooter from "@/components/LuxeFooter";
import FAQ from "@/components/FAQ";
import { CoinImage, ChromeFrame, StatusChip } from "@/components/Bits";
import { audiences } from "@/lib/audiences";
import type { DriversPageContent, SectionType } from "@/lib/driversPageShape";
import type { Voice } from "@/components/onehome/TestimonialCarousel";

/* ============ "Luxe" dark-luxury skin ============ */
const PAD = "gutter";
const ELEV = "#0E0E10"; // subtly elevated section
const INK = "#0B0B0B"; // base carbon
const CARD = "#16161A"; // elevated dark card
const CARD2 = "#1C1C20"; // card hairline edge
const MUT = "#a9a9a9"; // muted body text on dark (AA on #0E0E10)

// Luxe pill CTAs.
const PILL = "inline-flex items-center gap-2.5 rounded-full px-8 py-[15px] font-label text-[14px] uppercase tracking-[0.14em] transition duration-300 active:scale-[0.97]";

// Sections that paint a solid background. These alternate ELEV / INK by the
// running solid-section count so adjacent solid sections never share a treatment,
// no matter how the editor reorders or removes blocks. hero (video) and
// membershipSteps (transparent straddle) don't participate.
const SOLID = new Set<SectionType>([
  "welcome", "joinFree", "core", "amenities", "value", "space", "homeHub", "network", "faq",
]);

// Props every section renderer receives. `bg` is the computed background for
// solid sections (empty for non-solid). `a` supplies brand tokens + the stories
// background image (not editable copy — stays code-sourced).
type S = {
  content: DriversPageContent;
  voices: Voice[];
  a: (typeof audiences)["drivers"];
  ac: string;
  ad: string;
  bg: string;
};

/* ============ 1. HERO — full-bleed video + multi-speed parallax ============ */
function Hero({ content, ac, ad }: S) {
  return (
    <section className={`relative flex min-h-[100dvh] items-center overflow-hidden ${PAD} pb-24 pt-32`}>
      <ParallaxLayer speed={0.22} className="absolute inset-0">
        <BackgroundVideo src={content.heroVideoUrl} poster="/assets/marketing/hero-poster.jpg" className="absolute inset-0 h-full w-full scale-110 object-cover" />
      </ParallaxLayer>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.9),rgba(11,11,11,0.42)_62%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,11,11,0.78),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,#0B0B0B,transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] overflow-hidden">
        <div className="scan-once h-full w-full" style={{ ["--ac" as string]: ac }} />
      </div>

      <ParallaxLayer speed={-0.06} className="relative flex w-full flex-col items-center text-center">
        <Reveal>
          <StatusChip chrome label="West Memphis Hub — Open Now" coord="I-40 / I-55" accent={ac} />
        </Reveal>
        <Reveal delay={70}>
          <div className="mt-7 font-label text-[13px] uppercase tracking-[0.22em] text-chrome">{content.eyebrow}</div>
        </Reveal>
        <Reveal as="h1" delay={120} className="mt-3 max-w-[15ch] text-balance font-display text-[clamp(46px,8.05vw,120px)] font-black uppercase leading-[0.9] tracking-[-0.025em] text-white">
          {content.heroPunch}
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-6 max-w-[40ch] text-[clamp(21px,2.42vw,30px)] font-light italic leading-[1.45] text-[#e6e6e6]">
            {content.verseLines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={280}>
          <p className="mt-6 max-w-[52ch] text-pretty text-[clamp(18px,1.95vw,23px)] leading-relaxed text-[#cfcfcf]">{content.heroBlurb}</p>
        </Reveal>
        <Reveal delay={350} className="mt-8 flex flex-wrap items-center gap-3.5">
          <MagneticButton strength={0.35}>
            <a href="#join-free" className={`group ${PILL} text-ink shadow-[0_14px_34px_rgba(0,0,0,0.5)] hover:brightness-[1.08]`} style={{ background: `linear-gradient(135deg, ${ac}, ${ad})` }}>
              Join Free
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </MagneticButton>
          <a href="#core" className={`group ${PILL} border border-white/40 bg-white/[0.04] text-white backdrop-blur-sm hover:border-[var(--ac)]`} style={{ ["--ac" as string]: ac }}>
            See The Math
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" style={{ color: ac }}>→</span>
          </a>
        </Reveal>
        <p className="tnum mt-6 max-w-[40ch] font-mono text-[14px] leading-snug text-chrome">{content.heroNote}</p>
      </ParallaxLayer>

      <a href="#welcome" className="absolute inset-x-0 bottom-5 mx-auto flex w-fit items-center gap-2 font-label text-[12px] uppercase tracking-[0.2em] text-chrome transition-colors hover:text-white">
        <span className="scroll-nudge inline-block">↓</span> {content.scrollHint}
      </a>
    </section>
  );
}

/* ============ 2. WELCOME TO THE CLUB — story + Vimeo ============ */
function Welcome({ content, ac, bg }: S) {
  return (
    <section id="welcome" className={`relative overflow-hidden ${PAD} pt-[clamp(80px,12vh,160px)] pb-[clamp(80px,12vh,160px)] sm:pb-[clamp(100px,12vw,170px)]`} style={{ background: bg }}>
      <div className="bloom" style={{ ["--bloom" as string]: "rgba(208,40,60,0.10)" }} aria-hidden />
      <div className="relative grid gap-[clamp(32px,5vw,72px)] lg:grid-cols-2 lg:items-center">
        <Reveal>
          <CoinImage src={content.coinImage} alt="Outriders Club challenge coin" size={84} glow={`${ac}40`} className="mb-5" />
          <div className="font-label text-[13px] uppercase tracking-[0.22em] text-chrome">{content.storyEyebrow}</div>
          <h2 className="mt-3 font-display text-[clamp(39px,5.98vw,83px)] font-black uppercase leading-[0.95] tracking-[-0.025em] text-white">{content.storyHeadline}</h2>
          <div className="mt-6 max-w-[60ch] space-y-4 leading-relaxed" style={{ color: MUT }}>
            {content.storyParas.map((p, i) =>
              i === 0 ? (
                <p key={i} className="text-[clamp(21px,2.3vw,28px)] font-medium leading-snug text-white">{p}</p>
              ) : (
                <p key={i} className="text-[clamp(17px,1.84vw,21px)]">{p}</p>
              )
            )}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-[clamp(17px,1.73vw,21px)] leading-relaxed text-chrome">{content.webinarBody}</p>
          <ChromeFrame variant="steel" className="mt-5 rounded-[20px] [&>*]:rounded-[19px]">
            <FloatingVimeo src={content.webinarVideoUrl} title="LineHaul Station — Monthly Webinar with Jeff Swenson" />
          </ChromeFrame>
          <div className="mt-4">
            <div className="font-display text-[18px] font-black uppercase leading-tight tracking-[0.02em] text-white">{content.founderName}</div>
            <div className="mt-0.5 font-mono text-[13px] uppercase tracking-[0.12em]" style={{ color: ac }}>{content.founderTitle}</div>
          </div>
        </Reveal>
      </div>
      {/* the brand line, centered below the Outriders story — styled like the Core hook */}
      <Reveal className="relative mt-[clamp(48px,6vw,90px)] text-center">
        <div className="font-label text-[13px] uppercase tracking-[0.24em]" style={{ color: ac }}>Three quick steps. Zero cost.</div>
        <h2 className="mx-auto mt-6 max-w-[16ch] text-balance font-display text-[clamp(46px,6.9vw,110px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">
          {content.joinHeadline.split("/")[0].trim()}{" "}
          <span className="outline-head" style={{ ["--ac" as string]: ac }}>{content.joinHeadline.split("/")[1].trim()}.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[44ch] text-[clamp(21px,2.3vw,28px)] font-medium leading-snug text-[#e2e2e2]">
          Joining the Outriders Club is 100% free — and unlocks your Home Hub, full club access, and founding-member OneHome pricing.
        </p>
      </Reveal>
    </section>
  );
}

/* ============ Free Membership steps — image boxes ============ */
function MembershipSteps({ content, ac }: S) {
  return (
    <div id="membership" className="gutter relative z-20 mt-12 mb-12 sm:-mt-[clamp(60px,9vw,130px)] sm:-mb-[clamp(160px,20vw,290px)]">
      <StepGrid items={content.membershipSteps} badge={(i) => `Step #${i + 1}`} accent={ac} />
    </div>
  );
}

/* ============ 3. JOIN FREE — Outriders Club register ============ */
function JoinFree({ content, ac, ad, bg }: S) {
  return (
    <section id="join-free" className={`relative overflow-hidden ${PAD} pt-[clamp(70px,11vh,140px)] sm:pt-[clamp(240px,28vw,420px)] pb-[clamp(70px,11vh,140px)]`} style={{ background: bg }}>
      <div className="bloom" style={{ ["--bloom" as string]: "rgba(208,40,60,0.10)" }} aria-hidden />
      <div className="relative grid gap-[clamp(28px,4vw,64px)] lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: ac }} aria-hidden />
            <span className="font-mono text-[13px] uppercase tracking-[0.16em] text-chrome">100% Free · Outriders Club</span>
          </div>
          <h2 className="mt-5 text-balance font-display text-[clamp(39px,5.98vw,87px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">
            {content.joinFreeHeadline.split("/")[0].trim()}{" "}<span style={{ color: ac }}>{content.joinFreeHeadline.split("/")[1].trim()}</span>
          </h2>
          <p className="mt-5 max-w-[48ch] text-[clamp(18px,1.95vw,23px)] leading-relaxed text-[#dadada]">
            {content.joinFreeBody}
          </p>
          <ul className="mt-6 space-y-3">
            {content.joinFreeBullets.map((b) => (
              <li key={b} className="flex items-baseline gap-3 text-[17px] text-[#dadada]">
                <span aria-hidden style={{ color: ac }}>✓</span>
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-[14px] text-chrome">
            Want the paid home program?{" "}
            <a href="#core" className="underline transition-colors hover:text-white" style={{ color: ac }}>See the OneHome math ↓</a>
          </p>
        </div>
        <Reveal dir="right">
          <JoinForm accent={ac} accentDark={ad} submitLabel="Join Free." successTitle="Welcome to the Outriders." />
        </Reveal>
      </div>
    </section>
  );
}

/* ============ 4. HERE'S A NEW & BETTER OPTION — hook → calculator → body ============ */
function Core({ content, ac, ad, bg }: S) {
  return (
    <section id="core" className={`relative overflow-hidden ${PAD} py-[clamp(80px,12vh,160px)]`} style={{ background: bg }}>
      <Reveal className="mx-auto max-w-5xl text-center">
        <div className="font-label text-[13px] uppercase tracking-[0.24em]" style={{ color: ac }}>{content.coreKicker}</div>
        <h2 className="mx-auto mt-6 max-w-[16ch] text-balance font-display text-[clamp(46px,6.9vw,110px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">
          {content.coreHeadline.split("/")[0].trim()}{" "}
          <span className="outline-head" style={{ ["--ac" as string]: ac }}>{content.coreHeadline.split("/")[1].trim()}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[44ch] text-[clamp(21px,2.3vw,28px)] font-medium leading-snug text-[#e2e2e2]">{content.coreSubhead}</p>
      </Reveal>

      {/* wide, focal glass calculator (the only calculator) */}
      <Reveal className="mx-auto mt-12 max-w-6xl">
        <div id="calculator">
          <OneHomeCalculator accent={ac} accentDark={ad} />
        </div>
      </Reveal>

      {/* the playbook's revised Core Sales copy, below the calculator (same width, centered) */}
      <Reveal className="mx-auto mt-12 max-w-6xl text-center">
        <div className="space-y-4 text-[clamp(18px,1.84vw,22px)] leading-relaxed" style={{ color: "#dadada" }}>
          {content.coreParas.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <p className="mt-6 font-display text-[clamp(23px,2.76vw,35px)] font-black uppercase leading-tight text-white">{content.coreBlurb}</p>
      </Reveal>
    </section>
  );
}

/* ============ 5. THE OUTRIDERS CLUB — amenities carousel ============ */
function Amenities({ content, ac, bg }: S) {
  return (
    <section id="amenities" className={`${PAD} py-[clamp(80px,12vh,160px)]`} style={{ background: bg }}>
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="font-label text-[13px] uppercase tracking-[0.24em]" style={{ color: ac }}>The Outriders Club</div>
        <h2 className="mt-4 text-balance font-display text-[clamp(39px,6.44vw,97px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">{content.amenitiesHeadline}</h2>
        <p className="mt-5 text-[clamp(18px,1.95vw,23px)] leading-relaxed" style={{ color: MUT }}>{content.amenitiesIntro}</p>
      </Reveal>
      <BuildingCarousel slides={content.amenitySlides} accent={ac} initialIndex={1} />
      <Reveal>
        <p className="mt-[clamp(40px,6vw,80px)] text-center text-[clamp(23px,2.99vw,35px)] font-light italic" style={{ color: ac }}>{content.amenitiesFootnote}</p>
      </Reveal>
    </section>
  );
}

/* ============ 6. FOR A LOT LESS MONEY — prompts + comparison ============ */
function Value({ content, ac, bg }: S) {
  return (
    <section id="value" className={`${PAD} py-[clamp(70px,11vh,140px)]`} style={{ background: bg }}>
      <Reveal as="h2" className="max-w-[20ch] text-balance font-display text-[clamp(37px,5.52vw,78px)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-white">
        {content.valueHeadline}
      </Reveal>
      <div className="mt-10 grid gap-x-16 gap-y-10 lg:grid-cols-2 lg:items-stretch">
        <Reveal className="flex flex-col">
          <div className="font-display text-[clamp(23px,2.53vw,35px)] font-black uppercase tracking-[0.01em]" style={{ color: ac }}>{content.valueSubhead}</div>
          <p className="mt-3 text-[clamp(18px,1.84vw,22px)] text-chrome">{content.valuePrompt}</p>
          <ul className="mt-6 space-y-4">
            {content.valuePrompts.map((q, i) => (
              <li key={q} className="flex items-baseline gap-4 border-t border-white/10 pt-4 text-[clamp(20px,2.07vw,24px)] text-[#e6e6e6]">
                <span className="tnum font-mono text-[15px]" style={{ color: ac }}>{String(i + 1).padStart(2, "0")}</span>
                {q}
              </li>
            ))}
          </ul>
          <p className="mt-auto pt-8 text-[clamp(21px,2.3vw,28px)] font-light italic" style={{ color: ac }}>{content.valueBlurb}</p>
        </Reveal>
        <Reveal delay={120} dir="right" className="lg:h-full">
          <ComparisonTable rows={content.comparisonRows} accent={ac} />
        </Reveal>
      </div>
    </section>
  );
}

/* ============ 7. THREE WAYS TO GET SPACE ============ */
function Space({ content, ac, ad, bg }: S) {
  return (
    <section id="space" className={`${PAD} py-[clamp(70px,11vh,140px)]`} style={{ background: bg }}>
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-6">
        <Reveal className="max-w-3xl">
          <div className="font-label text-[13px] uppercase tracking-[0.24em]" style={{ color: ac }}>The Outriders Club</div>
          <h2 className="mt-4 font-display text-[clamp(37px,5.75vw,87px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">
            {content.spaceHeadline.split("/")[0].trim()}{" "}<span style={{ color: ac }}>{content.spaceHeadline.split("/")[1].trim()}</span>
          </h2>
        </Reveal>
        <Reveal delay={120} className="flex-none">
          <MagneticButton strength={0.3}>
            <a href="#join-free" className={`group ${PILL} text-ink shadow-[0_14px_30px_rgba(0,0,0,0.45)] hover:brightness-[1.06]`} style={{ background: `linear-gradient(135deg, ${ac}, ${ad})` }}>
              Join Free
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </MagneticButton>
        </Reveal>
      </div>
      <div className="mt-12">
        <StepGrid items={content.spaceSteps} badge={(i) => String(i + 1).padStart(2, "0")} accent={ac} />
      </div>
    </section>
  );
}

/* ============ 8. WE HAVE EVERYTHING YOU NEED — Home Hub + Fleet tiles ============ */
function HomeHub({ content, ac, bg }: S) {
  return (
    <section id="everything">
      <div className="relative h-[clamp(340px,52vh,600px)] overflow-hidden">
        <ScrollScale from={1.06} to={1.22}>
          <Image src="/assets/building-seq/01.jpg" alt="A LineHaul Station terminal — your Home Hub" fill className="img-grade object-cover" sizes="100vw" />
        </ScrollScale>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,11,11,0.96),rgba(11,11,11,0.4)_62%)]" />
        <div className={`relative flex h-full items-end ${PAD} pb-[clamp(28px,5vw,64px)]`}>
          <Reveal className="max-w-2xl">
            <h2 className="text-balance font-display text-[clamp(39px,6.44vw,92px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">{content.homeHubHeadline}</h2>
            <p className="mt-3 text-[clamp(21px,2.3vw,28px)] font-light italic" style={{ color: ac }}>{content.homeHubBlurb}</p>
          </Reveal>
        </div>
      </div>
      <div className={`${PAD} py-[clamp(56px,9vh,110px)]`} style={{ background: bg }}>
        <div className="grid gap-x-12 gap-y-12 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_340px]">
          {/* left — the image tiles */}
          <div>
            {["Home Hub", "Fleet Services"].map((group, gi) => (
              <div key={group} className={gi === 1 ? "mt-12" : ""}>
                <div className="font-mono text-[17px] uppercase tracking-[0.16em]" style={{ color: ac }}>{group}</div>
                <div className={`mt-5 grid gap-4 ${gi === 0 ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
                  {content.everythingTiles.filter((t) => t.group === group).map((t, i) => (
                    <Reveal key={t.label} delay={i * 60}>
                      <Spotlight className="group overflow-hidden rounded-[16px] border" glow={`${ac}26`} style={{ borderColor: CARD2, background: CARD }}>
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image src={t.img} alt={t.label} fill loading="lazy" className="img-grade object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105" sizes="(max-width: 768px) 50vw, 28vw" />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(11,11,11,0.72))]" />
                        </div>
                        <figcaption className="relative z-[3] p-4">
                          <div className="font-display text-[20px] font-black uppercase tracking-[0.01em] text-white">{t.label}</div>
                          <div className="mt-1 text-[18px] leading-snug" style={{ color: MUT }}>{t.line}</div>
                        </figcaption>
                      </Spotlight>
                    </Reveal>
                  ))}
                </div>
                {gi === 1 && (
                  <p className="mt-5 font-mono text-[17px] leading-relaxed" style={{ color: MUT }}>
                    <span style={{ color: ac }}>Also: </span>{content.fleetDetail}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* right — the full "Everything included" club menu */}
          <Reveal dir="right" className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[20px] border p-6 sm:p-7" style={{ borderColor: CARD2, background: CARD }}>
              <div className="font-mono text-[16px] uppercase tracking-[0.18em] text-chrome">Everything included</div>
              <div className="mt-5 grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
                {content.clubMenu.map((g) => (
                  <div key={g.category}>
                    <div className="font-display text-[20px] font-black uppercase tracking-[0.01em]" style={{ color: ac }}>{g.category}</div>
                    <ul className="mt-2.5 space-y-1.5">
                      {g.items.map((it) => (
                        <li key={it} className="flex items-baseline gap-2.5 text-[18px] leading-snug text-chrome">
                          <span className="h-1 w-1 flex-none translate-y-[-2px] rounded-full" style={{ background: ac }} aria-hidden />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ 9. NETWORK / MAP ============ */
function Network({ content, ac, bg }: S) {
  return (
    <section id="network" className={`overflow-x-clip ${PAD} py-[clamp(70px,11vh,140px)]`} style={{ background: bg }}>
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <Reveal as="h2" className="text-balance font-display text-[clamp(39px,6.44vw,97px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">{content.networkHeadline}</Reveal>
          <Reveal delay={80}>
            <p className="mt-4 font-mono text-[14px] uppercase tracking-[0.16em]" style={{ color: ac }}>{content.networkSubhead}</p>
            <div className="mt-6 max-w-[62ch] space-y-4 text-[clamp(18px,1.84vw,22px)] leading-relaxed" style={{ color: MUT }}>
              {content.networkParas.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <p className="mt-5 text-[clamp(21px,2.3vw,28px)] font-light italic" style={{ color: ac }}>{content.networkBlurb}</p>
            <div className="mt-8">
              <div className="font-mono text-[13px] uppercase tracking-[0.18em] text-chrome">Current planning markets</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {content.planningMarkets.map((m) => (
                  <span key={m} className="rounded-full border border-white/12 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[14px]" style={{ color: MUT }}>{m}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120} dir="right">
          <div className="space-y-5">
            {/* national Hub network map (dark, interactive) */}
            <NetworkMap />
            <div className="rounded-[20px] border p-7" style={{ borderColor: CARD2, background: CARD }}>
              <div className="font-label text-[12px] uppercase tracking-[0.2em]" style={{ color: ac }}>First Home Hub · Open Now</div>
              <div className="mt-3 font-display text-[35px] font-black uppercase leading-none text-white">{content.hubAddress}</div>
              <div className="tnum mt-1.5 font-mono text-[15px] text-chrome">{content.hubAddressSub}</div>
              <p className="mt-4 text-[16px] leading-relaxed" style={{ color: MUT }}>{content.hubBody}</p>
              <div className="chrome-rule mt-5" />
              <div className="mt-5"><StatusChip chrome label="Live now" coord="35.14°N / 90.18°W" accent={ac} /></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ 10. TESTIMONIALS — pinned, not a reorderable block ============ */
function Testimonials({ content: _content, voices, a, ac }: S) {
  return (
    <section id="stories" className="relative overflow-hidden">
      <div className="relative h-[clamp(360px,52vh,560px)]">
        <ParallaxImage src={a.heroImage} alt="A driver at sunset — LineHaul Station" strength={0.2} />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,11,11,0.95),rgba(11,11,11,0.35)_60%)]" />
        <button type="button" aria-label="Play driver story (video coming soon)" className="group absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-black/30 backdrop-blur-sm transition hover:scale-105 hover:border-white">
          <span className="ml-1 text-[25px] text-white" aria-hidden>▶</span>
        </button>
        <div className={`absolute inset-x-0 bottom-0 ${PAD} pb-8`}>
          <div className="font-label text-[13px] uppercase tracking-[0.22em] text-chrome">Driver stories</div>
          <h2 className="mt-2 max-w-[18ch] text-balance font-display text-[clamp(32px,5.06vw,69px)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-white">In their words.</h2>
        </div>
      </div>
      <div className={`bg-ink ${PAD} pb-[clamp(70px,11vh,140px)] pt-[clamp(28px,5vw,64px)]`}>
        <Reveal>
          <TestimonialCarousel items={voices} accent={ac} />
        </Reveal>
      </div>
    </section>
  );
}

/* ============ 11. FAQ ============ */
function Faq({ content, ac, bg }: S) {
  return (
    <section id="faq" className={`${PAD} py-[clamp(70px,11vh,140px)]`} style={{ background: bg }}>
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="font-label text-[13px] uppercase tracking-[0.24em]" style={{ color: ac }}>Good to know</div>
        <h2 className="mt-4 text-balance font-display text-[clamp(37px,5.75vw,78px)] font-black uppercase leading-[0.95] tracking-[-0.025em] text-white">Frequently Asked Questions</h2>
      </Reveal>
      <div className="mt-12">
        <FAQ items={content.faqItems} accent={ac} />
      </div>
    </section>
  );
}

// blockType -> section renderer. Testimonials is intentionally absent (pinned).
const SECTION_COMPONENTS: Record<SectionType, (p: S) => React.JSX.Element> = {
  hero: Hero,
  welcome: Welcome,
  membershipSteps: MembershipSteps,
  joinFree: JoinFree,
  core: Core,
  amenities: Amenities,
  value: Value,
  space: Space,
  homeHub: HomeHub,
  network: Network,
  faq: Faq,
};

// CMS-backed copy of OneHomePage for /drivers-cms-test. Markup, styling, and
// motion are identical to components/OneHomePage.tsx — the data source is the
// `content` prop, and the sections render in the CMS-defined `order` (Payload
// blocks: reorder / add / remove). Presentational only (no data fetch) so it can
// render both server-side and inside the client Live Preview wrapper. Backgrounds
// alternate automatically by solid-section index; accent tokens (ac/ad) and the
// stories image stay code-sourced. Testimonials is pinned after Network (or last
// if Network was removed) — it's its own Testimonials collection, not a block.
export default function OneHomePageCmsTest({
  order,
  content,
  voices,
}: {
  order: SectionType[];
  content: DriversPageContent;
  voices: Voice[];
}) {
  const a = audiences.drivers;
  const ac = a.accent;
  const ad = a.accentDark;
  const shared = { content, voices, a, ac, ad };

  const nodes: React.ReactNode[] = [];
  let solid = 0;
  order.forEach((type, i) => {
    const Comp = SECTION_COMPONENTS[type];
    if (!Comp) return;
    const isSolid = SOLID.has(type);
    const bg = isSolid ? (solid % 2 === 0 ? ELEV : INK) : "";
    if (isSolid) solid += 1;
    nodes.push(<Comp key={`${type}-${i}`} {...shared} bg={bg} />);
    // Pin the (non-block) Testimonials section right after Network.
    if (type === "network") nodes.push(<Testimonials key={`stories-${i}`} {...shared} bg="" />);
  });
  // If Network was removed, keep Testimonials from vanishing — render it last.
  if (!order.includes("network")) nodes.push(<Testimonials key="stories-end" {...shared} bg="" />);

  return (
    <main className="min-h-screen bg-ink font-sans text-white">
      <GlassNav accent={ac} />
      {nodes}
      <LuxeFooter accent={ac} />
    </main>
  );
}
