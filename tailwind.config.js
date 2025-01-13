/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(96.67deg, #FAF100 0%, #FDC400 49.98%, #FFA600 99.97%)',
      },
      dropShadow: {
        'arrow': '5px 5px 1px rgba(255, 255, 255)'
      },
      backdropBlur: {
        100: '100px'
      },
      animation: {
        width: 'width'
      },
      keyframes: {
        width: {
          '0%': { width: 'auto', left: 'auto' },
          '100%': { width: '100%', left: '0' }
        }
      }
    },
  },
  plugins: [],
}