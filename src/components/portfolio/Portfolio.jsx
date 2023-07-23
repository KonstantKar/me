import React from "react";
import "./Portfolio.css";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Мои работы!</h5>
      <h2>Портфолио</h2>
      <div className="container portfolio__container">
        <div className="portfolio__items">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img
                src="https://www.iconbolt.com/preview/facebook/social-media-logos/chat-logo-social-social-media-vk.svg"
                alt=""
              />
            </div>
            <h3>Личный "Вконтакте"</h3>
            <h5>React,Redux,Firebase,MaterialUI</h5>
            <div className="experience__buttons" target="_blank">
              <a
                href="https://github.com/KonstantKar/vk"
                className="btn btn-primary"
              >
                GitHub
              </a>
              <a
                href="https://konstantkar.github.io/vk/"
                target="_blank"
                className="btn"
              >
                Демо
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img
                src="https://hrtime.ru/pictures/orders/20220821/1661064187.jpg"
                alt=""
              />
            </div>
            <h3>Резюме</h3>
            <h5>По секрету:"Вы сейчас его смотрите"</h5>
            <h5>React,CSS(BEM)</h5>
            <div className="experience__buttons">
              <a
                href="https://github.com/KonstantKar/me"
                className="btn btn-primary"
                target="_blank"
              >
                GitHub
              </a>
              <a href="" className="btn" target="_blank">
                Демо
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img
                src="https://w.forfun.com/fetch/5c/5c776f6d9cf0f435e485d0fa80dc7054.jpeg"
                alt=""
              />
            </div>
            <h3>Portfolio item</h3>
            <div className="experience__buttons">
              <a href="#contacts" className="btn btn-primary" target="_blank">
                GitHub
              </a>
              <a href="" className="btn" target="_blank">
                Демо
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
