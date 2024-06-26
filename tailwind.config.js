/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        prompt: ["prompt", "sans-serif"],
      },
      screens: {
        width: "1440px",
      },
    },
  },
  plugins: [],
};
