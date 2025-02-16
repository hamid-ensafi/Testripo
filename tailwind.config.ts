import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        iranbold: "iranbold",
        irandemibold: "irandemibold",
        iranmedium: "iranmedium",
        iranregular: "iranregular",
      },
      colors: {
        primery: {
          default: "#4C6EF5",
          hover: "#708BF7",
          active: "#2A3D87",
          disable: "#BEBEBE",
        },
        tint: {
          100: "#EBEFFE",
          200: "#D7DFFD",
          300: "#C3CFFC",
          400: "#9CAEF9",
          500: "#889EF8",
          600: "#748EF7",
          700: "#607EF6",
        },
        shade: {
          100: "#4C6EF5",
          200: "#2A53F3",
          300: "#0B32CB",
          400: "#092AA9",
          500: "#061965",
          600: "#041144",
        },
        grayprime: {
          100: "#FAFAFA",
          200: "#F5F5F5",
          300: "#E5E5E5",
          400: "#D4D4D4",
          500: "#AEAEAE",
          600: "#737373",
          700: "#AEAEAE",
          800: "#404040",
          900: "#282828",
        },
        shadow: {
          100:'#0000002b'
        },
        orange: {
          100: '#FFFBEB',
          200:'#D97706'
        },
        success: {
          100: '#ECFDF5',
          200:'#059669'
        },
        close: {
          100: '#E7E7E7',
          200:'#374151'
        }
      },
    },
  },
  plugins: [],
};

export default config;
