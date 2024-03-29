import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
import Div from "./Div";

// IMAGES
import sk1 from "../assets/sk-1.png";
import sk2 from "../assets/sk-2.png";
import sk3 from "../assets/sk-3.png";
import sk4 from "../assets/sk-4.png";
import sk5 from "../assets/sk-5.png";
import sk6 from "../assets/sk-6.png";
import sk7 from "../assets/sk-7.png";
import sk8 from "../assets/sk-8.png";
import sk9 from "../assets/sk-9.png";
import sk10 from "../assets/sk-10.png";
import sk11 from "../assets/sk-11.png";
import sk12 from "../assets/sk-12.png";
import sk13 from "../assets/sk-13.png";
import sk14 from "../assets/sk-14.png";
import sk15 from "../assets/sk-15.png";
import sk16 from "../assets/sk-16.png";
import sk17 from "../assets/sk-17.png";
import sk18 from "../assets/sk-18.png";
import sk19 from "../assets/sk-19.png";
import pattern from "../assets/heading-pattern.png";
import pe1 from "../assets/sec-3-p-e-1.png";
import pe2 from "../assets/sec-3-p-e-2.png";
import pe3 from "../assets/sec-3-p-e-3.png";

const Skills = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
  const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
  return (
    <div
      id="skills"
      className="bg-[#111111] py-[50px] md:py-[100px] relative overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS START */}
      <div className="sec-3-bg-gradient-1" />
      <div className="sec-3-bg-gradient-2" />
      <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
      <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2} />
      <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3} />
      {/* BACKGROUND ELEMENTS END */}
      <Wrapper>
        {/* SKILL ICONS START */}
        <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative">
          <SkillIcon path={sk1} />
          <SkillIcon path={sk2} />
          <SkillIcon path={sk3} />
          <SkillIcon path={sk4} />
          <SkillIcon path={sk5} />
          <SkillIcon path={sk6} />
          <SkillIcon path={sk7} />
          <SkillIcon path={sk8} />
          <SkillIcon path={sk9} />
          <SkillIcon path={sk10} />
          <SkillIcon path={sk11} />
          <SkillIcon path={sk12} />
          <SkillIcon path={sk13} />
          <SkillIcon path={sk14} />
          <SkillIcon path={sk15} />
          <SkillIcon path={sk16} />
          <SkillIcon path={sk17} />
          <SkillIcon path={sk18} />
          <SkillIcon path={sk19} />
        </Div>
        {/* SKILL ICONS END */}

        {/* SERVICES SECTION START */}
        <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative">
          {/* SERVICES START */}
          <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10">
            <Service
              num="1"
              title="FrontEnd Development"
              desc="Experienced in Android development with a strong proficiency in building real-life applications using React Native. Skilled in creating visually appealing and user-friendly mobile applications that prioritize exceptional user experiences. Focused on making responsive design for optimal performance across various Android and iOS devices."
              data={["ReactJS", "Tailwind", "NextJS", "JavaScript"]}
            />
            <Service
              num="2"
              title="Android Development"
              desc="Experienced in web development with expertise in HTML, CSS, JavaScript, React and responsive design. Skilled in creating visually appealing and user-friendly websites that deliver exceptional user experiences."
              data={["React Native", "Tailwind", "ExpoGo"]}
            />
            <Service
              num="3"
              title="Graphic Designing"
              desc="Skilled in graphic design, with a keen eye for aesthetics and a deep understanding of design principles. Proficient in Canva , Figma , Adobe Creative Suite, delivering captivating visuals that effectively communicate brand identities."
              data={[
                "Canva",
                "Figma",
                "Adobe Xd",
                "Poster Design",
                "Carousels Design",
              ]}
            />
            <Service
              num="4"
              title="UI/UX Design"
              desc="Experienced in UI/UX design, I create intuitive and user-friendly interfaces. With a focus on user-centered design principles, I enhance user experiences and drive optimal engagement and conversions."
              data={[
                "Prototype",
                "Wireframe",
                "User Experience",
                "User Research",
                "Figma",
              ]}
            />
            <Service
              num="5"
              title="Video Editing"
              desc="Proficient in video editing and reels editing. I possess skills in CapCut and Adobe Premiere Pro. With a meticulous approach, I craft visually stunning videos, utilizing seamless transitions, captivating effects, and precise timing to create compelling narratives that resonate with audiences."
              data={[
                "Capcut",
                "Reels Editing",
                "Premiere Pro",
                "DaVinci Resolve",
                "Color Grading",
              ]}
            />
          </div>
          {/* SERVICES END */}

          {/* SECTION HEADING START */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
            <span>Continuously exploring &</span>
            <span>expanding skills</span>
            <span className="flex items-center gap-2">
              <img src={pattern} className="block md:hidden w-[80px] mt-1" />
            </span>
            <span className="flex items-center gap-4">
              to excel in{" "}
              <img
                src={pattern}
                className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3"
              />
            </span>
            <span> diverse areas</span>
          </div>
          {/* SECTION HEADING END */}
        </div>
        {/* SERVICES SECTION END */}

        <Portfolio />
        {/* <Achievements /> */}
      </Wrapper>
    </div>
  );
};

export default Skills;
