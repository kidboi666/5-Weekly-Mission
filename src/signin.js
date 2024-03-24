const emailInputForm = document.querySelector(".input-email");
const passwordInputForm = document.querySelector(".input-pw");

const emailErrorMessage = document.querySelector(".error-email");
const pwErrorMessage = document.querySelector(".error-pw");

const successLoginEmail = "test@codeit.com";
const successLoginPassword = "codeit101";

emailInputForm.addEventListener("focusout", ({ target }) => {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

  if (target.value === "") {
    emailErrorMessage.innerHTML = "이메일을 입력해주세요.";
    emailErrorMessage.style.display = "block";
  } else if (pattern.test(target.value) === false) {
    emailErrorMessage.innerHTML = "올바른 이메일 주소가 아닙니다.";
    emailErrorMessage.style.display = "block";
  } else {
    emailErrorMessage.style.display = "none";
  }
});

passwordInputForm.addEventListener("focusout", ({ target }) => {
  if (target.value === "") {
    pwErrorMessage.innerHTML = "비밀번호를 입력해주세요.";
    pwErrorMessage.style.display = "block";
  } else {
    pwErrorMessage.style.display = "none";
  }
});

function login(e) {
  e.preventDefault();

  if (successLoginEmail !== emailInputForm.value) {
    emailErrorMessage.innerHTML = "이메일을 확인해 주세요.";
    emailErrorMessage.style.display = "block";
  } else if (successLoginPassword !== passwordInputForm.value) {
    pwErrorMessage.innerHTML = "비밀번호를 입력해주세요";
    pwErrorMessage.style.display = "block";
  } else {
    window.location.href = "/folder.html";
  }
}
