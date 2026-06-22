import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import ParallaxImage from "@/components/motion/ParallaxImage";
import { PrimaryCTA, GhostCTA } from "@/components/CTA";
import LeadForm from "@/components/LeadForm";
import OneHomeCalculator from "@/components/calculators/OneHomeCalculator";
import FlexSpaceCalculator from "@/components/calculators/FlexSpaceCalculator";
import { audiences, AudienceKey } from "@/lib/audiences";

/* small shared bits ------------------------------------------------------- */
function Eyebrow({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color }}>
      {children}
    </div>
  );
}

function SectionHead({
  eyebrow,
  title,
  accent,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  accent: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Eyebrow color={accent}>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-balance font-display text-[clamp(28px,4.2vw,50px)] font-black uppercase leading-[1.02] tracking-[-0.01em] text-white">
        {title}
      </h2>
    </Reveal>
  );
}

/* ------------------------------------------------------------------------- */
export default function AudiencePage({ audience }: { audience: AudienceKey }) {
  const a = audiences[audience];
  const hasCalc = audience === "drivers" || audience === "carriers";

  return (
    <main className="min-h-screen bg-ink">
      <Nav accent={a.accent} active={a.key} />

      {/* ============================ HERO (image) ============================ */}
      <section className="relative flex min-h-[86vh] items-center overflow-hidden px-5 py-28 sm:px-8">
        <ParallaxImage src={a.heroImage} alt={`${a.navLabel} — LineHaul Station`} priority strength={0.22} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.96)_0%,rgba(11,11,11,0.82)_48%,rgba(11,11,11,0.5)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
          <div
            className="h-[2px] w-full animate-scan opacity-70"
            style={{ background: `linear-gradient(90deg,transparent,${a.accent},transparent)` }}
          />
        </div>
        <div className="relative mx-auto w-full max-w-site">
          <div className="max-w-[820px]">
            <Reveal>
              <Eyebrow color={a.accent}>{a.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={70}>
              <h1 className="mt-5 text-balance font-display text-[clamp(38px,6vw,80px)] font-black uppercase leading-[0.92] tracking-[-0.015em] text-white">
                {a.heroPunch}
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-4 font-script text-[clamp(22px,3vw,36px)] font-semibold" style={{ color: a.accent }}>
                {a.sub}
              </div>
            </Reveal>
            <Reveal delay={210}>
              <p className="mt-5 max-w-[620px] font-body text-[clamp(16px,1.7vw,20px)] leading-relaxed text-[#d8d8d8]">
                {a.desc}
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-8 flex flex-wrap gap-3.5">
                <PrimaryCTA accent={a.accent} accentDark={a.accentDark} />
                <GhostCTA accent={a.accent} />
              </div>
            </Reveal>
            <Reveal delay={340}>
              <p className="mt-5 font-mono text-[12px] text-chrome">{a.heroNote}</p>
            </Reveal>
          </div>
        </div>
        <a
          href="#problem"
          className="absolute inset-x-0 bottom-6 mx-auto w-fit font-label text-[10px] uppercase tracking-[0.2em] text-chrome transition-colors hover:text-white"
        >
          ↓ {a.scrollHint}
        </a>
      </section>

      {/* ====================== STAT STRIP (carbon) ====================== */}
      <Section variant="carbon" className="py-0">
        <div className="-mx-5 grid grid-cols-2 sm:-mx-8 md:grid-cols-4">
          {a.stats.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 70}
              className="border-b border-r border-chrome/10 px-6 py-8 md:border-b-0"
            >
              <CountUp
                value={s.big}
                style={{ color: a.accent }}
                className="font-display text-[clamp(26px,3.2vw,40px)] font-black leading-none"
              />
              <div className="mt-2.5 font-body text-[14px] leading-snug text-chrome">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ========================= PROBLEM (ink) ========================= */}
      <Section variant="ink" id="problem" className="py-[92px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <Eyebrow color={a.accent}>{a.problem.kicker}</Eyebrow>
            <h2 className="mt-3 text-balance font-display text-[clamp(28px,4.2vw,50px)] font-black uppercase leading-[1.02] tracking-[-0.01em] text-white">
              {a.problem.headline}
            </h2>
            <p className="mt-5 max-w-[520px] font-body text-[18px] leading-relaxed text-[#d8d8d8]">
              {a.problem.body}
            </p>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-card bg-chrome/10">
            {a.problem.counters.map((c, i) => (
              <Reveal
                key={i}
                delay={i * 90}
                className="flex items-baseline gap-5 bg-panel px-7 py-7"
              >
                <CountUp
                  value={c.big}
                  style={{ color: a.accent }}
                  className="min-w-[110px] font-display text-[34px] font-black leading-none"
                />
                <span className="font-body text-[15px] leading-snug text-chrome">{c.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ===================== CALCULATOR (panel) ===================== */}
      {audience === "drivers" && (
        <Section variant="panel" className="py-2">
          <OneHomeCalculator accent={a.accent} />
        </Section>
      )}
      {audience === "carriers" && (
        <Section variant="panel" className="py-2">
          <FlexSpaceCalculator accent={a.accent} />
        </Section>
      )}

      {/* ===================== ROAD DIVIDER (image) ===================== */}
      <section className="relative overflow-hidden px-5 py-[120px] text-center sm:px-8">
        <ParallaxImage src="/assets/photos/road-sunset.jpg" alt="The open road" strength={0.28} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.62),rgba(11,11,11,0.82))]" />
        <Reveal className="relative mx-auto max-w-2xl">
          <Eyebrow color={a.accent}>{a.road.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-[clamp(30px,5vw,58px)] font-black uppercase leading-none tracking-[-0.01em] text-white">
            {a.road.headline}
          </h2>
          <p className="mt-4 font-script text-[clamp(20px,3vw,30px)] font-semibold text-white/90">
            {a.road.sub}
          </p>
        </Reveal>
      </section>

      {/* ===================== HOW IT WORKS (blueprint) ===================== */}
      <Section variant="blueprint" className="py-[92px]">
        <SectionHead eyebrow={a.how.eyebrow} title={a.how.headline} accent={a.accent} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {a.how.steps.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 80}
              className="rounded-card border border-chrome/15 bg-panel/80 p-6 backdrop-blur transition-colors hover:bg-panel"
            >
              <div className="font-mono text-[13px]" style={{ color: a.accent }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-3 font-display text-[18px] font-extrabold uppercase leading-tight text-white">
                {s.title}
              </div>
              <p className="mt-2.5 font-body text-[15px] leading-relaxed text-chrome">{s.blurb}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============ CAPABILITIES / AMENITIES (ink) ============ */}
      {a.amenities ? (
        <Section variant="ink" className="py-[92px]">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <SectionHead eyebrow={a.amenities.eyebrow} title={a.amenities.headline} accent={a.accent} />
            <Reveal delay={120}>
              <p className="font-body text-[18px] leading-relaxed text-[#d8d8d8]">{a.amenities.intro}</p>
            </Reveal>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {a.amenities.tiles.map((t, i) => (
              <Reveal
                key={i}
                delay={(i % 4) * 70}
                className="group relative overflow-hidden rounded-card border border-chrome/15"
                style={{ borderTopColor: a.accent, borderTopWidth: 2 }}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={t.img}
                    alt={t.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.05),rgba(11,11,11,0.55)_55%,rgba(11,11,11,0.9))]" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="font-display text-[16px] font-extrabold uppercase leading-tight text-white">
                      {t.title}
                    </div>
                    <p className="mt-1 font-body text-[13px] leading-snug text-[#dcdcdc]">{t.blurb}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="mt-7 font-script text-[clamp(22px,3vw,32px)] font-semibold" style={{ color: a.accent }}>
              {a.amenities.footnote}
            </p>
          </Reveal>
        </Section>
      ) : (
        <Section variant="ink" className="py-[92px]">
          <SectionHead eyebrow={a.featuresEyebrow} title={a.featuresTitle} accent={a.accent} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {a.features.map((f, i) => (
              <Reveal
                key={i}
                delay={(i % 3) * 80}
                className="rounded-card border border-chrome/15 bg-panel p-7 transition-colors hover:bg-[#181818]"
                style={{ borderTopColor: a.accent, borderTopWidth: 2 }}
              >
                <div className="font-display text-[19px] font-extrabold uppercase tracking-[0.01em] text-white">
                  {f.title}
                </div>
                <div className="mt-2 font-label text-[9px] uppercase tracking-[0.16em]" style={{ color: a.accent }}>
                  {f.tag}
                </div>
                <p className="mt-3.5 font-body text-[15px] leading-relaxed text-chrome">{f.blurb}</p>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* ===================== WEST MEMPHIS (image) ===================== */}
      <Section variant="image" image={a.memphisImage} accent={a.accent} className="py-[100px]">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Reveal>
            <Eyebrow color={a.accent}>{a.memphis.kicker}</Eyebrow>
            <h2 className="mt-3 text-balance font-display text-[clamp(28px,4.4vw,52px)] font-black uppercase leading-[1.04] tracking-[-0.01em] text-white">
              {a.memphis.headline}
            </h2>
            <p className="mt-5 max-w-[560px] font-body text-[18px] leading-relaxed text-[#e2e2e2]">
              {a.memphis.body}
            </p>
            <div className="mt-7 grid grid-cols-3 gap-3">
              {a.memphis.stats.map((s, i) => (
                <Reveal key={i} delay={i * 90} className="rounded-card border border-chrome/20 bg-ink/60 px-4 py-4 backdrop-blur">
                  <CountUp value={s.big} className="font-display text-[22px] font-black leading-none text-white" />
                  <div className="mt-1.5 font-mono text-[11px] text-chrome">{s.label}</div>
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal delay={160} dir="right" className="frame">
            <div className="bg-ink/85 p-7 backdrop-blur">
              <div className="font-label text-[10px] uppercase tracking-[0.2em]" style={{ color: a.accent }}>
                The First Hub
              </div>
              <div className="mt-3 font-display text-[30px] font-black uppercase leading-none text-white">
                {a.memphis.address}
              </div>
              <div className="mt-1.5 font-mono text-[13px] text-chrome">{a.memphis.addressSub}</div>
              <div className="mt-5 h-px bg-chrome/15" />
              <div className="mt-5 flex flex-wrap gap-2.5">
                <span className="rounded-btn px-3.5 py-2 font-mono text-[12px] text-ink" style={{ background: a.accent }}>
                  ● Live now
                </span>
                <span className="rounded-btn border border-chrome/25 bg-carbon px-3.5 py-2 font-mono text-[12px] text-[#d8d8d8]">
                  I-40 / I-55
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ===================== LEAD FORM (gradient) ===================== */}
      <Section variant="gradient" accent={a.accent} id="contact" className="py-[100px]">
        <LeadForm
          audienceKey={a.key}
          accent={a.accent}
          accentDark={a.accentDark}
          eyebrow={a.form.eyebrow}
          headline={a.form.headline}
          body={a.form.body}
          fields={a.form.fields}
          consent={a.form.consent}
          success={a.form.success}
        />
      </Section>

      <Footer />
    </main>
  );
}
