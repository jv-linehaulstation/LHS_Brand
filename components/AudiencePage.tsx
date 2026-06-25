import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import ParallaxImage from "@/components/motion/ParallaxImage";
import { PrimaryCTA, GhostCTA } from "@/components/CTA";
import { SectionHead, StatusChip, DataTag, CoinImage, ChromeFrame, Coin } from "@/components/Bits";
import { BuildVsBelong, RelayDiagram, Timeline, SoloVsRelay } from "@/components/Signatures";
import RenderingsGallery from "@/components/RenderingsGallery";
import { RENDER_GROUPS } from "@/lib/renderGroups";
import LaneConnector from "@/components/LaneConnector";
import HowItWorks, { type Step } from "@/components/HowItWorks";
import JoinForm from "@/components/JoinForm";
import OneHomeCalculator from "@/components/calculators/OneHomeCalculator";
import FlexSpaceCalculator from "@/components/calculators/FlexSpaceCalculator";
import { audiences, AudienceKey, PHOTOS } from "@/lib/audiences";
import { site } from "@/lib/site";

export default function AudiencePage({ audience }: { audience: AudienceKey }) {
  const a = audiences[audience];
  const ac = a.accent;
  const hasCalc = audience === "drivers" || audience === "carriers";

  // Minted program coin — OneHome on Drivers, FlexSpace on Carriers.
  const programCoin =
    audience === "drivers"
      ? "/assets/coin-onehome.png"
      : audience === "carriers"
      ? "/assets/coin-flexspace.png"
      : null;

  // Map this lane's "how it works" steps onto the shared pinned HowItWorks module.
  const HOW_IMAGES = [PHOTOS.buildingExterior, PHOTOS.fleetFuel, PHOTOS.crossDock, PHOTOS.skydeck, PHOTOS.truckSunset];
  const howSteps: Step[] = a.how.steps.map((st, i) => ({
    n: String(i + 1).padStart(3, "0"),
    t: st.title,
    d: st.blurb,
    img: HOW_IMAGES[i % HOW_IMAGES.length],
  }));

  return (
    <main className="min-h-screen bg-ink">
      <Nav accent={ac} active={a.key} />

      {/* ============================ HERO — full-bleed, bottom-anchored ============================ */}
      <section className="relative flex min-h-[92dvh] items-end overflow-hidden px-[clamp(20px,6vw,100px)] pb-14 pt-28">
        <ParallaxImage src={a.heroImage} alt={`${a.navLabel} — LineHaul Station`} priority strength={0.24} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.96)_0%,rgba(11,11,11,0.72)_55%,rgba(11,11,11,0.4)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,11,11,0.94),transparent_52%)]" />
        <div className="blueprint pointer-events-none absolute inset-0 opacity-20" />
        {/* bottom fade into the dark post-hero section — matches the homepage hero */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,#0B0B0B,transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] overflow-hidden">
          <div className="scan-once h-full w-full" style={{ ["--ac" as string]: ac }} />
        </div>
        <div className="absolute right-3 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 font-mono text-[11px] tracking-[0.35em] text-chrome xl:block">
          LANE · {a.navLabel.toUpperCase()}
        </div>

        <div className="relative w-full">
          {programCoin && (
            <Reveal className="mb-6">
              <CoinImage
                src={programCoin}
                alt={`${audience === "drivers" ? "OneHome" : "FlexSpace"} challenge coin`}
                size={112}
                glow={`${ac}55`}
              />
            </Reveal>
          )}
          <Reveal>
            <StatusChip chrome label="West Memphis Hub — Open Now" coord="I-40 / I-55" accent={ac} />
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

      {/* ============ POST-HERO (ink) — hero fade → calculator + counters (drivers/carriers)
           or a quiet stats beat (others); the same "hero → dark numbers" beat everywhere ============ */}
      {hasCalc ? (
        <Section variant="ink" className="py-[clamp(44px,7vh,96px)]">
          <div className="grid gap-[clamp(28px,4vw,56px)] lg:grid-cols-[1.32fr_0.68fr] lg:items-start">
            {/* left — the calculator */}
            <div>
              {audience === "drivers" ? <OneHomeCalculator accent={ac} /> : <FlexSpaceCalculator accent={ac} />}
            </div>
            {/* right — the counter numbers (the former stat console) */}
            <div className="lg:sticky lg:top-28">
              <DataTag accent={ac} className="font-label !text-[10px] uppercase tracking-[0.2em]">
                <span className="pulse-dot inline-block h-2 w-2 rounded-full" style={{ background: ac, color: ac }} /> The Numbers
              </DataTag>
              <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-[8px] border border-chrome/12 bg-chrome/10 lg:grid-cols-1">
                {a.stats.map((s, i) => (
                  <Reveal key={i} delay={i * 80} className="bg-ink px-5 py-6">
                    <CountUp value={s.big} style={{ color: ac }} className="tnum font-display text-[clamp(28px,3.4vw,44px)] font-black leading-none" />
                    <div className="mt-2 font-body text-[13px] leading-snug text-chrome">{s.label}</div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Section>
      ) : (
        <Section variant="ink" className="py-[clamp(44px,7vh,96px)]">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[8px] border border-chrome/12 bg-chrome/10 lg:grid-cols-4">
            {a.stats.map((s, i) => (
              <Reveal key={i} delay={i * 80} className="flex min-h-[150px] flex-col justify-between bg-ink p-[clamp(20px,2.4vw,36px)]">
                <CountUp value={s.big} style={{ color: ac }} className="tnum font-display text-[clamp(30px,3.8vw,52px)] font-black leading-none" />
                <div className="mt-5 font-body text-[14px] leading-snug text-chrome">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* ========================= PROBLEM (white) — editorial split ========================= */}
      <Section variant="light" id="problem" className="py-[clamp(70px,11vh,140px)]">
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <SectionHead kicker={a.problem.kicker} title={a.problem.headline} accent={ac} size="xl" tone="onLight" />
            <Reveal delay={120}>
              <p className="mt-7 max-w-[54ch] text-pretty font-body text-[clamp(18px,1.9vw,22px)] leading-relaxed text-[#3a3733]">
                {a.problem.body}
              </p>
            </Reveal>
          </div>
          <Reveal delay={140} dir="right" className="rounded-card border border-[#E2DDD6] bg-white p-7 sm:p-9 lg:-mt-6">
            {a.problem.counters.map((c, i) => (
              <div key={i} className="flex items-baseline gap-6 border-t border-[#E2DDD6] py-5 first:border-t-0 first:pt-0">
                <CountUp
                  value={c.big}
                  style={{ color: ac }}
                  className="tnum min-w-[120px] font-display text-[clamp(30px,4vw,42px)] font-black leading-none"
                />
                <span className="font-body text-[15px] leading-snug text-[#6a655e]">{c.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* ===================== SIGNATURE BAND (blueprint) ===================== */}
      {a.ledger && (
        <Section variant="blueprint" className="py-[clamp(70px,11vh,140px)]">
          <BuildVsBelong data={a.ledger} accent={ac} />
        </Section>
      )}
      {a.lanes && (
        <Section variant="blueprint" className="py-[clamp(70px,11vh,140px)]">
          <RelayDiagram data={a.lanes} accent={ac} />
        </Section>
      )}
      {a.timeline && (
        <Section variant="blueprint" className="py-[clamp(70px,11vh,140px)]">
          <Timeline data={a.timeline} accent={ac} />
        </Section>
      )}

      {/* ===================== ROAD DIVIDER (image) ===================== */}
      <section className="relative overflow-hidden px-[clamp(20px,6vw,100px)] py-[clamp(96px,14vw,140px)] text-center">
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

      {/* ===================== HOW IT WORKS — pinned scroll-driven (shared) ===================== */}
      <HowItWorks steps={howSteps} accent={ac} kicker={a.how.eyebrow} title={a.how.headline} />

      {/* ============ OUTRIDERS STORY (image) — drivers: "Welcome to the Club" ============ */}
      {a.outriders && (
        <Section variant="image" image={a.outriders.story.image} accent={ac} className="py-[clamp(80px,12vh,160px)]">
          <Reveal className="max-w-3xl">
            <CoinImage src="/assets/coin-outriders.png" alt="Outriders Club challenge coin" size={92} glow={`${ac}55`} className="mb-6" />
            <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: ac }}>
              {a.outriders.story.eyebrow}
            </div>
            <h2 className="mt-4 text-balance font-display text-[clamp(34px,5.6vw,84px)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">
              {a.outriders.story.headline}
            </h2>
            <div className="mt-7 space-y-5 font-body text-[clamp(16px,1.7vw,20px)] leading-relaxed text-[#e2e2e2]">
              {a.outriders.story.paras.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </Section>
      )}

      {/* ============ SOLO vs RELAY (blueprint) — carriers & government ============ */}
      {a.relay && (
        <Section variant="blueprint" className="py-[clamp(70px,11vh,140px)]">
          <SoloVsRelay data={a.relay} accent={ac} />
        </Section>
      )}

      {/* ============ CAPABILITIES / AMENITIES (ink) ============ */}
      {a.amenities ? (
        <Section variant="light" className="py-[clamp(70px,11vh,140px)]">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <SectionHead kicker={a.amenities.eyebrow} title={a.amenities.headline} accent={ac} size="xl" tone="onLight" />
            <Reveal delay={120}>
              {audience === "drivers" && (
                <CoinImage
                  src="/assets/coin-outriders.png"
                  alt="Outriders Club challenge coin"
                  size={96}
                  glow="rgba(200,160,96,0.45)"
                  className="mb-5"
                />
              )}
              <p className="text-pretty font-body text-[clamp(18px,1.9vw,21px)] leading-relaxed text-[#3a3733]">{a.amenities.intro}</p>
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
        <Section variant="light" className="py-[clamp(70px,11vh,140px)]">
          <SectionHead kicker={a.featuresEyebrow} title={a.featuresTitle} accent={ac} size="xl" tone="onLight" />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {a.features.map((f, i) => (
              <Reveal
                key={i}
                delay={(i % 2) * 80}
                className="lift group rounded-card border border-[#E2DDD6] bg-white p-6 sm:p-7"
              >
                <div className="flex items-start gap-5">
                  <span className="tnum mt-1 font-mono text-[14px]" style={{ color: ac }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <div className="font-display text-[19px] font-extrabold uppercase tracking-[0.01em] text-ink">
                        {f.title}
                      </div>
                      <div className="font-mono text-[11px]" style={{ color: ac }}>{f.tag}</div>
                    </div>
                    <p className="mt-3 font-body text-[15px] leading-relaxed text-[#6a655e]">{f.blurb}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* ============ OUTRIDERS SERVICES MENU (ink) — recreated from the image menu ============ */}
      {a.outriders && (
        <Section variant="ink" className="py-[clamp(70px,11vh,140px)]">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <SectionHead kicker={a.outriders.services.eyebrow} title={a.outriders.services.headline} accent={ac} size="xl" />
            <Reveal delay={120}>
              <p className="text-pretty font-body text-[clamp(17px,1.8vw,20px)] leading-relaxed text-[#dadada]">
                {a.outriders.services.intro}
              </p>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[8px] border border-chrome/12 bg-chrome/10 sm:grid-cols-2 lg:grid-cols-3">
            {a.outriders.services.items.map((it, i) => (
              <Reveal key={it.name} delay={(i % 3) * 60} className="bg-ink p-6">
                <div className="flex items-baseline gap-3">
                  <span className="h-1.5 w-1.5 flex-none translate-y-[-2px] rounded-full" style={{ background: ac }} aria-hidden />
                  <div className="font-display text-[16px] font-extrabold uppercase tracking-[0.01em] text-white">{it.name}</div>
                </div>
                <p className="mt-2 pl-[18px] font-body text-[14px] leading-snug text-chrome">{it.note}</p>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* ============ LH FLEET SERVICES (white) — "An Ounce Of Prevention" ============ */}
      {a.outriders && (
        <Section variant="light" className="py-[clamp(70px,11vh,140px)]">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <SectionHead kicker={a.outriders.fleet.eyebrow} title={a.outriders.fleet.headline} accent={ac} size="xl" tone="onLight" />
            <Reveal delay={120}>
              <p className="text-pretty font-body text-[clamp(17px,1.8vw,20px)] leading-relaxed text-[#3a3733]">
                {a.outriders.fleet.intro}
              </p>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {a.outriders.fleet.items.map((it, i) => (
              <Reveal key={it.name} delay={(i % 3) * 60} className="lift rounded-card border border-[#E2DDD6] bg-white p-6">
                <div className="flex items-baseline gap-3">
                  <span className="tnum font-mono text-[13px]" style={{ color: ac }}>{String(i + 1).padStart(2, "0")}</span>
                  <div className="font-display text-[16px] font-extrabold uppercase tracking-[0.01em] text-ink">{it.name}</div>
                </div>
                <p className="mt-2 pl-[26px] font-body text-[14px] leading-snug text-[#6a655e]">{it.note}</p>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* ===================== TAKE THE TOUR — GALLERY (ink) ===================== */}
      {a.gallery && a.gallery.length > 0 && (
        <Section variant="ink" className="py-[clamp(70px,11vh,140px)]">
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

      {/* ============ JOIN FREE (white) — 3-step membership + 3 ways to get Space ============ */}
      {a.outriders && (
        <Section variant="light" className="py-[clamp(70px,11vh,140px)]">
          <SectionHead kicker={a.outriders.join.eyebrow} title={a.outriders.join.headline} accent={ac} size="xl" tone="onLight" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {a.outriders.join.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80} className="rounded-card border border-[#E2DDD6] bg-white p-7">
                <Coin tone="fuel" size={46}>{String(i + 1).padStart(2, "0")}</Coin>
                <div className="mt-4 font-display text-[18px] font-extrabold uppercase tracking-[0.01em] text-ink">{s.title}</div>
                <p className="mt-2 font-body text-[14px] leading-relaxed text-[#6a655e]">{s.blurb}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <Reveal>
              <h3 className="font-display text-[clamp(22px,3vw,34px)] font-black uppercase leading-tight text-ink">
                {a.outriders.join.waysTitle}
              </h3>
            </Reveal>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {a.outriders.join.ways.map((w, i) => (
                <Reveal key={w.title} delay={i * 80} className="lift rounded-card border border-[#E2DDD6] bg-white p-7">
                  <Coin tone={w.tone} size={44}>{String(i + 1).padStart(2, "0")}</Coin>
                  <div className="mt-4 font-display text-[18px] font-extrabold uppercase tracking-[0.01em] text-ink">{w.title}</div>
                  <p className="mt-2 font-body text-[14px] leading-relaxed text-[#6a655e]">{w.blurb}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120} className="mt-10">
            <a
              href="/join"
              className="group inline-flex items-center gap-2.5 rounded-btn px-[30px] py-[17px] font-label text-[12px] uppercase tracking-[0.16em] text-ink shadow-[0_14px_30px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-0.5 hover:brightness-[1.06] active:scale-[0.97]"
              style={{ background: `linear-gradient(135deg, ${ac}, ${a.accentDark})` }}
            >
              Join Free.
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </Reveal>
        </Section>
      )}

      {/* ===================== WEST MEMPHIS (image) ===================== */}
      <Section variant="image" image={a.memphisImage} accent={ac} className="py-[clamp(70px,11vh,140px)]">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Reveal>
            <SectionHead kicker={a.memphis.kicker} title={a.memphis.headline} accent={ac} size="xl" />
            <p className="mt-6 max-w-[54ch] text-pretty font-body text-[clamp(18px,1.9vw,21px)] leading-relaxed text-[#e2e2e2]">
              {a.memphis.body}
            </p>
            <div className="mt-7 grid grid-cols-3 gap-3">
              {a.memphis.stats.map((s, i) => (
                <Reveal key={i} delay={i * 80} className="rounded-card border border-chrome/20 bg-ink/60 px-4 py-4 backdrop-blur">
                  <CountUp value={s.big} className="tnum font-display text-[clamp(18px,2.2vw,24px)] font-black leading-none text-white" />
                  <div className="mt-1.5 font-mono text-[11px] text-chrome">{s.label}</div>
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal delay={160} dir="right" className="chrome-frame glint">
            <div className="bg-ink/85 p-7 backdrop-blur">
              <div className="font-label text-[10px] uppercase tracking-[0.2em]" style={{ color: ac }}>
                The First Hub
              </div>
              <div className="mt-3 font-display text-[30px] font-black uppercase leading-none text-white">
                {a.memphis.address}
              </div>
              <div className="tnum mt-1.5 font-mono text-[13px] text-chrome">{a.memphis.addressSub}</div>
              <div className="chrome-rule mt-5" />
              <div className="mt-5">
                <StatusChip chrome label="Live now" coord="35.14°N / 90.18°W" accent={ac} />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ===================== ONE NETWORK — lane connector (blueprint) ===================== */}
      <Section variant="blueprint" className="py-[clamp(70px,11vh,140px)]">
        <LaneConnector current={a.key} accent={ac} />
      </Section>

      {/* ============ MONTHLY WEBINARS (ink) — drivers: "We're Ready To Roll" ============ */}
      {a.outriders && (
        <Section variant="ink" className="py-[clamp(56px,9vh,110px)]">
          <ChromeFrame glint>
            <div className="grid items-center gap-8 bg-ink/80 p-8 backdrop-blur sm:p-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: ac }}>
                  {a.outriders.webinar.eyebrow}
                </div>
                <h2 className="mt-4 text-balance font-display text-[clamp(28px,3.6vw,52px)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-white">
                  {a.outriders.webinar.headline}
                </h2>
              </div>
              <Reveal delay={120}>
                <p className="text-pretty font-body text-[clamp(16px,1.7vw,20px)] leading-relaxed text-[#dadada]">
                  {a.outriders.webinar.body}
                </p>
              </Reveal>
            </div>
          </ChromeFrame>
        </Section>
      )}

      {/* ===================== LET'S TALK (gradient) — content + contact left, form right ===================== */}
      <Section variant="gradient" accent={ac} id="contact" className="py-[clamp(70px,11vh,140px)]">
        <div className="grid gap-[clamp(28px,4vw,64px)] lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* content + contact info (left) */}
          <div className="lg:sticky lg:top-28">
            <SectionHead kicker={a.form.eyebrow} title={a.form.headline} accent={ac} size="xl" maxW="max-w-full" />
            <Reveal delay={100}>
              <p className="mt-5 max-w-[44ch] text-pretty font-body text-[clamp(16px,1.6vw,20px)] leading-relaxed text-[#dadada]">
                {a.form.body}
              </p>
            </Reveal>
            <Reveal delay={140}>
              <ChromeFrame className="mt-9">
                <div className="grid grid-cols-1 gap-px overflow-hidden bg-chrome/10 sm:grid-cols-3 lg:grid-cols-1">
                  <a href={site.phoneHref} className="bg-ink/80 p-5 backdrop-blur transition-colors hover:bg-ink/95">
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: ac }}>Call</div>
                    <div className="tnum mt-2 font-mono text-[15px] text-white">{site.phone}</div>
                  </a>
                  <a href={site.emailHref} className="bg-ink/80 p-5 backdrop-blur transition-colors hover:bg-ink/95">
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: ac }}>Email</div>
                    <div className="mt-2 break-words font-mono text-[15px] text-white">{site.email}</div>
                  </a>
                  <div className="bg-ink/80 p-5 backdrop-blur">
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: ac }}>Visit</div>
                    <div className="mt-2 font-mono text-[15px] text-white">West Memphis, AR</div>
                    <div className="mt-1 font-mono text-[12px] text-chrome">{site.domainLabel}</div>
                  </div>
                </div>
              </ChromeFrame>
            </Reveal>
          </div>

          {/* form (right) */}
          <Reveal delay={120} dir="right">
            <JoinForm accent={ac} accentDark={a.accentDark} />
          </Reveal>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
