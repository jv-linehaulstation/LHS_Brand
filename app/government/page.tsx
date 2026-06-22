import type { Metadata } from "next";
import AudiencePage from "@/components/AudiencePage";

export const metadata: Metadata = {
  title: "LineHaul Station | Freight Relay Infrastructure",
  description:
    "The Modern-Day Pony Express — a national relay network that moves freight 24/7 while getting American truckers home every day.",
};

export default function Page() {
  return <AudiencePage audience="government" />;
}
