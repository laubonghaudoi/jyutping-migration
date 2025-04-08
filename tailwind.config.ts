import type { Config } from "tailwindcss";
// import typography from "@tailwindcss/typography"; // Removed incompatible plugin import

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Scan app directory
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Scan components directory
    "./_content/**/*.{mdx}", // Scan content directory for MDX files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        chiron: ["ChironSungHK", "sans-serif"], // Use font name directly as defined in @font-face
      },
      colors: {
        // Define custom primary color using RGB values
        primary: "#1678d3", // Example primary color
      },
      // Add other theme extensions here if needed
    },
  },
  plugins: [
    // typography, // Removed incompatible plugin
  ],
};
export default config;
