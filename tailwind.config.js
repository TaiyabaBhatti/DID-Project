/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen-minus-header': 'calc(100vh - 4rem)', // Replace '4rem' with the header height
      },
      textColor:{

'light-purple':'#CBCBE7',
'greyish-purple':'#595880',

      },

      backgroundColor:{

        'light-purple':'#CBCBE7',
        'greyish-purple':'#595880',
        
              }
    },
  },
  plugins: [],
}

