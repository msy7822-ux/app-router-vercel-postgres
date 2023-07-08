import { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "'Liberation Mono'",
          "Courier New",
          "monospace",
        ],
      },
      colors: {
        "accent-0": "#ededed",
        "accent-1": "#333",
        "accent-2": "#444",
        "accent-3": "#555",
        "accent-4": "#666",
        "accent-5": "#777",
        "accent-6": "#888",
        primary: "#2563eb",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "990px",
        "2lg": "1024px",
      },
    },
  },
  plugins: [],
} satisfies Config;
