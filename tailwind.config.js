// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"], // Include CSS files
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/heropattern.png')",
      },
    },
  },
  plugins: [],
};
