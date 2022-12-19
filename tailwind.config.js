module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "false",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        background: {
          800: "#2c304d",
          900: "#0F1624",
        },
        primary: "#f2f5f7",
        secondary: "#ffffffbf",
        accent: {
          100: "#fec576",
          200: "#13ADC7 ",
          300: "#945DD6",
          400: "#9cc9e3",
          500: "#F46737",
        },
        button: "#006bb8",
      },
      linear: "linear-gradient(270deg,#13ADC7 0%,#945DD6 100%)",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
