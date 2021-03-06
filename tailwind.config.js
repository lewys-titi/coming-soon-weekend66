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
        'upcoming':"url('/src/assets/luxury.jpg')",
      }),
      maxWidth: {
        'xxs': '10rem',
      },
      screens: {
        'tb': '801px',
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
