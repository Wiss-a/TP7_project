/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/main/resources/templates/**/*.html',
    './src/main/resources/static/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        ComfortaaX: ['ComfortaaX', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
