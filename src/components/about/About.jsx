import React from "react";
import "./About.css";
import ME from "../../assets/yong.jpg";
import { FaAward } from "react-icons/fa";
import { PiProjectorScreenChartLight } from "react-icons/pi";
const About = () => {
  return (
    <section id="about">
      <h5>А ТЕПЕРЬ!</h5>
      <h2>Немного обо мне</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <div className="about__icon">
                <FaAward />
              </div>
              <h2>Опыт</h2>
              <small>Год самостоятельного обучения</small>
            </article>
            <article className="about__card">
              <div className="about__icon">
                <PiProjectorScreenChartLight />
              </div>
              <h2>Проекты</h2>
              <small>Их немного, но я ими горжусь!</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            atque consequatur facere eligendi voluptate ipsam! Tenetur,
            possimus? Aliquid accusantium amet, commodi vel debitis eligendi
            doloremque aperiam et quam rem vitae.
            <a href="contact" className="btn btn-primary">
              Напишите мне!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
