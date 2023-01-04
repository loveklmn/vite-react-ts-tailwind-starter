/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  corePlugins: {
    preflight: false // disable tailwind's default styles
  },
  important: true,   // prioritize tailwind's styles over custom styles
  theme: {
    extend: {}
  },
  plugins: []
};
