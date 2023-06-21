/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        progressBarRotate: "progressBarRotate 2s ease",
      },
      colors: {
        "sky-blue": "#e8f5f9",
        "deep-sea-blue": "#00005c",
        "gray-60": "#73717f",
        success: "#00ac31",
        "gray-20": "#a2a1ad",
      },
      fontFamily: {
        sans: ["Rubik", " sans-serif"],
      },
      keyframes: {
        progressBarRotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(90deg)",
          },
          "100%": {
            transform: "rotate(90deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
