const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "system-ui", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        background: {
          light: "#FFFFFF",
        },
        primary: {
          dark: "#113541",
          p1: "#454CF0",
          p2: "#3451E4",
          p3: "#9FAEFD",
          p4: "#A39BFF",
          p5: "#6C84DB",
          p6: "#C9F5EE",
          p7: "#edf4ff"
        },
        secondary: {
          gray: "#A2A2B7"
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('tailwindcss-neumorphism'),
    require("@tailwindcss/forms")({
      strategy: 'class',
    })
  ],
};
