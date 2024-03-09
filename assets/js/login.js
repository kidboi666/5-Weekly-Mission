const inputEmail = document.querySelector('#input-email');
export const inputPassword = document.querySelector('#input-pw');
const loginButton = document.querySelector('.sign-btn');
const emailErrorMessage = document.querySelector('.email-error-message');
const pwErrorMessage = document.querySelector('.pw-error-message');

const emailAddMessage = document.createElement('div');
emailAddMessage.classList.add('error_message');
const pwAddMessage = document.createElement('div');
pwAddMessage.classList.add('error_message');
let messageText = document.createTextNode('');

const data = [{email: 'test@codeit.com', password: 'codeit101'}];

// email
function emailCheck() {  
  const emailValue = this.value;
  emailAddMessage.innerText = '';
  
  if (emailValue.length > 0) {
    const emailTEST = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

    if (!emailTEST.test(emailValue)) {
      messageText = document.createTextNode('올바른 이메일 주소가 아닙니다.');
      emailAddMessage.appendChild(messageText);

      emailErrorMessage.appendChild(emailAddMessage);
    }
  } else {
    messageText = document.createTextNode('이메일을 입력해 주세요.');
    emailAddMessage.appendChild(messageText);

    emailErrorMessage.appendChild(emailAddMessage);
  }
}

// password
function pwCheck() {
  const inputPassword = this.value;
  console.log('pw 포커스 아웃', inputPassword);
  pwAddMessage.innerText = '';

  if (inputPassword.length == 0) {
    messageText = document.createTextNode('비밀번호를 입력해 주세요.');
    pwAddMessage.appendChild(messageText);
  
    pwErrorMessage.appendChild(pwAddMessage);
  }
}

// 로그인
function login() {
  emailAddMessage.innerText = '';
  pwAddMessage.innerText = '';

  const userinputEmail = inputEmail.value;
  const userinputPW = inputPassword.value;

  const user = data.find((d, i) => {
    console.log(i);
    return d.email === userinputEmail && d.password === userinputPW;
  });

  const message = user 
    ? window.location.href = "/folder.html"
    : 
      emailAddMessage.innerText = '';
      messageText = document.createTextNode('이메일을 확인해 주세요.');
      emailAddMessage.appendChild(messageText);

      pwAddMessage.innerText = '';
      messageText = document.createTextNode('비밀번호를 확인해 주세요.');
      pwAddMessage.appendChild(messageText);


      emailErrorMessage.appendChild(emailAddMessage);
      pwErrorMessage.appendChild(pwAddMessage);
    ;

  console.log(message);
}

// 에러 메시지 출력
inputEmail.addEventListener('blur', emailCheck);
inputPassword.addEventListener('blur', pwCheck);

//로그인 버튼(enter) 클릭
loginButton.addEventListener('click', login);
inputEmail.addEventListener('keypress', (e) => e.code === 'Enter' && login());
inputPassword.addEventListener('keypress', (e) => e.code === 'Enter' && login());