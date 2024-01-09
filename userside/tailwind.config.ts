import type { Config } from "tailwindcss";

import colors from "tailwindcss/colors";

const config: Config = {
  screens: {
    xsm: "380px",
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#141414",
      secondary: "#EADECE",
      textPrimary: "#EDE5D8",
      tertiary: "#AE9775",
      blur: "#A89579",
      ...colors,
    },
    extend: {
      screens: {
        xsm: "380px",
        largeMobile: "430px",
        tablet: "744px",
        "tablet-lg": "844px",
        ssm: "375px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
