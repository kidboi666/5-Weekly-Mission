const signinForm = document.querySelector('.signin__wrap form');
const signinFomeInput = document.querySelectorAll('.signin__wrap input');
const signinEmail = document.querySelector('#signin__email');
const signinPassword = document.querySelector('#signin__pw__input');
const submitButton = document.querySelector('.signin__wrap .btn_signin');

let validateObject = { // 활성화
  email:false,
  password:false,
}; 

function focusOutInput (e) {
  const {target} = e;
  if (target.id === signinEmail.id) {
    emailErrorMessage(signinEmail);
  };

  if (target.id === signinPassword.id) {
    passwordErrorMessage(signinPassword);
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

function validateForm (e) { // form handler
  e.preventDefault();
  formActiveBtn();

  const user = users.find(data => data.email === signinEmail.value.trim() && data.pw === signinPassword.value.trim() );

  if (user) {
    window.location.href='/folder.html';
  } else {
    addInputMessage(signinEmail,'비밀번호를 확인해 주세요.')
    addInputMessage(signinPassword,'비밀번호를 확인해 주세요.')
  }
}

for (const signup of signinFomeInput) { // 회원가입
  signup.addEventListener('focusout', focusOutInput);
}

signinForm.addEventListener('submit',validateForm)