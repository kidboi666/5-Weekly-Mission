import React from "react";
import styled from "styled-components";
import * as Auth from "../components/auth";
import { ButtonLabel } from "../components/button";
import { useState } from "react";

const SignupContent = styled(Auth.Content)`
  height: 627px;
  @media (max-width: 1199px) {
    top: 200px;
  }
  @media (max-width: 767px) {
    top: 120px;
    width: 325px;
  }
`;

const SignupForm = styled(Auth.Form)`
  height: 529px;
`;

const SignupInputFrame = styled(Auth.InputFrame)`
  height: 338px;
`;
const ToLogin = styled(Auth.To)``;

const SignupPage = function () {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordCheckShown, setPasswordCheckShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };
  const toggleCheckVisibility = () => {
    setPasswordCheckShown(!passwordCheckShown);
  };
  return (
    <Auth.Template>
      <SignupContent>
        <SignupForm id="signupForm">
          <Auth.LinkArea>
            <ToLogin>
              <div>이미 회원이신가요?</div>
              <a href="/login"> 로그인 하기 </a>
            </ToLogin>
          </Auth.LinkArea>

          <SignupInputFrame>
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
            <Auth.Input
              type={passwordCheckShown ? "text" : "password"}
              label={"비밀번호 확인"}
            >
              <i
                onClick={toggleCheckVisibility}
                className={`fa fa-${
                  passwordCheckShown ? "eye-slash" : "eye"
                } fa-lg`}
              ></i>
            </Auth.Input>
          </SignupInputFrame>

          <Auth.SubmitButton>
            <ButtonLabel>회원가입</ButtonLabel>
          </Auth.SubmitButton>
        </SignupForm>

        <Auth.Social>다른 방식으로 가입하기</Auth.Social>
      </SignupContent>
    </Auth.Template>
  );
};

export default SignupPage;
