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
  emailErrorMsg.textContent = "";
  inputEmail.classList.remove("error-input-text");
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
  pwdErrorMsg.textContent = "";
  inputPassword.classList.remove("error-input-text");
  styleBtn.classList.remove("fix-eye-btn");
}

// toggle eye-icon
const passwordToggleButton = document.querySelector("#pwd-toggle");
passwordToggleButton.addEventListener("click", () =>
  eyeToggleButton(inputPassword, passwordToggleButton)
);

function eyeToggleButton(input, toggleBtn) {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    toggleBtn
      .getElementsByTagName("img")[0]
      .setAttribute("src", "./img/signin/eye-on.svg");
    return;
  }
  input.setAttribute("type", "password");
  toggleBtn
    .getElementsByTagName("img")[0]
    .setAttribute("src", "./img/signin/eye-off.svg");
}

const TEST_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};

const signForm = document.querySelector("#form");

signForm.addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();

  const isTestUser =
    inputEmail.value === TEST_USER.email &&
    inputPassword.value === TEST_USER.password;

  if (isTestUser) {
    location.href = "./folder.html";
    return;
  }
  emailErrorMsg.textContent = "이메일을 확인해주세요.";
  pwdErrorMsg.textContent = "비밀번호를 확인해주세요.";
  styleBtn.classList.add("fix-eye-btn");
}
