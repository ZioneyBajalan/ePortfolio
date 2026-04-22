/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f5f1e8',
          100: '#e8e4d9',
          200: '#d4cfc4',
          300: '#a89f94',
          400: '#80776b',
          500: '#6ba876',
          600: '#5a9d66',
          700: '#4a8a52',
          800: '#3a6d3e',
          900: '#2d5240',
          950: '#1a3a2a',
        },
      },
      animation: {
        'parallax': 'parallax 20s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out',
      },
      keyframes: {
        parallax: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
