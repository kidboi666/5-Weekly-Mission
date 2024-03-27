import { MIN_PASSWORD_LENGTH } from './constants.js';
import generateErrorMessage from './errorMessage.js';

export default function isValidPassword(passwordInput) {
  const inputValue = passwordInput.value;

  if (
    document.querySelector('#sign-up-form') &&
    !isSuitablePassword(passwordInput)
  ) {
    generateErrorMessage(
      passwordInput.parentElement,
      '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
    );
    return false;
  }

  if (inputValue.length === 0) {
    generateErrorMessage(
      passwordInput.parentElement,
      '비밀번호를 입력해주세요'
    );
    return false;
  }

  return true;
}

export function isSamePassword(passwordCheck) {
  const pwValue = document.querySelector('#password').value;
  const pwCheckValue = document.querySelector('#password-check').value;

  if (pwValue !== pwCheckValue) {
    generateErrorMessage(
      passwordCheck.parentElement,
      '비밀번호가 일치하지 않아요'
    );
    return false;
  }

  return true;
}

function isSuitablePassword(passwordInput) {
  const password = passwordInput.value;

  if (password.length < MIN_PASSWORD_LENGTH) {
    return false;
  }

  if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
    return false;
  }

  return true;
}
