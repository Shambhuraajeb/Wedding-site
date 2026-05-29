export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Cormorant Garamond', 'Georgia', 'serif'],
        script: ['Great Vibes', 'Dancing Script', 'cursive'],
      },
      colors: {
        ivory: '#f8f1eb',
        champagne: '#fce8f4',
        baby: '#ffd6e8',
        'baby-dark': '#c44f76',
        blush: '#f8c2db',
        rosewater: '#edb0d8',
        gold: '#e79ac4',
        rosewood: '#7b3f5f',
        cream: '#fff7ef',
        soft: '#6a5343',
      },
      boxShadow: {
        luxe: '0 30px 80px rgba(90, 30, 70, 0.18)',
        glow: '0 0 120px rgba(248, 194, 219, 0.15)',
      },
      backgroundImage: {
        'soft-radial': 'radial-gradient(circle at top, rgba(255, 240, 250, 0.9), transparent 55%)',
      },
      letterSpacing: {
        widest: '0.32em',
      },
    },
  },
  plugins: [],
}
