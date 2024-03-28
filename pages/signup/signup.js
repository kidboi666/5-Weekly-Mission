const $emailInput = document.querySelector('input[type="email"]');
const $emailErrorMessage = document.querySelector(
  '.form-group__error-message--email'
);

const $passwordInput = document.querySelector('.form-group__password');
const $passwordErrorMessage = document.querySelector(
  '.form-group__error-message--password'
);

const $passwordConfirmInput = document.querySelector(
  '.form-group__password-confirm'
);
const $passwordConfirmErrorMessage = document.querySelector(
  '.form-group__error-message--password-confirm'
);

const $form = document.querySelector('.sign-form');

class EmailValidate {
  constructor(emailInput, errorMessageContainer) {
    this.emailInput = emailInput;
    this.errorMessageContianer = errorMessageContainer;
  }

  validate() {
    const email = $emailInput.value;
    if (this.empty(email)) {
      this.showErrorMessage('이메일을 입력해주세요');
      return;
    }

    if (!this.emailFormat(email)) {
      this.showErrorMessage('올바른 이메일 주소가 아닙니다');
      return;
    }

    // if (this.checkEmail(email)) {
    //   this.showErrorMessage('이미 사용중인 이메일 입니다');
    //   return;
    // }

    this.clearErrorMessage();
  }

  empty(email) {
    return email === '';
  }

  emailFormat(email) {
    return email.indexOf('@') !== -1;
  }

  async checkEmail(email) {
    try {
      const CHECK_EMAIL_URL = 'https://bootcamp-api.codeit.kr/api/check-email';

      await fetch(CHECK_EMAIL_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      if (!response.ok) throw new Error('사용할 수 없는 중복된 이메일 오류');

      const { data } = await response.json();
      const isUsableNickname = data?.isUsableNickname;
      if (!isUsableNickname) return;
      location.href = '../folder/folder.html';
    } catch (error) {
      console.error(error);
    }
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

async function submitForm() {
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: $emailInput.value,
        password: $passwordInput.value,
      }),
    });

    if (!response.ok) {
      throw new Error('로그인 오류');
    }

    const { data } = await response.json();
    const accessToken = data?.accessToken;
    if (!accessToken) {
      alert('토큰이 없습니다.');
      return;
    }
    localStorage.setItem('accessToken', accessToken);
    location.href = '../folder/folder.html';
  } catch (error) {
    console.error(error);
    appendErrorMessage($emailErrorMessage, '이메일을 확인해주세요.');
    appendErrorMessage($passwordErrorMessage, '비밀번호를 확인해주세요.');
  }
}

const emailValidate = new EmailValidate($emailInput, $emailErrorMessage);

const passwordValidate = new PasswordValidate(
  $passwordInput,
  $passwordErrorMessage
);

const passwordConfirmValidate = new PasswordValidate(
  $passwordConfirmInput,
  $passwordConfirmErrorMessage
);

$emailInput.addEventListener('input', () => {
  emailValidate.validate();
});

$passwordInput.addEventListener('input', () => {
  passwordValidate.validate();
});

$form.addEventListener('submit', () => {
  emailValidate.checkEmail();
  submitForm();
});

$passwordConfirmInput.addEventListener('input', () => {
  passwordConfirmValidate.validate();
  PasswordValidate.passwordMatch(passwordValidate, passwordConfirmValidate);
});
