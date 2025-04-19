module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-in-out',
        'shine': 'shine 2s infinite',
        'glow-text': 'glowText 2s infinite alternate',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%) rotate(-45deg)' },
          '100%': { transform: 'translateX(100%) rotate(-45deg)' },
        },
        glowText: {
          '0%': { textShadow: '0 0 5px rgba(245, 158, 11, 0.8)' },
          '100%': { textShadow: '0 0 20px rgba(245, 158, 11, 1)' },
        },
      },
      colors: {
        'red-900': '#1a0000',
        'red-800/20': 'rgba(102, 0, 0, 0.2)',
        'red-500/30': 'rgba(255, 59, 48, 0.3)',
        'red-300': '#ff6666',
        'red-400': '#ff4d4d',
        'red-600': '#e60000',
        'red-700': '#cc0000',
      },
    },
  },
  plugins: [],
};
