
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        c1: '#FF6A52', // Acento vibrante / Fuego mágico
        c2: '#38040E', // Sangre oscura / Fondos secundarios
        c3: '#23062E', // Púrpura noche / Fondo principal
        c4: '#010101', // Negro abismo / Sombras y bordes
        c5: '#F4EADE', // Pergamino / Textos principales
        c6: '#A00008', // Carmesí / Títulos y peligro
      },
      fontFamily: {
        fantasy: ['"Cinzel"', 'serif'],
        body: ['"Lora"', 'serif'],
      },
      boxShadow: {
        'arcane': '0 0 15px rgba(255, 106, 82, 0.4)',
        'arcane-strong': '0 0 25px rgba(255, 106, 82, 0.7)',
      }
    }
  },
  plugins: [],
}
