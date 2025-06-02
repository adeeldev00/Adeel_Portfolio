import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";

const Loader = ({ setLoaderDone }) => {
  const textRef = useRef();
  const loaderRef = useRef();

  useGSAP(() => {
    const letters = textRef.current.querySelectorAll("span");

    const tl = gsap.timeline();

    tl.to(letters, {
      duration: 0.6,
      y: 0,
      stagger: 0.05,
      ease: "power2.out",
    })
      .to(letters, {
        "--clipPath": "inset(0% 0 0 0)",
        duration: 0.8,
        delay: 0.3,
        ease: "power1.inOut",
      })
      .to(letters, {
        y: 110,
        duration: 0.6,
        stagger: 0.05,
        delay: 0.5,
      })
      .to(loaderRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setTimeout(() => {
            loaderRef.current.style.display = "none";
            setLoaderDone(true); 
          }, 500);
        },
      });
  }, []);

  return (
    <div
      ref={loaderRef}
      className="w-full font-[roboto] h-screen flex items-center justify-center absolute top-0 left-0 bg-black z-[9999] overflow-hidden"
    >
      <div className="loader">
        <div
          ref={textRef}
          className="text flex text-[3.5rem] md:text-[7rem] font-black relative overflow-hidden"
        >
          {["A", "D", "E", "E", "L", "D", "E", "V"].map((text, index) => {
            return (
              <span key={index} data-text={text}>
                {text}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Loader;
