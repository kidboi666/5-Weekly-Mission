import {
  removeErrorMessage, 
  validateEmail, 
  users, 
  togglePasswordVisibility
} from '../common.js';



/*email 유효성 검증*/

const emailInputEl = document.querySelector('.email-input');
emailInputEl.addEventListener('focusout', validateEmail);
emailInputEl.addEventListener('focus', removeErrorMessage);


/*password 유효성 검증*/

function validatePassword(event) {
  const passwordInputEl = event.target;
  const passwordValue = passwordInputEl.value;

  const errorMessageEl = document.querySelector('.error-message-password');

  if(passwordValue === '') {
    errorMessageEl.textContent = "비밀번호를 입력해주세요";
    passwordInputEl.classList.add('wrongsign');
  } else {
    passwordInputEl.classList.remove('wrongsign');
  }
}

const passwordInputEl = document.querySelector('.password-input');
passwordInputEl.addEventListener('focusout', validatePassword);
passwordInputEl.addEventListener('focus', removeErrorMessage);



/*이메일: test@codeit.com 비밀번호: codeit101로 로그인 시, /folder 페이지로 이동
이외의 로그인 시도의 경우, 에러 메세지 출력*/

function handleFormSubmit(event) {
  event.preventDefault();

  const emailValue = emailInputEl.value;
  const passwordValue = passwordInputEl.value;

  const errorMessageEl_email = document.querySelector('.error-message-email');
  const errorMessageEl_password = document.querySelector('.error-message-password');

  const user = users.find(user => user.email === emailValue && user.password === passwordValue);

  errorMessageEl_email.textContent = user ? "" : "이메일 또는 비밀번호를 확인해주세요";
  errorMessageEl_password.textContent = user ? "" : "이메일 또는 비밀번호를 확인해주세요";

  if(useremail && userpassword) {
    location.href = "./folder.html";
  }
}

const signform = document.querySelector('.sign-form');
signform.addEventListener('submit', handleFormSubmit);

/*Enter키를 눌러도 로그인이 되도록 추가*/

signform.addEventListener('keydown', (event) => {
    if(event.key === "Enter") {
      handleFormSubmit(event);
    }
  });

/*눈 모양 아이콘*/

const eyeButtonEl = document.querySelector('.eye-button');
eyeButtonEl.addEventListener('click', togglePasswordVisibility);