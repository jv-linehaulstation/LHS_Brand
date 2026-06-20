import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { PrimaryCTA, GhostCTA } from "@/components/CTA";
import { audiences, AudienceKey } from "@/lib/audiences";

/**
 * Shared landing-page template (Hero → Stats → Value → Features → Closer),
 * driven entirely by audience data. Mirrors the Brand System "Landing Pages"
 * artifact. The accent re-tints the whole page per audience.
 */
export default function AudiencePage({ audience }: { audience: AudienceKey }) {
  const a = audiences[audience];

  return (
    <main className="min-h-screen bg-ink">
      <Nav accent={a.accent} active={a.key} />

      {/* HERO */}
      <section className="relative flex min-h-[620px] items-center overflow-hidden px-5 py-20 sm:px-8">
        <Image
          src="/assets/site-rendering.jpg"
          alt="LineHaul Station terminal"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.96)_0%,rgba(11,11,11,0.82)_46%,rgba(11,11,11,0.45)_100%)]" />
        <div
          className="absolute inset-x-0 top-0 h-[3px]"
          style={{ background: `linear-gradient(90deg, ${a.accent}, transparent)` }}
        />
        <div className="relative mx-auto w-full max-w-site">
          <div className="max-w-[760px]">
            <div
              className="mb-5 font-label text-[12px] uppercase tracking-[0.28em]"
              style={{ color: a.accent }}
            >
              {a.eyebrow}
            </div>
            <h1 className="text-balance font-display text-[clamp(38px,6vw,78px)] font-black uppercase leading-[0.94] tracking-[-0.015em] text-white">
              {a.headline}
            </h1>
            <div
              className="mt-4 font-script text-[clamp(22px,3vw,34px)] font-semibold"
              style={{ color: a.accent }}
            >
              {a.sub}
            </div>
            <p className="mt-5 max-w-[600px] font-body text-[clamp(16px,1.7vw,20px)] leading-relaxed tracking-[0.01em] text-[#d8d8d8]">
              {a.desc}
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <PrimaryCTA accent={a.accent} accentDark={a.accentDark} />
              <GhostCTA accent={a.accent} />
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="grid grid-cols-2 border-b border-chrome/15 bg-ink2 md:grid-cols-4">
        {a.stats.map((s, i) => (
          <div key={i} className="border-r border-chrome/10 px-6 py-[30px]">
            <div
              className="font-display text-[clamp(28px,3.4vw,40px)] font-black leading-none"
              style={{ color: a.accent }}
            >
              {s.big}
            </div>
            <div className="mt-2.5 font-body text-[14px] leading-snug text-chrome">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* VALUE */}
      <section className="mx-auto max-w-site px-5 pb-10 pt-[84px] sm:px-8">
        <div className="grid items-center gap-12 md:grid-cols-[1.3fr_1fr]">
          <div>
            <div
              className="mb-4 font-label text-[11px] uppercase tracking-[0.24em]"
              style={{ color: a.accent }}
            >
              {a.valueEyebrow}
            </div>
            <h2 className="text-balance font-display text-[clamp(28px,4vw,46px)] font-black uppercase leading-[1.02] tracking-[-0.01em] text-white">
              {a.valueHeadline}
            </h2>
            <p className="mt-5 font-body text-[18px] leading-relaxed tracking-[0.01em] text-[#d8d8d8]">
              {a.valueBody}
            </p>
          </div>
          <div className="frame">
            <div className="bg-panel p-[30px]">
              {a.valuePoints.map((pt, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3.5 border-b border-chrome/10 py-3.5 last:border-b-0"
                >
                  <span className="mt-0.5 font-mono text-[15px]" style={{ color: a.accent }}>
                    →
                  </span>
                  <span className="font-body text-[16px] leading-snug text-[#d8d8d8]">
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-site px-5 pb-[84px] pt-[60px] sm:px-8">
        <div
          className="mb-3.5 font-label text-[11px] uppercase tracking-[0.24em]"
          style={{ color: a.accent }}
        >
          {a.featuresEyebrow}
        </div>
        <h2 className="mb-10 font-display text-[clamp(28px,4vw,46px)] font-black uppercase tracking-[-0.01em] text-white">
          {a.featuresTitle}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {a.features.map((f, i) => (
            <div
              key={i}
              className="rounded-card border border-chrome/15 bg-panel p-7 transition-colors hover:bg-[#181818]"
              style={{ borderTop: `2px solid ${a.accent}` }}
            >
              <div className="font-display text-[19px] font-extrabold uppercase tracking-[0.01em] text-white">
                {f.title}
              </div>
              <div
                className="mt-2 font-label text-[9px] uppercase tracking-[0.16em]"
                style={{ color: a.accent }}
              >
                {f.tag}
              </div>
              <p className="mt-3.5 font-body text-[15px] leading-relaxed text-chrome">
                {f.blurb}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Contact
        headline={a.closerHeadline}
        body={a.closerBody}
        accent={a.accent}
        accentDark={a.accentDark}
      />
      <Footer />
    </main>
  );
}
