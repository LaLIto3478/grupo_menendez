/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#2D3142',
        'navy-dark': '#1c1f2e',
        'navy-light': '#3a4260',
        brand: '#FC8703',
        'brand-dark': '#d97200',
        steel: '#4F5D75',
        acid: '#BFCC00'
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
