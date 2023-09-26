/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        pulse: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0.5 },
          "100%": { opacity: 1 },
        },
        wiggle: {
          "0%, 100%": { transform: "rotaate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        new: {
          from: { top: "384px" },
          to: { top: "0px" },
        },
        fadeIn: {
          from: {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        pulse: "pulse 0.5s linear",
        fadeIn: "fadeIn 0.5s linear",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        "gega-red": "#bc1a45",
        "gega-melon": "#ffd369",
        "gega-grey": "#dddddd",
        "gega-white": "#f7f7f7",
        "gega-black": "#1F1F1F",
        "gega-light": "#999999",
        "gega-green": "#28E98C",
        "gega-dark": "#191919",
        "gega-soft": "#EFD1CE",
        "gega-pink": "#D9A6A0",
        "gega-rose": "#B45965",
        "gega-cameo": "#DBA8B7",
        "gega-earth-red": "#95414E",
        "gega-star": "#FFC000",
        "gega-bg": "#B59677",
        "gega-light-grey": "#DBDBDB",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        "hero-bg": "url('/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
