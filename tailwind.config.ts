/* eslint-disable @typescript-eslint/no-unused-vars */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: theme => ({
        "screen2/3": "calc((100dvh / 3)*2)",
        "screen2/5": "calc(100dvh * 0.4)",
        "screen1/2": "calc(100dvh * 0.5)",
        "screen/2": "50dvh",
        "screen/3": "calc(100dvh / 3)",
        "screen/4": "calc(100dvh / 4)",
        "screen/5": "calc(100dvh / 5)",
        "screen/10": "calc(100dvh / 10)",
        "screen/20": "calc(100dvh / 20)",
      }),
      width: theme => ({
        "screen2/3": "calc((100dvw / 3)*2)",
        "screen/2": "50dvw",
        "screen/3": "calc(100dvw / 3)",
        "screen/4": "calc(100dvw / 4)",
        "screen/5": "calc(100dvw / 5)",
        "screen/10": "calc(100dvw / 10)",
        "screen/20": "calc(100dvw / 20)"
      }),
    },
  },
  plugins: [],
};
