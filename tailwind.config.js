/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
   content: ["./public/index.html"],

   theme: {
      extend: {
         colors: {
            primeryBlue: "#0F273C",
         },
         gridTemplateColumns: {
            "4-table": "repeat(4,minmax(10rem,1fr)",
         },
      },
   },
   plugins: [],
};
