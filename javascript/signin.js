import { loginId, emailErr, signInEmailErr } from "./email.js";
import { loginPwd, passwordErr, signInPasswordErr } from "./password.js";

/* 필요한 기능 가져오기 */
import {
  CORRECT_EMAIL,
  CORRECT_PASSWORD,
  form,
  eyeBtn,
  eyeOn,
  eyeOff,
  eyeOpen,
  eyeClose,
  valueVerify,
  valueRight,
  checkAccessToken,
} from "./apply.js";

/* form submit 시 동작 함수 */
const mainSignInFunction = (e) => {
  e.preventDefault();

  if (loginId.value === CORRECT_EMAIL && loginPwd.value === CORRECT_PASSWORD) {
    location.href = "./folder.html";
  } else if (
    loginId.value === CORRECT_EMAIL &&
    loginPwd.value !== CORRECT_PASSWORD
  ) {
    valueRight(emailErr, loginId);
    valueVerify(passwordErr, loginPwd, "비밀번호를 확인해 주세요.");
  } else if (
    loginId.value !== CORRECT_EMAIL &&
    loginPwd.value === CORRECT_PASSWORD
  ) {
    valueVerify(emailErr, loginId, "이메일을 확인해 주세요.");
    valueRight(passwordErr, loginPwd);
  } else {
    valueVerify(emailErr, loginId, "이메일을 확인해 주세요.");
    valueVerify(passwordErr, loginPwd, "비밀번호를 확인해 주세요.");
  }
};

/* 실제 눈 모양 버튼 동작 함수 패스워드 부분 */
const eyeBtnFunction = () => {
  if (loginPwd.type === "password") {
    eyeOpen(eyeOn, eyeOff, loginPwd);
  } else {
    eyeClose(eyeOn, eyeOff, loginPwd);
  }
};

/* 로그인 api 함수 */
const signInApi = async (email, password) => {
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
    if (!response.ok) {
      throw new Error("로그인 실패");
    }
    const result = await response.json();
    localStorage.setItem("signInToken", result.data.accessToken);
    location.href = "../folder.html";

    /* accessToken 확인 함수 */
    checkAccessToken("signInToken");
    return true;
  } catch (error) {
    console.log(error);
    valueVerify(emailErr, loginId, "이메일을 확인해 주세요.");
    valueVerify(passwordErr, loginPwd, "비밀번호를 확인해 주세요.");
    return false;
  }
};

signInApi(loginId.value, loginPwd.value);

/* 이벤트 할당 */
loginId.addEventListener("focusout", signInEmailErr);
loginPwd.addEventListener("focusout", signInPasswordErr);
form.addEventListener("submit", mainSignInFunction);
eyeBtn.forEach((btn) => {
  btn.addEventListener("click", eyeBtnFunction);
});
