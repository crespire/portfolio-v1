/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'coffee': '#5C4B51',
      'lake': '#8CBEB2',
      'sand': '#F2EBBF',
      'tangerine': '#F3C486',
      'salmon': '#E6746C',
      'pale': '#FCFBF2',
    },
    extend: {
      fontFamily: {
        "barlow": ['Barlow', 'sans-serif']
      }
    },
  },
  plugins: [],
}
