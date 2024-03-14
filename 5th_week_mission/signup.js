// 이메일 input에서 focus out 할 때, 값이 없을 경우 아래에 “이메일을 입력해 주세요.” 에러 메세지를 보입니다.
// 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 아래에 “올바른 이메일 주소가 아닙니다.” 에러 메세지를 보입니다

//이메일 검사
function validateEmail(email){
  const emailRegrex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return emailRegrex.test(email);
}

//입력칸이 빈칸이거나, 올바른 이메일 형식이 아니거나 이미 사용 중인 이메일을 입력 할 때, 에러문구 출력기능
document.getElementById('email').addEventListener('focusout', function() {
  const email = this.value.trim();
  const emailError = document.getElementById('email-error');
  if (email === '') {
      emailError.textContent = '이메일을 입력해 주세요.';
      this.classList.add("emailErrorLine");
  } else if (!validateEmail(email)) {
      emailError.textContent = '올바른 이메일 주소가 아닙니다.';
      this.classList.add("emailErrorLine");
  } else if (email === 'test@codeit.com'){
    emailError.textContent = '이미 사용 중인 이메일입니다.';
    this.classList.add("emailErrorLine");
  } else {
      emailError.textContent = '';
      this.classList.remove("emailErrorLine");
  }
});

//비밀번호 검사
document.getElementById('password').addEventListener('focusout', function(){
  const password = this.value.trim();
  const num = password.search(/[0-9]/g);
  const eng = password.search(/[a-z]/ig);
  const pwdError = document.getElementById('pwd-error');

  if (password.length < 8 || num < 0 || eng < 0) {
    pwdError.textContent = '비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.';
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
    pwdCheckerError.textContent ='비밀번호가 일치하지 않아요.';
    this.classList.add("pwdErrorLine");
  }  
})

document.querySelector('.sign-button').addEventListener('click', submitSign);

document.addEventListener('keydown', function submitByEnter(e) {
  if (e.key === 'Enter') {
      submitSign();
  }
})


function submitSign() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const passwordRepeat = document.getElementById('passwordRepeat').value.trim()

    // 입력된 이메일과 비밀번호가, 요구된 사항과 같은지 검사
  if (email !== "test@codeit.com" && password === passwordRepeat) {
    location.href = "/folder.html";
  }
}

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
