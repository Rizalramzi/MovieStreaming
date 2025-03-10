/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark_blue : '#19182C',
        light_blue : '#282A3E',
        grey : '#66667C'
      },
      screens:{
        sm : '320px',
        md : '375px',
        lg : '425px',
        xl : '640px'
      }
    },
  },
  plugins: [],
}

