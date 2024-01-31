/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'crayola': {DEFAULT: '#0079FF'},
        'slate-gray': {DEFAULT: '#697C9A'},
        'true-blue': {DEFAULT: '#4B6A9B'},
        'gunmetal': {DEFAULT: '#2B3442'},
        'ghost-white': {DEFAULT: '#F6F8FF'},
        'white2': {DEFAULT: '#fefefe'},
        'oxford': {DEFAULT: '#141d2f'},
        'space-cadet': {DEFAULT: '#1e2a47'}
      }
    },
  },
  plugins: [],
}

