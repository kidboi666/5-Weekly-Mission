//이메일 검사
function validateEmail(email){
  const validate = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return validate.test(email);
}

//입력칸이 빈칸이거나, 올바른 이메일 형식이 아닐때 에러문구 출력기능
document.getElementById('email').addEventListener('focusout', function() {
  const email = this.value.trim();
  const emailError = document.getElementById('email-error');

  if (email === '') {
      emailError.textContent = '이메일을 입력해 주세요.';
      this.classList.add("emailErrorLine")
  } else if (!validateEmail(email)) {
      emailError.textContent = '올바른 이메일 주소가 아닙니다.';
      this.classList.add("emailErrorLine")
  } else {
      emailError.textContent = '';
      this.classList.remove("emailErrorLine")
  }
});
const pwdError = document.getElementById('pwd-error');
//비밀번호 검사
document.getElementById('password').addEventListener('focusout', function(){
  const password = this.value.trim();
  

  if (password === '') {
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
})

function submitSign() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

    // 입력된 이메일과 비밀번호가, 요구된 사항과 같은지 검사
  if (email === "test@codeit.com" && password === "codeit101") {
    location.href = "/folder.html"; // 로그인 버튼 타입을 submit으로 하니 작동이 되지 않아, button type으로 설정함
  }else {
    // 입력된 이메일과 비밀번호가 다를 시에, 오류 메세지 출력
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('pwd_-rror');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    emailError.textContent = "이메일을 확인해 주세요."
    email.classList.add("emailErrorLine")
    passwordError.textContent = "비밀번호를 확인해 주세요."
    password.classList.add('pwdErrorLine')
  }
}

// eye-button 클릭에 따라 eye-button on/off를 토글하고, password input type을 변경함 
const showPassword = document.querySelector("#showPassword");
const passwordField = document.querySelector("#password");

showPassword.addEventListener("click", function(){
  this.classList.toggle("eye-button-off");
  const currentType = passwordField.getAttribute("type");
  const type = currentt === "password" ? "text" : "password" ;
  passwordField.setAttribute("type", type);
});
