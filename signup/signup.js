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
