module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF',
        brandBlack: '#0A0A0A'
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
