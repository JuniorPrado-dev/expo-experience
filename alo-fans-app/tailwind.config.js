/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkTheme:"class",
  theme: {
    extend: {
      colors: {
        primary: "#1F2937",
        secondary: "#F7FAFC",
        secondaryDark: "#1F2937",
        primaryDark: "#F7FAFC",
      }
    },
  },
  plugins: [],
}