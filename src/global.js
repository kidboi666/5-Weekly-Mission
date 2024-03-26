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

export function isEmailValid (element) {
  return new RegExp(EMAIL_REGEX).test(element);
}


export function togglePassword(input, button) {
  if (input.getAttribute('type') ==='password') {
    input.setAttribute('type', 'text');
    button.getElementByTagName('img').setAttribute('src','../images/eye-off.svg');
  } else {
    input.setAttribute('type', 'password');
    button.getElementByTagName('img').setAttribute('src','../images/eye-on.svg');
  }
}

export const TEST_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};

