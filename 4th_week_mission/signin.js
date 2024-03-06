// 이메일 input에서 focus out 할 때, 값이 없을 경우 아래에 “이메일을 입력해 주세요.” 에러 메세지를 보입니다.
// 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 아래에 “올바른 이메일 주소가 아닙니다.” 에러 메세지를 보입니다

//이메일 검사
function validateEmail(email){
  const validate = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return validate.test(email);
}

//입력칸이 빈칸이거나, 올바른 이메일 형식이 아닐때 에러문구 출력기능
document.getElementById('email').addEventListener('focusout', function() {
  const email = this.value.trim();
  const emailError = document.getElementById('email_error');
  if (email === '') {
      emailError.textContent = '이메일을 입력해 주세요.';
  } else if (!validateEmail(email)) {
      emailError.textContent = '올바른 이메일 주소가 아닙니다.';
  } else {
      emailError.textContent = '   ';
  }
});

//비밀번호 검사
document.getElementById('password').addEventListener('focusout', function(){
  const password = this.value.trim();
  const pwdError = document.getElementById('pwd_error');
  if (password === '') {
    pwdError.textContent = '비밀번호를 입력해 주세요.';
} else {
    pwdError.textContent = '   ';
}
});

// Submit
document.querySelector('.cta').addEventListener('click', submitSign);

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
    const emailError = document.getElementById('email_error');
    const passwordError = document.getElementById('pwd_error');

    emailError.textContent = "이메일을 확인해 주세요."
    passwordError.textContent = "비밀번호를 확인해 주세요."
  }
}

// eye-button 클리
const showPassword = document.querySelector("#showPassword");
const passwordField = document.querySelector("#password");
showPassword.addEventListener("click", function(){

  this.classList.toggle("eye-button-off");
  const type = passwordField.getAttribute("type") 
  === "password" ? "text" : "password" ;
  passwordField.setAttribute("type", type);
});
