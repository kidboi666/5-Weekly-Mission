import isValidEmail from '../emailValidation';
import generateErrorMessage from '../errorMessage';
import isValidPassword, { isSamePassword } from '../passwordValidation';
import { makeRequestOptions, handleLoginResponse } from './apiUtils';

const checkURL = 'https://bootcamp-api.codeit.kr/api/check-email';
const signUpURL = 'https://bootcamp-api.codeit.kr/api/sign-up';

export async function requestSignUp(emailInput, passwordInput, passwordCheck) {
  if (!isValidEmail(emailInput)) {
    return;
  }

  if (!isValidPassword(passwordInput)) {
    return;
  }

  if (!isSamePassword(passwordCheck)) {
    return;
  }

  try {
    const emailCheckData = { 'email': emailInput.value };
    const checkRequestOptions = makeRequestOptions(emailCheckData);
    const checkEmailResponse = await fetch(checkURL, checkRequestOptions);
    if (!checkEmailResponse.ok) {
      throw new Error('Bad request');
    }
  } catch (e) {
    console.log(e);
    generateErrorMessage(
      emailInput.parentElement,
      '이미 사용중인 이메일입니다'
    );
    return;
  }

  const signUpData = {
    'email': emailInput.value,
    'password': passwordInput.value,
  };
  const signUpRequestOptions = makeRequestOptions(signUpData);

  try {
    const signUpResponse = await fetch(signUpURL, signUpRequestOptions);
    if (!signUpResponse.ok) {
      throw new Error('Bad request');
    }
    const signUpResponseData = await signUpResponse.json();
    handleLoginResponse(signUpResponseData);
  } catch {
    alert('회원가입 제출 형식이 잘못되었습니다!');
    return;
  }
}
