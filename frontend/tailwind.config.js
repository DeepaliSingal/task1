module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    textColor: theme=> theme('colors'),
    textColor: {
      'primary': '#CDD6E8',
      'secondary': '#24B9BF',
    },
    backgroundColor: theme=> ({
      ...theme('colors'),
      'primary':'#7991BD',
    })
  },
  plugins: [],
}