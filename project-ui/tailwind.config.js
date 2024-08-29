/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',"./node_modules/flowbite/**/*.js"], // Scans all JS/JSX/TS/TSX files in the src directory
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
],
};
