/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation : {
        "loop-scroll" :"loop-scroll 50s linear infinite",
        "spin-slow": "spin 100s linear",
        
      },

      keyframes:{
        "loop-scroll" :{
          from : { transform: "translateX(0)"},
          to : {transform: "trasnslateX(-100%)"},
        }
       
      }
    },
   
  },
  plugins: [],
}