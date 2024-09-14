import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "80vh": "80vh",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        borderColor: "var(--border-color)",
        shadowColor: "var(--shadow-color)",
        accent: "var(--accent)",
      },
      boxShadow: {
        custom: "0 4px 6px var(--shadow-color)",
      },
      borderColor: {
        custom: "var(--border-color)",
      },
    },
  },
  plugins: [],
};
export default config;
