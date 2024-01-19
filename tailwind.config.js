/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
      },
      fontFamily: {
        extend: {},
        signature: ['Dancing Script'],
        source: ['Raleway'],
        paragraph: ['Roboto'],
      },
    },
    screens: {
      xxs: "320px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
