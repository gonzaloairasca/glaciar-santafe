/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#024F9D",
        "text-blue": "#003A75",
        "light-blue": "#EBF5FF",
        "blur-black": "191919b5",
      },
    },
  },
  plugins: [],
};
