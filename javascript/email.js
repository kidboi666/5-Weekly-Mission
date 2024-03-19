export const loginId = document.querySelector('.signin-email');
export const emailErr = document.querySelector('.email-err');

export function emailSignIn (e) {
  if (loginId.value === "") {
    emailErr.textContent = '이메일을 입력해 주세요.'
    emailErr.classList.remove("hide");
    loginId.classList.add("input-err");
  } else if (loginId.value === "test@codeit.com") {
    emailErr.classList.add("hide");
    loginId.classList.remove("input-err");
  } else if (loginId.value.indexOf('@') == -1) {
    emailErr.textContent = '올바른 이메일 주소가 아닙니다.'
    emailErr.classList.remove("hide");
    loginId.classList.add("input-err");
  } else {
    emailErr.classList.add("hide");
    loginId.classList.remove("input-err");
  }
};

export function emailSignUp (e) {
  if (loginId.value === "") {
    emailErr.textContent = '이메일을 입력해 주세요.'
    emailErr.classList.remove("hide");
    loginId.classList.add("input-err");
  } else if (loginId.value === "test@codeit.com") {
    emailErr.textContent = '이미 사용 중인 이메일입니다.'
    emailErr.classList.remove("hide");
    loginId.classList.add("input-err");
  } else if (loginId.value.indexOf('@') == -1) {
    emailErr.textContent = '올바른 이메일 주소가 아닙니다.'
    emailErr.classList.remove("hide");
    loginId.classList.add("input-err");
  } else {
    emailErr.classList.add("hide");
    loginId.classList.remove("input-err");
  }
};
