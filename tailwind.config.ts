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
        'secondary': '#f3e500',
        'gbDark': '#2b2a5c',
        'gbLight': '#dad0c0',
        'social': '#145e98',
        'selected': '#145e98'
      },
      backgroundImage: {
        "gradient-cover": "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(43, 42, 92, 0.5) 111.58%)"
      }
    },
  },
  plugins: [],
};
export default config;
