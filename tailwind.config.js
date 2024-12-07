/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          light: '#8B4513',
          DEFAULT: '#6F4E37',
          dark: '#5a3f2c',
        },
        cream: {
          light: '#FFF8DC',
          DEFAULT: '#FAEBD7',
          dark: '#DEB887',
        }
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(111, 78, 55, 0.1), 0 2px 4px -1px rgba(111, 78, 55, 0.06)',
      },
    },
  },
  plugins: [],
} 