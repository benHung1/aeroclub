/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        card: "calc(100% / 3)",
        size: "calc(100% / 5)",
        padSize: "calc(100% / 2)",
      },
      colors: {
        normal: "#E20412",
      },
      borderColor: {
        normal: "#E20412",
      },
      flex: {
        flex2: "2 1 0%",
        flexsm: "0.7 1",
      },
      backgroundImage: {
        arrowImg:
          "url('https://aeroclubdesign.com/wp-content/themes/aeroclub-child/assets/svg/dropdown.svg')",
      },
    },
  },
  plugins: [],
};
