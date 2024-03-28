/*email 유효성 검증*/

function validateEmail() {

  const emailInputEl = document.querySelector('.email-input');
  const emailValue = emailInputEl.value;

  const errorMessageEl = document.querySelector('.error-message-email');

  if(emailValue === '') {
    errorMessageEl.textContent = "이메일을 입력해주세요";
    emailInputEl.classList.add('wrongsign');

  } else if(!emailValue.includes("@")) {
    errorMessageEl.textContent = "올바른 이메일 주소가 아닙니다";
    emailInputEl.classList.add('wrongsign');

  } else {
    errorMessageEl.textContent = "";
    emailInputEl.classList.remove('wrongsign');
  }
}

const emailInputEl = document.querySelector('.email-input');
emailInputEl.addEventListener('focusout', validateEmail);


/*password 유효성 검증*/

function validatePassword() {
  const passwordInputEl = document.querySelector('.password-input');
  const passwordValue = passwordInputEl.value;

  const errorMessageEl = document.querySelector('.error-message-password');

  if(passwordValue === '') {
    errorMessageEl.textContent = "비밀번호를 입력해주세요";
    passwordInputEl.classList.add('wrongsign');

  } else {
    errorMessageEl.textContent = "";
    passwordInputEl.classList.remove('wrongsign');
  }
}

const passwordInputEl = document.querySelector('.password-input');
passwordInputEl.addEventListener('focusout', validatePassword);

/*이메일: test@codeit.com 비밀번호: codeti101로 로그인 시, /folder 페이지로 이동
이외의 로그인 시도의 경우, 에러 메세지 출력*/

function validateForm(event) {
  event.preventDefault();

  const emailValue = emailInputEl.value;
  const passwordValue = passwordInputEl.value;

  const errorMessageEl_email = document.querySelector('.error-message-email');
  const errorMessageEl_password = document.querySelector('.error-message-password');

  if (emailValue === "test@codeit.com" && passwordValue === "codeit101") {
    location.href = "./folder.html";

  } else {
    errorMessageEl_email.textContent = "이메일을 확인해주세요";
    errorMessageEl_password.textContent = "비밀번호를 확인해주세요";
  }
}

const signform = document.querySelector('.sign-form');
signform.addEventListener('submit', validateForm);

/*Enter키를 눌러도 로그인이 되도록 추가*/

signform.addEventListener('keydown', (event) => {
  if(event.key === "Enter") {
    validateForm.submit();
  }
});

/*눈 모양 아이콘*/

function togglePasswordVisibility() {
  const passwordInputEl = document.querySelector('.password-input');
  const eyeButtonEl = document.querySelector('.eye-button');
  
  if (passwordInputEl.type === "password") {
    passwordInputEl.type = "text";
    eyeButtonEl.innerHTML = '<img src="../image/eye-on.jpg" />';
  } else {
    passwordInputEl.type = "password";
    eyeButtonEl.innerHTML = '<img src="../image/eye-off.jpg" />';
  }
}

const eyeButtonEl = document.querySelector('.eye-button');
eyeButtonEl.addEventListener('click', togglePasswordVisibility);
