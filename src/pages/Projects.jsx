import React, { useRef } from "react";
import Heading from "../components/Heading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GithubIcon from "../components/GithubIcon";
import ExternalLink from "../components/ExternalLink";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef();
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const elems = gsap.utils.toArray(".grid-item");

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.set(elems, { opacity: 0, scale: 0.5 });
        gsap.to(elems, {
          opacity: 1,
          scale: 1,
          stagger: 0.18,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 90%",
            scrub: true,
          },
        });
      });
      mm.add("(max-width: 767px)", () => {
        gsap.set(elems, { opacity: 0, scale: 0.8 });
        gsap.to(elems, {
          opacity: 1,
          scale: 1,
          stagger: 0.18,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 90%",
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="projects"
      className="w-full min-h-screen pb-20 sm:pb-24 sm:min-h-fit"
    >
      <Heading first={"My"} second={"Projects"} />
      <div className="grid grid-cols-1 grid-rows-6 gap-4 sm:grid-cols-9 sm:grid-rows-3 sm:gap-3 lg:pt-10">
        {/* 1 */}
        <div className="group grid-item relative sm:col-span-6 h-48 sm:h-56 rounded-sm lg:rounded-xl lg:h-96 overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src="one.png"
            alt=""
            loading="lazy"
          />
          <div className="icons-holder inset-0 absolute w-full h-full flex items-end justify-end p-4 px-6 gap-10 z-30">
            <GithubIcon
              githubLink={
                "https://github.com/adeeldev00/Adeel_Mobile_UI"
              }
            />
            <ExternalLink liveLink={"https://adeel-mobile-ui.vercel.app/"} />
          </div>
          <div className="overlay absolute inset-0 bg-black/30 w-full h-full transition-transform duration-500"></div>
        </div>
        {/* 2 */}
        <div className="group grid-item relative sm:col-span-3 sm:row-span-2 sm:col-start-7 h-48 lg:max-h-[700px] sm:h-auto rounded-sm lg:rounded-xl overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
            src="two.png"
            alt=""
            loading="lazy"
          />
          <div className="icons-holder inset-0 absolute w-full h-full flex items-end justify-end p-4 px-6 gap-10 z-30">
            <GithubIcon
              githubLink={"https://github.com/adeeldev00/Ai_Cv_Maker"}
            />
            <ExternalLink
              liveLink={"https://make-cv-by-ai.vercel.app/"}
            />
          </div>
          <div className="overlay absolute inset-0 bg-black/30 w-full h-full transition-transform duration-500"></div>
        </div>
        {/* 3 */}
        <div className="group grid-item relative sm:col-span-3 sm:row-start-2 h-48 sm:h-56 rounded-sm lg:rounded-xl lg:h-72 overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src="three.png"
            alt=""
            loading="lazy"
          />
          <div className="icons-holder inset-0 absolute w-full h-full flex items-end justify-end p-4 px-6 gap-10 z-30">
            <GithubIcon
              githubLink={
                "https://github.com/adeeldev00/HealthCare_ChatBot"
              }
            />
            <ExternalLink
              liveLink={"https://health-care-chatbot-five.vercel.app/"}
            />
          </div>
          <div className="overlay absolute inset-0 bg-black/30 w-full h-full transition-transform duration-500"></div>
        </div>
        {/* 4 */}
        <div className="group grid-item relative sm:col-span-3 sm:col-start-4 sm:row-start-2 h-48 sm:h-56 rounded-sm lg:rounded-xl lg:h-72 overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src="four.png"
            alt=""
            loading="lazy"
          />
          <div className="icons-holder inset-0 absolute w-full h-full flex items-end justify-end p-4 px-6 gap-10 z-30">
            <GithubIcon
              githubLink={"https://github.com/amAdeel/30Days30Project"}
            />
            <ExternalLink
              liveLink={"https://30-days30-project-zhn8.vercel.app/"}
            />
          </div>
          <div className="overlay absolute inset-0 bg-black/30 w-full h-full transition-transform duration-500"></div>
        </div>
        {/* 5 */}
        <div className="group grid-item relative sm:col-span-4 sm:row-start-3 w-full h-48 sm:h-56 rounded-sm lg:rounded-xl lg:h-72 overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src="five.png"
            alt=""
            loading="lazy"
          />
          <div className="icons-holder inset-0 absolute w-full h-full flex items-end justify-end p-4 px-6 gap-10 z-30">
            <GithubIcon
              githubLink={"https://github.com/adeeldev00/Adeel-Hackathon-Project"}
            />
            <ExternalLink
              liveLink={"https://adeel-hackathon-project.vercel.app/"}
            />
          </div>
          <div className="overlay absolute inset-0 bg-black/30 w-full h-fullt ransition-transform duration-500"></div>
        </div>
        {/* 6 */}
        <div className="group grid-item relative sm:col-span-5 sm:col-start-5 sm:row-start-3 w-full h-48 sm:h-56 rounded-sm lg:rounded-xl lg:h-72 overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src="six.png"
            alt=""
            loading="lazy"
          />
          <div className="icons-holder inset-0 absolute w-full h-full flex items-end justify-end p-4 px-6 gap-10 z-30">
            <GithubIcon
              githubLink={
                "#"
              }
            />
            <ExternalLink
              liveLink={"https://www.dev.beautyconcierge.ch/"}
            />
          </div>
          <div className="overlay absolute inset-0 bg-black/30 w-full h-full transition-transform duration-500"></div>
        </div>
        {/* 7 */}
        <div className="group grid-item relative sm:col-span-7 sm:row-start-4 w-full h-48 sm:h-56 rounded-sm lg:rounded-xl lg:h-72 overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src="seven.png"
            alt=""
            loading="lazy"
          />
          <div className="icons-holder inset-0 absolute w-full h-full flex items-end justify-end p-4 px-6 gap-10 z-30">
            <GithubIcon
              githubLink={"https://github.com/amAdeel/Interior_design_web"}
            />
            <ExternalLink liveLink={"https://interior-design-website-beige.vercel.app/"} />
          </div>
          <div className="overlay absolute inset-0 bg-black/30 w-full h-full transition-transform duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
