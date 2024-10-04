/** @type {import('tailwindcss').Config}*/
export default {
  content: ["./index.html", "./src/**/*.{vue,js,mjs,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      keyframes: {
        infiniteScroll1: {
          '100%': { translate: "98%" }
        },
        infiniteScroll2: {
          '100%': { translate: "-98%" }
        },
      },
      animation: {
        'infinite1': 'infiniteScroll1 8s 1s linear infinite',
        'infinite2': 'infiniteScroll2 8s 1s linear infinite',
      }
    },
  },
  plugins: [],
};

