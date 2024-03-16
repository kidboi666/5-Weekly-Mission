//클릭
// 6. 회원가입을 실행할 경우, 문제가 있는 경우 문제가 있는 input에 에러 메세지로 알립니다.
// 7. 이외의 유효한 회원가입 시도의 경우, “/folder”로 이동합니다.
// 8. 회원가입 버튼 클릭 또는 Enter키 입력으로 회원가입 실행돼야 합니다.

// 심화
// 눈 모양 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지기도 합니다.
// 비밀번호의 문자열이 가려질 때는 눈 모양 아이콘에는 사선이 그어져있고, 비밀번호의 문자열이 보일 때는 사선이 없는 눈 모양 아이콘이 보이도록 합니다.
// 로그인, 회원가입 페이지에 공통적으로 사용하는 로직이 있다면, 반복하지 않고 공통된 로직을 모듈로 분리해 사용해 주세요.

export { 
  emailErrorMessage,
  pwErrorMessage,
  pwConfirmErrorMessage,
  inputEmail,
  inputPassword,
  inputPasswordConfirm, 
  data,
  passwordPattern,
};
// import { data } from '/assets/js/login.js';

const $form = document.querySelector("#form__inputForm");
const emailErrorMessage = document.querySelector('.email-error-message');
const pwErrorMessage = document.querySelector('.pw-error-message');
const pwConfirmErrorMessage = document.querySelector('.pw-confirm-error-message');
const inputEmail = document.querySelector('#input-email');
const inputPassword = document.querySelector('#input-pw');
const inputPasswordConfirm = document.querySelector('#input-pw-confirm');

const data = [
  { 
    email: 'test@codeit.com', 
    password: 'codeit101'
  },
];

// 비밀번호 형식
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;

function validate({ email, password, passwordConfirm }) {
  inputEmail.classList.remove("error-border");
  inputPassword.classList.remove("error-border");
  inputPasswordConfirm.classList.remove("error-border");
  emailErrorMessage.innerHTML = '';
  pwErrorMessage.innerHTML = '';
  pwConfirmErrorMessage.innerHTML = '';

  const user = data.find((d) => {
    return d.email === email;
  });

  // 비밀번호와 비밀번호 확인이 같은 경우
  const pwCheck = password  === passwordConfirm;

//클릭
// 6. 회원가입을 실행할 경우, 문제가 있는 경우 문제가 있는 input에 에러 메세지로 알립니다.
// 7. 이외의 유효한 회원가입 시도의 경우, “/folder”로 이동합니다.
// 8. 회원가입 버튼 클릭 또는 Enter키 입력으로 회원가입 실행돼야 합니다.
  if (user) {
    console.log('동일한 이메일');
    inputEmail.classList.add("error-border");
    emailErrorMessage.innerHTML = '이미 사용 중인 이메일입니다.';
  } else if (email.length === 0) {
    inputEmail.classList.add("error-border");
    emailErrorMessage.innerHTML = '이메일을 입력해 주세요.';
  }

  if (pwCheck) {
    if (!passwordPattern.test(password)) {
      inputPassword.classList.add("error-border");
      inputPasswordConfirm.classList.add("error-border");
      pwErrorMessage.innerHTML = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
    } else if (!user && email.length > 0 && pwCheck) {
      // 모든 조건에 적합한 경우
      window.location.href = '/folder.html';
    }

  } else {
    inputPassword.classList.add("error-border");
    inputPasswordConfirm.classList.add("error-border");
    pwConfirmErrorMessage.innerHTML = '비밀번호가 일치하지 않아요.';
  } 
}

// form에서 로그인 클릭했을 때
function handleSubmitTest(event) {
  // form의 submit 이벤트의 기본 동작을 취소
  event.preventDefault();

  const $email = event.target.email;
  const $password = event.target.password;
  const $passwordConfirm = event.target.passwordConfirm;

  const email = $email.value;
  const password = $password.value;
  const passwordConfirm = $passwordConfirm.value;

  validate({ email, password, passwordConfirm });
}

$form.addEventListener("submit", handleSubmitTest);