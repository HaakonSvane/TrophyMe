import type { Config } from "tailwindcss";
import { colors } from "./colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        window: colors.window,
      },
    },
  },
  plugins: [],
};
export default config;
