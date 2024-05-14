import { useContext, useLayoutEffect } from "react";
import { LoginWrap } from "./loginStyle";
import { Contatiner } from "@/styles/commonStyle";

export default function Login() {
  return   (
    <Contatiner className="no-header--container">
      <LoginWrap className="login__wrap">
        <main className="login__body">
          <h1 className="title">
            <a href="/">
              <img src="img/logo/logo.svg" alt="linkbrary" />
            </a>
          </h1>
          <div className="login__sign d__flex__center">
            <span>회원이 아니신가요?</span>
            <a href="/signup.html">회원 가입하기</a>
          </div>
          <form>
            <div className="form__wrap login__form">
              <div className="form__box">
                <label htmlFor="email" className="text__size__s">이메일</label>
                <input type="text" name="email" id="login__email" autoComplete="on" />
                <p className="error__text"></p>
              </div>
              <div className="form__box pw">
                <label htmlFor="login__pw__input" className="text__size__s">비밀번호</label>
                <div className="form__relative">
                  <input type="password" name="pw" id="login__pw__input" autoComplete="on" />
                  <button type="button" className="btn__pw login__btn-pw">
                    <img src="img/icon/icon-eye-on.svg" alt="비밀번호 보기" className="icon__on" />
                    <img src="img/icon/icon-eye-off.svg" alt="비밀번호 숨기기" className="icon__off" />
                  </button>
                </div>
                <p className="error__text"></p>
              </div>
              <button className="btn_login btn__gradient__lg">로그인</button>
            </div>
          </form>
          <div className="d__flex__btw login__another">
            <span className="text__size__s">소셜 로그인</span>
            <div className="d__flex login__sns ">
              <a href="https://www.google.co.kr/?hl=ko" target="_blank" className="d__flex__center">
                <img src="img/icon/icon_google.png" alt="구글로그인" />
              </a>
              <a href="https://www.kakaocorp.com/page/" target="_blank" className="d__flex__center">
                <img src="img/icon/icon_kakao.png" alt="카카오로그인" />
              </a>
            </div>
          </div>
        </main>
      </LoginWrap>
    </Contatiner>
  )
}