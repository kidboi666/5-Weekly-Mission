const signupForm = document.querySelector('.signup__wrap form');
const signupFormInputs = document.querySelectorAll('.signup__form input');
const signupEmail = document.querySelector('#form__email');
const signupPassword = document.querySelector('#form__pw');
const signupPasswordConfirm = document.querySelector('#form__pw__confirm');
const submitButton = document.querySelector('.signup__wrap .btn_signup');


function focusOutInput(e) {
  const { target } = e;

  if (target.id === signupEmail.id) {
    emailErrorMessage(signupEmail);
  }

  if (target.id === signupPassword.id) {
    passwordErrorMessage(signupPassword);
  }

  if (target.id === signupPasswordConfirm.id) {
    passwordConfirmErrorMessage(signupPassword, signupPasswordConfirm);
  }

  formActiveBtn();
}

function formActiveBtn() {
  const inputs = [validateEmail(signupEmail) === '', validatePassword(signupPassword) === '', validatePasswordConfirm(signupPassword, signupPasswordConfirm) === ''].every(data => data === true);

  if (inputs) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'disabled');
  }
}

function validateForm(e) { // form handler
  e.preventDefault();
  formActiveBtn();
  if (!submitButton.hasAttribute('disabled')) {
    alert('회원가입을 하였습니다.');
    window.location.href = '/signin.html';
  }
}

for (const input of signupFormInputs) {
  input.addEventListener('focusout', focusOutInput);
}

signupForm.addEventListener('submit', validateForm);