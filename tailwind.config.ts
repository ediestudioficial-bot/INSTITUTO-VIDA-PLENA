import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: "#0F2748",
          deepDark: "#00122C",
          sage: "#335C81",
          sageLight: "#EEF2F6",
          cream: "#FAF9FC",
          creamDark: "#E3E2E5",
          warmWhite: "#FFFFFF",
          gold: "#C6A86A",
          goldLight: "#F1E8D5",
          wood: "#40608B",
          woodLight: "#6A92B9",
          charcoal: "#1B1B1E",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: { editorial: "1280px" },
      spacing: { section: "10rem" },
      boxShadow: { soft: "none", card: "none", gold: "none" },
    },
  },
  plugins: [],
};
export default config;
