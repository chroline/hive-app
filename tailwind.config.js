/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "Helvetica", "Arial", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        "hive-purple": "#B71DFF",
        "hive-black": "#1A1225",
      },
    },
  },
  plugins: [],
};
