import {   
  emailErrorMessage,
  pwErrorMessage,
  pwConfirmErrorMessage,
  inputEmail,
  inputPassword,
  inputPasswordConfirm,  
  data,
  passwordPattern,
} from '/assets/js/join.js';

// import {
//   textCheck as test,
//   textCheckPw as test2,
// } from '/assets/js/check.js';

// 회원가입용 형식 검증
// 이메일
function textCheck() {
  const email = inputEmail.value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  const user = data.find((d) => {
    return d.email === email;
  });
  
  inputEmail.classList.remove("error-border");
  emailErrorMessage.innerHTML = '';

  if (user) {
    inputEmail.classList.add("error-border");
    emailErrorMessage.innerHTML = '이미 사용 중인 이메일입니다.';
  }

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

// 비밀번호
function textCheckPw() {
  const password = inputPassword.value;
  inputPassword.classList.remove("error-border");
  pwErrorMessage.innerHTML = '';

  console.log('password',password);
  if (!passwordPattern.test(password)) {
    inputPassword.classList.add("error-border");
    pwErrorMessage.innerHTML = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
  }

  if (password.length === 0) {
    inputPassword.classList.add("error-border");
    pwErrorMessage.innerHTML = '비밀번호를 입력해 주세요.';
  }
}


// 비밀번호 확인
function textCheckPwConfirm() {
  const passwordConfirm = inputPasswordConfirm.value;
  const password = inputPassword.value;
  inputPasswordConfirm.classList.remove("error-border");
  pwConfirmErrorMessage.innerHTML = '';

  if (passwordConfirm !== password) {
    inputPasswordConfirm.classList.add("error-border");
    pwConfirmErrorMessage.innerHTML = '비밀번호가 일치하지 않아요.';
  }
}

// 이메일, 비밀번호 형식 확인
inputEmail.addEventListener("blur", textCheck);
inputPassword.addEventListener("blur", textCheckPw);
inputPasswordConfirm.addEventListener("blur", textCheckPwConfirm);