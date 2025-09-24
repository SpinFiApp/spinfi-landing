import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        orbitron: ["var(--font-orbitron)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      defaultTheme: "light",
      themes: {
        light: {
          layout: {
            radius: {
              small: "0.5rem",
              medium: "0.75rem",
              large: "1rem",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
            boxShadow: {
              small: "0 2px 8px rgba(0,0,0,0.12)",
              medium: "0 8px 24px rgba(0,0,0,0.18)",
              large: "0 20px 48px rgba(0,0,0,0.22)",
            },
          },
          colors: {
            // keep components readable on a bright orange background image
            background: "transparent",
            foreground: "#ffffff",
            divider: "#ffffff2e",
            focus: "#2dd4bf", // teal focus ring (reduced visual vibration)

            // dark glass surfaces for contrast over orange bg
            content1: "#000000B3", // 70%
            content2: "#0000008C", // 55%
            content3: "#00000066", // 40%
            content4: "#00000040", // 25%

            // primary: teal (cool split-complement of orange)
            primary: {
              50:  "#f0fdfa",
              100: "#ccfbf1",
              200: "#99f6e4",
              300: "#5eead4",
              400: "#2dd4bf",
              500: "#14b8a6",
              600: "#0d9488",
              700: "#0f766e",
              800: "#115e59",
              900: "#134e4a",
              DEFAULT: "#2dd4bf",
              foreground: "#0b0b0b",
            },

            // secondary: electric blue (steady, trustworthy)
            secondary: {
              50:  "#eff6ff",
              100: "#dbeafe",
              200: "#bfdbfe",
              300: "#93c5fd",
              400: "#60a5fa",
              500: "#3b82f6",
              600: "#2563eb",
              700: "#1d4ed8",
              800: "#1e40af",
              900: "#1e3a8a",
              DEFAULT: "#60a5fa",
              foreground: "#0b0b0b",
            },

            success: { DEFAULT: "#22c55e", foreground: "#052e1f" },
            warning: { DEFAULT: "#f59e0b", foreground: "#3b2a06" },
            danger: { DEFAULT: "#ef4444", foreground: "#ffffff" },

            // Rarity palette for gacha elements
            rarity: {
              common: { DEFAULT: "#9ca3af", 500: "#9ca3af" }, // zinc-400
              rare: { DEFAULT: "#22d3ee", 500: "#22d3ee" },   // cyan-400
              epic: { DEFAULT: "#8b5cf6", 500: "#8b5cf6" },   // violet-500
              legendary: { DEFAULT: "#f59e0b", 500: "#f59e0b" }, // amber-500
              mythic: { DEFAULT: "#ec4899", 500: "#ec4899" },    // pink-500
            },

            // State tokens
            token: {
              win: "#22c55e",
              almost: "#f59e0b",
              miss: "#ef4444",
            },
          },
        },
        dark: {
          extend: "dark",
          colors: {
            focus: "#2dd4bf",
            primary: { DEFAULT: "#2dd4bf", foreground: "#0b0b0b" },
            secondary: { DEFAULT: "#60a5fa", foreground: "#0b0b0b" },
          },
        },
      },
    }),
  ],
}

module.exports = config;
