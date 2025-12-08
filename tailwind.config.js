/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        primaryText: "rgb(76, 98, 128)", // for headings
        secondaryText: "rgb(20, 36, 68)", // for smaller text
      },
    },
  },
  plugins: [],
};
