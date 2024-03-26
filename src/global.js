const SIGN_INPUT_ERROR_CLASSNAME = 'sign-input-error';
const ERROR_MESSAGE_CLASSNAME = 'error-message-on';
const EMAIL_REGEX = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;


// id, pwd 이벤트 모두에 적용 가능한 함수!
export function setInputError (element, message) {
  element.errorMessage.classList.add(ERROR_MESSAGE_CLASSNAME);
  element.errorMessage.textContent = message;
  element.input.classList.add(SIGN_INPUT_ERROR_CLASSNAME);
}

// id, pwd 이벤트 모두에 적용 가능한 함수!
export function removeInputError (element) {
  element.errorMessage.classList.remove(ERROR_MESSAGE_CLASSNAME);
  element.errorMessage.textContent = '';
  element.input.classList.remove(SIGN_INPUT_ERROR_CLASSNAME);
}

// 이메일 유효성 검사
export function isEmailValid (email) {
  return new RegExp(EMAIL_REGEX).test(email);
}

// 비밀번호 유효성 검사
export function isPasswordValid (password) {
  const isEightLettersOrMore = password.length >= 8 
  const isNumberAndCharacter = password.match(/[0-9]/g) && password.match(/[a-zA-Z]/gi);
  return isEightLettersOrMore && isNumberAndCharacter
}

// 비밀번호 토글
export function togglePassword(input, button) {
  if (input.getAttribute('type') ==='password') {
    input.setAttribute('type', 'text');
    button.getElementsByTagName('img')[0].setAttribute('src','./images/eye-on.svg'); // 아이콘 위치는 HTML 문서 기준으로 써야 함
  } else {
    input.setAttribute('type', 'password');
    button.getElementsByTagName('img')[0].setAttribute('src','./images/eye-off.svg');
  }
}

export const TEST_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};

