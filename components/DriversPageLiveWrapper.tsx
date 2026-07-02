"use client";

import { useLivePreview } from "@payloadcms/live-preview-react";

import OneHomePageCmsTest from "@/components/OneHomePageCmsTest";
import type { Voice } from "@/components/onehome/TestimonialCarousel";
import { resolveDriversDoc } from "@/lib/driversPageShape";

/**
 * Client boundary for Payload Live Preview on the DriversPage global. Receives
 * the RAW global doc (initialDoc) fetched server-side, subscribes to the admin
 * iframe's postMessage edits via useLivePreview, then resolves the raw doc into
 * render-ready content and hands it to the presentational OneHomePageCmsTest.
 *
 * useLivePreview returns the same (raw) shape it is given, so we transform on
 * every render with resolveDriversDoc — the same function the server uses — which
 * keeps unsaved edits and the seed fallback consistent with SSR.
 *
 * serverURL: same-origin (admin + site are one Next app), so the live browser
 * origin is correct at runtime; empty during SSR (no postMessage on the server).
 */
export default function DriversPageLiveWrapper({
  initialDoc,
  voices,
}: {
  initialDoc: Record<string, unknown>;
  voices: Voice[];
}) {
  const serverURL = typeof window !== "undefined" ? window.location.origin : "";
  const { data } = useLivePreview<Record<string, unknown>>({
    initialData: initialDoc,
    serverURL,
    depth: 1,
  });

  const content = resolveDriversDoc(data);
  return <OneHomePageCmsTest content={content} voices={voices} />;
}
