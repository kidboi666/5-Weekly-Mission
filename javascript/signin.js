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
  valueVerify,
  valueRight,
} from "./apply.js";

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

const eyeBtnFunction = () => {
  if (loginPwd.type === "password") {
    loginPwd.type = "text";
    eyeOn.classList.remove("hide");
    eyeOff.classList.add("hide");
  } else {
    loginPwd.type = "password";
    eyeOn.classList.add("hide");
    eyeOff.classList.remove("hide");
  }
};

loginId.addEventListener("focusout", signInEmailErr);
loginPwd.addEventListener("focusout", signInPasswordErr);
form.addEventListener("submit", mainSignInFunction);
eyeBtn.addEventListener("click", eyeBtnFunction);
