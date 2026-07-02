import Image from "next/image";
import Link from "next/link";
import ScrollScale from "@/components/motion/ScrollScale";
import NewsletterForm from "@/components/onehome/NewsletterForm";
import { audiences, AUDIENCE_ORDER } from "@/lib/audiences";
import { site } from "@/lib/site";

/**
 * Site-wide "Luxe" footer — dark architectural image (parallax scroll-zoom),
 * Find Your Lane / Explore link columns, newsletter + contact. `accent` tints
 * the newsletter button. Replaces the older flat Footer everywhere.
 */
export default function LuxeFooter({ accent = "#F07820" }: { accent?: string }) {
  const linkCls =
    "w-fit font-label text-[13px] uppercase tracking-[0.12em] text-chrome transition-colors hover:text-fuel";
  return (
    <footer className="relative overflow-hidden">
      <ScrollScale from={1.04} to={1.16}>
        <Image src="/assets/building-seq/07.jpg" alt="A LineHaul Station Hub from above" fill className="img-grade object-cover" sizes="100vw" />
      </ScrollScale>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.88),rgba(11,11,11,0.97))]" />
      <div className="relative gutter pb-12 pt-[clamp(72px,12vh,150px)]">
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
          <div className="max-w-sm">
            <Image src="/assets/logo-horz-light.png" alt="LineHaul Station" width={180} height={32} className="h-[26px] w-auto" />
            <p className="mt-4 text-[17px] leading-relaxed text-chrome">
              America&apos;s first national, shared-use truck terminal network — built for every lane of the supply chain.
            </p>
            <div className="tnum mt-5 inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.03] px-3 py-2 font-mono text-[13px] text-chrome">
              <span className="h-1.5 w-1.5 rounded-full bg-fuel" aria-hidden />
              West Memphis, AR · 35.14°N / 90.18°W
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="font-label text-[10px] uppercase tracking-[0.2em] text-[#8f8f8f]">Find Your Lane</div>
            {AUDIENCE_ORDER.map((k) => (
              <Link key={k} href={`/${k}`} className={linkCls}>{audiences[k].navLabel}</Link>
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="font-label text-[10px] uppercase tracking-[0.2em] text-[#8f8f8f]">Explore</div>
            <Link href="/" className={linkCls}>Home</Link>
            <Link href="/leadership" className={linkCls}>Leadership</Link>
            <Link href="/blog" className={linkCls}>Blog</Link>
            {/* Standalone self-contained brand-system bundle — plain <a> for a full page load */}
            <a href="/brand-system" className={linkCls}>Brand System</a>
            <Link href="/join" className="w-fit font-label text-[13px] uppercase tracking-[0.12em] text-fuel transition-colors hover:brightness-125">Join The Outriders</Link>
          </div>

          <div className="max-w-sm">
            <div className="font-label text-[10px] uppercase tracking-[0.2em] text-[#8f8f8f]">Newsletter</div>
            <p className="mb-3 mt-2 text-[16px] leading-relaxed text-chrome">Launch news and founding-rate updates from the network.</p>
            <NewsletterForm accent={accent} />
            <div className="mt-5 flex flex-col gap-1.5 font-mono text-[15px] text-[#d8d8d8]">
              <a href={site.phoneHref} className="tnum w-fit transition-colors hover:text-fuel">{site.phone}</a>
              <a href={site.emailHref} className="w-fit transition-colors hover:text-fuel">{site.email}</a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 font-label text-[10px] uppercase tracking-[0.2em] text-[#8f8f8f] sm:flex-row sm:items-center sm:justify-between">
          <span>{site.tagline}</span>
          <span>© {new Date().getFullYear()} LineHaul Station, LLC</span>
        </div>
      </div>
    </footer>
  );
}
