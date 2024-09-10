/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: '#1b1b1b',
        'neutral-focus': '#333333',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}