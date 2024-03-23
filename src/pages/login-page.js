import React from "react";
import styled from "styled-components";
import * as Auth from "../components/auth";
import { ButtonLabel } from "../components/button";
import { useState } from "react";

const LoginContent = styled(Auth.Content)`
  height: 491px;
  @media (max-width: 1199px) {
    top: 200px;
  }
  @media (max-width: 767px) {
    top: 120px;
    width: 325px;
  }
`;

const LoginForm = styled(Auth.Form)`
  height: 393px;
`;

const LoginInputFrame = styled(Auth.InputFrame)`
  height: 225px;
`;

const ToSignup = styled(Auth.To)``;

const LoginPage = function () {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Auth.Template>
      <LoginContent>
        <LoginForm id="loginForm">
          <Auth.LinkArea>
            <ToSignup>
              <div>회원이 아니신가요?</div>
              <a href="/signup"> 회원 가입하기 </a>
            </ToSignup>
          </Auth.LinkArea>

          <LoginInputFrame>
            <Auth.Input label={"이메일"}></Auth.Input>

            <Auth.Input
              type={passwordShown ? "text" : "password"}
              label={"비밀번호"}
            >
              <i
                onClick={togglePasswordVisibility}
                className={`fa fa-${passwordShown ? "eye-slash" : "eye"} fa-lg`}
              ></i>
            </Auth.Input>
          </LoginInputFrame>

          <Auth.SubmitButton>
            <ButtonLabel>로그인</ButtonLabel>
          </Auth.SubmitButton>
        </LoginForm>

        <Auth.Social>소셜 로그인</Auth.Social>
      </LoginContent>
    </Auth.Template>
  );
};

export default LoginPage;
