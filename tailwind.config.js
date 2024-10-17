import prelinePlugin from "preline/plugin";
import tailwindCssForm from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#696cff",
        bgPattern: "#efeff9",
      },
    },
  },
  plugins: [prelinePlugin, tailwindCssForm],
};
