import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "ui-sans-serif", "system-ui"],
        general: ["general", "ui-sans-serif", "system-ui"],
        circularWeb: ["circular-web", "ui-sans-serif", "system-ui"],
        robertMedium: ["robert-medium", "ui-sans-serif", "system-ui"],
        robertRegular: ["robert-regular", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

export default config;
