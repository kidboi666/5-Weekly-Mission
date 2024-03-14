// 이메일 input에서 focus out 할 때, 값이 없을 경우 아래에 “이메일을 입력해 주세요.” 에러 메세지를 보입니다.
// 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 아래에 “올바른 이메일 주소가 아닙니다.” 에러 메세지를 보입니다

//이메일 검사
function validateEmail(email){
  const emailRegrex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return emailRegrex.test(email);
}

//입력칸이 빈칸이거나, 올바른 이메일 형식이 아닐때 에러문구 출력기능
document.getElementById('email').addEventListener('focusout', function() {
  const email = this.value.trim();
  const emailError = document.getElementById('email-error');
  if (email === '') {
      emailError.textContent = '이메일을 입력해 주세요.';
  } else if (!validateEmail(email)) {
      emailError.textContent = '올바른 이메일 주소가 아닙니다.';
  } else {
      emailError.textContent = '';
  }
});

//비밀번호 검사
document.getElementById('password').addEventListener('focusout', function(){
  const password = this.value.trim();
  const pwdError = document.getElementById('pwd-error');
  if (password === '') {
    pwdError.textContent = '비밀번호를 입력해 주세요.';
} else {
    pwdError.textContent = '';
}
});
//비밀번호 확인 검사
document.getElementById('passwordRepeat').addEventListener('focusout', function(){
  const password = document.getElementById('password').value.trim();
  const passwordRepeat = this.value.trim();
  const pwdCheckerError = document.getElementById('pwdCheckerError');
  if (passwordRepeat === ''){
    pwdCheckerError.textContent = '비밀번호를 입력해 주세요.';
    this.classList.add("pwdErrorLine");
  } else if (password  === passwordRepeat) {
    pwdCheckerError.textContent = '';
    this.classList.remove("pwdErrorLine");
  } else {
    pwdCheckerError.textContent ='비밀번호가 다릅니다.';
    this.classList.add("pwdErrorLine");
  }  
})



// eye-button 클릭에 따라 eye-button on/off를 토글하고, password input type을 변경함 
const showPassword = document.querySelector("#showPassword");
const passwordField = document.querySelector("#password");
const showPasswordCheck = document.querySelector("#showPasswordCheck");
const passwordRepeatField = document.querySelector("#passwordRepeat");

// 비밀번호 input 이벤트 핸들러
showPassword.addEventListener("click", function(){
  this.classList.toggle("eye-button-off");
  const type = passwordField.getAttribute("type") 
  === "password" ? "text" : "password" ;
  passwordField.setAttribute("type", type);
});
// 비밀번호 확인 input 이벤트 핸들러
showPasswordCheck.addEventListener("click", function(){
  this.classList.toggle("eye-button-off");
  const type = passwordRepeatField.getAttribute("type") 
  === "password" ? "text" : "password" ;
  passwordRepeatField.setAttribute("type", type);
});
