const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xxxs: '0.6rem',
      xxs: '0.7rem',
    },
    extend: {
      colors: {
        teal: colors.teal,
        orange: colors.orange,
      },
    },
  },
  variants: {
    extend: {
      border: ['last'],
    },
  },
  plugins: [],
  prefix: 'jui-',
};
