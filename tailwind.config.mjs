/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'off-white': '#F7F4EE',
        cream: '#FCFAF4',
        'deep-forest': '#2A3526',
        'sage-grey': '#6E7868',
        pistachio: '#9DBE8D',
        'forest-green': '#3D5236',
        terracotta: '#C9876A',
        'wheat-beige': '#E8DFC9',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Caveat', 'cursive'],
      },
      animation: {
        'fade-in-soft': 'fadeInSoft 0.7s ease-out forwards',
        'gentle-rise': 'gentleRise 0.6s ease-out forwards',
        'subtle-zoom': 'subtleZoom 1s ease-out forwards',
      },
      keyframes: {
        fadeInSoft: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gentleRise: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        subtleZoom: {
          '0%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      transitionTimingFunction: {
        'breathe': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'out-soft': 'cubic-bezier(0.0, 0.0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
