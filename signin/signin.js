// css 선택자로 요소 선택
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const emailErrorMsg = document.querySelector('#email-error');
const passwordErrorMsg = document.querySelector('#password-error');
const btn = document.querySelector('#button');
const eyeOn = document.querySelector('#eye-on');

// 이벤트 핸들러
// 이메일 input 이벤트
function emailHandler(event) {
  if (event.target.value === '') {
    emailErrorMsg.textContent = '이메일을 입력해 주세요.';
    emailErrorMsg.classList.add('error-msg-on');
    return;
  }
  //★ 정규표현식으로 변경해야함
  if (event.target.value.indexOf('@') === -1) {
    emailErrorMsg.textContent = '올바른 이메일 주소가 아닙니다.';
    emailErrorMsg.classList.add('error-msg-on');
    return;
  }
  if (event.target.value !== '') {
    emailErrorMsg.textContent = '';
  }
}

// button 이벤트
function button(event) {
  if (
    emailInput.value === 'test@codeit.com' &&
    passwordInput.value === 'codeit101'
  ) {
    location.href = '/folder/folder.html';
  } else {
    emailErrorMsg.textContent = '이메일을 확인해 주세요.';
    emailErrorMsg.classList.add('error-msg-on');
    passwordErrorMsg.textContent = '비밀번호를 확인해 주세요.';
    passwordErrorMsg.classList.add('error-msg-on');
  }
}

// password input 이벤트
function passwordHandler(event) {
  if (passwordInput.value === '') {
    passwordErrorMsg.textContent = '비밀번호를 입력해 주세요.';
    passwordErrorMsg.classList.add('error-msg-on');
    return;
  }
  if (passwordInput.value !== '') {
    passwordErrorMsg.textContent = '';
  }
}

// enter 이벤트
function enter(event) {
  if (
    emailInput.value === 'test@codeit.com' &&
    passwordInput.value === 'codeit101'
  ) {
    if (event.keyCode === 13) {
      location.href = '/folder/folder.html';
    }
  }
  if (
    emailInput.value !== 'test@codeit.com' &&
    passwordInput.value !== 'codeit101'
  ) {
    if (event.keyCode === 13) {
      emailErrorMsg.textContent = '이메일을 확인해 주세요.';
      emailErrorMsg.classList.add('error-msg-on');
      passwordErrorMsg.textContent = '비밀번호를 확인해 주세요.';
      passwordErrorMsg.classList.add('error-msg-on');
    }
  }
}

// 비밀번호 토글 이벤트
function passwordToggle(event) {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeOn.src = '../img/eye_off.svg';
  } else {
    passwordInput.type = 'password';
    eyeOn.src = '../img/eye_on.svg';
  }
}

emailInput.addEventListener('focusout', emailHandler);
passwordInput.addEventListener('focusout', passwordHandler);
btn.addEventListener('click', button);
//emailinput과 passwordInput에서 엔터를 누르면 로그인
emailInput.addEventListener('keydown', enter);
passwordInput.addEventListener('keydown', enter);
// 비밀번호 토글 type="password"가 type="text"로 변경
eyeOn.addEventListener('click', passwordToggle);
