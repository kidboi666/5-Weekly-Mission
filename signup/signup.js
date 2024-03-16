/**
 * 이메일 input에서 focus out 할 때, 값이 없을 경우 “이메일을 입력해주세요.” 에러 메세지를 보입니다.
 * 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 “올바른 이메일 주소가 아닙니다.” 에러 메세지를 보입니다.
 * 이메일 input에서 focus out 할 때, input 값이 test@codeit.com 일 경우, “이미 사용 중인 이메일입니다.” 에러 메세지를 보입니다.
 *
 * 비밀번호 input에서 focus out 할 때, 값이 8자 미만으로 있거나 문자열만 있거나 숫자만 있는 경우, “비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.” 에러 메세지를 보입니다.
 * 비밀번호 input과 비밀번호 확인 input의 값이 다른 경우, 비밀번호 확인 input 아래에 “비밀번호가 일치하지 않아요.” 에러 메세지를 보입니다.
 *
 * 회원가입을 실행할 경우, 문제가 있는 경우 문제가 있는 input에 에러 메세지로 알립니다.
 * 이외의 유효한 회원가입 시도의 경우, “/folder”로 이동합니다.
 * 회원가입 버튼 클릭 또는 Enter키 입력으로 회원가입 실행돼야 합니다.
 */

const emailInput = document.querySelector('input[type="email"]');
const emailErrorMessage = document.querySelector(
  '.form-group__error-message--email'
);

const passwordInput = document.querySelector('.form-group__password');
const passwordErrorMessage = document.querySelector(
  '.form-group__error-message--password'
);

const passwordConfirmInput = document.querySelector(
  '.form-group__password-confirm'
);
const passwordConfirmErrorMessage = document.querySelector(
  '.form-group__error-message--password-confirm'
);

class EmailValidate {
  constructor(emailInput, errorMessageContainer) {
    this.emailInput = emailInput;
    this.errorMessageContianer = errorMessageContainer;
  }

  validate() {
    const email = emailInput.value;
    if (this.empty(email)) {
      this.showErrorMessage('이메일을 입력해주세요');
      return;
    }

    if (!this.emailFormat(email)) {
      this.showErrorMessage('올바른 이메일 주소가 아닙니다');
      return;
    }

    if (this.useAlready(email)) {
      this.showErrorMessage('이미 사용중인 이메일 입니다');
      return;
    }

    this.clearErrorMessage();
  }

  empty(email) {
    return email === '';
  }

  emailFormat(email) {
    return email.indexOf('@') !== -1;
  }

  useAlready(email) {
    return email === 'test@codeit.com';
  }

  showErrorMessage(message) {
    this.errorMessageContianer.textContent = message;
  }

  clearErrorMessage() {
    this.errorMessageContianer.textContent = '';
  }
}

class PasswordValidate {
  constructor(passwordInput, errorMessageContainer) {
    this.passwordInput = passwordInput;
    this.errorMessageContainer = errorMessageContainer;
  }

  validate() {
    const password = this.passwordInput.value;

    if (this.empty(password)) {
      this.showErrorMessage('비밀번호를 입력해주세요');
      return;
    }

    if (!this.isLengthValid(password) || !this.mixedPattern(password)) {
      this.showErrorMessage(
        '비밀번호는 8자 이상 숫자, 문자 조합으로 입력해주세요'
      );
      return;
    }

    this.clearErrorMessage();
  }

  empty(password) {
    return password === '';
  }

  isLengthValid(password) {
    return password.length >= 8;
  }

  mixedPattern(password) {
    return /^(?=.*[a-zA-Z])(?=.*\d).+$/.test(password);
  }

  static passwordMatch(a, b) {
    if (a.passwordInput.value !== b.passwordInput.value) {
      b.errorMessageContainer.textContent = '비밀번호가 일치하지 않아요';
      return;
    }
    b.errorMessageContainer.textContent = '';
  }

  showErrorMessage(message) {
    this.errorMessageContainer.textContent = message;
  }

  clearErrorMessage() {
    this.errorMessageContainer.textContent = '';
  }
}
const emailValidate = new EmailValidate(emailInput, emailErrorMessage);

const passwordValidate = new PasswordValidate(
  passwordInput,
  passwordErrorMessage
);

const passwordConfirmValidate = new PasswordValidate(
  passwordConfirmInput,
  passwordConfirmErrorMessage
);

emailInput.addEventListener('input', () => {
  emailValidate.validate();
});

passwordInput.addEventListener('input', () => {
  passwordValidate.validate();
});

passwordConfirmInput.addEventListener('input', () => {
  passwordConfirmValidate.validate();
  PasswordValidate.passwordMatch(passwordValidate, passwordConfirmValidate);
});
