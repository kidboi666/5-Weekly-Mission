/*이메일 중복 에러 확인 요청*/
import { showError } from "../js/uicontroller.js";

async function checkEmailDuplicate(email) {
  try {
    // 서버로 이메일 중복 확인 요청 보내기
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/check-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      }
    );

    // 서버 응답 확인
    if (!response.ok) {
      throw new Error("이메일 중복 확인에 실패했습니다.");
    }

    // 서버로부터의 응답 데이터 받기
    const data = await response.json();

    // 중복 여부에 따라 처리
    if (data.exists) {
      showError(".error-message-email", "이미 존재하는 이메일입니다.");
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.error("Error occurred:", error);
    showError(".error-message-email", "서버와의 통신 중 오류가 발생했습니다.");
    return false;
  }
}

async function signUp(email, password) {
  const user = {
    email: email,
    password: password,
  };

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      console.log("Sign-up successful");
      return { success: true };
    } else {
      // 서버에서 받은 오류 메시지 출력
      const errorMessage = await response.text();
      console.error("Sign-up failed:", errorMessage);
      return { success: false, error: errorMessage };
    }
  } catch (error) {
    console.error("Error occurred:", error);
    return { success: false, error: "서버와의 통신 중 오류가 발생했습니다." };
  }
}

export { checkEmailDuplicate, signUp };
