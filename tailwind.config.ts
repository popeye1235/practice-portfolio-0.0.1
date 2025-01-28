import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#121212", // Dark background color for dark mode
        darkText: "#e0e0e0", // Light text color for dark mode
        lightBg: "#f9f9f9", // Light background color for light mode
        lightText: "#333333", // Dark text color for light mode
      },
    },
  },
  darkMode: 'class', 
  plugins: [],
} satisfies Config;
