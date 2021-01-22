module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill-12": "repeat(auto-fill, minmax(12rem, 1fr))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        green: "#1DB954",
        dark: "#121212",
        light: "#282828",
        lightest: "#B3B3B3",
        darkest: "#191414",
        dim: "#181818",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
