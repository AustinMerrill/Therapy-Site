module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: "#F36F68",
        },
        teal: {
          DEFAULT: "#A6DCE6",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
