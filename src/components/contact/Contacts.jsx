import React from "react";
import "./Contacts.css";
import { AiOutlineMail } from "react-icons/ai";
import { PiTelegramLogoFill } from "react-icons/pi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { SlSocialVkontakte } from "react-icons/sl";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g84dgrh",
        "template_wqpqmbp",
        form.current,
        "tgSpMOemdYF5DxbJv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contacts">
      <h2>Мои контакты</h2>
      <div className="container contacts__container">
        <div className="contacts__communication">
          <article className="contacts__card">
            <div className="contacts__icon">
              <AiOutlineMail />
            </div>
            <h2>Почта</h2>
            <small>Konolirum@gmail.com</small>
            <a href="mailto:KonstantKar@yandex.ru" target="_blank">
              Отправь сообщение!
            </a>
          </article>
          <article className="contacts__card">
            <div className="contacts__icon">
              <PiTelegramLogoFill /> <AiOutlineWhatsApp />
            </div>
            <h2>Телефон</h2>
            <small>+7(968)912-76-33</small>
            <a
              href="https://api.whatsapp.com/send?phone=79689127633"
              target="_blank"
            >
              Отправь сообщение
            </a>
          </article>
          <article className="contacts__card">
            <div className="contacts__icon">
              <SlSocialVkontakte />
            </div>
            <h2>Вконтакте</h2>
            <a href="https://vk.com/id211612500" target="_blank">
              Нажми сюда!
            </a>
          </article>
        </div>
        <form ref={form} className="contacts__form" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Ф.И.О." required />
          <input type="email" name="email" placeholder="Ваша почта." required />
          <textarea
            name="message"
            rows="7"
            placeholder="Ваше сообщение"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Отправить сообщение
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
