/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        biru: "#0D28A6",
        hijau: "#5CB85F",
        "light-ungu": "#F4F5F7",
        ungu: "#CFD4ED",
      },
    },
    // colors: {
    //   biru: "#0D28A6",
    // },
  },
  plugins: [],
};
