/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // colors: {
      //   lightBlue: "rgb(8, 255, 81)",
      //   veryLightBlue: "rgb(20, 168, 153)",
      //   mediumBlue: "rgb(18, 117, 97)",
      //   darkBlue: "rgb(4, 40, 36)",
      //   green: "rgb(18, 117, 97)",
      //   gray: "rgb(203, 203, 203)",
      //   backgroundGray: "rgb(18, 117, 97, 0.5)"
      // black: "rgb(0,0,0)",
      // white: "rgb(255,255,255)"
      // }
      colors: {
        lightBlue: "rgb(110, 101, 238)",
        // veryLightBlue: "rgb(60, 91, 111)",
        veryLightBlue: "hsl(215, 76%, 88%)",
        // mediumBlue: "hsl(244, 40%, 24%)",
        mediumBlue: "rgb(21, 52, 72)",
        darkBlue: "  rgb(16, 15, 35)",
        green: "rgb(18, 117, 97)",
        red: "rgb(220 ,38 ,38 )",
        gray: "rgb(203, 203, 203)",
        backgroundGray: "rgb(228, 197, 158 ,0.5)",
        // backgroundGray: "rgb(255, 255, 255, 1)",

        black: "rgb(0,0,0)",
        white: "rgb(255,255,255)"
      }
    },
  },
  plugins: [],
};
