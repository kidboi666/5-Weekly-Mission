import { eyeToggle } from "./commons/utils.js";
import { textCheck, textCheckPw } from "./signinCheck.js";
import {
  $form,
  inputEmail,
  inputPassword,
  emailErrorMessage,
  pwErrorMessage,
  data,
  eyeButton,
} from "./commons/reset.js";
import { requestTest } from "./api/api.js";

export function test() {
  //input 테두리 색 변경
  inputEmail.classList.add("error-border");
  inputPassword.classList.add("error-border");

  emailErrorMessage.innerHTML = "이메일을 확인해 주세요.";
  pwErrorMessage.innerHTML = "비밀번호를 확인해 주세요.";
}

// 로그인 클릭했을 때 에러 메시지
function validate({ email, password }) {
  const userExists = data.find((user) => {
    return user.email === email && user.password === password;
  });

  if (requestTest(email, password)) {
    // 로그인
    // 문제가 전혀 없을 경우
    // window.location.href = "/folder.html";
    console.log("test");
  }

  // if (!requestTest(email, password)) {
  //   //input 테두리 색 변경
  //   inputEmail.classList.add("error-border");
  //   inputPassword.classList.add("error-border");

  //   emailErrorMessage.innerHTML = "이메일을 확인해 주세요.";
  //   pwErrorMessage.innerHTML = "비밀번호를 확인해 주세요.";
  // }
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

eyeButton.addEventListener("click", eyeToggle);

inputEmail.addEventListener("blur", textCheck);
inputPassword.addEventListener("blur", textCheckPw);
