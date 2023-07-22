import React from "react";
import "./Experience.css";
import { BsCheck2Circle } from "react-icons/bs";
import { SiBookstack } from "react-icons/si";
const Expirience = () => {
  return (
    <section id="experience">
      <h5>Что я умею</h5>
      <h2>Мой опыт</h2>
      <div className="container experience__container">
        <div className="experience__front">
          <h2>
            Стек технологий{" "}
            <icon>
              <SiBookstack />
            </icon>
          </h2>
          <div className="experience__content">
            <article>
              <BsCheck2Circle />
              <h4>HTML</h4>
            </article>
            <article>
              <BsCheck2Circle />
              <h4>СSS</h4>
            </article>
            <article>
              <BsCheck2Circle />
              <h4>JavaScript</h4>
            </article>
            <article>
              <BsCheck2Circle />
              <h4>TypeScript</h4>
            </article>
            <article>
              <BsCheck2Circle />
              <h4>React</h4>
            </article>
            <article>
              <BsCheck2Circle />
              <h4>Redux</h4>
            </article>
            <article>
              <BsCheck2Circle />
              <h4>MaterialUI</h4>
            </article>
          </div>
        </div>
        <div className="experience__image">
          <img
            src="https://www.cultofmac.com/wp-content/uploads/2016/10/CoM-The-Ultimate-Front-End-Development-Bundle.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Expirience;
