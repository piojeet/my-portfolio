/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      'sm': "480px",
      'md': "768px",
      'lg': "976px",
      'xl': "1300px",
      '2xl': "1536px",
    },
    extend: {
      colors: {
        sectionColor: "hsl(209, 100%, 97%)",
        darkBodyColor: "hsl(216, 100%, 4%)",
        darkSectionColor: "hsl(211, 100%, 12%)",
        primaryColor: "hsl(209, 87%, 21%)",
        primaryColorLight: "hsl(209, 74%, 45%)",
        whiteColor: "#fff",
        textColor: "#DDD",
        secondaryColor: "red"
      },
      keyframes: {
        move: {
          "50%": { transform: "scale(1.1)" }
        }
      },
      animation: {
        scaleAnimation: "move 3s linear infinite"
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "10px",
        md: "30px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      Londrina: ["Londrina Outline", "sans-serif"],
    },
  },
  plugins: [],
};
