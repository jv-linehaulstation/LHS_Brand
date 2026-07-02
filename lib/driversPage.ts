// Server-side fetch for the editable /drivers page (the DriversPage global).
// The shape, SEED, and raw->content transform live in lib/driversPageShape.ts
// (client-safe, no @payload-config) so Live Preview can reuse them in the
// browser. This module only adds the Payload Local API read.
import config from "@payload-config";
import { getPayload } from "payload";

import { resolveDriversDoc, SEED, type DriversPageContent } from "./driversPageShape";

// Re-export the shape so existing `@/lib/driversPage` imports keep working.
export * from "./driversPageShape";

function payloadConfigured(): boolean {
  return Boolean(process.env.DATABASE_URI && process.env.PAYLOAD_SECRET);
}

/**
 * The RAW DriversPage global doc (depth 1). This is what Live Preview needs as
 * `initialData` — the admin iframe posts field edits in this same raw shape.
 * Returns {} when the CMS is not configured or the read fails; resolveDriversDoc({})
 * yields the full SEED, so the page still renders.
 */
export async function getDriversPageDoc(): Promise<Record<string, unknown>> {
  if (!payloadConfigured()) return {};
  try {
    const payload = await getPayload({ config });
    const g = await payload.findGlobal({ slug: "drivers-page", depth: 1 });
    return g as unknown as Record<string, unknown>;
  } catch {
    return {};
  }
}

/** Render-ready /drivers content, with a full fallback to the current copy. */
export async function getDriversPage(): Promise<DriversPageContent> {
  if (!payloadConfigured()) return SEED;
  return resolveDriversDoc(await getDriversPageDoc());
}
