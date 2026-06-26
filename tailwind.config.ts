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
        chromelight: "#F2F2F2",// brushed-metal lit edge (v2 chrome top stop)
        steel: "#7EC8E3",      // logo crown / cool accent (Brokers)
        steellight: "#B8D4E8", // Steel Blue Light — cool wash / texture stop
        fuel: "#F07820",       // PRIMARY accent — energy, CTAs, highlights
        amber: "#FBB04A",      // CTA gradient top
        ember: "#D02020",      // alerts / urgency
        green: "#18A848",      // success / Shippers
        fleet: "#4878A8",      // LH Fleet Services / Carriers
        gold: "#C8A060",       // Founders / premium / Government
        goldlight: "#D6BF94",  // gold-chrome light stop / dual-metal warm edge
      },
      // v2 metallic gradients — exact stops ported from the brand system.
      // Usable as `bg-grad-chrome` etc.; mirrored as `.grad-*` classes in globals.css.
      backgroundImage: {
        "grad-chrome":
          "linear-gradient(180deg,#F2F2F2 0%,#C4C4C4 16%,#8E8E8E 44%,#6A6A6A 50%,#9C9C9C 56%,#D6D6D6 76%,#7C7C7C 100%)",
        "grad-fuel-chrome":
          "linear-gradient(135deg,#FCE0BE 0%,#F4A24A 30%,#C85A12 52%,#E88A3C 60%,#F07820 100%)",
        "grad-gold-chrome":
          "linear-gradient(135deg,#E8C97E 0%,#C8A060 34%,#8C6E3A 54%,#B89452 62%,#C8A060 100%)",
        "grad-fuel":
          "linear-gradient(135deg,#FBB04A 0%,#F07820 55%,#C85A12 100%)",
        "grad-steel":
          "linear-gradient(135deg,#D6EEF8 0%,#7EC8E3 32%,#3E8AB0 54%,#6FB6D6 62%,#7EC8E3 100%)",
        "grad-dual-metal":
          "linear-gradient(90deg,#79BEDD 0%,#A2D2E7 25%,#8797A0 50%,#B5A380 75%,#D6BF94 100%)",
        "grad-icon-ramp":
          "linear-gradient(180deg,#79BEDD 0%,#A2D2E7 16%,#D2E9F3 29%,#FFFFFF 40%,#515458 41%,#161A1F 43%,#423932 55%,#6B5744 70%,#9E886A 73%,#C8B189 77%,#D6BF94 81%,#E4D5BA 90%,#F6F0E7 100%)",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        label: ["var(--font-michroma)", "system-ui", "sans-serif"],
        body: ["var(--font-newsreader)", "Georgia", "serif"],
        // Outfit — the no-serif body face for the dark "Luxe" /drivers skin.
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
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
        // Brand-system v2 motion set (ported verbatim).
        lhsScan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(2400%)" },
        },
        lhsPulse: {
          "0%,100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        lhsGlint: {
          "0%": { transform: "translateX(-130%)" },
          "60%,100%": { transform: "translateX(240%)" },
        },
        lhsDraw: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        lhsBlink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
        lhsRoll: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        scan: "scan 9s linear infinite",
        "lhs-scan": "lhsScan 9s linear infinite",
        "lhs-pulse": "lhsPulse 2.4s ease-in-out infinite",
        "lhs-glint": "lhsGlint 4.5s ease-in-out infinite",
        "lhs-draw": "lhsDraw 0.9s cubic-bezier(0.2,0.7,0.2,1) both",
        "lhs-blink": "lhsBlink 1.4s step-end infinite",
        "lhs-roll": "lhsRoll 1.1s steps(2) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
