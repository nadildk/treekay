import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",

  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '760px',
      lg: '960px',
      xl: '1310px',
    },
    extend: {
      backgroundImage: {
      },
      fontFamily: {
        alexBrush: [`var(--font-alexBrush)`, 'sans-serif'],
        montserrat: [`var(--font-montserrat)`, 'sans-serif'],
      },
      colors: {
        primary: '#06062A',
        secondary: '#151538',
        tertirary: '#242445',
        accent: {
            DEFAULT: '#7f1cfc',
            hover: '#6519c6',
        },
      },
    },
  },
  plugins: [
  ],
} satisfies Config;
