/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Hanken Grotesk", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to bottom, hsl(252, 100%, 67%), hsl(241, 81%, 54%))",
        "circle-gradient":
          "linear-gradient(to bottom, hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0))",
      },
    },
  },
  plugins: [],
};
