import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js}"
  ],
  theme: { 
    extend: {
      colors: {
        'green': {
          'main': '#067C7A',
          'aux': '#OB9D9A',
        },
        'yellow': {
          'main': '#EA7C2D',
        },
        'gray': {
          'bg-screen': '#F6F7F9',
          'hover': '#F7F7F7',
          'text-button': '#B3B3C1',
          'bg-button': '#F0F1F5'
        } 
      }
    },
    boxShadow: {
      custom: '0px 1px 1px -0.5px rgba(42, 51, 69, 0.04), 0px 3px 3px -1.5px rgba(42, 51, 70, 0.04), 0px 6px 6px -3px rgba(42, 51, 70, 0.04), 0px 12px 12px -6px rgba(14, 63, 126, 0.04), 0px 24px 24px -12px rgba(14, 63, 126, 0.04)',
    },
  },
  plugins: [],
};
export default config;
