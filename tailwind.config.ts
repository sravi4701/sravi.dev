import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

const withAlpha = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: withAlpha("--bg"),
        surface: withAlpha("--surface"),
        "surface-2": withAlpha("--surface-2"),
        border: withAlpha("--border"),
        "border-strong": withAlpha("--border-strong"),
        fg: {
          DEFAULT: withAlpha("--fg"),
          muted: withAlpha("--fg-muted"),
          faint: withAlpha("--fg-faint"),
        },
        accent: {
          DEFAULT: withAlpha("--accent"),
          hover: withAlpha("--accent-hover"),
          soft: withAlpha("--accent-soft"),
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
      },
      letterSpacing: {
        label: "0.14em",
      },
      maxWidth: {
        measure: "65ch",
      },
    },
  },
  plugins: [typography],
};

export default config;
