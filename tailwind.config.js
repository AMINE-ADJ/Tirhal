/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "terhal-blue": "#5E81F4",
        "terhal-orange": "#D8681D",
        "terhal-green": "#4CAF50",
        "terhal-blue2": "#3E87F6",
        "terhal-purple": "#6C72FF",
        "terhal-black": "#3E4958",
        "terhal-gray": "#D3D3D3",
        "terhal-gray2": "#7988A2",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
