/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    require("tw-elements-react/dist/plugin.cjs"),
  ],
}

