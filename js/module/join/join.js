function emailErrorMessage(email) { // 이메일 에러 메세지
  const errorType = validateEmail(email);
  switch (errorType) {
    case 'empty':
      addInputMessage(email, '이메일을 입력해 주세요.');
      break;
    case 'error':
      addInputMessage(email, '올바른 이메일 주소가 아닙니다.');
      break;
    case 'duplicated':
      addInputMessage(email, '이미 사용 중인 이메일입니다.');
      break;
    case 'submitError':
      addInputMessage(email, '이메일을 확인해 주세요.');
      break;
    default:
      removeInputMessage(email);
      break;
  }
}

function passwordErrorMessage(password) { // 비밀번호 에러 메세지
  const errorType = validatePassword(password);
  if (errorType === 'pwEmpty') {
    addInputMessage(password, '비밀번호를 입력해 주세요.');
  } else if (errorType === 'pwLenError') {
    addInputMessage(password, '비밀번호는 영어, 숫자 8자 이상 입력해 주세요.');
  } else {
    removeInputMessage(password);
  }
}

function passwordConfirmErrorMessage(password, passwordConfirm) {
  const errorType = validatePasswordConfirm(password, passwordConfirm);
  switch (errorType) {
    case 'pwConfirmEmpty':
      addInputMessage(passwordConfirm, '비밀번호 확인을 입력해 주세요.');
      break;
    case 'pwConfirmLenError':
      addInputMessage(passwordConfirm, '비밀번호는 영어, 숫자 8자 이상 입력해 주세요.');
      break;
    case 'pwConfirmError':
      addInputMessage(passwordConfirm, '비밀번호가 다릅니다.');
      break;
    default:
      removeInputMessage(passwordConfirm);
      break;
  }
}