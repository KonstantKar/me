import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { SlSocialVkontakte } from "react-icons/sl";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/KonstantKar" target="_blank">
        <DiGithubBadge />
      </a>
      <a href="https://vk.com/id211612500" target="_blank">
        <SlSocialVkontakte />
      </a>
    </div>
  );
};

export default HeaderSocials;
