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
//   safelist: [
//     'skill-box', // Custom class from index.css
//     'p-[2px]', // Arbitrary padding
//     'sm:col-start-2', // Responsive grid column
//     'group',
//     'group-hover:blur-sm',
//     'bg-white',
//     'h-10',
//     'sm:h-12',
//     'lg:h-16',
//     'flex',
//     'items-center',
//     'justify-center',
//     'w-full',
//     'rounded-sm',
//     'text-center',
//     'sm:text-lg',
//     'lg:text-xl',
//     'lg:font-medium',
//     'cursor-pointer',
//     'transition-all',
//     'duration-1000',
//     'z-50',
//     // Add other classes if used elsewhere
//   ],
};