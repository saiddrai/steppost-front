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
        home: "url('/src/assets/homeoverlay.png')",
        homeMobile: "url('/src/assets/homeoverlaymobile.png')",
        overlay: "url('/src/assets/overlay.png')",
        sandver: "url('/src/assets/sandclock.png')",
        cup: "url('/src/assets/purplecup.png')",
        footerbg: "url('/src/assets/footerbg.svg')",
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
        title: ["Bebas Neue", "sans-serif"],
        // cairo for body
        body: ["Cairo", "sans-serif"],
      },
    },
    plugins: [],
  },
};
