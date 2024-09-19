/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {  theme: {
      extend: {
        screns:{
         'xs': '350px',// Extra small Devices
         'sm': '640px', // Small devices
         'md': '768px', // Medium devices
         'lg': '1024px', // Large devices
         'xl': '1280px', // Extra Large devices
         '2xl': '1536px', // 2xl devices
        }
      },
    },},
  },
  plugins: [],
}

