const $emailInput = document.querySelector('input[type="email"]');
const $emailErrorMessage = document.querySelector(
  '.form-group__error-message--email'
);

const $passwordInput = document.querySelector('input[type="password"]');
const $passwordErrorMessage = document.querySelector(
  '.form-group__error-message--password'
);

const EMAIL_VALUE = $emailInput.value;
const PASSWORD_VALUE = $passwordInput.value;

function appendErrorMessage(errorContainer, message) {
  errorContainer.textContent = message;
}

function showEmailErrorMessage(emailErrorMessage) {
  if (EMAIL_VALUE === '') {
    appendErrorMessage(emailErrorMessage, '이메일을 입력해주세요');
  } else if (EMAIL_VALUE.indexOf('@') === -1) {
    appendErrorMessage(emailErrorMessage, '올바른 이메일 주소가 아닙니다.');
  } else {
    appendErrorMessage(emailErrorMessage, '');
  }
}

function showPasswordErrorMessage(passwordErrorMessage) {
  if (PASSWORD_VALUE === '') {
    appendErrorMessage(passwordErrorMessage, '비밀번호를 입력해주세요');
  } else {
    appendErrorMessage(passwordErrorMessage, '');
  }
}

function validateEmail() {
  showEmailErrorMessage($emailErrorMessage);
}

function validatePassword() {
  showPasswordErrorMessage($passwordErrorMessage);
}

async function submitForm(event) {
  event.preventDefault();

  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
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
    location.href = '/folder';
  } catch (error) {
    console.error(error);
    appendErrorMessage($emailErrorMessage, '이메일을 확인해주세요.');
    appendErrorMessage($passwordErrorMessage, '비밀번호를 확인해주세요.');
  }
}

$emailInput.addEventListener('focusout', validateEmail);
$passwordInput.addEventListener('focusout', validatePassword);
document.addEventListener('submit', submitForm);
