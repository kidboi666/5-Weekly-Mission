const users = [
  { email:'test@codeit.com', pw:'codeit101' },
]

function validateEmail(email) { // 이메일
  if (!email) return false;

  const regex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
  const user = users.find(data => data.email === email.value.trim()) || '';

  if (email.value.trim() === '') {
    return 'empty';
  } else if (!regex.test(email.value.trim())) {
    return 'error';
  } else if (user.email === email.value.trim()) {
    if (email.id === 'signin__email') {
      return '';
    } else {
      return 'duplicated';
    }
  } else {
    return '';
  }
}

function validatePassword(password) { // 비밀번호
  if (!password) return false;

  const regex = new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$');
  
  if (password.value.trim() === '') {
    return 'pwEmpty';
  } else if (!regex.test(password.value.trim())) {
    return 'pwLenError';
  } else {
    return '';
  }
}

function validatePasswordConfirm(password, passwordConfirm) { // 비밀번호 확인
  if (!password) return false;

  const regex = new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$');

  if (passwordConfirm.value.trim() === '') {
    return 'pwConfirmEmpty';
  } else if (password.value.trim() !== passwordConfirm.value.trim()) {
    return 'pwConfirmError';
  } else if (!regex.test(password.value.trim())) {
    return 'pwConfirmLenError';
  } else {
    return '';
  }
}
