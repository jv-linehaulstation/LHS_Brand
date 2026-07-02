import path from "path";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Media } from "./collections/Media";
import { Posts } from "./collections/Posts";
import { Testimonials } from "./collections/Testimonials";
import { Users } from "./collections/Users";
import { DriversPage } from "./globals/DriversPage";
import { SiteSettings } from "./globals/SiteSettings";

// Site origin allowed for Live Preview (the admin iframe's postMessage target and
// the populate fetch). localhost in dev; set NEXT_PUBLIC_SERVER_URL to the
// deployed Vercel domain in production.
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export default buildConfig({
  admin: {
    user: Users.slug,
    theme: "dark", // carbon aesthetic — matches the LHS brand
    meta: {
      titleSuffix: "· LineHaul Station",
    },
    importMap: {
      baseDir: process.cwd(),
    },
    components: {
      graphics: {
        Logo: "/components/payload/Logo.tsx#Logo",
        Icon: "/components/payload/Icon.tsx#Icon",
      },
      beforeLogin: ["/components/payload/LoginArt.tsx#LoginArt"],
      afterLogin: ["/components/payload/LoginFooter.tsx#LoginFooter"],
      beforeNavLinks: ["/components/payload/NavHub.tsx#NavHub"],
      // Fully replace the default dashboard view (Payload's ModularDashboard
      // widget system) with our console — avoids its notFound() on this setup.
      views: {
        dashboard: {
          Component: "/components/payload/DashboardConsole.tsx#DashboardConsole",
        },
      },
    },
  },
  collections: [Posts, Testimonials, Media, Users],
  globals: [SiteSettings, DriversPage],
  editor: lexicalEditor(),
  // Allow the site origin for Live Preview (iframe postMessage + populate fetch).
  cors: [SERVER_URL],
  csrf: [SERVER_URL],
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(process.cwd(), "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
    // Keep all Payload tables in their own Postgres schema so they never
    // collide with the existing Supabase `public` tables (auth, old blog, etc.).
    schemaName: "payload",
  }),
  sharp,
});
