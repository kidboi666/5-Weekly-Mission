export { 
  validateEmail, 
  users
};

/*email 유효성 검증*/

function validateEmail() {
  const emailInputEl = document.querySelector('.email-input');
  const emailValue = emailInputEl.value;
  const errorMessageEl = document.querySelector('.error-message-email');
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  if (!emailValue) {
    errorMessageEl.textContent = "이메일을 입력해주세요";
    emailInputEl.classList.add('wrongsign');
    return false;
  } else if (!regex.test(emailValue)) {
    errorMessageEl.textContent = "올바른 이메일 주소가 아닙니다";
    emailInputEl.classList.add('wrongsign');
    return false;
  } else {
    emailInputEl.classList.remove('wrongsign');
    return true;
  }
}

/*이메일: test@codeit.com 비밀번호: codeit101의 사용자 등록*/

const users = [
  {email: "test@codeit.com", password: "codeit101"}
];
