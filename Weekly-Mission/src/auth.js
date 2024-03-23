import { setInputError } from './utils.js';
const passwordErrorMessage = document.querySelector('#password-error-message');
const emailErrorMessage = document.querySelector('#email-error-message');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

export const IdAuth = async function (e) {
  e.preventDefault();

  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
    });
    if (!response.ok) {
      throw new Error('실패');
    }
    location.href = './folder.html';
  } catch (error) {
    setInputError({ input: emailInput, errorMessage: emailErrorMessage }, '이메일을 확인해주세요.');
    setInputError({ input: passwordInput, errorMessage: passwordErrorMessage }, '비밀번호를 확인해주세요.');
    console.error('Error:', error);
  }
};

export const redundancyEmails = async function (e) {
  e.preventDefault();

  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailInput.value,
      }),
    });
    if (!response.ok) {
      throw new Error('실패');
    }
  } catch (error) {
    setInputError({ input: emailInput, errorMessage: emailErrorMessage }, '이메일이 중복되었습니다.');
    console.error('Error:', error);
  }
};

export const register = async function (e) {
  e.preventDefault();

  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
    });
    if (!response.ok) {
      throw new Error('실패');
    }
    location.href = './folder.html';
  } catch (error) {
    setInputError({ input: emailInput, errorMessage: emailErrorMessage }, '이메일을 확인해주세요.');
    setInputError({ input: passwordInput, errorMessage: passwordErrorMessage }, '비밀번호를 확인해주세요.');
    console.error('Error:', error);
  }
};
