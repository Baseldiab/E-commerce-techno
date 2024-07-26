/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B6392",
        secondary: "#FA8232",
        featuresBg: "#DDE8EF",
        secondaryText: "#a5a5a5",
    
      },
      fontFamily: {
        title: ["hkgroteskpro", "Arial", "Helvetica", "sans-serif"],
        thinTitle: ["Lato", "Arial", "Helvetica", " sans-serif"],
        text: ["Beiruti", "sans-serif"]
      },
    },
  },
  plugins: [],
}

