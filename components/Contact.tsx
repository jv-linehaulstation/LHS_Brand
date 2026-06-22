import { site } from "@/lib/site";
import Reveal from "@/components/motion/Reveal";
import { StatusChip } from "@/components/Bits";

/** Closer / contact band — accent bloom with the two approved CTAs. */
export default function Contact({
  headline,
  body,
  accent = "#F07820",
  accentDark = "#C85A12",
}: {
  headline: string;
  body: string;
  accent?: string;
  accentDark?: string;
}) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-[clamp(72px,9vw,116px)] sm:px-8"
      style={{ background: `linear-gradient(160deg, ${accentDark}, #0B0B0B 72%)` }}
    >
      <div className="bloom" style={{ ["--bloom" as string]: `${accent}33` }} />
      <div className="blueprint pointer-events-none absolute inset-0 opacity-25" />
      <Reveal className="relative mx-auto max-w-site text-center">
        <div className="flex justify-center">
          <StatusChip label="West Memphis — Open" coord="35.14°N / 90.18°W" accent={accent} />
        </div>
        <h2 className="mx-auto mt-7 max-w-4xl text-balance font-display text-[clamp(30px,5.4vw,62px)] font-black uppercase leading-[0.98] tracking-[-0.02em] text-white">
          {headline}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty font-body text-[clamp(16px,1.7vw,20px)] leading-relaxed text-[#ededed]">
          {body}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3.5">
          <a
            href={site.connectHref}
            className="group inline-flex items-center gap-2.5 rounded-btn bg-white px-8 py-[18px] font-label text-[12px] uppercase tracking-[0.16em] text-ink transition hover:brightness-95"
          >
            Connect With Us
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2.5 rounded-btn border border-white/40 bg-black/35 px-8 py-[18px] font-label text-[12px] uppercase tracking-[0.16em] text-white transition hover:border-white"
          >
            Schedule a Call
          </a>
        </div>
        <div className="tnum mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 font-mono text-[13px] text-[#e6e6e6]">
          <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
          <span className="text-white/40">·</span>
          <a href={site.emailHref} className="hover:text-white">{site.email}</a>
          <span className="text-white/40">·</span>
          <span>{site.domainLabel}</span>
        </div>
      </Reveal>
    </section>
  );
}
