/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        // All mapped to CSS variables — change everything from globals.css
        primary:   "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent:    "var(--color-accent)",
        surface:   "var(--color-surface)",
        border:    "var(--color-border)",
        muted:     "var(--color-muted)",
        textBase:  "var(--color-text-base)",
        textDim:   "var(--color-text-dim)",
      },
      backgroundImage: {
        explosion:  'url("/bg-explosion.png")',
        circles:    'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site:       'url("/site-bg.svg")',
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      fontFamily: {
        // Maps to CSS variable set in globals.css / Layout
        display: ["var(--font-display)", "sans-serif"],
        body:    ["var(--font-body)",    "sans-serif"],
        sora:    ["var(--font-sora)",    "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
