import path from "path";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Posts } from "./collections/Posts";
import { Users } from "./collections/Users";

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
    },
  },
  collections: [Posts, Users],
  editor: lexicalEditor(),
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
