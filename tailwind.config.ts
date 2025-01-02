import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Playfair: ["Playfair Display SC", "serif"],
        Kumbh: ["Kumbh Sans", "serif"],
        Nunito: ["Nunito", "serif"],
        Lato: ["Lato", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: "#1CC343",
        darkGreen: "#228B22",
        darkBlue: "#011E29",
        lightYellow: "#FEF9E8",
        violet: "#3A225D",
        lightSlate: "#F6F6F6",
        slate: "#6C6D6F",
        bgSlate: "#F6F6F6",
      },
    },
  },
  plugins: [],
} satisfies Config;
