const form = document.querySelector("#signinForm");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

function showMessageToWriteInput(e) {
  const checkMessage = e.target.parentElement.parentElement.childNodes.length !== 5;
  if (!e.target.value) {
    if (!checkMessage) {
      const notice = document.createElement("div");
      const textContent = e.target.id === 'email' ? "이메일을 입력해 주세요." : "비밀번호를 입력해 주세요.";
      notice.classList.add("auth-form__notice-enter-input");
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
      notice.classList.add("auth-form__notice-enter-input");
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

function LinkIfAdmin(e) {
  e.preventDefault();
  const adminEmail = "test@codeit.com";
  const adminPassword = "codeit101";
  if (email.value === adminEmail && password.value === adminPassword) {
    location.href = "/folder";
  }
}

email.addEventListener("focusout", verifyInvalidEmail);
password.addEventListener("focusout", showMessageToWriteInput);
form.addEventListener("submit", LinkIfAdmin);
