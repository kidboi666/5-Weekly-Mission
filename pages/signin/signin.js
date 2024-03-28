import { signIn } from '../../apis/api';

const $emailInput = document.querySelector('input[type="email"]');
const $emailErrorMessage = document.querySelector(
  '.form-group__error-message--email'
);

const $passwordInput = document.querySelector('input[type="password"]');
const $passwordErrorMessage = document.querySelector(
  '.form-group__error-message--password'
);

const EMAIL_VALUE = $emailInput.value;
const PASSWORD_VALUE = $passwordInput.value;

function appendErrorMessage(errorContainer, message) {
  errorContainer.textContent = message;
}

function showEmailErrorMessage(emailErrorMessage) {
  if (EMAIL_VALUE === '') {
    appendErrorMessage(emailErrorMessage, '이메일을 입력해주세요');
  } else if (EMAIL_VALUE.indexOf('@') === -1) {
    appendErrorMessage(emailErrorMessage, '올바른 이메일 주소가 아닙니다.');
  } else {
    appendErrorMessage(emailErrorMessage, '');
  }
}

function showPasswordErrorMessage(passwordErrorMessage) {
  if (PASSWORD_VALUE === '') {
    appendErrorMessage(passwordErrorMessage, '비밀번호를 입력해주세요');
  } else {
    appendErrorMessage(passwordErrorMessage, '');
  }
}

function validateEmail() {
  showEmailErrorMessage($emailErrorMessage);
}

function validatePassword() {
  showPasswordErrorMessage($passwordErrorMessage);
}

$emailInput.addEventListener('blur', validateEmail);
$passwordInput.addEventListener('blur', validatePassword);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    signIn({ EMAIL_VALUE, PASSWORD_VALUE }).then(console.log(body));

    window.location.href = '/folder';
  }
});
