export const loginInfo = {
  email: "test@codeit.com",
  password: "codeit101",
}

export function isEmail(value) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  return emailRegex.test(value);
}

export const errorMessages = {
  emptyEmail: "이메일을 입력해주세요.",
  invalidEmail: "올바른 이메일 주소가 아닙니다.",
  duplicateEmail: "이미 사용 중인 이메일입니다.",
  emptyPassword: "비밀번호를 입력해주세요.",
  invalidPassword: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  mismatchPassword: "비밀번호가 일치하지 않아요.",
  confirmEmail: "이메일을 확인해주세요.",
  confirmPassword: "비밀번호를 확인해주세요.",
};

  /* 비밀번호 보이기/숨기기 기능 구현 */

export function toggleTypeBtn(e){
  e.preventDefault();

  const target = e.target;
  const passwordInput = target.parentElement.previousElementSibling;
  const passwordType = passwordInput.getAttribute('type');

  if(passwordType === 'password'){
    passwordInput.setAttribute('type', 'text');
    target.setAttribute('src', '../icons/eye-on.svg');
  } else{
    passwordInput.setAttribute('type', 'password');
    target.setAttribute('src', '../icons/eye-off.svg');
  };
};