// email validation
const inputEmail = document.querySelector("#email");
const emailValidation = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const emailErrorMsg = document.querySelector("#email-error-msg");

inputEmail.addEventListener("focusout", InputEmailFunc);
function InputEmailFunc(e) {
  if (inputEmail.value === "") {
    emailErrorMsg.textContent = "이메일을 입력해 주세요.";
    inputEmail.classList.add("error-input-text");
    return;
  }
  if (!emailValidation.test(e.target.value)) {
    emailErrorMsg.textContent = "올바른 이메일 주소가 아닙니다.";
    inputEmail.classList.add("error-input-text");
    return;
  }
  if (emailValidation.test(e.target.value)) {
    emailErrorMsg.textContent = "";
    inputEmail.classList.remove("error-input-text");
    return;
  }
}

// password validation
const inputPassword = document.querySelector("#pwd");
const pwdErrorMsg = document.querySelector("#pwd-error-msg");
const styleBtn = document.querySelector(".eye-btn");

inputPassword.addEventListener("focusout", InputPasswordFunc);
function InputPasswordFunc() {
  if (inputPassword.value === "") {
    pwdErrorMsg.textContent = "비밀번호를 입력해 주세요.";
    inputPassword.classList.add("error-input-text");
    styleBtn.classList.add("fix-eye-btn");
    return;
  }

  if (inputPassword.type === "password") {
    pwdErrorMsg.textContent = "";
    inputPassword.classList.remove("error-input-text");
    styleBtn.classList.remove("fix-eye-btn");
    return;
  }
}

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
  const emailError = document.querySelector("#email-error-msg");
  const passwordError = document.querySelector("#pwd-error-msg");
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
