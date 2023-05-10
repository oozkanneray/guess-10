/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "currentBgColor": "#121213",
        "lightCurrentBgColor": "#262627",
        "questionTextColor" : "#60f086" ,
      },
      keyframes: {
        found: {
          "100%": { color: "#60f086" },
        },
        wrong: {
          "0%": { transform: "translate(10px)", border: "2px solid red" },
          "50%": { transform: "translate(-10px)" },
          "100%": { transform: "translate(0px)" },
        },
        closeTab: {
          "0%": {},
          "50%": { opacity: 0.5 },
          "100%": { opacity: 0, visibility: "hidden" },
        },
        openTab: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1, visibility: "visible" },
        },
      },
      animation: {
        "already-found": "found 0.3s linear forwards",
        "wrong-answer": "wrong 0.2s linear",
        "closing": "closeTab 0.2s linear forwards",
        "opening": "openTab 0.2s linear forwards",
      },
    },
  },
  plugins: [],
};
