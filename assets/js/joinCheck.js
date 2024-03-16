//focus out
// 3. 이메일 input에서 focus out 할 때, input 값이 test@codeit.com 일 경우, “이미 사용 중인 이메일입니다.” 에러 메세지를 보입니다.
// 4. 비밀번호 input에서 focus out 할 때, 값이 8자 미만으로 있거나 문자열만 있거나 숫자만 있는 경우, “비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.” 에러 메세지를 보입니다.
// 5. 비밀번호 input과 비밀번호 확인 input의 값이 다른 경우, 비밀번호 확인 input 아래에 “비밀번호가 일치하지 않아요.” 에러 메세지를 보입니다.

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
  const user = data.find((d) => {
    return d.email === email;
  });
  inputEmail.classList.remove("error-border");
  emailErrorMessage.innerHTML = '';

  console.log('email',email);
  console.log('user',user);

  if (user) {
    inputEmail.classList.add("error-border");
    emailErrorMessage.innerHTML = '이미 사용 중인 이메일입니다.';
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
}


// 비밀번호 확인
function textCheckPwConfirm() {
  const passwordConfirm = inputPasswordConfirm.value;
  const password = inputPassword.value;
  inputPasswordConfirm.classList.remove("error-border");
  pwConfirmErrorMessage.innerHTML = '';

  console.log('passwordCondirm',passwordConfirm);

  if (passwordConfirm !== password) {
    inputPasswordConfirm.classList.add("error-border");
    pwConfirmErrorMessage.innerHTML = '비밀번호가 일치하지 않아요.';
  }
}

// 이메일, 비밀번호 형식 확인
inputEmail.addEventListener("blur", textCheck);
inputPassword.addEventListener("blur", textCheckPw);
inputPasswordConfirm.addEventListener("blur", textCheckPwConfirm);