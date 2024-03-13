// 이메일에이메일 input에서 focus out 할 때, 값이 없을 경우
// 아래에 “이메일을 입력해 주세요.” 에러 메세지를 보입니다.
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email-errorText");

function emailCheck(email) {
  const emailForm =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return emailForm.test(email);
}

function emailInputFocusOut() {
  if (emailInput.value == "") {
    emailError.textContent = "이메일을 입력하세요.";
    emailError.classList.remove("error");
    emailInput.classList.add("error-input");
  } else {
    const emailChecked = emailCheck(emailInput.value);
    if (emailChecked) {
      emailError.classList.add("error");
      emailInput.classList.remove("error-input");
    } else {
      emailError.textContent = "올바른 이메일 주소가 아닙니다.";
      emailError.classList.remove("error");
      emailInput.classList.add("error-input");
    }
  }
}

emailInput.addEventListener("focusout", emailInputFocusOut);

// 비밀번호 input에서 focus out 할 때, 값이 없을 경우
// 아래에 “비밀번호를 입력해 주세요.” 에러 메세지를 보입니다.
const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector("#password-errorText");

function pwInputFocusOut() {
  if (passwordInput.value == "") {
    passwordError.classList.remove("error");
    passwordInput.classList.add("error-input");
    passwordError.textContent = "비밀번호를 입력해 주세요.";
  } else {
    passwordError.classList.add("error");
    passwordInput.classList.remove("error-input");
  }
}
passwordInput.addEventListener("focusout", pwInputFocusOut);

const btn = document.querySelector("#loginBtn");

function signIn(e) {
  const checkedEmail = emailInput.value === "test@codeit.kr";
  const checkedPassword = passwordInput.value === "codeit101";
  console.log(checkedEmail, checkedPassword);

  if (checkedEmail && checkedPassword) {
    window.location.href = "folder.html";
  } else {
    if (!checkedEmail) {
      emailError.classList.remove("error");
      passwordInput.classList.add("error-input");
      emailError.textContent = "이메일을 확인해주세요.";
    } else if (checkedEmail) {
      emailError.classList.add("error");
    }
    if (!checkedPassword) {
      passwordError.classList.remove("error");
      passwordInput.classList.add("error-input");
      passwordError.textContent = "비밀번호를 확인해주세요.";
    } else if (checkedPassword) {
      passwordError.classList.add("error");
    }
    e.preventDefault();
  }
}
btn.addEventListener("click", signIn);

const form = document.querySelector(".input");

function enterSubmit(e) {
  e.preventDefault();
}

form.addEventListener("submit", enterSubmit);
