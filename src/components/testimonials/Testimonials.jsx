import React from "react";
import "./Testimonials.css";
import Anton from "../../assets/Anton.jpg";
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Отзывы</h5>
      <h2>Честные-честные</h2>
      <div className="container testimonials__container">
        <article className="testimonials__review">
          <div className="testimonials__avatar">
            <img src={Anton} alt="" />
          </div>
          <h4>Антон Караманов</h4>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            consequuntur ex blanditiis consectetur reiciendis vitae aspernatur
            suscipit molestias quia optio.
          </h3>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
