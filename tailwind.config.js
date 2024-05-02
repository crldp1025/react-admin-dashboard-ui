/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"']
      },
      colors: {
        'red': '#ee6b6e'
      }
    },
  },
  plugins: [],
}