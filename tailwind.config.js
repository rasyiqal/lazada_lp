/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./pages/lazaforu.html"],
  theme: {
    extend: {
      colors:{
        'lazada':'#F73463',
        'lazada2':'#F65048',
        'lazada3':'#F93486',
        'lazada4':'#F65145',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.line-clamp-2': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '2',
          'line-clamp': '2',
        },
      })
    },
  ],
}

