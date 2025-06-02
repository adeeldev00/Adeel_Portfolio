/** @type {import('tailwindcss').Config} */
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
  safelist: [
    'gradient', // Custom class from index.css
    'hide-scrollbar',
    'bg-gray-100',
    'shadow-sm',
    'rounded-sm',
    'sm:rounded-lg',
    'sm:text-lg',
    'sm:p-3',
    'p-4',
    'pt-6',
    'pb-10',
    'flex',
    'flex-col',
    'gap-5',
    'w-full',
    'px-2',
    'py-2',
    'min-h-36',
    'resize-none',
    'sm:w-fit',
    'sm:px-8',
    'h-11',
    'text-lg',
    'text-white',
    'hover:scale-105',
    'transition-all',
    'duration-300',
    'mx-auto',
    'items-center',
    'justify-center',
    // Add other classes used in Form.jsx or other components
  ],
};