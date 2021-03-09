module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'balsamiq': ['Balsamiq Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: theme => ( {
        'upcoming':"url('/src/assets/luxury-bedroom-suite.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
