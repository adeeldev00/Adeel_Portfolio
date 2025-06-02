import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import ColoredButton from "../components/ColoredButton";
import BorderButton from "../components/BorderButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"

const Home = ({toggleMenu, handleMenuToggle,handleScrollLinks}) => {
  const homeRef = useRef()

  useGSAP(()=>{
    const elems = homeRef.current.querySelectorAll(".text-anim")
    const tl = gsap.timeline()
    tl.from(elems,{
      duration:1,
      stagger:.2,
      y:100
    })
    .from(".subheading",{
      duration:.5,
      y:-100,
    },"-=.5")
    .from(".hero-btn",{
      duration:.7,
      y:-120,
      stagger:.2
    },"-=.2")

  },[])
  return (
    <div id="home" ref={homeRef} className=" w-full h-screen relative">
      <Navbar toggleMenu={toggleMenu} handleMenuToggle={handleMenuToggle}/>
      <div className="hero pt-16 sm:pt-44 flex flex-col gap-8 md:pt-40 lg:pt-16">
        <div className="main-headings font-[poppins] text-4xl sm:text-6xl lg:whitespace-nowrap flex flex-col items-center font-bold lg:text-7xl lg:font-semibold">
          <div className="mb-2 overflow-hidden">
            <h1 className="text-center text-anim">Full Stack Web Developer</h1>
          </div>
          <div className="flex items-center gap-2 flex-col sm:flex-row overflow-hidden">
            <h1 className="leading-[1.3] gradient lg:font-bold text-anim">Javascript | Python</h1>
            <h1 className="text-anim">Specialist</h1>
          </div>
        </div>
        <div className="hero-subheading overflow-hidden">
          <p className="subheading text-center font-[roboto] text-[16px] px-4 sm:px-28 sm:text-lg lg:px-72">
            Building seamless, interactive websites with React modern UI, and
            clean code.
          </p>
        </div>
        <div className="hero-btns md:py-5 overflow-hidden flex flex-col gap-4 w-full font-[roboto] sm:flex-row sm:items-center sm:justify-center sm:gap-16 sm:mt-8 lg:mt-2 lg:gap-8">
          <div className="hero-btn">
            <ColoredButton text={"Projects"} onClick={() => handleScrollLinks("projects")}/>
          </div>
          <div className="hero-btn">
            <BorderButton text={"Contact me"}  onClick={() => handleScrollLinks("form")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
