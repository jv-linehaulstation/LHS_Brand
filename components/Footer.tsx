import Image from "next/image";
import Link from "next/link";
import { audiences, AUDIENCE_ORDER } from "@/lib/audiences";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-chrome/15 bg-ink px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-site flex-col gap-8 md:flex-row md:items-start md:justify-between">
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
        </div>

        <nav className="flex flex-col gap-2.5">
          <div className="font-label text-[9px] uppercase tracking-[0.2em] text-[#6a6a6a]">
            Find Your Lane
          </div>
          {AUDIENCE_ORDER.map((key) => (
            <Link
              key={key}
              href={`/${key}`}
              className="font-label text-[11px] uppercase tracking-[0.12em] text-chrome transition-colors hover:text-fuel"
            >
              {audiences[key].navLabel}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 font-mono text-[13px] text-[#d8d8d8]">
          <div className="font-label text-[9px] uppercase tracking-[0.2em] text-[#6a6a6a]">
            Connect
          </div>
          <a href={site.phoneHref} className="transition-colors hover:text-fuel">
            {site.phone}
          </a>
          <a href={site.emailHref} className="transition-colors hover:text-fuel">
            {site.email}
          </a>
          <span className="text-chrome">{site.domainLabel}</span>
        </div>
      </div>

      <div className="mx-auto mt-9 flex max-w-site flex-col gap-2 border-t border-chrome/10 pt-6 font-label text-[9px] uppercase tracking-[0.2em] text-[#6a6a6a] sm:flex-row sm:items-center sm:justify-between">
        <span>{site.tagline}</span>
        <span>© {new Date().getFullYear()} LineHaul Station, LLC</span>
      </div>
    </footer>
  );
}
