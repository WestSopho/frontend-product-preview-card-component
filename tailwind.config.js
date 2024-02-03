/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        "pure-white": "#FFFFFF",
        "cream": "#F2EAE2",
        "aurometal-saurus": "#6C7289",
        "deep-aquamarine": "#3D8168",
        "deep-aquamarine-hover": "#1A4032", 
        "gunmetal": "#1C232B"
      }, 
      fontFamily:{
        display: 'Fraunces, sans-serif',
        body: "Montserrat, sans-serif",
      },
      letterSpacing:{
        "widest-2": '.25rem',
      }
    },
  },
  plugins: [
  ],
}

