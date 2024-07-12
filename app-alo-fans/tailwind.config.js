/** @type {import('tailwindcss').Config} */
import {colors} from "./constants/colors"
import {fonts} from "./constants/fonts"
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      width: {
        'custom': '100px',
      },
      height: {
        'custom': '100px',
      },
      colors,
      fonts,

    },
  plugins: [],
  }
}