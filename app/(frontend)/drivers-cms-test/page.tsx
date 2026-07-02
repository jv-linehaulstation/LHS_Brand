import type { Metadata } from "next";
import OneHomePageCmsTest from "@/components/OneHomePageCmsTest";

// Review-only duplicate of /drivers where every section reads from Payload
// (/admin → Drivers Page). The live /drivers route is untouched. Not linked in
// nav and kept out of search until we approve the swap.
export const revalidate = 60;

export const metadata: Metadata = {
  title: "OneHome by LineHaul Station | For Drivers (CMS preview)",
  description:
    "CMS-backed preview of the OneHome drivers page. Internal review route, not for public linking.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <OneHomePageCmsTest />;
}
