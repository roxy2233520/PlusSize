/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: '#800020',
        softpink: '#FFF0F5',
        frosted: '#f8f8f8'
      },
      boxShadow: {
        glass: '0 8px 30px rgba(0,0,0,0.12)'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
}
