const form = document.querySelector("#signinForm");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

function showMessageToWriteInput(e) {
  if (!e.target.value) {
    if (!e.target.nextElementSibling) {
      const notice = document.createElement("div");
      notice.classList.add("auth-form__notice-enter-input");
      notice.textContent = "이메일을 입력해 주세요.";
      e.target.after(notice);
      e.target.classList.add("input-border--red");
    }
    e.target.focus();
  } else {
    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.remove();
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
    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.textContent =
        "올바른 이메일 주소가 아닙니다.";
    } else {
      const notice = document.createElement("div");
      notice.classList.add("auth-form__notice-enter-input");
      notice.textContent = "올바른 이메일 주소가 아닙니다.";
      e.target.after(notice);
      e.target.classList.add("input-border--red");
    }
  }
}

function LinkIfAdmin(e) {
  e.preventDefault();
  const adminEmail = "test@codeit.com";
  const adminPassword = "codeit101";
  if (email.value === adminEmail && password.value === adminPassword) {
    location.href = "/folder";
  }
}

function verifyInvalidEmail(e) {
  showMessageToWriteInput(e);
  e.target.value && showMessageToWriteInEmailFormat(e);
}

email.addEventListener("focusout", verifyInvalidEmail);
form.addEventListener("submit", LinkIfAdmin);
