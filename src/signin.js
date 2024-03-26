import {
  setInputError,
  removeInputError,
  isEmailValid,
  togglePassword,
  TEST_USER,
  checkAccountValid
} from './global.js';


// 이메일 공란, 이메일 형식 체크 및 초기화
const emailInput = document.querySelector('#email');
const emailErrorMessage = document.querySelector('#email-error-message');
emailInput.addEventListener("focusout", (event) => checkEmailInput(event.target.value))
// 두 번째 파라미터로 checkEmailInput(event.target.value) 는 쓸 수 없음.
// 타당해 보이지만, handler 부분에 함수를 호출하는 경우에는 파라미터를 쓸 수 없기 때문. 그래서 새로운 콜백을 선언해주고 그 안에서 호출해줌.

function checkEmailInput(email) {
  if (email === '') {
    setInputError({input: emailInput, errorMessage: emailErrorMessage}, '이메일을 입력해주세요.');
    return;
  }

  if (isEmailValid(email) === false) {
    setInputError({input: emailInput, errorMessage: emailErrorMessage}, '올바른 이메일 주소가 아닙니다.');
    return;  
  }
  // focusin 이 아니라 focusout 했을 때 초기화하는 게 훨씬 자연스럽다
  removeInputError({input:emailInput, errorMessage: emailErrorMessage});
}


// 비밀번호 공란 체크 및 초기화
const passwordInput = document.querySelector('#password');
const passwordErrorMessage = document.querySelector('#password-error-message');
passwordInput.addEventListener("focusout", (event) => checkPasswordInput(event.target.value))

function checkPasswordInput(password) {
  if (password === '') {
    setInputError({input: passwordInput, errorMessage: passwordErrorMessage}, '비밀번호를 입력해주세요.');
    return;
  }

  removeInputError({input:passwordInput, errorMessage: passwordErrorMessage});
}


// 비밀번호 출력형식 토글
const passwordToggleButton = document.querySelector('#password-toggle')
passwordToggleButton.addEventListener("click", () => togglePassword(password, passwordToggleButton))


// 테스트 유저인 경우 folder.html 페이지로 이동
// 일반 사용자인 경우 POST REQUEST 에 대한 RESPONSE 200 일 때, folder.html 이동
const signForm = document.querySelector("#form");
signForm.addEventListener("submit", submitForm);
function submitForm(event) {

  event.preventDefault(); // 주어진 조건에서만 이벤트가 작동하도록

  const isTestUser =
    emailInput.value === TEST_USER.email && passwordInput.value === TEST_USER.password; // 계정 정보의 형식 유효성 검사

  const isAccountValid = checkAccountValid({email: emailInput,password: passwordInput}, 'https://bootcamp-api.codeit.kr/docs/api/sign-in') // 계정 정보의 POST REQUEST 유효성 검사


  if (isTestUser || isAccountValid) {
    location.href = "/folder";
    return;
  } else {
    setInputError({ input: emailInput, errorMessage: emailErrorMessage }, "이메일을 확인해주세요.");
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage }, "비밀번호를 확인해주세요."
    );
  }
}
