const signinForm = document.querySelector('.signin__wrap form');
const signinFomeInput = document.querySelectorAll('.signin__wrap input');
const signinEmail = document.querySelector('#signin__email');
const signinPassword = document.querySelector('#signin__pw__input');
const submitButton = document.querySelector('.signin__wrap .btn_signin');
let validateObject = { // 활성화
  email:false,
  password:false,
}; 

const users = [
  { email:'test@codeit.com', pw:'codeit101' },
]

function emailErrorMessage () { // 이메일 에러 메세지
  switch (validateEmail()) {
    case 'emailEmpty':
      errorInputAdd(signinEmail, '이메일을 입력해 주세요.');
      break;
    case 'emailReg':
      removeInputMessage(signinEmail);
      break;
    case 'emailError':
      errorInputAdd(signinEmail, '올바른 이메일 주소가 아닙니다.');
      break;
    default:
      removeInputMessage(signinEmail);
      break;
  }
}

function passwordErrorMessage () { // 비밀번호 에러 메세지
  switch (validatePassword()) {
    case 'passwordEmpty':
      errorInputAdd(signinPassword, '비밀번호를 입력해 주세요.');
      break;
    default:
      removeInputMessage(signinPassword);
      break;
  }
}

function validateEmail () { // 이메일
  const regex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
  if (signinEmail.value.trim() === '') {
    validateObject.email = false;
    return 'emailEmpty'
  } else if (regex.test(signinEmail.value.trim())) {
    validateObject.email = true;
    return 'emailReg'
  } else {
    validateObject.email = false;
    return 'emailError'
  }
}

function validatePassword () { // 비밀번호
  if (signinPassword.value.trim() === '') {
    validateObject.password = false;
    return 'passwordEmpty'
  } else {
    validateObject.password = true;
    return ''
  }
}

function errorInputAdd (target, massage) { // error massage add
  const parent = target.closest('.form__box');
  parent.classList.add('error');
  parent.querySelector('.error__text').innerText = massage;
}

function removeInputMessage(target) { // error massage remove
  const parent = target.closest('.form__box');
  parent.classList.remove('error');
  parent.querySelector('.error__text').innerText = ''
}

function validateForm (e) { // form handler
  e.preventDefault();
  validateEmail();
  validatePassword();
  formActiveBtn();
  
  const user = users.find(data => data.email === signinEmail.value.trim() && data.pw === signinPassword.value.trim() );
  if (user) {
    window.location.href='/folder.html';
  } else if (users[0].email === signinEmail.value.trim()) {
    errorInputAdd(signinPassword,'비밀번호를 확인해 주세요.')
  } else {
    errorInputAdd(signinEmail,'이메일을 확인해 주세요.')
    errorInputAdd(signinPassword,'비밀번호를 확인해 주세요.')
  }
}

function focusOutInput (e) {
  const {target} = e;
  if (target.id === signinEmail.id) {
    emailErrorMessage();
  };

  if (target.id === signinPassword.id) {
    passwordErrorMessage();
  };
  formActiveBtn();
}

function formActiveBtn () {
  const inputs = [validateObject.email,validateObject.password].every(data => data === true);
  if (inputs) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'disabled');
  }
}

for (const signup of signinFomeInput) { // 회원가입
  signup.addEventListener('focusout', focusOutInput);
}

signinForm.addEventListener('submit',validateForm)