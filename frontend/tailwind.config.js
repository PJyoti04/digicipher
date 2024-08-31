/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { "background-position": "0" },
          "40%": { "background-position": "400px" },
          "100%": { "background-position": "800px" },
        },
      },
      animation: {
        shine: "shine 5s infinite linear", // Increase duration for smoother animation
      },
      fontFamily: {
        audiowide: ["Audiowide", "sans-serif"],
        bungee: ["Bungee", "sans-serif"],
      },
    },
  },
  plugins: [],
};
