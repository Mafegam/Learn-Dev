/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/js/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ], theme: {
    colors: {
      '1C1B33': '#1C1B33',
      'purple': '#2EBFE2',
      'purpleLight': '#1C1B33',
      'sky': '#0369a1'
    },
    extend: {},
  },
  plugins: [require('tw-elements/plugin.cjs'),
  require('flowbite/plugin')

  ],
  darkMode: "class"
};

