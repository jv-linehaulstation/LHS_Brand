import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";
import SetupNotice from "@/components/admin/SetupNotice";
import { hasSupabaseEnv } from "@/lib/supabase/server";
import { getAllPostsAdmin } from "./data";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  if (!hasSupabaseEnv()) return <SetupNotice />;

  const posts = await getAllPostsAdmin();

  return (
    <>
      <AdminHeader />
      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex items-center justify-between gap-4">
          <h1 className="font-display text-[clamp(26px,4vw,40px)] font-black uppercase tracking-[-0.02em] text-white">
            Posts
          </h1>
          <Link
            href="/admin/new"
            className="rounded-btn bg-fuel px-5 py-2.5 font-label text-[11px] uppercase tracking-[0.16em] text-ink transition hover:brightness-110"
          >
            New post
          </Link>
        </div>

        <div className="mt-8 overflow-hidden rounded-card border border-white/10">
          {posts.length === 0 ? (
            <div className="px-5 py-12 text-center font-body text-chrome">
              No posts yet. Create your first one.
            </div>
          ) : (
            <ul className="divide-y divide-white/10">
              {posts.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/admin/${p.id}`}
                    className="flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-white/[0.03]"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2.5">
                        <span className="truncate font-display text-[17px] font-bold text-white">
                          {p.title}
                        </span>
                        {!p.published && (
                          <span className="flex-none rounded-full border border-white/20 px-2 py-0.5 font-label text-[9px] uppercase tracking-[0.14em] text-chrome">
                            Draft
                          </span>
                        )}
                      </div>
                      <div className="mt-1 truncate font-mono text-[12px] text-white/40">
                        /blog/{p.slug} · {p.date}
                      </div>
                    </div>
                    <span className="flex-none font-label text-[10px] uppercase tracking-[0.16em] text-fuel">
                      Edit →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  );
}
