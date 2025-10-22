/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      fontFamily: {
        'sans': ['var(--font-general-sans)', 'system-ui', 'sans-serif'],
        'general': ['var(--font-general-sans)', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      }
    },
  },
  plugins: [],
}
