/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'transparent': "transparent",
      'white': "#ffffff",
      'black': "#000000",
      'purple': "#8E33FF",
      'purple-100': "#F1EFFF",
      'purple-200': "#D9EFF6",
      'purple-300': "#ECEAF4",
      'purple-400': "#EFD6FF",
      'gray-30': "#C4CDD5",
      'gray-40': "#F4F6F8",
      'gray-50': "#DFE3E8",
      'gray-100': "#637381",
      'gray-200': "#79747E",
      'gray-300': "#49454F",
      'gray-400': "#A0A0A0",
      'gray-500': "#919EAB",
      'gray-600': "#79767D",
      'gray-700': "#F7F7F5",
      'gray-800': "#212B36",
      'gray-900': "#454F5B",
      'warning-light': "#FFD666",
      'blue-100': "#CAFDF5",
      'blue-200': "#00C6EA",
      'teal-100': "#08D4D4"
    },
    fontFamily: {
      primary: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
});
