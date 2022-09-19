const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal:colors.teal,
        orange:colors.orange,
      },
    },
  },
  variants: {
    extend: {
      border: ['last'],
    }
  },
  plugins: [],
  prefix: 'jui-'
}
