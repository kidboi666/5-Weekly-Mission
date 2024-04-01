import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Frame } from "./ui";
import { EmailInput, PasswordInput, PasswordCheckInput } from "./handleInput";

export const SignupPage = function () {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");

  const checkEmail = (email) => {
    if (!email) {
      return "이메일을 입력해 주세요.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return "올바른 이메일 주소가 아닙니다.";
    } else if (email === "test@codeit.com") {
      return "이미 사용 중인 이메일입니다.";
    } else {
      return "";
    }
  };
  const checkPassword = (password) => {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const isLongEnough = password.length >= 8;
    if (!password) {
      return "비밀번호를 입력해 주세요.";
    } else if (!isLongEnough || !hasLetters || !hasNumbers) {
      return "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    } else {
      return "";
    }
  };
  const checkPasswordCheck = (password, passwordCheck) => {
    if (!passwordCheck) {
      return "비밀번호를 입력해 주세요.";
    } else if (password !== passwordCheck) {
      return "비밀번호가 일치하지 않아요.";
    } else {
      return "";
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      navigate("/folder");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 기본 제출 동작 방지
    const emailMessage = checkEmail(email);
    const passwordMessage = checkPassword(password);
    const passwordCheckMessage = checkPassword(passwordCheck);

    // 유효성 검사가 모두 통과되었는지 확인합니다.
    if (
      emailMessage === "" &&
      passwordMessage === "" &&
      passwordCheckMessage === ""
    ) {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sign-up",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          }
        );
        if (response.ok) {
          const { accessToken } = await response.json();
          localStorage.setItem("accessToken", accessToken);
          navigate("/folder");
        } else {
          console.error("회원가입 실패");
        }
      } catch (error) {
        console.error("회원가입 요청 실패:", error);
      }
    } else {
      setEmailError(emailMessage);
      setPasswordError(passwordMessage);
      setPasswordCheckError(passwordCheckMessage);
    }
  };

  return (
    <Frame $page={"signup"} onSubmit={handleSubmit}>
      <EmailInput
        email={email}
        setEmail={setEmail}
        emailError={emailError}
        setEmailError={setEmailError}
        checkEmail={checkEmail}
      />
      <PasswordInput
        password={password}
        setPassword={setPassword}
        passwordError={passwordError}
        setPasswordError={setPasswordError}
        checkPassword={checkPassword}
      />
      <PasswordCheckInput
        password={passwordCheck}
        setPassword={setPasswordCheck}
        passwordError={passwordCheckError}
        setPasswordError={setPasswordCheckError}
        checkPassword={checkPasswordCheck}
      />
    </Frame>
  );
};

