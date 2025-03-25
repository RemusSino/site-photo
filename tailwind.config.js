/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/_document.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        // Add any specific colors used in your design
      },
    },
  },
  plugins: [],
  safelist: [
    'aspect-[3/4]',
    'aspect-square',
    'aspect-[4/3]',
    'aspect-[16/9]',
    'text-right',
    'text-left',
    'ml-auto',
    'bg-black',
    'text-yellow-600',
    'bg-white',
    'text-black',
  ]
} 