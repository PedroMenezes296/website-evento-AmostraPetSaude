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
        "brand-dark": "#1B3A6B",
        "brand-orange": "#E8671A",
        "brand-light": "#4A9FD4",
        "brand-bg": "#F5F7FA",
      },
    },
  },
  plugins: [],
};

export default config;
