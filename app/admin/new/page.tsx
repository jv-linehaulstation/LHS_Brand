import AdminHeader from "@/components/admin/AdminHeader";
import PostForm from "@/components/admin/PostForm";
import SetupNotice from "@/components/admin/SetupNotice";
import { hasSupabaseEnv } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default function NewPostPage() {
  if (!hasSupabaseEnv()) return <SetupNotice />;
  return (
    <>
      <AdminHeader />
      <main className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="font-display text-[clamp(24px,3.6vw,36px)] font-black uppercase tracking-[-0.02em] text-white">
          New post
        </h1>
        <div className="mt-8">
          <PostForm />
        </div>
      </main>
    </>
  );
}
