/*이메일 중복 에러 확인 요청*/
import { isExistUser } from "./app.js";
import { showError } from "../js/uicontroller.js";

const signform = document.querySelector(".sign-form");

async function checkEmailDuplicate(email) {
  const userExistsValidation = isExistUser(email);

  try {
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

    if (!response.ok) {
      throw new Error("이메일 중복 확인에 실패했습니다.");
    }
    return isExistUser();
  } catch (error) {
    showError(".error-message-email", userExistsValidation.error);
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
      location.href = "./folder.html"; // 회원가입 성공 시 이동할 URL
    } else {
      // 서버에서 받은 오류 메시지 출력
      const errorMessage = await response.text();
      console.error("Sign-up failed:", errorMessage);
    }
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

// 제출 버튼을 클릭하거나 엔터 키를 눌렀을 때 이메일 중복 확인 함수 호출
signform.addEventListener("submit", async function (event) {
  event.preventDefault(); // 기본 제출 동작 방지

  const email = signform.querySelector(".email-input").value;
  const password = signform.querySelector(".password-input").value;

  // 이메일 중복 확인
  const isEmailValid = await checkEmailDuplicate(email);

  // 유효한 이메일일 경우에만 회원가입 진행
  if (isEmailValid) {
    signUp(email, password);
  }
});

signform.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const email = signform.querySelector(".email-input").value;
    checkEmailDuplicate(email);
  }
});
