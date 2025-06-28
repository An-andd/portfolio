/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'blob': 'blob 7s infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
        'spin-reverse': 'spin-reverse 6s linear infinite',
        'shine': 'shine 2s infinite',
        'wiggle': 'wiggle 1s ease-in-out',
        'bounce-in': 'bounce-in 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'zoom-in': 'zoom-in 0.5s ease-out',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'rainbow': 'rainbow 3s linear infinite',
      },
      keyframes: {
        'fade-in-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'blob': {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            'box-shadow': '0 0 20px rgba(59, 130, 246, 0.5)',
          },
          '50%': {
            'box-shadow': '0 0 30px rgba(59, 130, 246, 0.8)',
          },
        },
        'spin-slow': {
          'from': {
            transform: 'rotate(0deg)',
          },
          'to': {
            transform: 'rotate(360deg)',
          },
        },
        'spin-reverse': {
          'from': {
            transform: 'rotate(360deg)',
          },
          'to': {
            transform: 'rotate(0deg)',
          },
        },
        'shine': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        'wiggle': {
          '0%, 7%': {
            transform: 'rotateZ(0)',
          },
          '15%': {
            transform: 'rotateZ(-15deg)',
          },
          '20%': {
            transform: 'rotateZ(10deg)',
          },
          '25%': {
            transform: 'rotateZ(-10deg)',
          },
          '30%': {
            transform: 'rotateZ(6deg)',
          },
          '35%': {
            transform: 'rotateZ(-4deg)',
          },
          '40%, 100%': {
            transform: 'rotateZ(0)',
          },
        },
        'bounce-in': {
          '0%': {
            transform: 'scale(0.3)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1.05)',
          },
          '70%': {
            transform: 'scale(0.9)',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'slide-in-right': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'zoom-in': {
          '0%': {
            transform: 'scale(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'heartbeat': {
          '0%': {
            transform: 'scale(1)',
          },
          '14%': {
            transform: 'scale(1.3)',
          },
          '28%': {
            transform: 'scale(1)',
          },
          '42%': {
            transform: 'scale(1.3)',
          },
          '70%': {
            transform: 'scale(1)',
          },
        },
        'rainbow': {
          '0%': { color: '#ff0000' },
          '16.66%': { color: '#ff8000' },
          '33.33%': { color: '#ffff00' },
          '50%': { color: '#00ff00' },
          '66.66%': { color: '#0080ff' },
          '83.33%': { color: '#8000ff' },
          '100%': { color: '#ff0000' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
    },
  },
  plugins: [],
};