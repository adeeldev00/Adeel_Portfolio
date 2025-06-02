import React from "react";

const GithubIcon = ({githubLink}) => {
  return (
    <div className="group/github relative">
      <a href={githubLink} target="_blank">
        <button className="cursor-pointer">
        <svg
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          className="w-7 text-white group-hover/github:scale-125 duration-200 hover:text-[#fb8b24] transition-all ease-in-out"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </button>
      </a>
      <span
        className="absolute -top-10 left-[50%] -translate-x-[50%] 
  z-20 origin-center scale-0 px-2 rounded-lg border 
  border-gray-300 bg-white py-1 text-xs font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover/github:scale-100"
      >
        GitHub<span></span>
      </span>
    </div>
  );
};

export default GithubIcon;
