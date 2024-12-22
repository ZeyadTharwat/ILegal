/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        inter:"'Inter', sans-serif",
      },
      backgroundImage: {
        "gradient-bg":"linear-gradient(157.86deg, #1F88E4 0.7%, #114B7E 99.22%)",
        "gradient-blue": "linear-gradient(180deg, #114B7E 0%, #1F88E4 100%)",
        "gradient-blue2": "linear-gradient(90deg, #114B7E 0%, #1F88E4 100%)",
        "gradient-red":"linear-gradient(90deg, #DD1C55 0%, #770F2E 100%)",
        "gradient-tenants":"linear-gradient(180deg, rgba(17, 75, 126, 0.29) 23.84%, rgba(31, 136, 228, 0.29) 84.15%)"
      },
      colors: {
        navy: "#114B7E",
      },
      boxShadow: {
        panel: "10px 10px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
