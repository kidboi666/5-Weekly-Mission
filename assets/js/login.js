export { pwErrorMessage, inputEmail, emailErrorMessage, inputPassword, data };
const $form = document.querySelector("#form__inputForm");
const emailErrorMessage = document.querySelector('.email-error-message');
const pwErrorMessage = document.querySelector('.pw-error-message');
const inputEmail = document.querySelector('#input-email');
const inputPassword = document.querySelector('#input-pw');

const data = [
  { 
    email: 'test@codeit.com', 
    password: 'codeit101'
  },
];

// 로그인 클릭했을 때 에러 메시지
function validate({ email, password }) {
  const user = data.find((d) => {
    return d.email === email && d.password === password;
  });

  if (user) {
    window.location.href = '/folder.html';
  } else {
    //input 테두리 색 변경
    inputEmail.classList.add("error-border");
    inputPassword.classList.add("error-border");
    
    emailErrorMessage.innerHTML = '이메일을 확인해 주세요.';
    pwErrorMessage.innerHTML = '비밀번호를 확인해 주세요.';
  }
}

// form에서 로그인 클릭했을 때
function handleSubmit(event) {
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

// 공통
// 1. 이메일 input에서 focus out 할 때, 값이 없을 경우 “이메일을 입력해주세요.” 에러 메세지를 보입니다.
// 2. 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 “올바른 이메일 주소가 아닙니다.” 에러 메세지를 보입니다.
//----