const $email = document.querySelector('#email');
const $password = document.querySelector('.password-first');
const $passwordCheck = document.querySelector('.password-check');
const $eyeBtn = document.querySelector('.eye-button');
const $eyeBtnCheck = document.querySelector('.eye-button-check');
const $loginBtn = document.querySelector('.buttton-login');

function isEmailValid(email){
  const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return validEmail.test(email);
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
  } else if (email === isTest.email) {
    event.target.classList.add('hidden');
    errorEmail.textContent = '이미 사용 중인 이메일입니다.';
    return;
  } else {
    errorEmail.textContent = ' ';
    event.target.classList.remove('hidden');
    return;
  }
}

$email.addEventListener('focusout', handleCheckEmail);

function isPwdValid(password){
  const validPwd = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  return validPwd.test(password);
}

function handleCheckPwd(event) {
  const password = this.value.trim();
  const errorPwd = document.querySelector('.error-password');
  if (password === '') {
    event.target.classList.add('hidden');
    errorPwd.textContent = '비밀번호를 입력해 주세요.';
    return;
  } else if (!isPwdValid(password)) {
    event.target.classList.add('hidden');
    errorPwd.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.';
    return;
  } else {
    errorPwd.textContent = ' ';
    event.target.classList.remove('hidden');
    return;
  }
}

$password.addEventListener('focusout', handleCheckPwd);

function handleFinallyCheckPwd(event) {
  const passwordCheck = this.value.trim();
  const errorPwd = document.querySelector('.error-password-check');
  if (passwordCheck === '') {
    event.target.classList.add('hidden');
    errorPwd.textContent = '비밀번호를 입력해 주세요.';
    return;
  } else if ($passwordCheck.value !== $password.value) {
    event.target.classList.add('hidden');
    errorPwd.textContent = '비밀번호가 일치하지 않아요.';
    return;
  } else if ($passwordCheck.value === $password.value){
    errorPwd.textContent = ' ';
    event.target.classList.remove('hidden');
    return;
  }
}

$passwordCheck.addEventListener('focusout', handleFinallyCheckPwd);

const isTest = {
  email: "test@codeit.com",
  password: "codeit101",
};


function sendMyData() {
  if($email.classList.contains('hidden')) {
    document.querySelector('.error-email').textContent = '이메일을 확인해 주세요.';
  } else if($password.classList.contains('hidden')) {
    document.querySelector('.error-password').textContent = '비밀번호를 확인해 주세요.';
  } else if($passwordCheck.classList.contains('hidden')) {
    document.querySelector('.error-password-check').textContent = '비밀번호를 확인해 주세요.';
  } else {
    location.href = '../folder.html';
  }
  $email.value = '';
  $password.value = '';
  $passwordCheck.value = '';
}

$loginBtn.addEventListener('submit', sendMyData);
$loginBtn.addEventListener('click', function() {
  if($loginBtn.type === 'submit') {
    $loginBtn.type = 'button';
  }
  if($email.classList.contains('hidden')) {
    document.querySelector('.error-email').textContent = '이메일을 확인해 주세요.';
  } else if($password.classList.contains('hidden')) {
    document.querySelector('.error-password').textContent = '비밀번호를 확인해 주세요.';
  } else if($passwordCheck.classList.contains('hidden')) {
    document.querySelector('.error-password-check').textContent = '비밀번호를 확인해 주세요.';
  } else {
    location.href = '../folder.html';
  }
  $email.value = '';
  $password.value = '';
  $passwordCheck.value = '';
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
$passwordCheck.addEventListener('keypress', sendMyDataByEnter);


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

$eyeBtnCheck.onclick = function () {
  if($eyeBtnCheck.firstElementChild.classList.contains('hidden-eye-btn')) {
    $eyeBtnCheck.firstElementChild.classList.remove('hidden-eye-btn');
    $eyeBtnCheck.lastElementChild.classList.add('hidden-eye-btn');
  } else {
    $eyeBtnCheck.firstElementChild.classList.add('hidden-eye-btn');
    $eyeBtnCheck.lastElementChild.classList.remove('hidden-eye-btn');
  }
  if($passwordCheck.type === 'password') {
    $passwordCheck.type = 'text';
  } else {
    $passwordCheck.type = 'password';
  }
}