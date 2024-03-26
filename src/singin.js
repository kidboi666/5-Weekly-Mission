import {
  setInputError,
  removeInputError,
  isEmailValid,
  togglePassword,
  TEST_USER
} from './global.js';

const emailInput = document.querySelector('#email');
const emailErrorMessage = document.querySelector('#email-error-message');
emailInput.addEventListener("focusout", (event) => checkEmailInput(event.target.value))
// 두 번째 파라미터로 checkEmailInput(event.target.value) 는 쓸 수 없음.
// 타당해 보이지만, handler 부분에 함수를 호출하는 경우에는 파라미터를 쓸 수 없기 때문. 그래서 새로운 콜백을 선언해주고 그 안에서 호출해줌.


// 이메일 공란, 이메일 형식 체크 및 초기화
function checkEmailInput(email) {
  if (email === '') {
    setInputError({input: emailInput, errorMessage: emailErrorMessage}, '이메일을 입력해주세요.');
    return;
  }

  if (isEmailValid(email) === false) {
    setInputError({input: emailInput, errorMessage: emailErrorMessage}, '올바른 이메일 주소가 아닙니다.');
    return;  
  }
  // focusin 이 아니라 focusout 했을 때 초기화하는 게 훨씬 자연스럽다
  removeInputError({input:emailInput, errorMessage: emailErrorMessage});
}


// 비밀번호 공란 체크 및 초기화
const passwordInput = document.querySelector('#password');
const passwordErrorMessage = document.querySelector('#password-error-message');
passwordInput.addEventListener("focusout", (event) => checkPasswordInput(event.target.value))

function checkPasswordInput(password) {
  if (password === '') {
    setInputError({input: passwordInput, errorMessage: passwordErrorMessage}, '비밀번호를 입력해주세요.');
    return;
  }

  removeInputError({input:passwordInput, errorMessage: passwordErrorMessage});
}

// 비밀번호 출력형식 토글
const toggleButton = document.querySelector('#password-toggle')
toggleButton.addEventListener("click", () => togglePassword(password, toggleButton))


// 테스트 유저
// 버튼에 위임되어서, 테스트 유저 계정 입력 시 리퀘스트 대신 folder 페이지로 이동
// "submit" 이벤트는 클릭, 엔터키에 모두 반응하는 이벤트이다.
// 이벤트를 버튼이 아니라 form 에 입력한 이유를 모르겠다.
const signForm = document.querySelector("#form");
signForm.addEventListener("submit", submitForm);
function submitForm(event) {

  event.preventDefault();
  // 서버로 리퀘스트가 가지 않도록
  // submit 이벤트는 버튼에서 일어난다. event 객체는 버튼이다.
  // 그래서 event.preventDefault() 로 표기

  const isTestUser =
    emailInput.value === TEST_USER.email && passwordInput.value === TEST_USER.password;

  if (isTestUser) {
    location.href = "/folder";
    return;
  } else {
    setInputError({ input: emailInput, errorMessage: emailErrorMessage }, "이메일을 확인해주세요.");
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage }, "비밀번호를 확인해주세요."
    );
  }
}





/* 기존
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const emailErrorMessage = document.querySelector('#email-error-message')
const pwd = document.querySelector('#password');
const pwdErrorMessage = document.querySelector('#password-error-message')
const btn = document.querySelector('.btn');
const emailCtr = document.querySelector('.username-container');
const pwdCtr = document.querySelector('.password-container');
const emailTest = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const pwdToggle = document.querySelector('.password-toggle');



// focusout : 공란이거나 잘못된 이메일 형식 입력하면 에러메세지 추가
function checkEmail() {
  if (email.value==='') {
    emailErrorMessage.innerHTML = '이메일을 입력하세요.';
    emailErrorMessage.classList.add('error-message-on')
    email.classList.add('sign-input-error')
  } else if (emailTest.test(email.value) === false) {
    emailErrorMessage.innerHTML = '올바른 이메일 주소가 아닙니다.';
    emailErrorMessage.classList.add('error-message-on')
    email.classList.add('sign-input-error')
  }
}

function checkPwd() {
  if (pwd.value==='') {
    pwdErrorMessage.innerHTML = '비밀번호를 입력하세요.';
    pwdErrorMessage.classList.add('error-message-on')
    pwd.classList.add('sign-input-error')
  }
}


email.addEventListener('focusout', checkEmail);
pwd.addEventListener('focusout', checkPwd);


// focusin : 에러메세지 초기화
function resetId() {
  // 메세지 안보이게
  const resetMsg = idCtr.lastElementChild
  resetMsg.style.display = 'none'
  // 메세지 내용 원상복구
  resetMsg.innerHTML = '이메일을 입력해주세요.';
  // 이메일 박스 테두리 원상복구
  id.classList.remove('error')
}


function resetPwd() {
  // 메세지 안보이게
  const resetMsg = pwdCtr.lastElementChild
  resetMsg.style.display = 'none'
  // 이메일 박스 테두리 원상복구
  pwd.classList.remove('error')
}

id.addEventListener('focusin', resetId);
pwd.addEventListener('focusin', resetPwd);


// click, keypress : 로그인 정보 전송
function submit() {
  const adminAccount = {
    id: 'test@codeit.com',
    pwd: 'codeit101'
  };

  if (adminAccount[id] === id.value && adminAccount[pwd] === pwd.value) {
    window.location.href = '/folder'
  }
  id.value=''
  pwd.value=''
}


function submitByEnter(e) {
  if (e.key === 'Enter') {
    submit();
  }
}

btn.addEventListener('click', submit)
form.addEventListener('keypress', submitByEnter);


// click : 눈 아이콘 토글 시 비밀번호 숨기기 & 보이기 기능 추가
function togglePassword() {
  if (pwd.getAttribute('type') ==='password') {
    pwd.setAttribute('type', 'text');
    pwdToggle.classList.remove('eye-slash');
    pwdToggle.classList.add('eye');
  } else {
    pwd.setAttribute('type', 'password');
    pwdToggle.classList.remove('eye');
    pwdToggle.classList.add('eye-slash');
  }
}

pwdToggle.addEventListener('click', togglePassword)
 */