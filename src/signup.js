import {
  setInputError,
  removeInputError,
  isEmailValid,
  isPasswordValid,
  togglePassword,
  checkAccountValid,
  checkAccountAlreadyExist,
  TEST_USER,
} from './global.js';


// 이메일 공란, 이메일 형식 체크 및 초기화
const emailInput = document.querySelector('#email');
const emailErrorMessage = document.querySelector('#email-error-message');
emailInput.addEventListener("focusout", (event) => checkEmailInput(event.target.value))


function checkEmailInput(email) {
  if (email === '') {
    setInputError({input: emailInput, errorMessage: emailErrorMessage}, '이메일을 입력해주세요.');
    return false;
  }

  if (isEmailValid(email) === false) {
    setInputError({input: emailInput, errorMessage: emailErrorMessage}, '올바른 이메일 주소가 아닙니다.');
    return false;
  }

  if (email === TEST_USER.email) {
    setInputError({input: emailInput, errorMessage: emailErrorMessage}, '이미 사용 중인 이메일입니다.')
    return false; // if 문이 실행되면 역이서 함수를 끝낸다는 의도는 알겠는데, 왜 false 값인가?
  }

  removeInputError({input:emailInput, errorMessage: emailErrorMessage});
  return true; // true 의 의미를 잘 모르겠다.
}


// 비밀번호 공란 체크 및 초기화
const passwordInput = document.querySelector('#password');
const passwordErrorMessage = document.querySelector('#password-error-message');
passwordInput.addEventListener("focusout", (event) => checkPasswordInput(event.target.value))

function checkPasswordInput(password) {
  if (password === '' || !isPasswordValid) {
    setInputError({input: passwordInput, errorMessage: passwordErrorMessage}, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    return false;
  }

  removeInputError({input:passwordInput, errorMessage: passwordErrorMessage});
  return true
}


// 비밀번호 확인 공란 체크 및 초기화
const confirmPasswordInput = document.querySelector('#confirm-password');
const confirmPasswordErrorMessage = document.querySelector('#confirm-password-error-message');
confirmPasswordInput.addEventListener("focusout", (event) => checkConfirmPasswordInput(event.target.value))

function checkConfirmPasswordInput(password) {
  if (password === '' || !isPasswordValid) {
    setInputError({input: confirmPasswordInput, errorMessage: confirmPasswordErrorMessage}, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    return false;
  }

  if (!(passwordInput.value === password)) {
    setInputError({input: confirmPasswordInput, errorMessage: confirmPasswordErrorMessage}, '비밀번호가 일치하지 않습니다.');
    return false;
  }

  removeInputError({input:confirmPasswordInput, errorMessage: confirmPasswordErrorMessage});
  return true;
}



// 비밀번호 출력형식 토글
const passwordToggleButton = document.querySelector('#password-toggle')
passwordToggleButton.addEventListener("click", () => togglePassword(passwordInput, passwordToggleButton))

const confirmPasswordToggleButton = document.querySelector('#confirm-password-toggle')
confirmPasswordToggleButton.addEventListener("click", () => togglePassword(confirmPasswordInput, confirmPasswordToggleButton))



// 테스트 유저인 경우 folder.html 페이지로 이동
// 일반 사용자인 경우 POST REQUEST 에 대한 RESPONSE 200 일 때, folder.html 이동
const signForm = document.querySelector("#form");
signForm.addEventListener("submit", submitForm);
function submitForm(event) {

  event.preventDefault(); // 주어진 조건에서만 이벤트가 작동하도록

  // 계정 정보의 형식 유효성 검사
  const isEmailValid = checkEmailInput;
  const isPasswordValid = checkPasswordInput;
  const isConfirmPasswordValid = checkConfirmPasswordInput;

  // 계정 중복 여부
  const isEmailAlreadyExists = checkAccountAlreadyExist(TEST_USER.email, 'https://bootcamp-api.codeit.kr/docs/api/check-email')

  // 계정 정보의 POST REQUEST 유효성 검사
  const isAccountValid = checkAccountValid({email: emailInput,password: passwordInput}, 'https://bootcamp-api.codeit.kr/docs/api/sign-up')


  if(isEmailValid && isPasswordValid && isConfirmPasswordValid && isAccountValid && !isEmailAlreadyExists) {
    location.href = "/forlder";
  }
}




