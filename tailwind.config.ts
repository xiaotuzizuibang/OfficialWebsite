import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        monet: {
          cream: "#F5F0E8",
          petal: "#E8D5D0",
          rose: "#C9A2AC",
          lilac: "#9B8EC2",
          water: "#6B8FA8",
          pond: "#4A7A6F",
          leaf: "#7BA17D",
          moss: "#A8C6A0",
          mist: "#D6E4E8",
          sky: "#B8D0DC",
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-in-up": "fadeInUp 1s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 4s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { opacity: "0.7" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
