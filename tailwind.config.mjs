/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Industrial-craft espresso palette
        espresso: '#1a0e08',
        cream: '#f5ead4',
        copper: '#c97b3a',
        ash: '#5c5048',
        crema: '#e8c89a',
        // Legacy aliases re-mapped to new palette so existing class usage adapts visually
        'off-white': '#f5ead4',
        'deep-forest': '#1a0e08',
        'sage-grey': '#5c5048',
        pistachio: '#c97b3a',
        'forest-green': '#3a1d10',
        terracotta: '#c97b3a',
        'wheat-beige': '#e8c89a',
      },
      fontFamily: {
        display: ['"Antonio"', '"Bebas Neue"', 'sans-serif'],
        body: ['"Lora"', 'serif'],
        accent: ['"DM Serif Text"', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in-soft': 'fadeInSoft 0.7s ease-out forwards',
        'gentle-rise': 'gentleRise 0.6s ease-out forwards',
        'subtle-zoom': 'subtleZoom 1s ease-out forwards',
        'spin-slow': 'spin 60s linear infinite',
        'spin-slower': 'spin 120s linear infinite',
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
