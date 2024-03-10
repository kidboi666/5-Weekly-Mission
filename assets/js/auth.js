const signinForm = document.querySelector("#signinForm");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordEyeButton = document.querySelector("#passwordEyeButton");
const passwordConfirmEyeButton = document.querySelector(
  "#passwordConfirmEyeButton"
);

function showMessageToWriteInput(e) {
  const checkMessage =
    e.target.parentElement.parentElement.childNodes.length !== 5;
  if (!e.target.value) {
    if (!checkMessage) {
      const notice = document.createElement("div");
      const textContent =
        e.target.id === "email"
          ? "이메일을 입력해 주세요."
          : "비밀번호를 입력해 주세요.";
      notice.classList.add("auth-form__notice");
      notice.textContent = textContent;
      e.target.parentElement.after(notice);
      e.target.classList.add("input-border--red");
    }
  } else {
    if (checkMessage) {
      e.target.parentElement.nextElementSibling.remove();
      e.target.classList.remove("input-border--red");
    }
  }
}

function checkEmailFormat(e) {
  const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return emailFormat.test(e.target.value) ? true : false;
}

function showMessageToWriteInEmailFormat(e) {
  if (!checkEmailFormat(e)) {
    const textContent = "올바른 이메일 주소가 아닙니다.";
    if (e.target.parentElement.nextElementSibling) {
      e.target.parentElement.nextElementSibling.textContent = textContent;
    } else {
      const notice = document.createElement("div");
      notice.classList.add("auth-form__notice");
      notice.textContent = textContent;
      e.target.parentElement.after(notice);
      e.target.classList.add("input-border--red");
    }
  }
}

function verifyInvalidEmail(e) {
  showMessageToWriteInput(e);
  e.target.value && showMessageToWriteInEmailFormat(e);
}

function login(e) {
  e.preventDefault();
  const adminEmail = "test@codeit.com";
  const adminPassword = "codeit101";
  const isAdmin =
    email.value === adminEmail && password.value === adminPassword;
  if (isAdmin) {
    location.href = "/folder";
  } else {
    if (!email.parentElement.nextElementSibling) {
      const noticeEmail = document.createElement("div");
      const emailTextContent = "이메일을 확인해 주세요.";
      noticeEmail.classList.add("auth-form__notice");
      noticeEmail.textContent = emailTextContent;
      email.parentElement.after(noticeEmail);
      email.classList.add("input-border--red");
    }
    if (!password.parentElement.nextElementSibling) {
      const noticePassword = document.createElement("div");
      const passwordTextContent = "비밀번호를 확인해 주세요.";
      noticePassword.classList.add("auth-form__notice");
      noticePassword.textContent = passwordTextContent;
      password.parentElement.after(noticePassword);
      password.classList.add("input-border--red");
    }
  }
}

function showPassword(e) {
  const currentPassword = e.currentTarget.previousElementSibling;
  if (currentPassword.type === "password") {
    currentPassword.type = "text";
    e.currentTarget.innerHTML =
      '<img class="auth-form__eye eye--on" src="/assets/img/eye_on.png" alt="eye on" />';
  } else {
    currentPassword.type = "password";
    e.currentTarget.innerHTML =
      '<img class="auth-form__eye eye--off" src="/assets/img/eye_off.png" alt="eye off" />';
  }
}

email && email.addEventListener("focusout", verifyInvalidEmail);
password && password.addEventListener("focusout", showMessageToWriteInput);
signinForm && signinForm.addEventListener("submit", login);
passwordEyeButton && passwordEyeButton.addEventListener("click", showPassword);
passwordConfirmEyeButton &&
  passwordConfirmEyeButton.addEventListener("click", showPassword);
