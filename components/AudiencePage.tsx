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

      {/* ============================ HERO (image board) ============================ */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden px-5 py-28 sm:px-8">
        <ParallaxImage src={a.heroImage} alt={`${a.navLabel} — LineHaul Station`} priority strength={0.22} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.97)_0%,rgba(11,11,11,0.84)_48%,rgba(11,11,11,0.45)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,11,11,0.82),transparent_42%)]" />
        <div className="blueprint pointer-events-none absolute inset-0 opacity-20" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] overflow-hidden">
          <div className="scan-once h-full w-full" style={{ ["--ac" as string]: ac }} />
        </div>
        <DataTag className="absolute left-5 top-24 hidden sm:left-8 lg:block">
          LANE · {a.navLabel.toUpperCase()}
        </DataTag>

        <div className="relative mx-auto w-full max-w-site">
          <div className="max-w-[860px]">
            <Reveal>
              <StatusChip label="West Memphis Hub — Open Now" coord="I-40 / I-55" accent={ac} />
            </Reveal>
            <Reveal delay={70}>
              <div className="mt-7 font-label text-[clamp(10px,1.3vw,13px)] uppercase tracking-[0.26em] text-chrome">
                {a.eyebrow}
              </div>
            </Reveal>
            <Reveal delay={130}>
              <h1 className="mt-3 text-balance font-display text-[clamp(36px,5.6vw,76px)] font-black uppercase leading-[0.94] tracking-[-0.02em] text-white">
                {a.heroPunch}
              </h1>
            </Reveal>
            <Reveal delay={210}>
              <div className="mt-4 font-script text-[clamp(22px,3vw,38px)] font-semibold" style={{ color: ac }}>
                {a.sub}
              </div>
            </Reveal>
            <Reveal delay={280}>
              <p className="mt-6 max-w-[620px] text-pretty font-body text-[clamp(16px,1.7vw,20px)] leading-relaxed text-[#dadada]">
                {a.desc}
              </p>
            </Reveal>
            <Reveal delay={350}>
              <div className="mt-8 flex flex-wrap gap-3.5">
                <PrimaryCTA accent={ac} accentDark={a.accentDark} />
                <GhostCTA accent={ac} />
              </div>
            </Reveal>
            <Reveal delay={410}>
              <p className="tnum mt-6 font-mono text-[12px] text-chrome">{a.heroNote}</p>
            </Reveal>
          </div>
        </div>
        <a
          href="#problem"
          className="absolute inset-x-0 bottom-6 mx-auto flex w-fit items-center gap-2 font-label text-[10px] uppercase tracking-[0.2em] text-chrome transition-colors hover:text-white"
        >
          <span className="inline-block animate-bounce">↓</span> {a.scrollHint}
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
              <CountUp value={s.big} style={{ color: ac }} className="font-display text-[clamp(28px,3.4vw,44px)] font-black leading-none" />
              <div className="mt-3 font-body text-[14px] leading-snug text-chrome">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ========================= PROBLEM (ink) — editorial split ========================= */}
      <Section variant="ink" id="problem" className="py-[clamp(72px,10vw,116px)]">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHead index="01" kicker={a.problem.kicker} title={a.problem.headline} accent={ac} />
            <Reveal delay={120}>
              <p className="mt-6 max-w-[520px] text-pretty font-body text-[18px] leading-relaxed text-[#dadada]">
                {a.problem.body}
              </p>
            </Reveal>
          </div>
          <Reveal delay={140} dir="right" className="frame">
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
        <Reveal className="relative mx-auto max-w-2xl">
          <div className="font-label text-[10px] uppercase tracking-[0.24em]" style={{ color: ac }}>
            {a.road.eyebrow}
          </div>
          <h2 className="mt-4 text-balance font-display text-[clamp(30px,5.2vw,60px)] font-black uppercase leading-[0.96] tracking-[-0.02em] text-white">
            {a.road.headline}
          </h2>
          <p className="mt-4 font-script text-[clamp(20px,3vw,32px)] font-semibold text-white/90">
            {a.road.sub}
          </p>
        </Reveal>
      </section>

      {/* ===================== HOW IT WORKS (carbon) — sequence ===================== */}
      <Section variant="carbon" className="py-[clamp(72px,9vw,108px)]">
        <SectionHead index="02" kicker={a.how.eyebrow} title={a.how.headline} accent={ac} />
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
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <SectionHead index="03" kicker={a.amenities.eyebrow} title={a.amenities.headline} accent={ac} />
            <Reveal delay={120}>
              <p className="text-pretty font-body text-[18px] leading-relaxed text-[#dadada]">{a.amenities.intro}</p>
            </Reveal>
          </div>
          {/* resort mosaic — first tile hero, one wide tile for rhythm */}
          <div className="mt-9 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[175px] md:grid-cols-4">
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
          <SectionHead index="03" kicker={a.featuresEyebrow} title={a.featuresTitle} accent={ac} />
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
            index="05"
            kicker="Take the Tour"
            title={a.galleryTitle ?? "See The Build."}
            accent={ac}
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
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Reveal>
            <SectionHead index="04" kicker={a.memphis.kicker} title={a.memphis.headline} accent={ac} />
            <p className="mt-5 max-w-[560px] text-pretty font-body text-[18px] leading-relaxed text-[#e2e2e2]">
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
