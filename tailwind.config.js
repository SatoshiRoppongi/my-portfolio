import { typography } from "@tailwindcss/typography";
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  // plugins: [require("@tailwindcss/typography")],
  plugins: [typography()],
};
