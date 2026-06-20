import type { Config } from "tailwindcss";

/**
 * LineHaul Station — Brand System v1.0 tokens.
 * Carbon dominates · Chrome structures · Fuel Orange ignites (used sparingly).
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0B",        // page base
        ink2: "#0E0E0E",       // recessed strips
        carbon: "#1A1A1A",     // primary surface / logo shield
        panel: "#141414",      // cards
        panel2: "#161616",     // alt cards
        chrome: "#B0B0B0",     // metallic accents / subheads
        steel: "#7EC8E3",      // logo crown / cool accent (Brokers)
        fuel: "#F07820",       // PRIMARY accent — energy, CTAs, highlights
        amber: "#FBB04A",      // CTA gradient top
        ember: "#D02020",      // alerts / urgency
        green: "#18A848",      // success / Shippers
        fleet: "#4878A8",      // LH Fleet Services / Carriers
        gold: "#C8A060",       // Founders / premium / Government
      },
      fontFamily: {
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        label: ["var(--font-michroma)", "system-ui", "sans-serif"],
        body: ["var(--font-newsreader)", "Georgia", "serif"],
        script: ["var(--font-caveat)", "cursive"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      borderRadius: {
        btn: "3px",
        card: "5px",
      },
      maxWidth: {
        site: "1180px",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(2400%)" },
        },
      },
      animation: {
        scan: "scan 9s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
