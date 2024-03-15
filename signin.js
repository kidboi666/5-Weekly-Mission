
const emailInputs = document.querySelector(`.email-input-group`);
const passwordInputs = document.querySelector(`.password-input-group`);
const singinBtn = document.querySelector('#singin-btn');
const emailErrorText = document.querySelector('.email-input-message');
const emailInput = document.querySelector('.email-input');
const passwordErrorText = document.querySelector('.password-input-message');
const passwordInput = document.querySelector('.password-input');
const emptyEmailErrorMessage = '이메일을 입력해주세요.';
const invalidEmailErrorMessage = '올바른 이메일 형식이 아닙니다.';
const emptyPasswordErrorMessage =  '비밀번호를 입력해주세요.';
const checkEmailErrorMessage =  '이메일을 확인해주세요.';
const checkPasswordErrorMessage = '비밀번호를 확인해주세요.';
const iconEye = document.querySelector('.icon-eye')

 emailInputs.addEventListener(`focusout`,(e) => {
  const emailText = e.target.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(emailText) === false){
    if(emailText === ''){
      emailErrorText.textContent = emptyEmailErrorMessage;
      emailInput.classList.add('error-input');
    }
    else{
      emailErrorText.textContent = invalidEmailErrorMessage;
      emailInput.classList.add('error-input');
    }
  }
  else{
    emailErrorText.textContent = '';
    emailInput.classList.remove('error-input');
  }
});

passwordInputs.addEventListener(`focusout`,(e) => {
  passwordText = e.target.value;
  if(passwordText === ''){
    passwordErrorText.textContent = emptyPasswordErrorMessage;
    passwordInput.classList.add('error-input');
  }
  else{
    passwordErrorText.textContent = '';
    passwordInput.classList.remove('error-input');
  }
});

const user = { email : 'test@codeit.com', password : 'codeit101'}

singinBtn.addEventListener('click',(e) => {
  if(emailInput.value === user.email &&
    passwordInput.value === user.password){
    location.href = '/folder.html'
    }
  else{
    e.preventDefault();
    emailErrorText.textContent = checkEmailErrorMessage;
    emailInput.classList.add('error-input');
    passwordErrorText.textContent = checkPasswordErrorMessage;
    passwordInput.classList.add('error-input');
  }
});

emailInput.addEventListener(`keyup`,(e) => {
  if(e.key === 'Enter'){
    singinBtn.click()
  }
})

passwordInput.addEventListener(`keyup`,(e) => {
  if(e.key === 'Enter'){
    singinBtn.click()
  }
})

iconEye.addEventListener('click', (e) => {
  const passwordType = passwordInput.getAttribute('type');
  if ( passwordType === 'password' ) {
    passwordInput.setAttribute('type', 'text')
    iconEye.src = 'icon/eye-on.svg'
  } else {
    passwordInput.setAttribute('type', 'password')
    iconEye.src = 'icon/eye-off.svg'
  }
})

