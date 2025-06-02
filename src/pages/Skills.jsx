import React from "react";
import Heading from "../components/Heading";
import Skill from "../components/Skill";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useGSAP(() => {
    const skillElements = gsap.utils.toArray(".skill-box");
    const shuffled = gsap.utils.shuffle(skillElements);

    const ctx = gsap.matchMedia();

    ctx.add("(min-width: 768px)", () => {
      gsap.set(shuffled, { opacity: 0, scale: 0.5 });

      gsap.to(shuffled, {
        duration: 1.1,
        opacity: 1,
        scale: 1,
        ease: "back.out(1.7)",
        stagger: {
          each: 0.1,
          from: "random",
        },
        scrollTrigger: {
          trigger: "#skills",
          start: "top 60%",
          end: "top 0%",
          scrub: true,
        },
      });
    });

    ctx.add("(max-width: 767px)", () => {
      gsap.set(shuffled, { opacity: 0, scale: 0.8 });
      gsap.to(shuffled, {
        duration: 1.1,
        opacity: 1,
        ease: "back.out(1.7)",
        stagger: {
          each: 0.1,
          from: "random",
        },
        scrollTrigger: {
          trigger: "#skills",
          start: "top 70%",
          end: "top 0%",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div id="skills" className="w-full pb-14 sm:pb-8 lg:pb-2">
      <Heading first={"My"} second={"Skills"} />

      <div className="skills-container grid grid-cols-2 grid-rows-5 gap-2 justify-items-center sm:grid-cols-4 sm:gap-4 lg:gap-8 lg:pt-14">
        <Skill skillText={"HTML5"} />
        <Skill skillText={"CSS3"} />
        <Skill skillText={"Javascript"} />
        <Skill skillText={"React Js"} />
        <Skill skillText={"NEXT Js"} />
        <Skill skillText={"Responsiveness"} />
        <Skill skillText={"Tailwind CSS"} />
        <Skill skillText={"Motion"} />
        <Skill colStart skillText={"Git & GitHub"} />
        <Skill skillText={"Python"} />
      </div>
    </div>
  );
};

export default Skills;
