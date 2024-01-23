/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "darkMode": "class",
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        SourceSansPro: ["Source Sans Pro", "sans-serif"],
    },

    colors: {
      'background-color': '#ECECEE',
      'primaryRed': '#E22222',
      'primaryGrey': '#BEBEC6',
    },
    },
  },
  plugins: [],
}