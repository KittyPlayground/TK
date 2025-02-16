/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}','assets/**/*.{png,svg,PNG}'],
  theme: {
    extend: {
      colors: {
        green: {
          400: '#4ade80',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        light: ['Inter Light', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        roboto: ['Roboto', 'system-ui', 'sans-serif'],

      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'move-left': 'move-left 30s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'move-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};