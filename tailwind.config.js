const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    styled: true,
    themes: [
      {
        will: {
          "primary": "#9C1734",
          "secondary": "#28bE78",
          "accent": "#11AED5",
          "neutral": "#292D22",
          "base-100": "#161212",
          "info": "#331D99",
          "success": "#33996E",
          "warning": "#CC6D33",
          "error": "#FF1D42",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "will",
  },
  plugins: [
    require('tailwind-scrollbar'),
    require("@tailwindcss/typography"),
    require("daisyui"),
    plugin(({ matchUtilities, theme }) => {
    matchUtilities(
      {
        "animation-duration": (value) => {
          return {
            "animation-duration": value,
          };
        },
      },
      {
        values: theme("transitionDelay"),
      }
    );
  }),
],
}