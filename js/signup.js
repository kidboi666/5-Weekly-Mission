const $email = document.querySelector('#email');
const $password = document.querySelector('.password-first');
const $passwordCheck = document.querySelector('.password-check');
const $eyeBtn = document.querySelector('.eye-button');
const $eyeBtnCheck = document.querySelector('.eye-button-check');
const $loginBtn = document.querySelector('.buttton-login');
const $errorEmail = document.querySelector('.error-email');
const $errorPwd = document.querySelector('.error-password');
const $errorPwdCheck = document.querySelector('.error-password-check');

function isEmailValid(email) {
  const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return validEmail.test(email);
}

function handleCheckEmail(event) {
  const email = this.value.trim();
  const errorEmail = document.querySelector('.error-email');
  if (email === '') {
    event.target.classList.add('hidden');
    $errorEmail.textContent = '이메일을 입력해 주세요.';
    return;
  } else if (!isEmailValid(email)) {
    event.target.classList.add('hidden');
    $errorEmail.textContent = '올바른 이메일 주소가 아닙니다.';
    return;
  } else if (email === testUser.email) {
    event.target.classList.add('hidden');
    $errorEmail.textContent = '이미 사용 중인 이메일입니다.';
    return;
  } else {
    $errorEmail.textContent = ' ';
    event.target.classList.remove('hidden');
    return;
  }
}

$email.addEventListener('focusout', handleCheckEmail);

function isPwdValid(password) {
  const validPwd = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  return validPwd.test(password);
}

function handleCheckPwd(event) {
  const password = this.value.trim();
  if (password === '') {
    event.target.classList.add('hidden');
    $errorPwd.textContent = '비밀번호를 입력해 주세요.';
    return;
  } else if (!isPwdValid(password)) {
    event.target.classList.add('hidden');
    $errorPwd.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.';
    return;
  } else {
    $errorPwd.textContent = ' ';
    event.target.classList.remove('hidden');
    return;
  }
}

$password.addEventListener('focusout', handleCheckPwd);

function handleFinallyCheckPwd(event) {
  const passwordCheck = this.value.trim();

  if (passwordCheck === '') {
    event.target.classList.add('hidden');
    $errorPwdCheck.textContent = '비밀번호를 입력해 주세요.';
    return;
  } else if ($passwordCheck.value !== $password.value) {
    event.target.classList.add('hidden');
    $errorPwdCheck.textContent = '비밀번호가 일치하지 않아요.';
    return;
  } else if ($passwordCheck.value === $password.value) {
    $errorPwdCheck.textContent = ' ';
    event.target.classList.remove('hidden');
    return;
  }
}

$passwordCheck.addEventListener('focusout', handleFinallyCheckPwd);

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

$eyeBtnCheck.onclick = function () {
  if ($eyeBtnCheck.firstElementChild.classList.contains('hidden-eye-btn')) {
    $eyeBtnCheck.firstElementChild.classList.remove('hidden-eye-btn');
    $eyeBtnCheck.lastElementChild.classList.add('hidden-eye-btn');
  } else {
    $eyeBtnCheck.firstElementChild.classList.add('hidden-eye-btn');
    $eyeBtnCheck.lastElementChild.classList.remove('hidden-eye-btn');
  }
  if ($passwordCheck.type === 'password') {
    $passwordCheck.type = 'text';
  } else {
    $passwordCheck.type = 'password';
  }
};

const testUser = {
  email: 'test@codeit.com',
  password: 'sprint101',
};

// 이메일 중복 POST 요청
// async function emailCheck(email) {
//   if (testUser.email === $email.value) {
//     try {
//       const response = await fetch(`${url}/api/check-email`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         return result.data.exists;
//       } else {
//         throw new Error();
//       }
//     } catch (error) {
//       $errorEmail.textContent = '중복된 이메일이 존재합니다.';
//     }
//   }
// }

const $form = document.querySelector('.sign-form');
$form.addEventListener('submit', submitForm);
const url = 'https://bootcamp-api.codeit.kr';
async function submitForm(event) {
  event.preventDefault();

  const isTestUser = $email.value !== testUser.email;

  try {
    const response = await fetch(`${url}/api/sign-up`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: $email.value,
        password: $password.value,
      }),
    });
    if (!response.ok && !isTestUser) {
      throw new Error();
    }
    const result = await response.json();
    const signinToken = result.data.accessToken;
    localStorage.setItem('signinToken', signinToken);
    location.href = '../folder.html';
  } catch (error) {
    $errorEmail.textContent = '이메일을 확인해주세요.';
    $errorPwd.textContent = '비밀번호를 확인해주세요.';
  }
}

function signinTokenCheck() {
  const accessToken = localStorage.getItem('signinToken');
  if (accessToken) {
    location.href = '../folder.html';
  }
}
