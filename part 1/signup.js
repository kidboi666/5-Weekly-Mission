import { signupRequest } from './signApi.js';
const emailInputs = document.querySelector(`.email-input-group`);
const passwordInputs = document.querySelector(`.password-input-group`);
const singupBtn = document.querySelector('.btn-large');
const emailErrorText = document.querySelector('.email-input-message');
const emailInput = document.querySelector('.email-input');
const passwordErrorText = document.querySelector('.password-message');
const passwordInput = document.querySelector('.password-input');
const confirmPassword = document.querySelector('.confirm-password');
const confirmpasswordInput = document.querySelector('.confirm-password-input');
const confirmPasswordMessage = document.querySelector('.confirm-password-message')
const emptyEmailErrorMessage = '이메일을 입력해주세요.';
const invalidEmailErrorMessage = '올바른 이메일 주소가 아닙니다.';
const existingEmailErrorMessage = '이미 사용 중인 이메일입니다.';
const requirementsPasswordErrorMessage = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
const mismatchPasswordErrorMessage = '비밀번호가 일치하지 않아요';
const emptyPasswordErrorMessage = '비밀번호를 입력해주세요.';
const checkEmailErrorMessage = '이메일을 확인해주세요.';
const checkPasswordErrorMessage = '비밀번호를 확인해주세요.';
const iconEye = document.querySelector('.password-eye')
const confirmEye = document.querySelector('.confirm-eye')
// const user = { email : 'test@codeit.com', password : 'codeit101'}

if(localStorage.getItem("accessToken") !== null) {
  location.href = '/folder.html'
};

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

//값이 8자 미만으로 있거나 문자열만 있거나 숫자만 있는 경우
passwordInputs.addEventListener(`focusout`,(e) => {
  const passwordText = e.target.value;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/
  if(passwordText.length < 8 &&
    passwordRegex.test(passwordText) === false){
    passwordErrorText.textContent = requirementsPasswordErrorMessage;
    passwordInput.classList.add('error-input');
  }
  else{
    passwordErrorText.textContent = '';
    passwordInput.classList.remove('error-input');
  }
});

confirmPassword.addEventListener('focusout',(e) => {
  if(passwordInput.value !== confirmpasswordInput.value){
    confirmPasswordMessage.textContent = mismatchPasswordErrorMessage;
    confirmpasswordInput.classList.add('error-input');
  }
  else{
    confirmPasswordMessage.textContent = '';
    confirmpasswordInput.classList.remove('error-input');
  }
});

singupBtn.addEventListener('click', async (e) => {
  const userData = {
    email: emailInput.value,
  } 
  try{
    const response = await signupRequest(userData)
    if(emailInput.value === '' ||
      passwordInput.value === '' ||
      emailInput.classList.contains('error-input') ||
      passwordInput.classList.contains('error-input') ||
      confirmpasswordInput.classList.contains('error-input')){  
      e.preventDefault();
      emailErrorText.textContent = checkEmailErrorMessage;
      emailInput.classList.add('error-input');
      passwordErrorText.textContent = checkPasswordErrorMessage;
      passwordInput.classList.add('error-input');
      }  
      else if( response.httpCode !== 200 ) {
      emailErrorText.textContent = existingEmailErrorMessage;
      emailInput.classList.add('error-input');
      }
      else{
        location.href = '/folder.html'
        localStorage.setItem('accessToken', response.resData.data.accessToken)
      } 
  } catch (error) {
    console.error('Sign-up request failed:', error);
  }

});

iconEye.addEventListener('click', (e) => {
  const passwordType = passwordInput.getAttribute('type');
  if ( passwordType === 'password' ) {
    passwordInput.setAttribute('type', 'text')
    iconEye.src = 'icon/eye-on.svg'
  }
  else {
    passwordInput.setAttribute('type', 'password')
    iconEye.src = 'icon/eye-off.svg'
  }
})

confirmEye.addEventListener('click', (e) => {
  const passwordType = confirmpasswordInput.getAttribute('type');
  if ( passwordType === 'password' ) {
    confirmpasswordInput.setAttribute('type', 'text')
    confirmEye.src = 'icon/eye-on.svg'
  }
  else {
    confirmpasswordInput.setAttribute('type', 'password')
    confirmEye.src = 'icon/eye-off.svg'
  }
})

emailInput.addEventListener(`keyup`,(e) => {
  if(e.key === 'Enter'){
    singupBtn.click()
  }
})

passwordInput.addEventListener(`keyup`,(e) => {
  if(e.key === 'Enter'){
    singupBtn.click()
  }
})

confirmpasswordInput.addEventListener(`keyup`,(e) => {
  if(e.key === 'Enter'){
    singupBtn.click()
  }
})

