/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-orange',
    'bg-teal',
    'bg-green',
    'hover:bg-orange',
    'hover:bg-teal',
    'hover:bg-green',
    'text-orange',
    'text-teal',
    'text-green',
  ],
  theme: {
    // extend: {},
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      'off-white': "#F2F2F2",
      orange: '#e28625',
      teal: '#006971',
      green: '#004140'
    }
  },
  plugins: [],
}

