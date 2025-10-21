/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        flamingo: '#f06236',
        supernova: '#fcc809',
        'custom-black': '#010101',
        'custom-white': '#fdfdfd',
        'cape-cod': '#414342',
        gunsmoke: '#838888',
        'tonys-pink': '#e7ac94',
        hacienda: '#8b7813',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

