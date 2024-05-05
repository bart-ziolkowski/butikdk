/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF3B00",
        beige: "#F4F0E6",
        purple: "#4E4187",
        blue: "#3083DC",
        green: "#43AA8B",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
