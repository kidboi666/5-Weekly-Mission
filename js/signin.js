const $email = document.querySelector('#email');
const $password = document.querySelector('.password-input');
const $eyeBtn = document.querySelector('.eye-button');
const $loginBtn = document.querySelector('.buttton-login');
const $errorEmail = document.querySelector('.error-email');
const $errorPwd = document.querySelector('.error-password');

function isEmailValid(email) {
  const valid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return valid.test(email);
}

function handleCheckEmail(event) {
  const email = this.value.trim();
  if (email === '') {
    event.target.classList.add('hidden');
    $errorEmail.textContent = '이메일을 입력해 주세요.';
    return;
  } else if (!isEmailValid(email)) {
    event.target.classList.add('hidden');
    $errorEmail.textContent = '올바른 이메일 주소가 아닙니다.';
    return;
  } else {
    $errorEmail.textContent = ' ';
    event.target.classList.remove('hidden');
    return;
  }
}

$email.addEventListener('focusout', handleCheckEmail);

function handleCheckPwd(event) {
  const password = this.value.trim();
  if (password === '') {
    event.target.classList.add('hidden');
    $errorPwd.textContent = '비밀번호를 입력해 주세요.';
    return;
  } else {
    $errorPwd.textContent = ' ';
    event.target.classList.remove('hidden');
    return;
  }
}

$password.addEventListener('focusout', handleCheckPwd);

$eyeBtn.onclick = function () {
  if ($eyeBtn.firstElementChild.classList.contains('hidden-eye-btn')) {
    $eyeBtn.firstElementChild.classList.remove('hidden-eye-btn');
    $eyeBtn.lastElementChild.classList.add('hidden-eye-btn');
  } else {
    $eyeBtn.firstElementChild.classList.add('hidden-eye-btn');
    $eyeBtn.lastElementChild.classList.remove('hidden-eye-btn');
  }
  if ($password.type === 'password') {
    $password.type = 'text';
  } else {
    $password.type = 'password';
  }
};

const testUser = {
  email: 'test@codeit.com',
  password: 'sprint101',
};

const $form = document.querySelector('.sign-form');
$form.addEventListener('submit', submitForm);
const url = 'https://bootcamp-api.codeit.kr';
async function submitForm(event) {
  event.preventDefault();

  const isTestUser =
    $email.value === testUser.email && $password.value === testUser.password;

  try {
    const response = await fetch(`${url}/api/sign-in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: $email.value,
        password: $password.value,
      }),
    });
    if (isTestUser && response.ok) {
      location.href = '../folder.html';
    } else if (!response.ok) {
      throw new Error();
    }
  } catch (error) {
    $errorEmail.textContent = '이메일을 확인해주세요.';
    $errorPwd.textContent = '비밀번호를 확인해주세요.';
  }
}
