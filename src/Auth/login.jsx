import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Frame } from "./ui";
import { EmailInput, PasswordInput } from "./handleInput/login";

export const LoginPage = function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const checkEmail = (email) => {
    if (!email) {
      return "이메일을 입력해 주세요.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return "올바른 이메일 주소가 아닙니다.";
    } else {
      return "";
    }
  };
  const checkPassword = (password) => {
    if (!password) {
      return "비밀번호를 입력해 주세요.";
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

  const handleLogin = async (e) => {
    e.preventDefault(); // 폼 제출 기본 동작 방지

    const emailMessage = checkEmail(email); 
    const passwordMessage = checkPassword(password);

    if (emailMessage === "" && passwordMessage === "") {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sign-in",
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
			setEmailError("이메일을 확인해 주세요.");
			setPasswordError("비밀번호를 확인해 주세요.");
        }
      } catch (error) {
        console.error("로그인 요청 실패:", error);
      }
    } else {
		setEmailError(emailMessage)
		setPasswordError(passwordMessage)
	}
  };

  return (
    <Frame $page={"login"} onSubmit={handleLogin}>
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
    </Frame>
  );
};
