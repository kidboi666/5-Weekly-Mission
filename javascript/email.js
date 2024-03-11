export const loginId = document.querySelector('.signin-email')
export const emailNone = document.querySelector('.email-content-none')
export const emailCheck = document.querySelector('.email-content-check')
export const emailFail = document.querySelector('.email-content-fail')

/*
export function errorMessageEmailReset() {
  emailNone.classList.add("hide");
  emailFail.classList.add("hide");
  emailCheck.classList.add("hide");
  loginId.classList.remove("input-err");
} */


export function emailResult (e) {
  if (loginId.value === "") {
    emailNone.classList.remove("hide");
    emailCheck.classList.add("hide");
    emailFail.classList.add("hide");
    loginId.classList.add("input-err");
  } else if (loginId.value === "test@codeit.com") {
    emailNone.classList.add("hide");
    emailCheck.classList.add("hide");
    emailFail.classList.add("hide");
    loginId.classList.remove("input-err");
  } else if (loginId.value.indexOf('@') == -1) {
    emailNone.classList.add("hide");
    emailCheck.classList.remove("hide");
    emailFail.classList.add("hide");
    loginId.classList.add("input-err");
  } else {
    emailNone.classList.add("hide");
    emailCheck.classList.add("hide");
    emailFail.classList.add("hide");
    loginId.classList.remove("input-err");
  } /* = errorMessageEmailReset() */
};
