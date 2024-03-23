/** 이메일 유효성검사 */
export function isEmail(value) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(value);
}

/** 비밀번호 보이기/숨기기 기능 구현 */
export function togglePasswordVisibility(e) {
  e.preventDefault();

  const container = e.target.closest(".auth-form__password-input");
  const passwordInput = container.querySelector(
    ".auth-form__password-input input"
  );
  const toggleButton = container.querySelector(
    ".auth-form__password-toggle-btn"
  );

  if (passwordInput.type === "password") {
    passwordInput.setAttribute("type", "text");
    toggleButton.classList.add("eye-on");
  } else {
    passwordInput.setAttribute("type", "password");
    toggleButton.classList.remove("eye-on");
  }
}

/** 로그인/회원가입 토큰체크 */
export function accessTokenCheck() {
  const token = localStorage.getItem("accessToken");
  if (token) {
    window.location.href = "folder.html";
  }
}
