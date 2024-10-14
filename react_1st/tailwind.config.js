/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      spacing: {
      'maincontainer': '1320px',
    },
    
    fontSize: {
      'fsize':'24px',
    },
    colors: {
      'background': '#FAE3B6',
    },
    colors: {
      'backbg': '#FDBB57 ',
    },
   
  },
  },
  plugins: [],
}

