import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        muted: "var(--muted)",
        "muted-light": "var(--muted-light)",
        border: "var(--border)",
        surface: "var(--surface)",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter:    ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1120px",
        hero:    "1280px",
        prose:   "720px",
      },
      fontSize: {
        "hero":  ["72px", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "page":  ["56px", { lineHeight: "1.1",  letterSpacing: "-0.025em" }],
        "h2":    ["40px", { lineHeight: "1.2",  letterSpacing: "-0.025em" }],
        "h3":    ["28px", { lineHeight: "1.3",  letterSpacing: "-0.025em" }],
      },
      spacing: {
        "section": "var(--space-section-y)",
        "18": "72px",
        "22": "88px",
      },
    },
  },
  plugins: [],
};
export default config;
