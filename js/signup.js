const signupForm = document.querySelector('.signup__wrap form');
const signupFomeInput = document.querySelectorAll('.signup__form input');
const signupEmail = document.querySelector('#form__email');
const signupPassword = document.querySelector('#form__pw');
const signupPasswordConfirm = document.querySelector('#form__pw__confirm');
const submitButton = document.querySelector('.signup__wrap .btn_signup');

let validateObject = { // 활성화
  email:false,
  password:false,
  passwordConfirm:false,
}; 

function emailErrorMessage () { // 이메일 에러 메세지
  switch (validateEmail()) {
    case 'emailEmpty':
      addInputMessage(signupEmail, '이메일을 입력해 주세요.');
      break;
    case 'emailError':
      addInputMessage(signupEmail, '올바른 이메일 주소가 아닙니다.');
      break;
    default:
      removeInputMessage(signupEmail);
      break;
  }
}

function passwordErrorMessage () { // 비밀번호 에러 메세지
  switch (validatePassword()) {
    case 'pwEmpty':
      addInputMessage(signupPassword, '비밀번호를 입력해 주세요.');
      break;
    default:
      removeInputMessage(signupPassword);
      break;
  }
}

function passwordConfirmErrorMessage () {
  switch (validatePasswordConfirm()) {
    case 'pwConfirmEmpty':
      addInputMessage(signupPasswordConfirm, '비밀번호 확인을 입력해 주세요.');
      break;
    case 'pwConfirmError':
      addInputMessage(signupPasswordConfirm, '비밀번호가 다릅니다.');  
      break;
    default:
      removeInputMessage(signupPasswordConfirm);
      break;
  }
}

function validateEmail () { // 이메일
  const regex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
  if (signupEmail.value.trim() === '') {
    validateObject.email = false;
    return 'emailEmpty'
  } else if (regex.test(signupEmail.value.trim())) {
      validateObject.email = true;
      return ''
  } else {
    validateObject.email = false;
    return 'emailError'
  }
}

function validatePassword () { // 비밀번호
  if (signupPassword.value.trim() === '') {
    validateObject.password = false;
    return 'pwEmpty'
  } else {
    validateObject.password = true;
    return ''
  }
}

function validatePasswordConfirm () { // 비밀번호 확인
  if (signupPasswordConfirm.value.trim() === '') {
    validateObject.passwordConfirm = false;
    return 'pwConfirmEmpty'
  } else if (signupPassword.value.trim() !== signupPasswordConfirm.value.trim()) {
    validateObject.passwordConfirm = false;
    return 'pwConfirmError'
  } else {
    validateObject.passwordConfirm = true;
    return ''
  }
}

function addInputMessage (target, massage) { // error massage add
  const parent = target.closest('.form__box');
  parent.classList.add('error');
  parent.querySelector('.error__text').innerText = massage;
}

function removeInputMessage (target) { // error massage remove
  const parent = target.closest('.form__box');
  parent.classList.remove('error');
  parent.querySelector('.error__text').innerText = ''
}

function focusOutInput (e) {
  const { target } = e;
  if(target.id === signupEmail.id) {
    emailErrorMessage();
  };

  if(target.id === signupPassword.id) {
    passwordErrorMessage ();
  };

  if(target.id === signupPasswordConfirm.id) {
    passwordConfirmErrorMessage ();
  };
  formActiveBtn();
}

function formActiveBtn () {
  const inputs = [validateObject.email,validateObject.password,validateObject.passwordConfirm].every(data => data === true);
  if(inputs){
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'disabled');
  }
}

function validateForm (e) { // form handler
  e.preventDefault();
  validateEmail();
  validatePassword();
  validatePasswordConfirm();
  formActiveBtn();
  alert('회원가입을 하였습니다.');
  window.location.href='/signin.html';
}

for (const signup of signupFomeInput) { // 회원가입
  signup.addEventListener('focusout', focusOutInput);
}

signupForm.addEventListener('submit',validateForm);