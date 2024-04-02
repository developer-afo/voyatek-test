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
        // primary: "#0D6EFD",
        // secondary: "#0A369D",
        // nav: "#647995",
        // "dark-blue": "#000031",

        "text-white-primary": "#fff",
        "neutral-300": "#f0f2f5",
        "primary-700": "#0054e4",
        midnightblue: "#0a369d",
        royalblue: "#305cc4",
        "primary-600": "#0d6efd",
        "neutral-400": "#e4e7ec",
        "text-black-secondary": "#647995",
        "text-black-primary": "#1d2433",
        "text-black-secondary1": "#676e7e",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#d9d9d9",
        },
        "neutral-900": "#344054",
        "primary-100": "#e7f0ff",
        dodgerblue: "#3394ff",
        "primary-1100": "#000031",
        "neutral-500": "#d0d5dd",
        "secondary-100": "#fef4e6",
        "secondary-900": "#7a4504",
        "neutral-600": "#98a2b3",
        primary: "#0a6de4",
      },
      spacing: {},
      fontFamily: {
        "body-b4-medium": "Poppins",
      },
      borderRadius: {
        "13xl": "32px",
      },
    },
    // fontSize: {
    //   xs: "12px",
    //   lg: "18px",
    //   base: "16px",
    //   "9xl": "28px",
    //   "3xl": "22px",
    //   xl: "20px",
    //   sm: "14px",
    //   "5xl": "24px",
    //   lgi: "19px",
    //   inherit: "inherit",
    // },
    // screens: {
    //   mq2425: {
    //     raw: "screen and (max-width: 2425px)",
    //   },
    //   mq1800: {
    //     raw: "screen and (max-width: 1800px)",
    //   },
    //   mq1125: {
    //     raw: "screen and (max-width: 1125px)",
    //   },
    //   mq450: {
    //     raw: "screen and (max-width: 450px)",
    //   },
    // },
  },
  plugins: [],
};
export default config;
