/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',
      },
      fontFamily: {
        body: ['Scope One']
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow' : {
          textShadow: `
            3px 3px 0 #fff,
            -3px 3px 0 #fff,
            3px -3px 0 #fff,
            -3px -3px 0 #fff,
            3px 0 0 #fff,
            -3px 0 0 #fff,
            0 3px 0 #fff,
            0 -3px 0 #fff
          `
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}

