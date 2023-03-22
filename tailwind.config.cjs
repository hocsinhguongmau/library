/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createThemes } = require('tw-colors')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    createThemes({
      light: {
        primary: '#B35A1E',
        secondary: '#704214',
        accent: '#F7A82C',
        background: '#fff',
        text: '#333',
        link: '#4C2C1D',
        success: '#28a745',
        error: '#ffc107',
        warning: '#dc3545'
      },
      dark: {
        primary: '#DAA520',
        secondary: '#CD853F',
        accent: '#FFD700',
        background: '#333',
        text: '#fff',
        link: '#F5DEB3',
        success: '#FFD700',
        error: '#FF5733',
        warning: '#FFA500'
      }
    })
  ]
}
