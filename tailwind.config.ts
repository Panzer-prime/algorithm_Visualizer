import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "radial-to-b": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        wave: "wave 7s ease infinite",
        swell: "swell 4s ease infinite",
      },
      keyframes: {
        wave: {
          "0%": { marginLeft: "0" },
          "100%": { marginLeft: "-1600px" },
        },
        swell: {
          "0%, 100%": { transform: "translate(0, -30px)" },
          "50%": { transform: "translate(0, 5px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
