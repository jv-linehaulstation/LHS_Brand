import type { Metadata } from "next";
import AudiencePage from "@/components/AudiencePage";

export const metadata: Metadata = {
  title: "FlexSpace | For Carriers",
  description:
    "FlexSpace is America's first national, shared-use truck terminal network. Stop building terminals — start buying space at a fraction of the cost.",
};

export default function Page() {
  return <AudiencePage audience="carriers" />;
}
