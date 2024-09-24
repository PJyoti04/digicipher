/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        exo2: ['Exo 2', 'sans-serif'],
        pressStart: ['"Press Start 2P"', 'cursive'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        audiowide: ['Audiowide', 'cursive'],
        fira: ['Fira Code', 'monospace']
      },
    },
  },
  plugins: [],
};
