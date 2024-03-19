const users = [
  { email:'test@codeit.com', pw:'codeit101' },
]

function validateEmail (email) { // 이메일
  if(email === undefined) {
    return ;
  }
  const regex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
  const user = users.find(data => data.email === email.value.trim()) ?? '';

  if (email.value.trim() === '') {
    validateObject.email = false;
    return 'emailEmpty'
  } else if (!regex.test(email.value.trim())) {
    validateObject.email = false;
    return 'emailError'
  } else if (user.email === email.value.trim()) {
    if (email.id === 'signin__email') {
      validateObject.email = true;
      return ''
    } else {
      validateObject.email = false;
      return 'emailSameName'
    }
  } else {
    validateObject.email = true;
    return ''
  }
}

function validatePassword (passwrod) { // 비밀번호
  if(passwrod === undefined) {
    return ;
  }
  const regex = new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$');
  if (passwrod.value.trim() === '') {
    validateObject.password = false;
    return 'pwEmpty'
  } else if (!regex.test(passwrod.value.trim())) {
    validateObject.password = false;
    return 'pwLenError'
  } else {
    validateObject.password = true;
    return ''
  }
}

function validatePasswordConfirm (passwrod, passwordConfirm) { // 비밀번호 확인
  if(passwrod === undefined) {
    return ;
  }
  const regex = new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$');
  if (passwordConfirm.value.trim() === '') {
    validateObject.passwordConfirm = false;
    return 'pwConfirmEmpty'
  } else if (passwrod.value.trim() !== passwordConfirm.value.trim()) {
    validateObject.passwordConfirm = false;
    return 'pwConfirmError'
  } else if (!regex.test(signupPassword.value.trim())) {
    validateObject.passwordConfirm = false;
    return 'pwConfirmLenError'
  } else {
    validateObject.passwordConfirm = true;
    return ''
  }
}