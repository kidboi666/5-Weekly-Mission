const signinForm = document.querySelector("#signinForm");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordEyeButton = document.querySelector("#passwordEyeButton");
const passwordConfirmEyeButton = document.querySelector("#passwordConfirmEyeButton");

function createInputError(target, textContent) {
  const notice = document.createElement("div");
  notice.classList.add("auth-form__notice");
  notice.textContent = textContent;
  target.parentElement.after(notice);
  target.classList.add("input-border--red");
}

function showErrorToWriteInput(e) {
  const checkNotice =
    e.target.parentElement.parentElement.childNodes.length !== 5;
  if (!e.target.value) {
    if (!checkNotice) {
      const textContent =
        e.target.id === "email"
          ? "이메일을 입력해 주세요."
          : "비밀번호를 입력해 주세요.";
      createInputError(e.target, textContent);
    }
  } else {
    if (checkNotice) {
      e.target.parentElement.nextElementSibling.remove();
      e.target.classList.remove("input-border--red");
    }
  }
}

function checkEmailFormat(e) {
  const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return emailFormat.test(e.target.value) ? true : false;
}

function showErrorToWriteInEmailFormat(e) {
  if (!checkEmailFormat(e)) {
    const textContent = "올바른 이메일 주소가 아닙니다.";
    const existNotice = e.target.parentElement.nextElementSibling;
    if (existNotice) {
      console.log('있어서 내용만 바꿈');
      existNotice.textContent = textContent;
    } else {
      console.log('새로 만듦')
      createInputError(e.target, textContent);
    }
  }
}

function verifyInvalidEmail(e) {
  showErrorToWriteInput(e);
  e.target.value && showErrorToWriteInEmailFormat(e);
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
      const textContent = "이메일을 확인해 주세요.";
      createInputError(email, textContent);
    }
    if (!password.parentElement.nextElementSibling) {
      const textContent = "비밀번호를 확인해 주세요.";
      createInputError(password, textContent);
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
password && password.addEventListener("focusout", showErrorToWriteInput);
signinForm && signinForm.addEventListener("submit", login);
passwordEyeButton && passwordEyeButton.addEventListener("click", showPassword);
passwordConfirmEyeButton && passwordConfirmEyeButton.addEventListener("click", showPassword);
