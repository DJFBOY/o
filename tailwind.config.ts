import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",
        ink: "#111111",
        graphite: "#505050",
        line: "#E5E5E5",
        signal: "#D62839",
        cobalt: "#D62839",
        alert: "#B42332"
      },
      fontFamily: {
        serif: ["var(--font-headline)", "Georgia", "serif"],
        sans: ["var(--font-body)", "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      maxWidth: {
        prose: "68ch"
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "68ch"
          }
        }
      }
    }
  },
  plugins: []
};

export default config;
