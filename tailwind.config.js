module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
      require('tailwind-scrollbar-hide'),
  ],
}
