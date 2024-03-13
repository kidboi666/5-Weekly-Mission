const signinForm = document.querySelector("#signinForm");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordEyeButton = document.querySelector("#passwordEyeButton");
const passwordConfirmEyeButton = document.querySelector(
  "#passwordConfirmEyeButton"
);

function createError(target, textContent) {
  const error = document.createElement("div");
  error.classList.add("error-message");
  error.textContent = textContent;
  target.parentElement.after(error);
  target.classList.add("input-border--red");
}

function showErrorToWrite(e) {
  const textContent =
    e.target.id === "email"
      ? "이메일을 입력해 주세요."
      : "비밀번호를 입력해 주세요.";
  createError(e.target, textContent);
}

function checkEmailFormat(e) {
  const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return emailFormat.test(e.target.value) ? true : false;
}

function showErrorToWriteInEmailFormat(e) {
  const textContent = "올바른 이메일 주소가 아닙니다.";
  const previousError = e.target.parentElement.nextElementSibling;
  if (previousError) {
    previousError.textContent = textContent;
  } else {
    createInputError(e.target, textContent);
  }
}

function checkInvalidInput(e) {
  const isPreviousError =
    e.target.parentElement.parentElement.childNodes.length !== 5;
  if (!e.target.value) {
    !isPreviousError && showErrorToWrite(e);
  } else {
    if (e.target === email && !checkEmailFormat(e)) {
      showErrorToWriteInEmailFormat(e);
    } else {
      if (isPreviousError) {
        e.target.parentElement.nextElementSibling.remove();
        e.target.classList.remove("input-border--red");
      }
    }
  }
}

function handleLogin(e) {
  e.preventDefault();
  const adminEmail = "test@codeit.com";
  const adminPassword = "codeit101";
  const isAdmin =
    email.value === adminEmail && password.value === adminPassword;
  if (isAdmin) {
    location.href = "/folder";
  } else {
    if (!email.parentElement.nextElementSibling) {
      const textContent = "이메일을 확인해 주세요.";
      createError(email, textContent);
    }
    if (!password.parentElement.nextElementSibling) {
      const textContent = "비밀번호를 확인해 주세요.";
      createError(password, textContent);
    }
  }
}

function togglePassword(e) {
  const currentPassword = e.currentTarget.previousElementSibling;
  if (currentPassword.type === "password") {
    currentPassword.type = "text";
    e.currentTarget.innerHTML =
      '<img class="form__eye on" src="/assets/img/eye_on.svg" alt="eye on" />';
  } else {
    currentPassword.type = "password";
    e.currentTarget.innerHTML =
      '<img class="form__eye off" src="/assets/img/eye_off.svg" alt="eye off" />';
  }
}

email && email.addEventListener("focusout", checkInvalidInput);
password && password.addEventListener("focusout", checkInvalidInput);
signinForm && signinForm.addEventListener("submit", handleLogin);
passwordEyeButton && passwordEyeButton.addEventListener("click", togglePassword);
passwordConfirmEyeButton &&
  passwordConfirmEyeButton.addEventListener("click", togglePassword);
