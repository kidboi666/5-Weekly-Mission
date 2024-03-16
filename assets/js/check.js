import { pwErrorMessage, inputEmail, emailErrorMessage, inputPassword } from '/assets/js/login.js';
export {
  textCheck,
  textCheckPw,
}

// 공통
// 1. 이메일 input에서 focus out 할 때, 값이 없을 경우 “이메일을 입력해주세요.” 에러 메세지를 보입니다.
// 2. 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 “올바른 이메일 주소가 아닙니다.” 에러 메세지를 보입니다.
//----

// 형식 검증
function textCheck() {
  // 이메일 형식
  const email = inputEmail.value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  inputEmail.classList.remove("error-border");
  emailErrorMessage.innerHTML = '';

  // 이메일
  if (email.length > 0) {
    if (!emailPattern.test(email)) {
      inputEmail.classList.remove('sign-focus');
      inputEmail.classList.add("error-border");
      emailErrorMessage.innerHTML = '올바른 이메일 주소가 아닙니다.';
    }
  } else {
    inputEmail.classList.add("error-border");
    emailErrorMessage.innerHTML = '이메일을 입력해 주세요.';
  }
}

function textCheckPw() {
  // 비밀번호
  const password = inputPassword.value;
  inputPassword.classList.remove("error-border");
  pwErrorMessage.innerHTML = '';

  if (password.length === 0) {
    inputPassword.classList.add("error-border");
    pwErrorMessage.innerHTML = '비밀번호를 입력해 주세요.';
  }
}

// 이메일, 비밀번호 형식 확인
inputEmail.addEventListener("blur", textCheck);
inputPassword.addEventListener("blur", textCheckPw);