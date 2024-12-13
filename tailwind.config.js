/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8e44ec",
        title: "#01001a",
        white: "#ffffff",
        lightPink: "#f5f6fa",
        lighterPink: "#f1e5ff",
      },
      keyframes: {
        updown: {
          "0%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0px)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeIn: {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        updown: "updown 2s ease-in-out infinite alternate",
        scroll: "scroll 20s linear infinite",
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
