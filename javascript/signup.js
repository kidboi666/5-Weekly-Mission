import { loginId, emailErr, signUpEmailErr } from "./email.js";

import {
  regex,
  loginPwd,
  loginPwdCheck,
  passwordErr,
  passwordErrCheck,
  signUpPasswordErr,
  signUpPasswordCheckErr,
} from "./password.js";

/* 필요한 기능 가져오기 */
import {
  CORRECT_EMAIL,
  form,
  eyeBtn,
  eyeOn,
  eyeOff,
  eyeBtnCheck,
  eyeOnCheck,
  eyeOffCheck,
  eyeOpen,
  eyeClose,
  valueVerify,
  valueRight,
} from "./apply.js";

/* form submit 시 동작 함수 */
const mainSignUpFunction = (e) => {
  e.preventDefault();

  if (loginId.value.indexOf("@") == -1) {
    valueVerify(emailErr, loginId, "올바른 이메일 주소가 아닙니다.");
  } else if (loginId.value === CORRECT_EMAIL) {
    valueVerify(emailErr, loginId, "이미 사용 중인 이메일입니다.");
  } else if (!regex.test(loginPwd.value)) {
    valueVerify(
      passwordErr,
      loginPwd,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
  } else if (loginPwd.value !== loginPwdCheck.value) {
    valueRight(emailErr, loginId);
    valueVerify(passwordErrCheck, loginPwdCheck, "비밀번호가 일치하지 않아요.");
  } else {
    location.href = "./folder.html";
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

/* 실제 눈 모양 버튼 동작 함수 패스워드 체크 부분 */
const eyeBtnFunctionCheck = () => {
  if (loginPwdCheck.type === "password") {
    eyeOpen(eyeOnCheck, eyeOffCheck, loginPwdCheck);
  } else {
    eyeClose(eyeOnCheck, eyeOffCheck, loginPwdCheck);
  }
};

/* 회원가입 api 함수 */
async function signUpApi(email, password) {
  try {
    /* 이메일 중복 확인 */
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
    const emailResult = await response.json();
    if (emailResult.exists) {
      throw new Error("이미 존재하는 이메일입니다.");
    }

    /* 회원가입 부분 */
    const signUpResult = await fetch(
      "https://bootcamp-api.codeit.kr/api/sign-up",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      }
    );
    if (!signUpResult.ok) {
      throw new Error("회원가입에 실패하였습니다.");
    }
    const result = await signUpResult.json();
    localStorage.setItem("signUpToken", result.data.accessToken);
    location.href = "../folder.html";

    if (signUpResult.ok) {
      /* accessToken 확인 함수 */
      checkAccessToken("signUpToken");
    }
    return true;
  } catch (error) {
    console.error(error);
    valueVerify(emailErr, loginId, "이메일 문제");
    valueVerify(passwordErr, loginPwd, "패스워드 문제");
    valueVerify(passwordErrCheck, loginPwdCheck, "패스워드 확인 문제");
    return false;
  }
}

signUpApi(loginId, loginPwd);

/* 이벤트 할당 */
loginId.addEventListener("focusout", signUpEmailErr);
loginPwd.addEventListener("focusout", signUpPasswordErr);
loginPwdCheck.addEventListener("focusout", signUpPasswordCheckErr);
form.addEventListener("submit", mainSignUpFunction);
eyeBtn.forEach((btn) => {
  btn.addEventListener("click", eyeBtnFunction);
});
eyeBtnCheck.forEach((btn) => {
  btn.addEventListener("click", eyeBtnFunctionCheck);
});
