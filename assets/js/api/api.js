import {
  signinErrorMessage,
  emailCheckErrorMessage,
} from "../commons/reset.js";

const URL = "https://bootcamp-api.codeit.kr/api";

// 로그인
export const signinRequest = async (email, password) => {
  try {
    const response = await fetch(`${URL}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.ok) {
      window.location.href = "/folder.html";
    }

    if (!response.ok) {
      signinErrorMessage();
      throw new Error("이메일 및 비밀번호를 확인해주세요.");
    }
  } catch (error) {
    console.log(error.message);
  }
};

// 이메일 중복 확인
export const checkEmailRequest = async (email) => {
  try {
    const response = await fetch(`${URL}/check-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    if (response.status === 409) {
      emailCheckErrorMessage();
      throw new Error("이미 사용 중인 이메일입니다.");
    }
  } catch (error) {
    console.log(error.message);
  }
};

// 유효한 회원가입
export const signupRequest = async (email, password, passwordConfirm) => {
  try {
    const response = await fetch(`${URL}/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
      }),
    });

    if (response.ok) {
      window.location.href = "/folder.html";
    }
  } catch (error) {
    console.log(error.message);
  }
};
