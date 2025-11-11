/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        choco: {
          50: "#fdfaf7",
          100: "#f7ede3",
          200: "#ead5b7",
          300: "#dbb67d",
          400: "#ca9444",
          500: "#b3762a",
          600: "#945d21",
          700: "#77491d",
          800: "#5a391a",
          900: "#3f2813",
        },
      },
      fontFamily: {
        serif: ['"Merriweather"', "serif"],
        sans: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
