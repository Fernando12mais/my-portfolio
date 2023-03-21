/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        contentIn: {
          "0%": {
            filter: "blur(5px)",
            opacity: 0,
            transform: "translateY(1rem)",
          },
          "100%": {
            opacity: 1,
            filter: "blur(0px)",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        contentIn: "contentIn 700ms ease-in-out",
      },
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
