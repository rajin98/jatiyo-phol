import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        bangla: ['"Li Halder Sourik"', "sans-serif"],
      },
      backgroundImage: {
        "gradient-linear":
          "linear-gradient(linear-gradient(90deg, rgba(242,238,174,1) 0%, rgba(242,174,114,1) 33%, rgba(242,126,99,1) 66%, rgba(242,96,82,1) 100%);)",
      },
      colors: {
        yellow: "#F2EEAE",
        orange: {
          DEFAULT: "#F2AE72",
          pink: "#F27E63",
        },
        red: "#F26052",
        black: "#3B3839",
        white: "#FAF8F7",
      },
      boxShadow: {
        basic: "0px 0px 5px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
