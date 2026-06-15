/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Silkscreen"', 'monospace'],
        chicago: ['"Pixelify Sans"', 'system-ui', 'sans-serif'],
        body: ['"Geneva"', '"Helvetica Neue"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        mac: '2px 2px 0 0 #000',
        macwin: '4px 4px 0 0 rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}
