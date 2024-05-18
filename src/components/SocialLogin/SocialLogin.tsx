import React from "react";
import styles from "@/src/widgets/signIn/Auth.module.css";
import Image from "next/image";
import googleIcon from "@/src/assets/icon/google.png";
import kakaoIcon from "@/src/assets/icon/kakao.png";

function SocialLogin() {
  return (
    <div className={"socialLogin flexBox"}>
      <span>소셜 로그인</span>
      <ul className={"socialConWrap flexBox"}>
        <li className={`${styles.googleLogin} socialCon`}>
          <a href="https://www.google.com/">
            <Image src={googleIcon} alt="구글 로그인 하기" />
          </a>
        </li>
        <li className={`${styles.kakaoLogin} socialCon`}>
          <a href="https://www.kakaocorp.com/page/">
            <Image src={kakaoIcon} alt="카카오 로그인 하기" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialLogin;
