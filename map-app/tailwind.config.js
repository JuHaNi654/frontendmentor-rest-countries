module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        90: "90%",
      },
    },
    colors: {
      transparent: "transparent",
      white: "hsl(0, 0%, 100%)",
      "primary-blue": {
        600: "hsl(209, 23%, 22%)",
        800: "hsl(207, 26%, 17%)",
        900: "hsl(200, 15%, 8%)",
      },
      "primary-gray": {
        500: "hsl(0, 0%, 52%)",
        900: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
