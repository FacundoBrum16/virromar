const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'mypoint': '1900px',
      },
      colors: {
      fondo: '#FCFCFC',
      darkblue: '#222155',
      hoverblue: '#4D4C76',
      },

      fontFamily: {
        body: ['Poppins']
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '300': '60rem',
        '200': '50rem',
        '150' : '41rem',
        '100': '32rem',
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
