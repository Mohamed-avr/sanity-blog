/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      fontFamily: { 
       'body-01' :  ['Cairo'] , 
       'body-02' : ['Jost'],
       'body-03' : ['poppins'],
       'body-04' : ['tajawal'],
      } , 
    },
  },
  plugins: [],
}
