export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scan all React files
    './public/index.html', // Scan the HTML file
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Add Roboto font
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font
      },
    },
  },
  plugins: [],
};