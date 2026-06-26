import Link from "next/link";
import { signOut } from "@/app/admin/actions";

export default function AdminHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/admin" className="flex items-center gap-2.5">
          <span className="font-display text-[15px] font-black uppercase tracking-[0.04em] text-white">
            LineHaul Station
          </span>
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-fuel">
            Admin
          </span>
        </Link>
        <div className="flex items-center gap-5">
          <Link
            href="/blog"
            target="_blank"
            className="font-label text-[10px] uppercase tracking-[0.16em] text-chrome transition-colors hover:text-white"
          >
            View blog ↗
          </Link>
          <form action={signOut}>
            <button
              type="submit"
              className="font-label text-[10px] uppercase tracking-[0.16em] text-chrome transition-colors hover:text-white"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
