import Cta from "./src/sections/Cta";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderStyle: {
        custom: ["dashed"],
      },
      borderWidth: {
        custom: "3px",
      },
      // ...other theme configurations

      backgroundImage: {
        "gradient-name": "linear-gradient(to right, #B91D73, #F953C6)",
        home: "url('/src/assets/homeoverlay.jpeg')",
        homeMobile: "url('/src/assets/homeoverlaymobile.jpeg')",
        overlay: "url('/src/assets/overlay.png')",
        sandver: "url('/src/assets/sandclock.png')",
        cup: "url('/src/assets/purplecup.png')",
        footerbg: "url('/src/assets/footerbg.svg')",
        cta: "url('/src/assets/ctabg.png')",
      },

      colors: {
        light: "#F4D3DF",
        dark: "#311225",
        purple: "#B91D73",
        quaternary: "#F953C6",
        lightbg: "#FCF4F8",
      },
      fontFamily: {
        // define bebas neue
        title: ["Bebastitle", "sans-serif"],
        // cairo for body
        body: ["Cairobody", "sans-serif"],
      },
    },
    plugins: [],
  },
};
