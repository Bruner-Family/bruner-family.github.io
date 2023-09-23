module.exports = {
  content: ["./templates/**/*.html", "./theme/**/*.html"],
  theme: {},
  darkMode: 'class', // or 'media' or 'class'
  variants: {},
  plugins: [
      require('@tailwindcss/typography'),
  ],
};
