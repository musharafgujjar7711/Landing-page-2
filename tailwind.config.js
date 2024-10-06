/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#1090CB",
        secondary:"FFFFFF",
        third: "#969696",
        emogi:" #08D3BB",
        four: "#000000",
        seo: "#ECFFDA",
        web:" #EFEAFF",
       ar: "#DAE6FF",
     mob:"#FFE5DA",
     des:"#5C5C5C",
    sec4: "#F4F4F4",
     sear: "#E8F4FA"

      },
     container: {
      center: true,
      padding:{
        DEFAULT:"1rem",
        sm:"3rem"
      },
      screens :{
        lg:"1440px",
        xl:"1440px",
        "2xl":"1440"
      }
     

      },
     container2: {
      center: true,
      padding:{
        DEFAULT:"1rem",
        sm:"3rem"
      },
      screens :{
        lg:"1440px",
        xl:"1440px",
        "2xl":"1440"
      }
     

      }
    },
  },
  plugins: [],
}

