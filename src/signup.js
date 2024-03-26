import {
  setInputError,
  removeInputError,
  isEmailValid,
  isPasswordValid,
  togglePassword,
  TEST_USER,
} from './global.js';


// 이메일 공란, 이메일 형식 체크 및 초기화
const emailInput = document.querySelector('#email');
const emailErrorMessage = document.querySelector('#email-error-message');
emailInput.addEventListener("focusout", (event) => checkEmailInput(event.target.value))


function checkEmailInput(email) {
  if (email === '') {
    setInputError({input: emailInput, errorMessage: emailErrorMessage}, '이메일을 입력해주세요.');
    return false;
  }

  if (isEmailValid(email) === false) {
    setInputError({input: emailInput, errorMessage: emailErrorMessage}, '올바른 이메일 주소가 아닙니다.');
    return false;
  }

  if (email === TEST_USER.email) {
    setInputError({input: emailInput, errorMessage: emailErrorMessage}, '이미 사용 중인 이메일입니다.')
    return false; // if 문이 실행되면 역이서 함수를 끝낸다는 의도는 알겠는데, 왜 false 값인가?
  }

  removeInputError({input:emailInput, errorMessage: emailErrorMessage});
  return true; // true 의 의미를 잘 모르겠다.
}


// 비밀번호 공란 체크 및 초기화
const passwordInput = document.querySelector('#password');
const passwordErrorMessage = document.querySelector('#password-error-message');
passwordInput.addEventListener("focusout", (event) => checkPasswordInput(event.target.value))

function checkPasswordInput(password) {
  if (password === '' || !isPasswordValid) {
    setInputError({input: passwordInput, errorMessage: passwordErrorMessage}, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    return false;
  }

  removeInputError({input:passwordInput, errorMessage: passwordErrorMessage});
  return true
}


// 비밀번호 확인 공란 체크 및 초기화
const confirmPasswordInput = document.querySelector('#confirm-password');
const confirmPasswordErrorMessage = document.querySelector('#confirm-password-error-message');
confirmPasswordInput.addEventListener("focusout", (event) => checkConfirmPasswordInput(event.target.value))

function checkConfirmPasswordInput(password) {
  if (password === '' || !isPasswordValid) {
    setInputError({input: confirmPasswordInput, errorMessage: confirmPasswordErrorMessage}, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    return false;
  }

  if (!(passwordInput.value === password)) {
    setInputError({input: confirmPasswordInput, errorMessage: confirmPasswordErrorMessage}, '비밀번호가 일치하지 않습니다.');
    return false;
  }

  removeInputError({input:confirmPasswordInput, errorMessage: confirmPasswordErrorMessage});
  return true;
}



// 비밀번호 출력형식 토글
const passwordToggleButton = document.querySelector('#password-toggle')
passwordToggleButton.addEventListener("click", () => togglePassword(passwordInput, passwordToggleButton))

const confirmPasswordToggleButton = document.querySelector('#confirm-password-toggle')
confirmPasswordToggleButton.addEventListener("click", () => togglePassword(confirmPasswordInput, confirmPasswordToggleButton))



// 테스트 유저
const signForm = document.querySelector("#form");
signForm.addEventListener("submit", submitForm);
function submitForm(event) {

  event.preventDefault(); // 특정 조건 안에서만 이벤트를 실행하려고 할 때, 일단 기본적으로는 실행이 안되게 막아놓는다는 뜻 아닐까.

  const isEmailValid = checkEmailInput;
  const isPasswordValid = checkPasswordInput;
  const isConfirmPasswordValid = checkConfirmPasswordInput;
  
  if(isEmailValid && isPasswordValid && isConfirmPasswordValid) {
    location.href = "/forlder";
  }
}







/* const form = document.querySelector('.form');
const id = document.querySelector('#username');
const pwd = document.querySelector('#password');
const repeat = document.querySelector('#password_repeat')
const btn = document.querySelector('.btn');
const idCtr = document.querySelector('.username-container');
const pwdCtr = document.querySelector('.password-container');
const repeatCtr = document.querySelector('.repeat-container')
const emailRegExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
const pwdToggle = document.querySelector('.password-toggle');
const repeatToggle = document.querySelector('.repeat-toggle');
const adminAccount = {
  id: 'test@codeit.com',
  pwd: 'codeit101'
};



// focusout : 이메일, 비밀번호, 비밀번호 확인 유효성 검사
function checkId() {
  // 공란
  if (id.value==='') {  
    const showMsg = idCtr.lastElementChild;
    showMsg.style.display = 'block';
    id.classList.toggle('error');
  // 이메일 형식
  } else if (emailRegExp.test(id.value) === false) {
    const showMsg = idCtr.lastElementChild;
    showMsg.style.display = 'block';
    showMsg.innerHTML = '올바른 이메일 주소가 아닙니다';
    id.classList.toggle('error');
  // test@codeit.com 중복
  } else if (adminAccount.id === id.value) {
    const showMsg = idCtr.lastElementChild;
    showMsg.style.display = 'block';
    showMsg.innerHTML = '이미 사용 중인 이메일입니다.';
    id.classList.toggle('error');
  }
}


function checkPwd() {
  // 공란
  if (pwd.value==='') {
    const showMsg = pwdCtr.lastElementChild;
    showMsg.style.display = 'block';
    pwd.classList.toggle('error');
  // 비밀번호 8자 이상, 숫자영문 조합 
  } else if (passwordRegExp.test(pwd.value) === false) {
    const showMsg = pwdCtr.lastElementChild;
    showMsg.style.display = 'block';
    showMsg.innerHTML = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
    pwd.classList.toggle('error');
  }
}


function checkRepeat() {
  // 공란
  if (repeat.value==='') {
    const showMsg = repeatCtr.lastElementChild;
    showMsg.style.display = 'block';
    repeat.classList.toggle('error');
  // 비밀번호, 비밀번호 재입력 값 다를 경우
  } else if (pwd.value !== repeat.value) {
    const showMsg = repeatCtr.lastElementChild;
    showMsg.style.display = 'block';
    showMsg.innerHTML = '비밀번호가 일치하지 않아요.'
    repeat.classList.toggle('error');
  }
}

id.addEventListener('focusout', checkId);
pwd.addEventListener('focusout', checkPwd);
repeat.addEventListener('focusout', checkRepeat);



// focusin : 에러메세지 초기화
function resetId() {
  const resetMsg = idCtr.lastElementChild
  resetMsg.style.display = 'none'
  resetMsg.innerHTML = '이메일을 입력해주세요.';
  id.classList.remove('error')
}

function resetPwd() {
  const resetMsg = pwdCtr.lastElementChild
  resetMsg.style.display = 'none'
  pwd.classList.remove('error')
}

function resetRepeat() {
  const resetMsg = repeatCtr.lastElementChild
  resetMsg.style.display = 'none'
  repeat.classList.remove('error')
}

id.addEventListener('focusin', resetId);
pwd.addEventListener('focusin', resetPwd);
repeat.addEventListener('focusin', resetRepeat)




// click : 눈 아이콘 토글 시 비밀번호 숨기기 & 보이기 기능 추가
// 비밀번호 input
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

// 비밀번호 재입력 input 
function toggleRepeat() {
  if (repeat.getAttribute('type') ==='password') {
    repeat.setAttribute('type', 'text');
    repeatToggle.classList.remove('eye-slash');
    repeatToggle.classList.add('eye');
  } else {
    repeat.setAttribute('type', 'password');
    repeatToggle.classList.remove('eye');
    repeatToggle.classList.add('eye-slash');
  }
}

pwdToggle.addEventListener('click', togglePassword)
repeatToggle.addEventListener('click', toggleRepeat)


// click, keypress : 로그인 정보 전송
// click
function submit() {
  // id, pwd 가 유효한 경우 '/folder' 로 이동
    if (id.value !== '' && id.value !== adminAccount.id && emailRegExp.test(id.value) === true && pwd.value !== '' && passwordRegExp.test(pwd.value) === true && pwd.value === repeat.value) {
      window.location.href = '/folder';
      id.value='';
      pwd.value='';
      repeat.value='';
    }
}

// keypress
function submitByEnter(e) {
  if (e.key === 'Enter') {
    submit();
  }
}

btn.addEventListener('click', submit);
form.addEventListener('keypress', submitByEnter); */