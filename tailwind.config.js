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
    extend: {
      fontSize: {
        '2xs': '0.6rem',
        '3xs': '0.45rem'
      }
    },
  },
  plugins: [],
}
