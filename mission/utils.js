const EMAIL_REGEX = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

//이메일 검사
export function validateEmail(email) {
  return new RegExp(EMAIL_REGEX).test(email);
}

// 비밀번호 input 이벤트 핸들러
export function togglePassword(toggleButton, input) {
  toggleButton.classList.toggle("eye-button-off");
  const type = input.getAttribute("type") === "password" ? "text" : "password";
  input.setAttribute("type", type);
}

export const testUser = {
  email: "test@codeit.com",
  password: "codeit101",
};
