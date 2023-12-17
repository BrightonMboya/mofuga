import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        blue: "#089CF0",
        grey: "#B6B6B6",
        brown: "#715858",
      },
    },
  },
  plugins: [],
} satisfies Config;
