import { site } from "@/lib/site";

/** Closer / contact band — accent-tinted gradient with the two approved CTAs. */
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
      className="relative overflow-hidden px-5 py-[90px] sm:px-8"
      style={{ background: `linear-gradient(135deg, ${accentDark}, #0B0B0B 70%)` }}
    >
      <div className="pointer-events-none absolute inset-0 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.04)_0_1px,transparent_1px_60px)]" />
      <div className="relative mx-auto max-w-site text-center">
        <h2 className="text-balance font-display text-[clamp(30px,5vw,60px)] font-black uppercase leading-none tracking-[-0.01em] text-white">
          {headline}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl font-body text-[clamp(16px,1.7vw,20px)] leading-relaxed text-[#ededed]">
          {body}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3.5">
          <a
            href={site.connectHref}
            className="inline-flex items-center gap-2.5 rounded-btn bg-white px-8 py-[18px] font-label text-[12px] uppercase tracking-[0.16em] text-ink transition hover:brightness-95"
          >
            Connect With Us <span aria-hidden>→</span>
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2.5 rounded-btn border border-white/40 bg-black/35 px-8 py-[18px] font-label text-[12px] uppercase tracking-[0.16em] text-white transition hover:border-white"
          >
            Schedule a Call
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 font-mono text-[13px] text-[#e6e6e6]">
          <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
          <span className="text-white/40">·</span>
          <a href={site.emailHref} className="hover:text-white">{site.email}</a>
          <span className="text-white/40">·</span>
          <span>{site.domainLabel}</span>
        </div>
      </div>
    </section>
  );
}
