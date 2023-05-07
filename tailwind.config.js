/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        found: {
          '0%': { color:("green") },
        },
        wrong: {
          "0%" : {transform:"translate(10px)", border:("2px solid red")   },
          "50%" : {transform:"translate(-10px)"},
          "100%" : {transform:"translate(0px)",},
        },
      },
      animation:{
        "already-found": 'found 0.3s linear',
        "wrong-answer": "wrong 0.2s linear",
      }
    },
  },
  plugins: [],
}