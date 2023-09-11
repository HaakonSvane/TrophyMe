import type { Config } from "tailwindcss";
import { colors } from "./colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        window: colors.window,
        box: colors.box,
        success: colors.success,
        danger: colors.danger,
        attention: colors.attention,
        servere: colors.servere,
      },
    },
  },
  plugins: [],
};
export default config;
