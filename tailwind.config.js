/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: [ 'Poppins' ],

      },
      boxShadow: {
        'bs': '10px 10px 0 3px hsl(180, 3%, 14%)', // Ejemplo de un valor personalizado
      },
    },
  },
  plugins: [],
};
