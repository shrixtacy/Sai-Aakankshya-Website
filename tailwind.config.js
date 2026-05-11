module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'wallnut-yellow': '#FDC41F',
        'wallnut-dark': '#202A30',
        'wallnut-mid': '#2D3A42',
        'wallnut-light': '#698996',
        'wallnut-bg': '#F5F4F0',
        'wallnut-white': '#FFFFFF',
        'wallnut-text': '#202A30',
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0078ff',
          dark: '#0057b8',
        },
        secondary: {
          light: '#f8f9fa',
          DEFAULT: '#e9ecef',
          dark: '#dee2e6',
        },
      },
      fontFamily: {
        sans: ['var(--font-primary)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
