/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', 
    content: [
      './app/**/*.{js,ts,jsx,tsx}',      // for Next.js App directory
      './pages/**/*.{js,ts,jsx,tsx}',    // for Pages directory
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }