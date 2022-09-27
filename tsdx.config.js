const postcss = require('rollup-plugin-postcss');
const tailwindcss = require('tailwindcss');
const colors = require('tailwindcss/colors');
const replace = require('@rollup/plugin-replace');
const tailwindcssConfig = require('./tailwind.config');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        tailwindcssConfig,
      })
    );
    config.plugins = config.plugins.map((p) =>
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
