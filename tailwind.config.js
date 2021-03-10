module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'balsamiq': ['Balsamiq Sans', 'Helvetica', 'Arial', 'sans-serif'],
        'montserrat': ['Montserrat', 'Arial', 'sans-serif'],
      },
      backgroundImage: theme => ( {
        'upcoming':"url('/src/assets/luxury-bedroom-suite-opacity-98.jpg')",
      }),
      maxWidth: {
        'xxs': '10rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
