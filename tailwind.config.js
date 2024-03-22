/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { 
      fontFamily:{
        'life':["Life Savers", "serif"]
      },
      colors:{
        'padauk':'#fcba03',
        'jade':'#00a86b',
        'dabian':'#7B3F00'
      }
    },
   
  },
  plugins: [],
}