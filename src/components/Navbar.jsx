import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import gsap from "gsap";


const Navbar = ({ toggleMenu, handleMenuToggle }) => {
  const navRef = useRef()
  useGSAP(() => {
    const navElems = navRef.current.querySelectorAll(".anim")
    gsap.from(navElems,{
      opacity:0,
      duration:.6,
      y:-40,
      stagger: .3
    })
  }, []);
  return (
    <div ref={navRef} className="w-full h-16 flex items-center justify-between lg:h-24">
      <h4 className="logo anim">
        <a
          className="font-[poppins] text-2xl font-semibold gradient lg:text-4xl"
          href="#"
        >
          Adeel Dev
        </a>
      </h4>
      <div
        onClick={handleMenuToggle}
        className={`menu-icon anim z-20 ${
          toggleMenu ? "text-white" : "text-black"
        } border px-3 cursor-pointer py-1 rounded-full`}
      >
        <div className="inner-menu-icon flex items-center justify-center gap-2">
          <p
            className="text-[15px]
          font-[poppins] lg:text-2xl"
          >
            Menu
          </p>
          <div className="text-2xl lg:text-4xl">
            {toggleMenu ? <IoClose /> : <IoMenu />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
