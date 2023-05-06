/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#00031A",
      black: "#000000",
      "dark-grey": "#636363",
      grey: "#C4C4C4",
      "light-grey": "#E0E0E0",
      white: "#FFFFFF",
      background: "#F4F7FA",

      active: "#254A96",
      "active-outline": "#9EBBF3",
      focus: "#1D76EF",
      hover: "#446CBC",
      error: "#D42F1A",
      link: "#076CE0",
      "green-tag": "#559F21",
    },
    extend: {
      backgroundImage: {
        auth: "url('/auth-wallpaper.png')",
      },
    },
  },
  plugins: [],
};
