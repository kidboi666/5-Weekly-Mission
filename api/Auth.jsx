import { useEffect } from "react";
import { useRouter } from "next/router";

/** 로그인폼 제출 */
export async function submitLoginForm(email, password) {
  const router = useRouter();
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
      router.push("/folder");
      localStorage.setItem("accessToken", result.data.accessToken);
    }
  } catch (error) {
    alert(error);
  }
}

/** 회원가입폼 제출 */
export async function submitSignUpForm(email, password) {
  const router = useRouter();
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
      router.push("/folder");
      localStorage.setItem("accessToken", result.data.accessToken);
    }
  } catch (error) {
    alert(error);
  }
}

/** 로그인/회원가입 토큰체크 */
export function accessTokenCheck() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      router.push("/folder");
    }
  }, []);
}
