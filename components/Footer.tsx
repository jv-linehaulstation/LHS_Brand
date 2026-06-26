import Image from "next/image";
import Link from "next/link";
import { audiences, AUDIENCE_ORDER } from "@/lib/audiences";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-chrome/15 bg-ink gutter py-12">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Image
            src="/assets/logo-horz-light.png"
            alt="LineHaul Station"
            width={180}
            height={32}
            className="h-[24px] w-auto"
          />
          <p className="mt-4 font-body text-[15px] leading-relaxed text-chrome">
            America&apos;s first national, shared-use truck terminal network — the
            Modern-Day Pony Express.
          </p>
          <div className="tnum mt-5 inline-flex items-center gap-2.5 rounded-btn border border-chrome/20 bg-carbon/60 px-3 py-2 font-mono text-[11px] text-chrome">
            <span className="h-1.5 w-1.5 rounded-full bg-fuel" aria-hidden />
            West Memphis, AR · 35.14°N / 90.18°W
          </div>
        </div>

        <nav className="flex flex-col gap-2.5">
          <div className="font-label text-[9px] uppercase tracking-[0.2em] text-[#8f8f8f]">
            Find Your Lane
          </div>
          {AUDIENCE_ORDER.map((key) => (
            <Link
              key={key}
              href={`/${key}`}
              className="w-fit font-label text-[11px] uppercase tracking-[0.12em] text-chrome transition-colors hover:text-fuel"
            >
              {audiences[key].navLabel}
            </Link>
          ))}
          <Link
            href="/leadership"
            className="w-fit font-label text-[11px] uppercase tracking-[0.12em] text-chrome transition-colors hover:text-fuel"
          >
            Leadership
          </Link>
          <Link
            href="/join"
            className="w-fit font-label text-[11px] uppercase tracking-[0.12em] text-fuel transition-colors hover:brightness-125"
          >
            Join The Outriders
          </Link>
        </nav>

        <div className="flex flex-col gap-2 font-mono text-[13px] text-[#d8d8d8]">
          <div className="font-label text-[9px] uppercase tracking-[0.2em] text-[#8f8f8f]">
            Connect
          </div>
          <a href={site.phoneHref} className="tnum w-fit transition-colors hover:text-fuel">
            {site.phone}
          </a>
          <a href={site.emailHref} className="w-fit transition-colors hover:text-fuel">
            {site.email}
          </a>
          <span className="text-chrome">{site.domainLabel}</span>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-2 border-t border-chrome/10 pt-6 font-label text-[9px] uppercase tracking-[0.2em] text-[#8f8f8f] sm:flex-row sm:items-center sm:justify-between">
        <span>{site.tagline}</span>
        <span>© {new Date().getFullYear()} LineHaul Station, LLC</span>
      </div>
    </footer>
  );
}
