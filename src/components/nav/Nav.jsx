import React, { useState } from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineContactPhone } from "react-icons/md";
import { BiCommentCheck } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
      >
        <SiAboutdotme />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setActiveNav("#experience")}
      >
        <AiOutlineFundProjectionScreen />
      </a>
      <a
        href="#portfolio"
        className={activeNav === "#portfolio" ? "active" : ""}
        onClick={() => setActiveNav("#portfolio")}
      >
        <CgWebsite />
      </a>
      <a
        href="#testimonials"
        className={activeNav === "#testimonials" ? "active" : ""}
        onClick={() => setActiveNav("#testimonials")}
      >
        <BiCommentCheck />
      </a>
      <a
        href="#contacts"
        className={activeNav === "#contacts" ? "active" : ""}
        onClick={() => setActiveNav("#contacts")}
      >
        <MdOutlineContactPhone />
      </a>
    </nav>
  );
};

export default Nav;
