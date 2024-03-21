const $email = document.querySelector('#email');
const $password = document.querySelector('.password-input');
const $eyeBtn = document.querySelector('.eye-button');
const $loginBtn = document.querySelector('.buttton-login');

function isEmailValid(email){
  const valid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return valid.test(email);
}

function handleCheckEmail(event) {
  const email = this.value.trim();
  const errorEmail = document.querySelector('.error-email');
  if (email === '') {
    event.target.classList.add('hidden');
    errorEmail.textContent = '이메일을 입력해 주세요.';
    return;
  } else if (!isEmailValid(email)) {
    event.target.classList.add('hidden');
    errorEmail.textContent = '올바른 이메일 주소가 아닙니다.';
    return;
  } else {
    errorEmail.textContent = ' ';
    event.target.classList.remove('hidden');
    return;
  }
}

$email.addEventListener('focusout', handleCheckEmail);

function handleCheckPwd(event) {
  const password = this.value.trim();
  const errorPwd = document.querySelector('.error-password');
  if (password === '') {
    event.target.classList.add('hidden');
    errorPwd.textContent = '비밀번호를 입력해 주세요.';
    return;
  } else {
    errorPwd.textContent = ' ';
    event.target.classList.remove('hidden');
    return;
  }
}

$password.addEventListener('focusout', handleCheckPwd);

const isTest = {
  email: "test@codeit.com",
  password: "codeit101",
};

function sendMyData() {
  if($email.value === isTest.email && $password.value === isTest.password) {
    location.href = '../folder.html';
  } else {
    document.querySelector('.error-email').textContent = '이메일을 확인해 주세요.';
    document.querySelector('.error-password').textContent = '비밀번호를 확인해 주세요.';
  }
  $email.value = '';
  $password.value = '';
}

$loginBtn.addEventListener('submit', sendMyData);
$loginBtn.addEventListener('click', function() {
  if($loginBtn.type === 'submit') {
    $loginBtn.type = 'button';
  }
  if($email.value === isTest.email && $password.value === isTest.password) {
    location.href = '../folder.html';
  } else {
    document.querySelector('.error-email').textContent = '이메일을 확인해 주세요.';
    document.querySelector('.error-password').textContent = '비밀번호를 확인해 주세요.';
  }
  $email.value = '';
  $password.value = '';
});

function sendMyDataByEnter(event) {
  if(event.key === 'Enter') {
    sendMyData();
    event.preventDefault();
    return;
  }
}
$email.addEventListener('keypress', sendMyDataByEnter);
$password.addEventListener('keypress', sendMyDataByEnter);


$eyeBtn.onclick = function () {
  if($eyeBtn.firstElementChild.classList.contains('hidden-eye-btn')) {
    $eyeBtn.firstElementChild.classList.remove('hidden-eye-btn');
    $eyeBtn.lastElementChild.classList.add('hidden-eye-btn');
  } else {
    $eyeBtn.firstElementChild.classList.add('hidden-eye-btn');
    $eyeBtn.lastElementChild.classList.remove('hidden-eye-btn');
  }
  if($password.type === 'password') {
    $password.type = 'text';
  } else {
    $password.type = 'password';
  }
}