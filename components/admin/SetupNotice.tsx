// Shown in /admin when Supabase env vars aren't configured yet.
export default function SetupNotice() {
  const step =
    "font-body text-[15px] leading-relaxed text-[#cfcfcf]";
  const code =
    "rounded bg-white/10 px-1.5 py-0.5 font-mono text-[13px] text-white";
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <span className="font-label text-[10px] uppercase tracking-[0.2em] text-fuel">
        Admin · Setup
      </span>
      <h1 className="mt-4 font-display text-[clamp(28px,4vw,42px)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-white">
        Connect Supabase to continue
      </h1>
      <ol className="mt-8 list-decimal space-y-4 pl-5 marker:text-fuel">
        <li className={step}>
          Copy <span className={code}>.env.local.example</span> to{" "}
          <span className={code}>.env.local</span> and fill in your project URL and keys
          (Supabase → Settings → API).
        </li>
        <li className={step}>
          Run the schema in <span className={code}>supabase/schema.sql</span> (Supabase → SQL Editor).
        </li>
        <li className={step}>
          Add an admin user (Supabase → Authentication → Users → Add user, with a password).
        </li>
        <li className={step}>
          Load the existing posts: <span className={code}>npm run blog:seed</span>.
        </li>
        <li className={step}>
          Restart <span className={code}>npm run dev</span> and reload this page.
        </li>
      </ol>
    </main>
  );
}
