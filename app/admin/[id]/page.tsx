import { notFound } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import PostForm from "@/components/admin/PostForm";
import SetupNotice from "@/components/admin/SetupNotice";
import { hasSupabaseEnv } from "@/lib/supabase/server";
import { getPostById } from "../data";

export const dynamic = "force-dynamic";

export default async function EditPostPage({
  params,
}: {
  params: { id: string };
}) {
  if (!hasSupabaseEnv()) return <SetupNotice />;

  const post = await getPostById(params.id);
  if (!post) notFound();

  return (
    <>
      <AdminHeader />
      <main className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="font-display text-[clamp(24px,3.6vw,36px)] font-black uppercase tracking-[-0.02em] text-white">
          Edit post
        </h1>
        <p className="mt-2 font-mono text-[12px] text-white/40">/blog/{post.slug}</p>
        <div className="mt-8">
          <PostForm post={post} />
        </div>
      </main>
    </>
  );
}
