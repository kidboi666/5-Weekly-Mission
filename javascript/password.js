export const loginPwd = document.querySelector(".sign-password");
export const loginPwdCheck = document.querySelector(".sign-password-check");
export const passwordErrSignIn = document.querySelector(".password-err");
export const passwordErrSignUp = document.querySelector(".password-signup-err");
export const passwordErrSignUpCheck =
  document.querySelector("password-sign-fail");

export function passwordSignIn(e) {
  if (loginPwd.value === "") {
    passwordErrSignIn.textContent = "비밀번호를 입력해 주세요.";
    passwordErrSignIn.classList.remove("hide");
    loginPwd.classList.add("input-err");
  } else {
    passwordErrSignIn.classList.add("hide");
    loginPwd.classList.remove("input-err");
  }
}

export function passwordSignUp(e) {
  if (
    loginPwd.value === "" ||
    /^\d+$/.test(loginPwd.value) ||
    /^[a-zA-Z]+$/.test(loginPwd.value) ||
    loginPwd.value.length < 8
  ) {
    passwordErrSignUp.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    passwordErrSignUp.classList.remove("hide");
    loginPwd.classList.add("input-err");
  } else {
    passwordErrSignUp.classList.add("hide");
    loginPwd.classList.remove("input-err");
  }
}
