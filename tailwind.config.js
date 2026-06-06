/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './sections/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        nexa: ['Nexa Pro_Trial', 'Inter', 'Manrope', 'system-ui', 'sans-serif']
      },
      colors: {
        ink: '#07070d',
        panel: '#11111a',
        soft: '#1b1b27',
        pink: '#ff3fc5',
        violet: '#6640ff',
        flame: '#ff5126'
      },
      boxShadow: {
        glow: '0 0 46px rgba(255, 63, 197, 0.25)',
        card: '0 24px 80px rgba(0,0,0,0.28)'
      }
    }
  },
  plugins: []
};
