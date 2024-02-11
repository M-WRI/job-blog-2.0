/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      mono: ["Space Mono", "monospace"],
    },
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        accent: {
          100: "#0c0074",
          200: "#0e008b",
          300: "#1000a2",
          400: "#1300b9",
          500: "#1800E8",
          600: "#1c00ff",
          700: "#2100ff",
          800: "#2600ff",
          900: "#2b00ff",
        },
      },
    },
  },
  plugins: [],
};
