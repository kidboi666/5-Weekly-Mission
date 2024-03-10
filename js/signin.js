const $email = document.querySelector('#email');
const $password = document.querySelector('.password-input');
const $eyeBtn = document.querySelector('.eye-button');
const $loginBtn = document.querySelector('.buttton-login');

function emailValid(email){
  const valid = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return valid.test(email);
}

function checkEmail(event) {
  const email = this.value.trim();
  const errorEmail = document.querySelector('.error-email');
  if (email === '') {
    event.target.classList.add('hidden');
    errorEmail.textContent = '이메일을 입력해 주세요.';
  } else if (!emailValid(email)) {
    event.target.classList.add('hidden');
    errorEmail.textContent = '올바른 이메일 주소가 아닙니다.';
  } else {
    errorEmail.textContent = ' ';
    event.target.classList.remove('hidden');
  }
}

$email.addEventListener('focusout', checkEmail);

function checkPwd(event) {
  const password = this.value.trim();
  const errorPwd = document.querySelector('.error-password');
  if (password === '') {
    event.target.classList.add('hidden');
    errorPwd.textContent = '비밀번호를 입력해 주세요.';
  } else {
    errorPwd.textContent = ' ';
    event.target.classList.remove('hidden');
  }
}

$password.addEventListener('focusout', checkPwd);

function sendMyData() {
  if($email.classList.contains('hidden') || $email.value !== 'test@codeit.com') {
    document.querySelector('.error-email').textContent = '이메일을 확인해 주세요.';
    document.querySelector('.error-password').textContent = '비밀번호를 확인해 주세요.';
  } else if($email.value === 'test@codeit.com' && $password.value === 'codeit101') {
      location.href = '../folder.html';
    }
  $email.value = '';
  $password.value = '';
}
$loginBtn.addEventListener('click', sendMyData);

function sendMyDataByEnter(event) {
  if(event.key === 'Enter') {
    sendMyData();
    event.preventDefault();
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