import React from "react";

const Heading = ({ first, second }) => {
  return (
    <h2 className="text-center font-[poppins] my-10 text-5xl font-bold sm:text-[64px]">
      {first} <span className="gradient">{second}</span>
    </h2>
  );
};

export default Heading;
