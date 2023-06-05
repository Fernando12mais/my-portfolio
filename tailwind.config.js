/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}", "*.html"],
  theme: {
    extend: {
      keyframes: {
        light: {
          from: {
            boxShadow: "0 0 1.25rem .3125rem #1AD6FF",
          },
          to: {
            boxShadow: "0 0 1.25rem 0rem #1AD6FF",
          },
        },
        grow: {
          "0%": {
            width: ".625rem",
            color: "transparent",
            fontSize: 0,
          },

          "25%": {
            fontSize: 16,
          },
          "50%": {
            fontSize: 32,
          },
          "100%": {
            width: "100%",
            fontSize: 32,
          },
        },
        scale: {
          "0%": {
            transform: "scale(.7)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      colors: {
        primary: {
          content: "#f1f1f1",
          action: "#5AACF1",
          background: "#010000",
          contentBackground: "#D9D9D9",
        },
      },
      fontFamily: {
        content: "Playball, cursive",
        title: "Pinyon Script, cursive",
      },

      fontSize: {
        small: "2rem",
        medium: "2.25rem",
        big: "3rem",
        big2: "5rem",
        big3: "10rem",
      },
      maxWidth: {
        max: "90%",
        half: "50%",
        "8xl": "90rem",
      },
      backgroundImage: {
        portfolio1: "url(/src/assets/stain.svg)",
        portfolio2: "url(/src/assets/portfolio-2.png)",
        circle: "url(/src/assets/circle.svg)",
      },

      animation: {
        lighting: "light 1s infinite alternate",
        grow: "grow 3s forwards ease-out",
        scale: "scale .5s infinite alternate ease-in-out",
      },

      boxShadow: {
        lighting: "0px 0px .75rem .375rem rgba(84, 173, 255, 0.62)",
      },
    },
  },
  plugins: [],
};
