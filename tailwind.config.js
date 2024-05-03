/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      inter: ["inter", "sans-serif"],
    },
    extend: {
      height: {
        '128': '32rem',
        '144': '36rem',
        '156': '39rem',
        'screenxs': '14.5vh',
        'screensm' : '30vh',
        'screenmd': '22vh',
        'screenbase': '70vh',
        'screenlg': '65vh',

      },
      fontSize: {
        '2xs': '0.6rem',
        '3xs': '0.45rem'
      },
      screens: {
        'base': '1920px'
      },
      aspectRatio: {
        '2/3': '2 / 3',
      }
    },
  },
  plugins: [],
}
