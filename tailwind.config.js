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
            width: "0%",
          },

          "100%": {
            width: "100%",
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
        fadeIn: {
          from: {
            opacity: 0,

            filter: "blur(20px)",
          },
          to: {
            opacity: 1,
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

      maxWidth: {
        max: "90%",
        half: "50%",
        "8xl": "90rem",
        "9xl": "120rem",
      },
      backgroundImage: {
        portfolio1: "url(/src/assets/stain.svg)",
        portfolio2: "url(/src/assets/portfolio-2.png)",
        circle: "url(/src/assets/circle.svg)",
      },

      animation: {
        lighting: "light 1s infinite alternate",
        grow: "grow 1.5s forwards ease-out",
        scale: "scale .5s infinite alternate ease-in-out",
        "fade-in": "fadeIn 1s ease-in-out",
      },

      boxShadow: {
        lighting: "0px 0px .75rem .375rem rgba(84, 173, 255, 0.62)",
      },
    },
  },
  plugins: [],
};
