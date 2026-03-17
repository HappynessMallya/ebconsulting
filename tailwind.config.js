/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3e519e',
          dark: '#2e3d7a',
          light: '#6578b1',
          50: '#eef0f9',
          100: '#d5d9f0',
        },
        secondary: {
          DEFAULT: '#ff941f',
          light: '#ffb05a',
          dark: '#e07800',
        },
        navy: {
          DEFAULT: '#0d1b2a',
          light: '#152236',
          dark: '#080f18',
        },
        charcoal: '#1a1f2e',
        neutral: {
          charcoal: '#1a1f2e',
          grey: '#6B7280',
        },
        ink: {
          DEFAULT: '#111827',
          muted: '#4b5563',
          subtle: '#9ca3af',
        },
        surface: {
          DEFAULT: '#ffffff',
          soft: '#f8f9fc',
          muted: '#f1f3f9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-xl': ['3.75rem', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'slide-in': 'slideIn 0.7s ease-out forwards',
        'pulse-slow': 'pulseSlow 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(28px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-28px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.3', transform: 'translateY(0)' },
          '50%': { opacity: '0.7', transform: 'translateY(-4px)' },
        },
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
