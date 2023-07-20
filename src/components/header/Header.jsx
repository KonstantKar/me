import React from "react";
import "./Header.css";
import CTA from "./headerComponents/CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./headerComponents/HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Константин Караманов</h1>
        <h5 className="text-light">Frontend-разработчик</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          Пролистай вниз!
        </a>
      </div>
    </header>
  );
};

export default Header;
