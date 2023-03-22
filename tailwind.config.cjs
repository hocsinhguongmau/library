/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createThemes } = require('tw-colors')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    createThemes({
      light: {
        background: '#f5f5f5',
        text: '#333333',
        primary: '#0088cc',
        'complementary-1': '#ffbf00',
        'complementary-2': '#4caf50',
        'neutral-1': '#333333',
        'neutral-2': '#f5f5f5',
        error: '#ff4d4d',
        success: '#33cc33',
        warning: '#ffcc00'
      },
      dark: {
        background: '#222222',
        text: '#f5f5f5',
        primary: '#00bfff',
        'complementary-1': '#ffd700',
        'complementary-2': '#8bc34a',
        'neutral-1': '#f5f5f5',
        'neutral-2': '#222222',
        error: '#ff6666',
        success: '#66ff66',
        warning: '#ffff66'
      }
    })
  ]
}
