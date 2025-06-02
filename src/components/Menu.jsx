import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Menu = ({ toggleMenu, setToggleMenu, handleScrollLinks }) => {
  const menuRef = useRef();
  const tlRef = useRef();

  useGSAP(() => {
    if (!menuRef.current) return;

    const lines = gsap.utils.toArray(".btm-line");
    const menuText = menuRef.current.querySelectorAll("h3 span");

    gsap.set(lines, { width: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(menuRef.current, {
      x: toggleMenu ? 0 : "100%",
      duration: 0.6,
      ease: "power2.out",
    });

    tl.to(
      lines,
      {
        width: "100%",
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
      },
      "-=0.2"
    );

    tl.from(
      menuText,
      {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
      },
      "-=0.5"
    );

    tlRef.current = tl;

    if (toggleMenu) {
      tl.play();
    } else {
      tl.reverse().eventCallback("onReverseComplete", () => {});
    }
  }, [toggleMenu]);

  const handleClick = () => {
    if (tlRef.current) {
      tlRef.current.reverse().eventCallback("onReverseComplete", () => {
        setToggleMenu(false);
      });
    }
  };

  if (!toggleMenu) return null;

  return (
    <div
      ref={menuRef}
      className="absolute top-0 left-0 z-10 w-full h-screen bg-black text-white px-4 pt-20 font-[poppins] md:px-10"
    >
      {["HOME", "PROJECTS", "ABOUT ME", "MY SKILLS", "CONTACT ME"].map(
        (item, i) => (
          <div
            key={i}
            // onClick={handleClick}
            className="group menu-item relative w-full h-20 flex items-center text-4xl font-medium lg:text-5xl lg:h-24"
          >
            <h3>
              <span
                onClick={() => {
                  handleClick();
                  const sectionMap = {
                    "HOME": "home",
                    "PROJECTS": "projects",
                    "ABOUT ME": "about",
                    "MY SKILLS": "skills",
                    "CONTACT ME": "form",
                  };
                  handleScrollLinks(sectionMap[item]);
                }}
                className="hover:translate-x-10 inline-block transition-transform duration-300 cursor-pointer"
              >
                {item}
              </span>
            </h3>
            <div className="btm-line absolute right-0 bottom-0 h-[1.5px] bg-white"></div>
          </div>
        )
      )}
    </div>
  );
};

export default Menu;
