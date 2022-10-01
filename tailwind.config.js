/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateAreas: {
        'layout': [
          ". faceU . .",
          "faceL faceF faceR faceB",
          ". faceD . ."
        ]
      },
      gridTemplateColumns: {
        'layout': "1fr 1fr 1fr 1fr"
      },
      gridTemplateRows: {
        'layout': "1fr 1fr 1fr"
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}