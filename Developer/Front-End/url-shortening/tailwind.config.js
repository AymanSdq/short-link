/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        cyanColor : "hsl(180, 66%, 49%)",
        darkPurple : "hsl(257, 27%, 26%)",
        grayColor : "hsl(0, 0%, 75%)",
        grayBackground: "#EEF1F6",
        grayPurple : "hsl(257, 7%, 63%)",
        redColor : "hsl(0, 87%, 67%)",
        veryDarkBlue : "hsl(255, 11%, 22%)",
        veryDarkPurple : "hsl(260, 8%, 14%)",
      }
    },
  },
  plugins: [],
}

