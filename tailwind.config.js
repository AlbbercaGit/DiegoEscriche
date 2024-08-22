/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ibm-plex-mono', 'sans-serif'], // Reemplaza "Nombre de la Fuente" con el nombre real de la fuente que importaste.
        // Puedes agregar más fuentes aquí si lo necesitas.
      },
    },
  },
  plugins: [],
}
