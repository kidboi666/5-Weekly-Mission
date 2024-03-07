const signupForm = document.querySelector('.signup__wrap form');
const signupFomeInput = document.querySelectorAll('.signup__form input');
const signupEmail = document.querySelector('.signup__wrap #form__email');
const signupPassword = document.querySelector('.signup__wrap #form__pw');
const signupPasswordConfirm = document.querySelector('.signup__wrap #form__pw__confirm');
const submitButton = document.querySelector('.signup__wrap .btn_signup');

let validateObject = { // 활성화
  email:false,
  password:false,
  passwordConfirm:false,
}; 

function validateEmail () { // 이메일
  const regex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
  if(signupEmail.value !== '') {
    if(regex.test(signupEmail.value)) {
      validateObject.email = true;
      errorInputRemove(signupEmail);
    } else {
      validateObject.email = false;
      errorInputAdd(signupEmail, '올바른 이메일 주소가 아닙니다.');
    }
  } else {
    validateObject.email = false;
    errorInputAdd(signupEmail, '이메일을 입력해 주세요.');
  }
}

function validatePassword () { // 비밀번호
  if(signupPassword.value !== '') {
    if (signupPasswordConfirm.value !== ''){
      validatePasswordConfirm();
    }
    validateObject.password = true;
    errorInputRemove(signupPassword);
  } else {
    validateObject.password = false;
    errorInputAdd(signupPassword, '비밀번호를 입력해 주세요.');
  }
}

function validatePasswordConfirm () { // 비밀번호 확인
  if(signupPasswordConfirm.value !== '') {
    if((signupPassword.value === signupPasswordConfirm.value)) {
      validateObject.passwordConfirm = true;
      errorInputRemove(signupPasswordConfirm);
      return false;
    }
    validateObject.passwordConfirm = false;
    errorInputAdd(signupPasswordConfirm, '비밀번호가 다릅니다.');  
  } else {
    validateObject.passwordConfirm = false;
    errorInputAdd(signupPasswordConfirm, '비밀번호 확인을 입력해 주세요.');
  }
}

function errorInputAdd (target, massage) { // error massage add
  const parent = target.closest('.form__box');
  parent.classList.add('error');
  parent.querySelector('.error__text').innerText = massage;
}

function errorInputRemove (target) { // error massage remove
  const parent = target.closest('.form__box');
  parent.classList.remove('error');
  parent.querySelector('.error__text').innerText = ''
}

function focusOutInput (e) {
  const { target } = e;
  if(target.id === signupEmail.id) {
    validateEmail();
  };

  if(target.id === signupPassword.id) {
    validatePassword();
  };

  if(target.id === signupPasswordConfirm.id) {
    validatePasswordConfirm();
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