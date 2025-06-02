import React from "react";

const BorderButton = ({text,onClick}) => {
  return (
    <button onClick={onClick} className="border-btn h-11 w-full sm:w-fit sm:px-5 border rounded-sm text-lg cursor-pointer font-medium lg:rounded-xl hover:scale-105 transition-all duration-300">
      {text}
    </button>
  );
};

export default BorderButton;
