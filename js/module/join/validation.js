// 이메일 유효성 검사 함수
function validateEmail(email) {
  return new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$').test(email);
}

// 비밀번호 유효성 검사 함수
function validatePassword(password) {
  return new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$').test(password);
}
