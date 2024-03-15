
const emailInputs = document.querySelector(`.email-input-group`);
const passwordInputs = document.querySelector(`.password-input-group`);
const singinBtn = document.querySelector('#singin-btn');
const emailErrorText = document.querySelector('.email-input-message');
const emailInput = document.querySelector('.email-input');
const passwordErrorText = document.querySelector('.password-input-message');
const passwordInput = document.querySelector('.password-input');
const EmptyEmailErrorMessage = '이메일을 입력해주세요.';
const InvalidEmailErrorMessage = '올바른 이메일 형식이 아닙니다.';
const EmptyPasswordErrorMessage =  '비밀번호를 입력해주세요.';
const CheckEmailErrorMessage =  '이메일을 확인해주세요.';
const CheckPasswordErrorMessage = '비밀번호를 확인해주세요.';

 emailInputs.addEventListener(`focusout`,(e) => {
  const emailText = e.target.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(emailText) === false){
    if(emailText === ''){
      emailErrorText.textContent = EmptyEmailErrorMessage;
      emailInput.classList.add('error-input');
    }
    else{
      emailErrorText.textContent = InvalidEmailErrorMessage;
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
    passwordErrorText.textContent = EmptyPasswordErrorMessage;
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
    emailErrorText.textContent = CheckEmailErrorMessage;
    emailInput.classList.add('error-input');
    passwordErrorText.textContent = CheckPasswordErrorMessage;
    passwordInput.classList.add('error-input');
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



