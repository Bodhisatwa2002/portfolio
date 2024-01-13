import React from "react";

import Wrapper from "./Wrapper";
import gmailIcon from "../assets/email-icon.png";
import Github from "../assets/github.png";
import Instagram from "../assets/instagram.png";
import LinkedIn from "../assets/linkedin.png";
import { scrollTo } from "../helper";


const Footer = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <Wrapper>
        {/* NAVBAR START */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 2xl:mt-[63px] relative text-[#111111] border-t border-[#CCCCCC] py-10">
          <div className="flex items-center gap-[6px]">
            <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
              <img src={gmailIcon} alt="" className="w-[18px]" />
            </div>
            <div>bodhisatwachakraborty2002@gmail.com</div>
          </div>
          <div
            className="social-links"
            style={{
              display: "flex",
              gap: "3rem",
            }}
          >
            <a href="https://github.com/Bodhisatwa2002/">
              <img
                style={{
                  width: "2rem",
                  height: "2rem",
                  cursor: "pointer",
                }}
                src={Github}
                alt=""
              />
            </a>
            <a href="https://www.instagram.com/_morphineee____/">
              <img
                style={{ width: "2rem", height: "2rem", cursor: "pointer" }}
                src={Instagram}
                alt=""
              />
            </a>
            <a href="https://www.linkedin.com/in/bodhisatwa-chakraborty-freelancer/">
              <img
                style={{ width: "2rem", height: "2rem", cursor: "pointer" }}
                src={LinkedIn}
                alt=""
              />
            </a>
          </div>
          <ul className="flex 2xl:text-[20px] gap-5 md:gap-8">
            <li
              className="cursor-pointer transition active:scale-90"
              onClick={() => scrollTo("about")}
            >
              About me
            </li>
            <li
              className="cursor-pointer transition active:scale-90"
              onClick={() => scrollTo("skills")}
            >
              Skills
            </li>
            <li
              className="cursor-pointer transition active:scale-90"
              onClick={() => scrollTo("work")}
            >
              Projects
            </li>
            <li
              className="cursor-pointer transition active:scale-90"
              onClick={() => scrollTo("contact")}
            >
              Contact
            </li>
          </ul>
        </div>
        {/* NAVBAR END */}
      </Wrapper>
    </div>
  );
};

export default Footer;
