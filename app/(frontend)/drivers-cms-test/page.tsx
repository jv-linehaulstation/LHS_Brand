import type { Metadata } from "next";
import DriversPageLiveWrapper from "@/components/DriversPageLiveWrapper";
import { getDriversPageDoc } from "@/lib/driversPage";
import { getTestimonials } from "@/lib/testimonials";

// Review-only duplicate of /drivers where every section reads from Payload
// (/admin → Drivers Page), with Live Preview: editing a field in the admin
// updates this page in real time via postMessage, no save required. The live
// /drivers route is untouched. Not linked in nav and kept out of search.
export const revalidate = 60;

export const metadata: Metadata = {
  title: "OneHome by LineHaul Station | For Drivers (CMS preview)",
  description:
    "CMS-backed preview of the OneHome drivers page. Internal review route, not for public linking.",
  robots: { index: false, follow: false },
};

export default async function Page() {
  // Fetch the raw global doc (Live Preview initialData) + testimonials server-side,
  // then hand off to the client wrapper that subscribes to live edits.
  const [initialDoc, voices] = await Promise.all([getDriversPageDoc(), getTestimonials()]);
  return <DriversPageLiveWrapper initialDoc={initialDoc} voices={voices} />;
}
