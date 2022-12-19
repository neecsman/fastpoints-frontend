/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      green: "#00C6BC",
      black: "#1E1E1E",
      fullbalck: "#212121",
      gray: "#4D4D4D",
      lightgray: "#EDEDED",
      white: "#FFFFFF",
      red: "#EA3B3B",
    },
  },
  plugins: [],
};
