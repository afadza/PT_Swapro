/** @type {import('tailwindcss').Config} */
export const content = [
  "./node_modules/flowbite-react/lib/**/*.js",
  "./node_modules/flowbite-react/lib/esm/**/*.js",
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  plugins: [require("flowbite/plugin")],
  extend: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
};
export const plugins = [];
