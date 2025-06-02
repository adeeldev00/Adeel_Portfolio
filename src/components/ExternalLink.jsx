import React from "react";

const ExternalLink = ({liveLink}) => {
  return (
    <div className="group/link relative">
      <a href={liveLink} target="_blank">
        <button className="cursor-pointer">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 text-white group-hover/link:scale-125 duration-200 hover:text-[#fb8b24] transition-all ease-in-out"
        >
          <path
            d="M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      </a>
      <span
        className="absolute -top-10 left-[50%] -translate-x-[50%] 
  z-20 origin-center scale-0 px-2 rounded-lg border 
  border-gray-300 bg-white py-1 text-xs font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover/link:scale-100"
      >
        Preview<span></span>
      </span>
    </div>
  );
};

export default ExternalLink;
