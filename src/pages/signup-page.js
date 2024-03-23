import React from "react";
import styled from "styled-components";
import * as Auth from "../components/auth";
import { ButtonLabel } from "../components/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordCheckShown, setPasswordCheckShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };
  const toggleCheckVisibility = () => {
    setPasswordCheckShown(!passwordCheckShown);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value || "");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value || "");
  };

  const handlePasswordCheckChange = (e) => {
    setPasswordCheck(e.target.value || "");
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError("이메일을 입력해 주세요.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("올바른 이메일 주소가 아닙니다.");
    } else if (email === "test@codeit.com") {
      setEmailError("이미 사용 중인 이메일입니다.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const isLongEnough = password.length >= 8;
    if (!password) {
      setPasswordError("비밀번호를 입력해 주세요.");
    } else if (!isLongEnough || !hasLetters || !hasNumbers) {
      setPasswordError("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    } else {
      setPasswordError("");
    }
  };

  const validatePasswordCheck = () => {
    if (!passwordCheck) {
      setPasswordCheckError("비밀번호를 입력해 주세요.");
    } else if (password !== passwordCheck) {
      setPasswordCheckError("비밀번호가 일치하지 않아요.");
    } else {
      setPasswordCheckError("");
    }
  };

  const cancelEmailError = () => {
    if (!email) {
      setEmailError("");
    }
  };

  const cancelPasswordError = () => {
    if (!email) {
      setPasswordError("");
    }
  };

  const cancelPasswordCheckError = () => {
    if (!email) {
      setPasswordCheckError("");
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 기본 제출 동작 방지

    // 모든 입력 필드의 유효성 검사를 수행합니다.
    validateEmail();
    validatePassword();
    validatePasswordCheck();

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const isLongEnough = password.length >= 8;
    // 모든 유효성 검사가 통과되었는지 확인합니다.
    if (
      password &&
      passwordCheck &&
      email &&
      /\S+@\S+\.\S+/.test(email) &&
      !(email === "test@codeit.com") &&
      isLongEnough &&
      hasLetters &&
      hasNumbers &&
      password === passwordCheck
    ) {
      // 유효한 회원가입 시도: "/folder"로 리디렉션합니다.
      navigate("/folder");
    }
    // 유효성 검사에 실패한 경우, 에러 메시지가 각 입력 필드 아래에 이미 설정되었습니다.
  };

  return (
    <Auth.Template>
      <SignupContent>
        <SignupForm id="signupForm" onSubmit={handleSubmit}>
          <Auth.LinkArea>
            <ToLogin>
              <div>이미 회원이신가요?</div>
              <a href="/login"> 로그인 하기 </a>
            </ToLogin>
          </Auth.LinkArea>

          <SignupInputFrame>
            <Auth.Input
              type={"email"}
              label={"이메일"}
              value={email}
              onChange={handleEmailChange}
              onBlur={validateEmail}
              onFocus={cancelEmailError}
              errorMessage={emailError}
            ></Auth.Input>

            <Auth.Input
              type={passwordShown ? "text" : "password"}
              label={"비밀번호"}
              value={password}
              onChange={handlePasswordChange}
              onBlur={validatePassword}
              onFocus={cancelPasswordError}
              errorMessage={passwordError}
            >
              <i
                onClick={togglePasswordVisibility}
                className={`fa fa-${passwordShown ? "eye-slash" : "eye"} fa-lg`}
              ></i>
            </Auth.Input>
            <Auth.Input
              type={passwordCheckShown ? "text" : "password"}
              label={"비밀번호 확인"}
              value={passwordCheck}
              onChange={handlePasswordCheckChange}
              onBlur={validatePasswordCheck}
              onFocus={cancelPasswordCheckError}
              errorMessage={passwordCheckError}
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
