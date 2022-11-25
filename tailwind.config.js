/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin": "spin 0.9s linear infinite",
      },
      keyframes: {
        spin: {
          // '0%, 100%': { transform: 'rotate(360deg) translateZ(0)', },
          // '50%': { transform: 'rotate(3deg)' },
          '100%': { transform: 'rotate(360deg)'},
          }
      }
    },
  },
  plugins: [],
};
