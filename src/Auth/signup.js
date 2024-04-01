import React from "react";
import * as Auth from "../components/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      navigate("/folder");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 기본 제출 동작 방지
    await validateEmail(); // 비동기 이메일 유효성 검사 및 중복 검사
    validatePassword();
    validatePasswordCheck();

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const isLongEnough = password.length >= 8;

    // 유효성 검사가 모두 통과되었는지 확인합니다.
    if (
      password &&
      passwordCheck &&
      email &&
      /\S+@\S+\.\S+/.test(email) &&
      isLongEnough &&
      hasLetters &&
      hasNumbers &&
      password === passwordCheck
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
          // 여기에 회원가입 실패시 처리 로직을 추가할 수 있습니다.
        }
      } catch (error) {
        console.error("회원가입 요청 실패:", error);
      }
    }
  };

  return (
    <Frame $page={"signup"}>
      <Auth.Input
        type={"email"}
        label={"이메일"}
        value={email}
        onChange={handleEmailChange}
        onBlur={validateEmail}
        onFocus={cancelEmailError}
        errorMessage={emailError}
      />
      <Auth.Input
        type={passwordShown ? "text" : "password"}
        label={"비밀번호"}
        value={password}
        onChange={handlePasswordChange}
        onBlur={validatePassword}
        onFocus={cancelPasswordError}
        errorMessage={passwordError}
        password
        togglePassword={togglePasswordVisibility}
        visibility={passwordShown}
      />
      <Auth.Input
        type={passwordCheckShown ? "text" : "password"}
        label={"비밀번호 확인"}
        value={passwordCheck}
        onChange={handlePasswordCheckChange}
        onBlur={validatePasswordCheck}
        onFocus={cancelPasswordCheckError}
        errorMessage={passwordCheckError}
        password
        togglePassword={toggleCheckVisibility}
        visibility={passwordCheckShown}
      />
    </Frame>
  );
};

export default SignupPage;
