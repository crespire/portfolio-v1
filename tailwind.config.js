/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
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
      },
      fontSize: {
        //"dynamic-large": "clamp(3rem, 1.0435rem + 8.6957vw, 8rem)",
        "dynamic-large": "clamp(3rem, 0.4rem + 4vw, 3.5rem)",
        "dynamic-small": "clamp(1.25rem, 0.2rem + 2vw, 1.5rem)"
      },
    },
  },
  plugins: [],
}
