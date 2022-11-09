/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens:{
      "sm": "240px",
      "md": "320px",
      "lg": "1240px"
    },

    extend: {
      colors: {
        gray: {
          100: "#E1E1E6",
          200: "#8D8D99",
          600: "#323238",
          800: "#202024",
          900: "#121214",
        },
        black:{
          700: "#09090A"
        },
        ignite: {
          500: "#129E57",
        },
        nlwYellow: {
          500: "#F7DD43",
        },
      },

      fontFamily: {
        sans: "Roboto, sans-serif",
      },
    },
  },
  plugins: [],
};
