import {errMsg, user,emailInputEl, emailErrorMessageEl, passwordInputEl,passwodrErrorMessageEl} from "./tags.js";

// 입력된 이메일 값 받고, 에러 메세지 출력
function validateEmail() {
  const email = emailInputEl.value;
  const errMsgCode = isEmailValid(email);
  emailErrorMessageEl.textContent = errMsg[errMsgCode];
}

// 이메일 검사
function isEmailValid(email){
  if(email.length === 0){
    console.log("return0");
    return 0;
  }else if( !(email.includes("@") && email.includes(".")) ){
    console.log("return1");
    return 1;
  }else {
    console.log("return4");
    return 4;
  }
}

// 입력된 패스워드 받고, 에러 메세지 출력
function validatePassword() {
  const password = passwordInputEl.value;
  const errMsgCode = isPasswordValid(password);
  passwodrErrorMessageEl.textContent = errMsg[errMsgCode];
}

// 패스워드 검사
function isPasswordValid(password){
  if(password.length === 0){
    return 2;
  }
}

// 이메일, 패스워드 검사 후 로그인
function validateLogin(email, password) {
  if(user.email === email && user.password === password){
    window.location.href = "../folder/index.html";
  } else{
    const errMsgCode = 3;
    emailErrorMessageEl.textContent = errMsg[errMsgCode];
    passwodrErrorMessageEl.textContent = errMsg[errMsgCode]
  }
}

//엔터키 활용
function clickLoginBtn() {
  const email = emailInputEl.value;
  const password = passwordInputEl.value;
  
  validateEmail();
  validatePassword();
  validateLogin(email, password);
}
function clickEnter(e){
  if(e.keyCode === 13){
    clickLoginBtn();
  }
}

export {validateEmail, validatePassword, clickEnter, clickLoginBtn};


