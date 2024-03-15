const $form = document.querySelector("#form__inputForm");

// 에러 메시지 생성
const emailErrorMessage = document.querySelector('.email-error-message');
const pwErrorMessage = document.querySelector('.pw-error-message');
const inputEmail = document.querySelector('#input-email');
export const inputPassword = document.querySelector('#input-pw');

const data = [
  { 
    email: 'test@codeit.com', 
    password: 'codeit101'
  },
];


// 로그인 클릭했을 때 에러 메시지
function validate({email, password}) {
  const user = data.find((d) => {
    return d.email === email && d.password === password;
  });

  if (user) {
    window.location.href = '/folder.html';
  } else {
    //input 테두리 색 
    inputEmail.classList.add("error-border");
    inputPassword.classList.add("error-border");
    
    emailErrorMessage.innerHTML = '이메일을 확인해 주세요.';
    pwErrorMessage.innerHTML = '비밀번호를 확인해 주세요.';
  }
}

// form에서 로그인 클릭했을 때
function handleSubmit(event) {
  // 1. form의 submit 이벤트의 기본 동작을 취소.
  event.preventDefault();

  const $email = event.target.email;
  const $password = event.target.password;

  const email = $email.value;
  const password = $password.value;

  // 올바른 이메일과 비밀번호인지 검증
  validate({ email, password});
}

// blur 이벤트 발생했을 때



$form.addEventListener("submit", handleSubmit)
$form.addEventListener("blur", test)

// export const inputPassword = document.querySelector('#input-pw');
// const loginButton = document.querySelector('.sign-btn');
// const loginForm = document.querySelector(".login-form");
// const inputEmail = document.querySelector('#input-email');
// const emailErrorMessage = document.querySelector('.email-error-message');
// const pwErrorMessage = document.querySelector('.pw-error-message');

// // 에러 메시지 div 생성
// const emailAddMessage = document.createElement('div');
// emailAddMessage.classList.add('error_message');
// const pwAddMessage = document.createElement('div');
// pwAddMessage.classList.add('error_message');
// let messageText = document.createTextNode('');

// const data = [
//   { 
//     email: 'test@codeit.com', 
//     password: 'codeit101'
//   }
// ];

// function emailCheck() {  
//   const emailValue = this.value;
//   emailAddMessage.innerText = '';
//   inputEmail.style.borderColor = '';
  
//   if (emailValue.length > 0) {
//     // 이메일 페턴으로 이름 고치기
//     const emailEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

//     if (!emailEx.test(emailValue)) {
//       inputEmail.style.borderColor = '#FF5B56';
//       messageText = document.createTextNode('올바른 이메일 주소가 아닙니다.');
//       emailAddMessage.appendChild(messageText);
//       emailErrorMessage.appendChild(emailAddMessage);
//     }
//   } else {
//     inputEmail.style.borderColor = '#FF5B56';
//     messageText = document.createTextNode('이메일을 입력해 주세요.');
//     emailAddMessage.appendChild(messageText);
//     emailErrorMessage.appendChild(emailAddMessage);
//   }
// }

// function pwCheck() {
//   const pwValue = this.value;
//   pwAddMessage.innerText = '';
//   inputPassword.style.borderColor = '';

//   if (pwValue.length === 0) {
//     inputPassword.style.borderColor = '#FF5B56';
//     messageText = document.createTextNode('비밀번호를 입력해 주세요.');
//     pwAddMessage.appendChild(messageText);
//     pwErrorMessage.appendChild(pwAddMessage);
//   }
// }

// function login() {
//   emailAddMessage.innerText = '';
//   pwAddMessage.innerText = '';
//   inputEmail.style.borderColor = '';
//   inputPassword.style.borderColor = '';

//   const userinputEmail = inputEmail.value;
//   const userinputPW = inputPassword.value;

//   const user = data.find((d) => {
//     return d.email === userinputEmail && d.password === userinputPW;
//   });

//   if (user) {
//     window.location.href = '/folder.html';
//     emailAddMessage.innerText = '';
//     pwAddMessage.innerText = '';
//   } else {
//     inputEmail.style.borderColor = '#FF5B56';
//     emailAddMessage.innerText = '';
//     messageText = document.createTextNode('이메일을 확인해 주세요.');
//     emailAddMessage.appendChild(messageText);

//     inputPassword.style.borderColor = '#FF5B56';
//     pwAddMessage.innerText = '';
//     messageText = document.createTextNode('비밀번호를 확인해 주세요.');
//     pwAddMessage.appendChild(messageText);

//     emailErrorMessage.appendChild(emailAddMessage);
//     pwErrorMessage.appendChild(pwAddMessage);
//   }
// }

// function offRefresh(e) {
//   e.preventDefault();
// }

// inputEmail.addEventListener('blur', emailCheck);
// inputPassword.addEventListener('blur', pwCheck);

// loginButton.addEventListener('click', login);
// inputEmail.addEventListener('keypress', (e) => e.code === 'Enter' && login());
// inputPassword.addEventListener('keypress', (e) => e.code === 'Enter' && login());

// loginForm.addEventListener('submit', offRefresh);