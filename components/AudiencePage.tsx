import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import ParallaxImage from "@/components/motion/ParallaxImage";
import { PrimaryCTA, GhostCTA } from "@/components/CTA";
import { SectionHead, StatusChip, DataTag } from "@/components/Bits";
import { BuildVsBelong, RelayDiagram, Timeline, SoloVsRelay } from "@/components/Signatures";
import RenderingsGallery from "@/components/RenderingsGallery";
import { RENDER_GROUPS } from "@/lib/renderGroups";
import LaneConnector from "@/components/LaneConnector";
import LeadForm from "@/components/LeadForm";
import OneHomeCalculator from "@/components/calculators/OneHomeCalculator";
import FlexSpaceCalculator from "@/components/calculators/FlexSpaceCalculator";
import { audiences, AudienceKey, PHOTOS } from "@/lib/audiences";

export default function AudiencePage({ audience }: { audience: AudienceKey }) {
  const a = audiences[audience];
  const ac = a.accent;
  const hasCalc = audience === "drivers" || audience === "carriers";

  return (
    <main className="min-h-screen bg-ink">
      <Nav accent={ac} active={a.key} />

      {/* ============================ HERO — full-bleed, bottom-anchored ============================ */}
      <section className="relative flex min-h-[92dvh] items-end overflow-hidden px-5 pb-14 pt-28 sm:px-8">
        <ParallaxImage src={a.heroImage} alt={`${a.navLabel} — LineHaul Station`} priority strength={0.24} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.96)_0%,rgba(11,11,11,0.72)_55%,rgba(11,11,11,0.4)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,11,11,0.94),transparent_52%)]" />
        <div className="blueprint pointer-events-none absolute inset-0 opacity-20" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] overflow-hidden">
          <div className="scan-once h-full w-full" style={{ ["--ac" as string]: ac }} />
        </div>
        <div className="absolute right-3 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 font-mono text-[11px] tracking-[0.35em] text-chrome xl:block">
          LANE · {a.navLabel.toUpperCase()}
        </div>

        <div className="relative mx-auto w-full max-w-site">
          <Reveal>
            <StatusChip label="West Memphis Hub — Open Now" coord="I-40 / I-55" accent={ac} />
          </Reveal>
          <Reveal delay={70}>
            <div className="mt-7 font-label text-[clamp(10px,1.3vw,14px)] uppercase tracking-[0.28em] text-chrome">
              {a.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={130}>
            <h1 className="mt-3 max-w-[16ch] text-balance font-display text-[clamp(36px,6.4vw,92px)] font-black uppercase leading-[0.9] tracking-[-0.025em] text-white">
              {a.heroPunch}
            </h1>
          </Reveal>
          <div className="mt-7 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <Reveal delay={230}>
              <div className="font-script text-[clamp(24px,3.4vw,44px)] font-semibold" style={{ color: ac }}>
                {a.sub}
              </div>
              <p className="mt-3 max-w-[52ch] text-pretty font-body text-[clamp(17px,1.8vw,21px)] leading-relaxed text-[#dadada]">
                {a.desc}
              </p>
            </Reveal>
            <Reveal delay={320} className="flex-shrink-0">
              <div className="flex flex-wrap gap-3.5">
                {audience === "drivers" ? (
                  <>
                    <a
                      href="/join"
                      className="group inline-flex items-center gap-2.5 rounded-btn px-[30px] py-[17px] font-label text-[12px] uppercase tracking-[0.16em] text-ink shadow-[0_14px_30px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-0.5 hover:brightness-[1.08] active:scale-[0.97]"
                      style={{ background: `linear-gradient(135deg, ${ac}, ${a.accentDark})` }}
                    >
                      Join Free.
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                    <GhostCTA accent={ac} />
                  </>
                ) : (
                  <>
                    <PrimaryCTA accent={ac} accentDark={a.accentDark} />
                    <GhostCTA accent={ac} />
                  </>
                )}
              </div>
              <p className="tnum mt-5 max-w-[34ch] font-mono text-[12px] leading-snug text-chrome">{a.heroNote}</p>
            </Reveal>
          </div>
        </div>
        <a
          href="#problem"
          className="absolute inset-x-0 bottom-5 mx-auto flex w-fit items-center gap-2 font-label text-[10px] uppercase tracking-[0.2em] text-chrome transition-colors hover:text-white"
        >
          <span className="scroll-nudge inline-block">↓</span> {a.scrollHint}
        </a>
      </section>

      {/* ====================== STAT CONSOLE (carbon) ====================== */}
      <Section variant="carbon" className="py-0">
        <div className="flex items-center justify-between border-b border-chrome/10 py-4">
          <DataTag accent={ac} className="font-label !text-[10px] uppercase tracking-[0.2em]">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full" style={{ background: ac, color: ac }} /> The Numbers
          </DataTag>
          <DataTag className="hidden sm:inline-flex">{a.navLabel.toUpperCase()} · LIVE</DataTag>
        </div>
        <div className="-mx-5 grid grid-cols-2 sm:-mx-8 md:grid-cols-4">
          {a.stats.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 70}
              className="border-b border-r border-chrome/10 px-6 py-9 last:border-r-0 md:border-b-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
            >
              <CountUp value={s.big} style={{ color: ac }} className="tnum font-display text-[clamp(32px,4vw,56px)] font-black leading-none" />
              <div className="mt-3 font-body text-[14px] leading-snug text-chrome">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ========================= PROBLEM (ink) — editorial split ========================= */}
      <Section variant="ink" id="problem" className="py-[clamp(72px,10vw,124px)]">
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <SectionHead kicker={a.problem.kicker} title={a.problem.headline} accent={ac} size="xl" />
            <Reveal delay={120}>
              <p className="mt-7 max-w-[54ch] text-pretty font-body text-[clamp(18px,1.9vw,22px)] leading-relaxed text-[#dadada]">
                {a.problem.body}
              </p>
            </Reveal>
          </div>
          <Reveal delay={140} dir="right" className="frame lg:-mt-6">
            <div className="bg-panel p-7 sm:p-9">
              {a.problem.counters.map((c, i) => (
                <div key={i} className="flex items-baseline gap-6 border-t border-chrome/10 py-5 first:border-t-0 first:pt-0">
                  <CountUp
                    value={c.big}
                    style={{ color: ac }}
                    className="tnum min-w-[120px] font-display text-[clamp(30px,4vw,42px)] font-black leading-none"
                  />
                  <span className="font-body text-[15px] leading-snug text-chrome">{c.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ===================== CALCULATOR (panel) — drivers & carriers ===================== */}
      {audience === "drivers" && (
        <Section variant="panel" className="py-2">
          <OneHomeCalculator accent={ac} />
        </Section>
      )}
      {audience === "carriers" && (
        <Section variant="panel" className="py-2">
          <FlexSpaceCalculator accent={ac} />
        </Section>
      )}

      {/* ===================== SIGNATURE BAND (blueprint) ===================== */}
      {a.ledger && (
        <Section variant="blueprint" className="py-[clamp(72px,10vw,112px)]">
          <BuildVsBelong data={a.ledger} accent={ac} />
        </Section>
      )}
      {a.lanes && (
        <Section variant="blueprint" className="py-[clamp(72px,10vw,112px)]">
          <RelayDiagram data={a.lanes} accent={ac} />
        </Section>
      )}
      {a.timeline && (
        <Section variant="blueprint" className="py-[clamp(72px,10vw,112px)]">
          <Timeline data={a.timeline} accent={ac} />
        </Section>
      )}

      {/* ===================== ROAD DIVIDER (image) ===================== */}
      <section className="relative overflow-hidden px-5 py-[clamp(96px,14vw,140px)] text-center sm:px-8">
        <ParallaxImage src={a.roadImage ?? PHOTOS.truckSunset} alt={`${a.navLabel} — LineHaul Station`} strength={0.28} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.6),rgba(11,11,11,0.84))]" />
        <Reveal className="relative mx-auto max-w-4xl">
          <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: ac }}>
            {a.road.eyebrow}
          </div>
          <h2 className="mt-5 text-balance font-display text-[clamp(36px,6.8vw,96px)] font-black uppercase leading-[0.9] tracking-[-0.025em] text-white">
            {a.road.headline}
          </h2>
          <p className="mt-5 font-script text-[clamp(22px,3.4vw,38px)] font-semibold text-white/90">
            {a.road.sub}
          </p>
        </Reveal>
      </section>

      {/* ===================== HOW IT WORKS (carbon) — sequence ===================== */}
      <Section variant="carbon" className="py-[clamp(72px,9vw,108px)]">
        <SectionHead kicker={a.how.eyebrow} title={a.how.headline} accent={ac} size="xl" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {a.how.steps.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 80}
              className="lift group relative overflow-hidden rounded-card border border-chrome/15 bg-panel p-6"
            >
              <span
                className="pointer-events-none absolute -right-2 -top-5 font-display text-[88px] font-black leading-none opacity-[0.07]"
                style={{ color: ac }}
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative">
                <div className="tnum font-mono text-[12px]" style={{ color: ac }}>
                  STEP {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-3 font-display text-[18px] font-extrabold uppercase leading-tight text-white">
                  {s.title}
                </div>
                <p className="mt-2.5 font-body text-[14px] leading-relaxed text-chrome">{s.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============ SOLO vs RELAY (panel) — carriers & government ============ */}
      {a.relay && (
        <Section variant="panel" className="py-[clamp(72px,10vw,108px)]">
          <SoloVsRelay data={a.relay} accent={ac} />
        </Section>
      )}

      {/* ============ CAPABILITIES / AMENITIES (ink) ============ */}
      {a.amenities ? (
        <Section variant="ink" className="py-[clamp(72px,10vw,112px)]">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <SectionHead kicker={a.amenities.eyebrow} title={a.amenities.headline} accent={ac} size="xl" />
            <Reveal delay={120}>
              <p className="text-pretty font-body text-[clamp(18px,1.9vw,21px)] leading-relaxed text-[#dadada]">{a.amenities.intro}</p>
            </Reveal>
          </div>
          {/* resort mosaic — first tile hero, one wide tile for rhythm */}
          <div className="mt-10 grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[212px] md:grid-cols-4">
            {a.amenities.tiles.map((t, i) => {
              const span =
                i === 0
                  ? "col-span-2 row-span-2"
                  : i === 5
                  ? "col-span-2"
                  : "col-span-1";
              return (
                <Reveal
                  key={i}
                  delay={(i % 4) * 60}
                  className={`group relative overflow-hidden rounded-card border border-chrome/15 ${span}`}
                >
                  <Image
                    src={t.img}
                    alt={t.title}
                    fill
                    className="img-grade object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.05),rgba(11,11,11,0.5)_55%,rgba(11,11,11,0.92))]" />
                  <div
                    className="absolute inset-x-0 top-0 h-0.5 opacity-70"
                    style={{ background: `linear-gradient(90deg, ${ac}, transparent)` }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className={`font-display font-extrabold uppercase leading-tight text-white ${i === 0 ? "text-[20px]" : "text-[15px]"}`}>
                      {t.title}
                    </div>
                    <p className="mt-1 font-body text-[13px] leading-snug text-[#dcdcdc]">{t.blurb}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={120}>
            <p className="mt-8 font-script text-[clamp(22px,3vw,34px)] font-semibold" style={{ color: ac }}>
              {a.amenities.footnote}
            </p>
          </Reveal>
        </Section>
      ) : (
        <Section variant="ink" className="py-[clamp(72px,10vw,112px)]">
          <SectionHead kicker={a.featuresEyebrow} title={a.featuresTitle} accent={ac} size="xl" />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {a.features.map((f, i) => (
              <Reveal
                key={i}
                delay={(i % 2) * 80}
                className="lift group rounded-card border border-chrome/15 bg-panel p-6 sm:p-7"
              >
                <div className="flex items-start gap-5">
                  <span className="tnum mt-1 font-mono text-[14px]" style={{ color: ac }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <div className="font-display text-[19px] font-extrabold uppercase tracking-[0.01em] text-white">
                        {f.title}
                      </div>
                      <div className="font-mono text-[11px]" style={{ color: ac }}>{f.tag}</div>
                    </div>
                    <p className="mt-3 font-body text-[15px] leading-relaxed text-chrome">{f.blurb}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* ===================== TAKE THE TOUR — GALLERY (carbon) ===================== */}
      {a.gallery && a.gallery.length > 0 && (
        <Section variant="carbon" className="py-[clamp(72px,10vw,112px)]">
          <SectionHead
            kicker="Take the Tour"
            title={a.galleryTitle ?? "See The Build."}
            accent={ac}
            size="xl"
          />
          <div className="mt-9">
            <RenderingsGallery
              groups={RENDER_GROUPS.filter((g) => a.gallery!.includes(g.key))}
              accent={ac}
            />
          </div>
        </Section>
      )}

      {/* ===================== WEST MEMPHIS (image) ===================== */}
      <Section variant="image" image={a.memphisImage} accent={ac} className="py-[clamp(80px,11vw,120px)]">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Reveal>
            <SectionHead kicker={a.memphis.kicker} title={a.memphis.headline} accent={ac} size="xl" />
            <p className="mt-6 max-w-[54ch] text-pretty font-body text-[clamp(18px,1.9vw,21px)] leading-relaxed text-[#e2e2e2]">
              {a.memphis.body}
            </p>
            <div className="mt-7 grid grid-cols-3 gap-3">
              {a.memphis.stats.map((s, i) => (
                <Reveal key={i} delay={i * 90} className="rounded-card border border-chrome/20 bg-ink/60 px-4 py-4 backdrop-blur">
                  <CountUp value={s.big} className="tnum font-display text-[clamp(18px,2.2vw,24px)] font-black leading-none text-white" />
                  <div className="mt-1.5 font-mono text-[11px] text-chrome">{s.label}</div>
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal delay={160} dir="right" className="frame">
            <div className="bg-ink/85 p-7 backdrop-blur">
              <div className="font-label text-[10px] uppercase tracking-[0.2em]" style={{ color: ac }}>
                The First Hub
              </div>
              <div className="mt-3 font-display text-[30px] font-black uppercase leading-none text-white">
                {a.memphis.address}
              </div>
              <div className="tnum mt-1.5 font-mono text-[13px] text-chrome">{a.memphis.addressSub}</div>
              <div className="mt-5 h-px bg-chrome/15" />
              <div className="mt-5">
                <StatusChip label="Live now" coord="35.14°N / 90.18°W" accent={ac} />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ===================== ONE NETWORK — lane connector (blueprint) ===================== */}
      <Section variant="blueprint" className="py-[clamp(64px,9vw,104px)]">
        <LaneConnector current={a.key} accent={ac} />
      </Section>

      {/* ===================== LEAD FORM (gradient) ===================== */}
      <Section variant="gradient" accent={ac} id="contact" className="py-[clamp(80px,11vw,116px)]">
        <LeadForm
          audienceKey={a.key}
          accent={ac}
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
