import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
        primary: "Green Brooks",
        secondary: "Alro",
    },
    extend: {
        colors: {
            "bg-color": "#070D17",
            "bg-varient-color": "#13294B",
            "primary-color": "#E0E0E0",
            "primary-varient-color": "#B0B0B0",
            "accent-color": "#F57C00",
            "navy-blue-glass-color": "#1C3A60",
            "muted-cyan-glass-color": "#48A0CF",
            "frost-glass-color": "rgba(255, 255, 255, 0,2)",
            "accent-tint-glass-color": "#F8A840"
      },
    },
  },
  plugins: [],
} satisfies Config;
