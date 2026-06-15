/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Pixelify Sans"', 'monospace'],
        screen: ['"Silkscreen"', 'monospace'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        mac: '4px 5px 0 0 rgba(21,21,21,0.16)',
        macwin: '0 1px 0 rgba(255,255,255,0.7) inset, 6px 8px 0 rgba(21,21,21,0.15)',
        lift: '6px 7px 0 0 rgba(21,21,21,0.22)',
      },
    },
  },
  plugins: [],
}
