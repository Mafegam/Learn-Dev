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
      'sky': '#0369a1',
      'transparent': 'transparent',
      'current': 'currentColor',
      'black': 'colors.black',
      'white': 'colors.white',
      'rose': 'colors.rose',
      'pink': 'colors.pink',
      'fuchsia': 'colors.fuchsia',
      'purple': 'colors.purple',
      'violet': 'colors.violet',
      'indigo': 'colors.indigo',
      'blue': ' ',
      'lightBlue': 'colors.lightBlue', // Only in Tailwind CSS <=v2.1
      'cyan': 'colors.cyan',
      'teal': 'colors.teal',
      'emerald': 'colors.emerald',
      'green': 'colors.green',
      'lime': 'colors.lime',
      'yellow': 'colors.yellow',
      'amber': 'colors.amber',
      'orange': 'colors.orange',
      'red': 'colors.red',
      'slate': 'colors.slate',
      'zinc': 'colors.zinc',
      'gray': 'colors.gray',
      'neutral': 'colors.blueGray',
      'stone': 'colors.stone',
    },
    extend: {},
  },
  plugins: [require("tw-elements/plugin.cjs"),
  require('flowbite/plugin'),
  require('flowbite-typography'),
  ],
  darkMode: "class"
};

