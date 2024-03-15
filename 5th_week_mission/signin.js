import {
  validateEmail,
  togglePassword,
  testUser,
} from "./utils.js";

//재사용 
const email = document.getElementById('email')
const password = document.getElementById('password');
const showPassword = document.querySelector("#showPassword");
const passwordField = document.querySelector("#password");

//입력칸이 빈칸이거나, 올바른 이메일 형식이 아닐때 에러문구 출력기능
email.addEventListener('focusout', function () {
  const emailInput = email.value;
  const emailError = document.getElementById('email-error');

  if (emailInput === '') {
      emailError.textContent = '이메일을 입력해 주세요.';
      email.classList.add("emailErrorLine")
  } else if (!validateEmail(emailInput)) {
      emailError.textContent = '올바른 이메일 주소가 아닙니다.';
      email.classList.add("emailErrorLine")
  } else {
      emailError.textContent = '';
      email.classList.remove("emailErrorLine")
  }
});

//비밀번호 검사
password.addEventListener('focusout', function() {
  const passwordInput = this.value;
  const pwdError = document.getElementById('pwd-error');

  if (passwordInput === '') {
    pwdError.textContent = '비밀번호를 입력해 주세요.';
    this.classList.add("pwdErrorLine")
    
} else {
    pwdError.textContent = '';
    this.classList.remove("pwdErrorLine")
}
});

// Submit
document.querySelector('.sign-button').addEventListener('click', submitSign);
document.addEventListener('keydown', function submitByEnter(e) {
  if (e.key === 'Enter') {
      submitSign();
  }
});

function submitSign() {
  const emailInput = email.value;
  const passwordInput = password.value;

    // 입력된 이메일과 비밀번호가, 요구된 사항과 같은지 검사
  if (emailInput === testUser.email && passwordInput === testUser.password) {
    location.href = "/folder.html";
  }else {
    // 입력된 이메일과 비밀번호가 다를 시에, 오류 메세지 출력
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('pwd_-rror');
  
    emailError.textContent = "이메일을 확인해 주세요."
    email.classList.add("emailErrorLine")
    passwordError.textContent = "비밀번호를 확인해 주세요."
    password.classList.add('pwdErrorLine')
  }
};

// eye-button 클릭에 따라 eye-button on/off를 토글하고, password input type을 변경함 

showPassword.addEventListener("click", () => togglePassword(showPassword, passwordField));
