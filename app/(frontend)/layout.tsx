import type { Metadata } from "next";
import { fontVars } from "@/lib/fonts";
import Loader from "@/components/Loader";
import SmoothScroll from "@/components/motion/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.linehaulstation.com"),
  title: "LineHaul Station | America's Freight Relay Network",
  description:
    "LineHaul Station is a new breed of freight relay network — a national, shared-use truck terminal platform that keeps freight rolling around the clock, improves quality of life for drivers, and reduces total cost of operation.",
  openGraph: {
    title: "LineHaul Station | America's Freight Relay Network",
    description:
      "America's first national, shared-use truck terminal network. Buy the space, not the building.",
    type: "website",
    url: "https://www.linehaulstation.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVars}>
      <body className="bg-ink font-body text-white antialiased">
        <Loader />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
