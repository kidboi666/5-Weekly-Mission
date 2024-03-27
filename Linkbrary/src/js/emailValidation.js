import { EMAIL } from './constants.js';
import generateErrorMessage from './errorMessage.js';
export default function isValidEmail(emailInput) {
  if (emailInput.value.length === 0) {
    generateErrorMessage(emailInput.parentElement, '이메일을 입력해주세요');
    return false;
  }

  if (!isEmailForm(emailInput.value)) {
    generateErrorMessage(
      emailInput.parentElement,
      '올바른 이메일 주소가 아닙니다.'
    );
    return false;
  }
  return true;
}

function isEmailForm(inputValue) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(inputValue);
}
