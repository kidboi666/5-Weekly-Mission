export const loginPwd = document.querySelector('.signin-password')
export const passwordNone = document.querySelector('.password-content-none')
export const passwordFail = document.querySelector('.password-content-fail')

/*
export function errorMessagePasswordReset() {
  passwordNone.classList.add("hide");
  passwordFail.classList.add("hide");
  loginPwd.classList.remove("input-err");
} */

export function passwordResult (e) {
  if (loginPwd.value === "") {
    passwordNone.classList.remove("hide");
    passwordFail.classList.add("hide");
    loginPwd.classList.add("input-err");
  } else {
    passwordNone.classList.add("hide");
    passwordFail.classList.add("hide");
    loginPwd.classList.remove("input-err");
  } /* = errorMessagePasswordReset() */
};
