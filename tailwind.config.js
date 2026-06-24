/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['TT Interphases Pro', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['TT Interphases Pro Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      screens: {
        iphone: { max: '430px' },
      },
      keyframes: {
        kenburns: {
          '0%':   { transform: 'scale(1.12) translateX(20px) translateY(10px)' },
          '100%': { transform: 'scale(1) translateX(0px) translateY(0px)' },
        },
      },
      animation: {
        kenburns: 'kenburns 8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
