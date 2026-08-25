/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#faf9f7',
          800: '#f4f2ee',
          700: '#ece9e3',
          600: '#e0dcd3',
        },
        ink: {
          900: '#18181b',
          800: '#27272a',
          700: '#3f3f46',
          600: '#52525b',
          500: '#71717a',
          400: '#a1a1aa',
          300: '#d4d4d8',
          200: '#e4e4e7',
        },
        accent: {
          400: '#3385ff',
          500: '#0066FF',
          600: '#0052cc',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s infinite linear',
        'float': 'float 9s ease-in-out infinite',
        'float-delayed': 'float 11s ease-in-out infinite 1.5s',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 102, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 102, 255, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(2%, -4%) scale(1.06)' },
        },
      },
    },
  },
  plugins: [],
};
