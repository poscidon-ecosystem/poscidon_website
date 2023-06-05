/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-proximaNova)'],
      },
      screens: {
        "md+": "896px",
        "lg+": "1152px",
        "xl+": "1440px",
      },
      colors: {
        seaBlue : "#0B1DEE",
        steelBlue: "#2E8ED7",
        tropicalBlue: "#78DFEC",
        aquaBlue: "#22D6C4",
        mintGreen: "#A1ECD6",
        seafoamGreen: "#4FA88",
        pineGreen: "#1b9574",
        forestGreen: "#004832"
      }, 
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
