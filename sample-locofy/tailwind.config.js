/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#fcfdff",
        bg: "#cbcce8",
        "accent-2": "#667085",
        blue: "#5429ff",
        black: "#000",
        "secondary-color": "#344054",
        "accent-1": "#d0d5dd",
        mediumorchid: "rgba(194, 99, 249, 0.06)",
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        "text-2": "Inter",
      },
      borderRadius: {
        "25xl": "44px",
        "21xl": "40px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
