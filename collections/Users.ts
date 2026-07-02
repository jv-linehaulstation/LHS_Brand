import type { CollectionConfig } from "payload";

// Admin accounts for the Payload dashboard (/admin). Payload provides the
// full auth flow (login, password reset, sessions) out of the box — this
// replaces the old Supabase-auth CMS. Create the first user on first visit
// to /admin, or with `npm run blog:seed` (which also creates an admin).
export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
    group: "Admin",
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
};
