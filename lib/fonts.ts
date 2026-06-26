import { Archivo, Michroma, Newsreader, Caveat, JetBrains_Mono, Outfit } from "next/font/google";

// Web substitutes for the licensed foundry faces:
// Azo Sans Black → Archivo · Eurostile Extd → Michroma · FreightText → Newsreader
// Brushwell → Caveat · spec/data → JetBrains Mono. Swap to licensed faces in final builds.
export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

export const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma",
  display: "swap",
});

export const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
  adjustFontFallback: false,
});

export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Outfit — clean geometric sans used as the body face on the dark "Luxe" /drivers
// skin (no serif). The rest of the site keeps Newsreader unless rolled out later.
export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const fontVars = `${archivo.variable} ${michroma.variable} ${newsreader.variable} ${caveat.variable} ${jetbrains.variable} ${outfit.variable}`;
