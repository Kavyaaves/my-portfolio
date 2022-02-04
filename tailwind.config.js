module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'dancing': ['Dancing Script'],
      'elite': ['Special Elite'],
    },
    backgroundColor: {
      "light": "#bae6fd",
      "medium": "#0891b2",
      "dark": "#0c4a6e",
    },
    colors: {
      "light": "#bae6fd",
      "medium": "#0891b2",
      "dark": "#0c4a6e",
    },
    extend: {

    },
  },

  variants: {
    extend: {},
  },
  important: true,
  plugins: [],
}
