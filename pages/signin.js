import Link from "next/link";
import styles from "../styles/singin.module.scss";
import classNames from "classnames/bind";
import { SinginForm } from "../components/SinginForm/SinginForm";
import { useEffect, useRef } from "react";

const cx = classNames.bind(styles);

function singInPage() {
  return (
    <div className={cx("page-container")}>
      <div className={cx("contents")}>
        <div className={cx("title")}>
          <Link href="/">
            <img className={cx("logo")} src="/images/logo.svg" alt="로고" />
          </Link>
          <h2>
            회원이 아니신가요?
            <Link className={cx("singin-link")} href="./signup">
              회원가입하기
            </Link>
          </h2>
        </div>
        <SinginForm />
        <div className={cx("social-login")}>
          <p>소셜 로그인</p>
          <div className={cx("social-icon")}>
            <div className={cx("google-icon")}>
              <a href="http://www.google.com">
                <img src="images/google.png" alt="구글 아이콘" />
              </a>
            </div>
            <div className={cx("kakao-icon")}>
              <a href="http://www.kakao.com">
                <img
                  src="images/99FE484C5C3451F218 1.svg"
                  alt="카카오 아이콘"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default singInPage;
