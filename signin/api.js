/*POST 요청*/
import { showError } from "../js/uicontroller.js";

async function signIn(email, password) {
  const user = {
    email: email,
    password: password,
  };

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      console.log("Sign-in successful");
      return { success: true };
    } else {
      // 서버에서 받은 오류 메시지 출력
      const errorMessage = await response.text();
      console.error("Sign-in failed:", errorMessage);
      return { success: false, error: errorMessage };
    }
  } catch (error) {
    console.error("Error occurred:", error);
    return { success: false, error: "서버와의 통신 중 오류가 발생했습니다." };
  }
}

export { signIn };
