/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#4facfe',
          600: '#3b82f6',
          700: '#1d4ed8',
        },
        gradient: {
          from: '#667eea',
          to: '#764ba2',
        }
      },
      animation: {
        'float': 'float 20s infinite linear',
        'slide-in-up': 'slideInUp 1s ease-out',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '100%': { transform: 'translateY(-100px) rotate(360deg)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        'thai': ['Sarabun', 'sans-serif'],
      },
    },
  },
  plugins: [],
}