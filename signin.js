// email validation
const inputEmail = document.querySelector("#email");
const emailValidation = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

inputEmail.addEventListener("focusout", (e) => {
  if (e.target.type === "email" && e.target.value === "") {
    e.target.nextElementSibling.textContent = "이메일을 입력해 주세요.";
    inputEmail.classList.add("error-input-text");
  } else if (
    e.target.type === "email" &&
    emailValidation.test(e.target.value) === false
  ) {
    e.target.nextElementSibling.textContent = "올바른 이메일 주소가 아닙니다.";
  } else if (e.target.type === "email") {
    e.target.nextElementSibling.textContent = "";
    inputEmail.classList.remove("error-input-text");
  }
});

// password validation
const inputPassword = document.querySelector("#pwd");

inputPassword.addEventListener("focusout", (e) => {
  const styleBtn = document.querySelector(".eye-btn");

  if (e.target.type === "password" && e.target.value === "") {
    e.target.nextElementSibling.textContent = "비밀번호를 입력해 주세요.";
    inputPassword.classList.add("error-input-text");
    styleBtn.classList.add("fix-eye-btn");
  } else if (e.target.type === "password") {
    e.target.nextElementSibling.textContent = "";
    inputPassword.classList.remove("error-input-text");
    styleBtn.classList.remove("fix-eye-btn");
  }
});

// toggle eye-icon
const eyeBtn = document.querySelector(".eye-btn");

function toggleEvent() {
  eyeBtn.classList.toggle("eye-btn-on");
  inputPassword.type === "password" ? "password" : "text";
}

eyeBtn.addEventListener("click", toggleEvent);

// submit event
const loginForm = document.querySelector("form");
const signinBtn = document.querySelector(".signin-btn");

function sendMyForm(e) {
  const emailSend = document.querySelector("#email").value.trim();
  const passwordSend = document.querySelector("#pwd").value.trim();
  const emailError = document.querySelector("#error-email");
  const passwordError = document.querySelector("#error-pwd");
  const styleBtn = document.querySelector(".eye-btn");
  signinBtn.focus();

  if (emailSend === "test@codeit.com" && passwordSend === "codeit101") {
    location.href = "./folder.html";
  } else {
    emailError.textContent = "이메일을 확인해주세요.";
    passwordError.textContent = "비밀번호를 확인해주세요.";
    inputEmail.classList.add("error-input-text");
    inputPassword.classList.add("error-input-text");
    styleBtn.classList.add("fix-eye-btn");
  }
  e.preventDefault();
}

loginForm.addEventListener("submit", sendMyForm);
