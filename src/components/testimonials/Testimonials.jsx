import React from "react";
import "./Testimonials.css";
import Anton from "../../assets/Anton.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { PiArrowFatLinesRight } from "react-icons/pi";
// Import Swiper styles
import "swiper/css";
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Отзывы</h5>
      <h2>Честные-честные</h2>
      <Swiper
        className="container testimonials__container"
        modules={(Pagination, Navigation)}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="testimonials__review">
            <div className="testimonials__avatar">
              <img src={Anton} alt="" />
            </div>
            <h4>Антон Караманов</h4>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              consequuntur ex blanditiis consectetur reiciendis vitae aspernatur
              suscipit dsdsdsdstias quia optio.
            </h3>
            <h5>
              Пролистай дальше! <PiArrowFatLinesRight />
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonials__review">
            <div className="testimonials__avatar">
              <img src={Anton} alt="" />
            </div>
            <h4>Антон Караманов</h4>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              consequuntur ex blanditiis consectetur reiciendis vitae aspernatur
              suscipit molestias quia optio.
            </h3>
            <h5>
              Пролистай дальше! <PiArrowFatLinesRight />
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonials__review">
            <div className="testimonials__avatar">
              <img src={Anton} alt="" />
            </div>
            <h4>Антон Караманов</h4>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              consequuntur ex blanditiis consectetur reiciendis vitae aspernatur
              suscipit molestias quia optio.
            </h3>
            <h5>Конец отзывов!</h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
