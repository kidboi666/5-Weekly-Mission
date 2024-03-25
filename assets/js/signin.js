import { togglePassword } from "./commons/utils.js";
import { textCheck, textCheckPw } from "./signinCheck.js";
import {
  $form,
  inputEmail,
  inputPassword,
  eyeButton,
} from "./commons/reset.js";
import { signinRequest } from "./api/api.js";

// 로그인 클릭했을 때 에러 메시지
function validate({ email, password }) {
  signinRequest(email, password);
}

// form에서 로그인 클릭했을 때
export function handleSubmit(event) {
  // form의 submit 이벤트의 기본 동작을 취소
  event.preventDefault();

  const $email = event.target.email;
  const $password = event.target.password;

  const email = $email.value;
  const password = $password.value;

  // 올바른 이메일과 비밀번호인지 검증
  validate({ email, password });
}

$form.addEventListener("submit", handleSubmit);

eyeButton.addEventListener("click", togglePassword);

inputEmail.addEventListener("blur", textCheck);
inputPassword.addEventListener("blur", textCheckPw);
