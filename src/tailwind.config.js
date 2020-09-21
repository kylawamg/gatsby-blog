module.exports = {
  important: false,
  purge: [],
  theme: {
    fontFamily: {
      display: ["Staatliches", "sans-serif"],
      body: ["Staatliches", "sans-serif"],
    },
    colors: {
      primary: "#5c6ac4",
      secondary: "#ecc94b",
      indigo: "#00ff00",
    },
    extend: {
      colors: {
        indigo: {
          lighter: "#b3bcf5",
          default: "#5c6ac4",
          dark: "#000000",
        },
      },
      margin: {
        "96": "24rem",
        "128": "32rem",
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover"],
  },
}
