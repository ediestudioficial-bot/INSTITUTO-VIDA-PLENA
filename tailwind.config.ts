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
          deep: "#1b3b2b",       // Verde profundo principal
          deepDark: "#122a1e",   // Verde profundo escuro
          sage: "#5c7c68",       // Verde sálvia
          sageLight: "#e9ede9",  // Verde sálvia bem suave para fundos
          cream: "#faf7f2",      // Creme warm
          creamDark: "#eeddcc",  // Creme mais denso
          warmWhite: "#fffefc",  // Branco quente
          gold: "#c59b27",       // Dourado suave
          goldLight: "#f4e8c1",  // Dourado suave claro
          wood: "#8b5e3c",       // Madeira natural
          woodLight: "#a67c52",  // Madeira clara
          charcoal: "#2c332e",   // Texto escuro suave
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -5px rgba(27, 59, 43, 0.08)",
        card: "0 4px 20px 0 rgba(27, 59, 43, 0.05)",
        gold: "0 4px 15px 0 rgba(197, 155, 39, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
