const postcss = require('rollup-plugin-postcss');
const tailwindcss = require('tailwindcss');
const colors = require('tailwindcss/colors');
const replace = require('@rollup/plugin-replace');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          tailwindcss({
            purge: ['./src/**/*.{html,js,ts,jsx,tsx}'],
            darkMode: false, // or 'media' or 'class'
            theme: {
              extend: {
                colors: {
                  teal: colors.teal,
                  orange: colors.orange,
                },
              },
            },
            variants: {
              extend: {},
            },
            plugins: [],
            prefix: 'jui-',
          }),
        ],
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      })
    );
    config.plugins = config.plugins.map(p =>
      p.name === 'replace'
        ? replace({
            'process.env.NODE_ENV': JSON.stringify(options.env),
            preventAssignment: false,
          })
        : p
    );
    return config;
  },
};
