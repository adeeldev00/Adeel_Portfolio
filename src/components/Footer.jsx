import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full py-4 relative text-center flex items-center justify-center font-[roboto] font-medium px-14 leading-5 border-t sm:text-lg sm:font-normal sm:py-6">
      <p>© 2025 Muhammad Adeel. All rights reserved.</p>
      <div
        onClick={scrollToTop}
        className="scroll-to-top absolute right-5 w-8 h-8 cursor-pointer hover:scale-105 transition-all duration-300  rounded-full border text-sm flex items-center justify-center"
      >
        <FaArrowUp />
      </div>
    </div>
  );
};

export default Footer;
