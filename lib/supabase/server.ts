import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/** True when the Supabase env vars are present. Lets the data layer fall
 *  back to the bundled seed (and the build stay green) before keys are set. */
export function hasSupabaseEnv(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

/** Cookie-bound Supabase client for Server Components, Route Handlers, and
 *  Server Actions. Only call when hasSupabaseEnv() is true. */
export function createClient() {
  const cookieStore = cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          // Server Components can't set cookies; that's fine — the middleware
          // refreshes the session. Swallow the read-only-store error.
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            /* called from a Server Component — ignore */
          }
        },
      },
    }
  );
}
