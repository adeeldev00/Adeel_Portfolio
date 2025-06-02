import React from "react";

const Skill = ({ skillText, colStart }) => {
  return (
    <div
      className={`skill-box relative w-full p-[2px] py bg-[linear-gradient(to_right,_#9a031e_0%,_#fb8b24_85%,_#76c893_100%)] rounded-sm ${
        colStart && "sm:col-start-2"
      } group z-50`}
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(154, 3, 30, 1)_0%,_rgba(251, 139, 36, 1)_85%,_rgba(118, 200, 147, 1)_100%)]
       -z-10 rounded-sm transition-all duration-500 group-hover:blur-sm"
      ></div>

      <div className="bg-white h-10 sm:h-12 flex items-center justify-center font-[roboto] w-full rounded-sm text-center sm:text-lg lg:text-xl lg:h-16 lg:font-medium cursor-pointer transition-all duration-1000">
        {skillText}
      </div>
    </div>
  );
};

export default Skill;
