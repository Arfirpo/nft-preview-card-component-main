/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontfamily: {
        'Outfit': ['"Outfit"', 'sans-serif']
      },
      colors:{
        'Soft-blue': 'hsl(215, 51%, 70%)',
        'Cyan': 'hsl(178, 100%, 50%)',
        'Very-dark-blue-body': 'hsl(217, 54%, 11%)',
        'Very-dark-blue-main': 'hsl(216, 50%, 16%)',
        'Very-dark-blue-line': 'hsl(215, 32%, 27%)',
        'White': 'hsl(0, 0%, 100%)',
        'attribute': 'hsl(228, 45%, 44%)'
      }
    },
  },
  plugins: [],
}

