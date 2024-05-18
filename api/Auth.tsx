import { useEffect } from "react";

/** 로그인폼 제출 */
export async function submitLoginForm(email: string, password: string) {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error("로그인 오류!");
    } else {
      window.location.href = "/folder";
      localStorage.setItem("accessToken", result.data.accessToken);
    }
  } catch (error) {
    alert(error);
  }
}

/** 이메일 중복체크 */
export async function checkEmail(email: string) {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/check-email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    }
  );
  return response;
}

/** 회원가입폼 제출 */
export async function submitSignUpForm(email: string, password: string) {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error("회원가입 오류!");
    } else {
      window.location.href = "/folder";
      localStorage.setItem("accessToken", result.data.accessToken);
    }
  } catch (error) {
    alert(error);
  }
}

/** 로그인/회원가입 토큰체크 */
export function accessTokenCheck() {
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      window.location.href = "/folder";
    }
  }, []);
}
