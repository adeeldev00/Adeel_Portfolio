import React, { useRef } from "react";
import Heading from "../components/Heading";
import ColoredButton from "../components/ColoredButton";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const About = ({ handleScrollLinks }) => {
  const aboutRef = useRef();
  useGSAP(() => {
    const aboutElems = gsap.utils.toArray(".about-anim");

    gsap.from(aboutElems, {
      opacity: 0,
      y: 10,
      stagger: 0.2,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 30%",
        end: "top 0%",
        scrub: 1,
      },
    });
  }, {});

  return (
    <div
      ref={aboutRef}
      id="about"
      className="w-full min-h-screen sm:min-h-fit sm:pb-28"
    >
      <Heading first={"About"} second={"Me"} />
      <div className="about-main flex flex-col gap-10 sm:flex-row sm:gap-4 sm:pt-10">
        <div className="left-top flex flex-col gap-5 items-center w-full sm:w-2/5 sm:px-5 lg:px-0 lg:pr-20">
          <div className="about-anim p-[2px] w-44 h-52 sm:w-64 sm:h-72 lg:w-full lg:h-96 bg-[linear-gradient(to right, #9a031e 0%, #fb8b24 85%, #76c893 100%)] rounded-sm lg:rounded-lg">
            <div className="w-full h-full bg-white rounded-sm lg:rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="my pic.jpg"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
          <div className="about-anim w-full hidden sm:block sm:w-full">
            <ColoredButton
              onClick={() => handleScrollLinks("form")}
              fullWidth
              text={"Contact me"}
            />
          </div>
        </div>
        <div className="right-btm w-full flex flex-col gap-4 sm:w-3/5 sm:justify-between">
          <div className="social-icons w-full flex items-center justify-center gap-5 text-4xl sm:order-3 sm:justify-start sm:text-5xl lg:items-end lg:text-[55px]">
            <div className="about-anim">
              <a
                href="https://www.linkedin.com/in/muhammad-adeel-aa29a923a/"
                target="_blank"
              >
                <FaLinkedin className=" text-[#fb8b24] cursor-pointer hover:scale-105 hover:-rotate-6 transition-all duration-300" />
              </a>
            </div>
            <div className="about-anim ">
              <a href="https://github.com/adeeldev00" target="_blank">
                <FaGithubSquare className="cursor-pointer hover:scale-105 hover:-rotate-6 transition-all duration-300" />
              </a>
            </div>
          </div>
          <div className="about-anim intro font-[poppins] font-semibold text-[22px] tracking-tight sm:text-2xl lg:text-4xl">
            <h2>Hello I'm Muhammad Adeel</h2>
          </div>
          <div className="about-anim intro-details font-[roboto] flex flex-col gap-4 text-sm sm:text-[16px] sm:leading-5 sm:pr-6 lg:text-[19px] lg:pr-10 lg:leading-6 lg:mt-5 lg:gap-8">
            <p>
              I'm a Full Stack Web Developer skilled in HTML, CSS, Tailwind,
              JavaScript, Next.js, Firebase, Supabase, Node Express, Python and Flask. I focus on building responsive,
              user-friendly websites that work smoothly across all screen sizes.
            </p>
            <p>
              I enjoy blending design and functionality solving logic problems
              while also crafting clean layouts. I use GSAP and Framer Motion to
              add subtle, purposeful animations when needed.
            </p>
            <p>
              Currently working as Frontend developer in Solutions Ally, I've completed multiple
              projects and stay updated with new tools and trends to keep
              growing as a developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
