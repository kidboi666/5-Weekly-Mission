
const emailInputs = document.querySelector(`.email-input-group`);
const passwordInputs = document.querySelector(`.password-input-group`);
const singinBtn = document.querySelector(`#singin-btn`);
const emailErrorText = document.querySelector('.email-input-message');
const emailInput = document.querySelector('.email-input');
const passwordErrorText = document.querySelector('.password-input-message');
const passwordInput = document.querySelector('.password-input');

 emailInputs.addEventListener(`focusout`,(e) => {
  emailText = e.target.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(emailText) === false){
    if(emailText === ''){
      emailErrorText.textContent = '이메일을 입력해주세요.';
      emailInput.classList.add('error-input');
    }
    else{
      emailErrorText.textContent = '올바른 이메일 형식이 아닙니다.';
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
    passwordErrorText.textContent = '비밀번호를 입력해주세요.';
    passwordInput.classList.add('error-input');
  }
  else{
    passwordErrorText.textContent = '';
    passwordInput.classList.remove('error-input');
  }
});

singinBtn.addEventListener('click',(e) => {
  if(emailInput.value === `test@codeit.com` &&
    passwordInput.value === `codeit101`){
    location.href = '/folder.html'
    }
  else{
    emailErrorText.textContent = '이메일을 확인해주세요.';
    emailInput.classList.add('error-input');
    passwordErrorText.textContent = '비밀번호를 확인해주세요.';
    passwordInput.classList.add('error-input');
    e.preventDefault();
  }
});

emailInput.addEventListener(`keyup`,(e) =>{
  if(e.key === 'Enter'){
    singinBtn.click()
  }
})

passwordInput.addEventListener(`keyup`,(e) =>{
  if(e.key === 'Enter'){
    singinBtn.click()
  }
})



