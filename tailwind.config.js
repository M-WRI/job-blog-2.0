/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      mono: ["Space Mono", "monospace"],
    },
    screens: {
      dashBoardBrakePoint: "550px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};
