import React from "react";
import GoogleLogo from "./imgSrc/google_logo.svg";
import KakaoLogo from "./imgSrc/kakao_logo.svg";
import {
  SocialTemplate,
  SocialLabel,
  SocialLink,
} from "./design";

export const Social = function ({ $page }) {
  const label = $page === "login" ? "소셜 로그인" : "다른 방식으로 가입하기";
  return (
    <SocialTemplate>
      <SocialLabel>{label}</SocialLabel>
      <SocialLink>
        <a href="https://www.google.com/">
          <img src={GoogleLogo} alt="구글 sns 링크" />
        </a>
        <a href="https://www.kakaocorp.com/page/">
          <img src={KakaoLogo} alt="카카오 sns 링크" />
        </a>
      </SocialLink>
    </SocialTemplate>
  );
};
