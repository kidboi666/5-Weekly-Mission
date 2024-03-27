import generateErrorMessage from '../errorMessage';
import { isValidInput } from '../inputValidation';
import { makeRequestOptions, handleLoginResponse } from './apiUtils';

const url = 'https://bootcamp-api.codeit.kr/api/sign-in';

export async function requestAuthorization(emailInput, passwordInput) {
  if (!isValidInput(emailInput, passwordInput)) {
    return;
  }
  const postData = makePostData(emailInput.value, passwordInput.value);
  const requestOptions = makeRequestOptions(postData);

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error('Bad request');
    }
    const responseData = await response.json();
    handleLoginResponse(responseData);
  } catch (e) {
    console.log(e);
    generateErrorMessage(emailInput.parentElement, '이메일을 확인해 주세요');
    generateErrorMessage(
      passwordInput.parentElement,
      '비밀번호를 확인해 주세요'
    );
  }
}

function makePostData(email, password) {
  const postData = {
    'email': email,
    'password': password,
  };
  return postData;
}
