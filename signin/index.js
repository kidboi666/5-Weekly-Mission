const form = document.querySelector('.form');
const id = document.querySelector('#username');
const pwd = document.querySelector('#password');
const btn = document.querySelector('.btn');
const idCtr = document.querySelector('.username-container');
const pwdCtr = document.querySelector('.password-container');
const emailTest = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const pwdToggle = document.querySelector('.password-toggle');



// focusout : 공란이거나 잘못된 이메일 형식 입력하면 에러메세지 추가
function checkId() {
  if (id.value==='') {
    const message = document.createElement('div');
    message.classList.add('text-error');
    message.innerHTML='이메일을 입력해 주세요';
    idCtr.append(message);
    id.classList.toggle('error')

  } else if (emailTest.test(id.value) === false) {
    const message = document.createElement('div');
    message.innerHTML = '올바른 이메일 주소가 아닙니다.';
    message.classList.add('text-error');
    idCtr.append(message);
    id.classList.add('error')
  } 
}

function checkPwd() {
  if (pwd.value==='') {
    const message = document.createElement('div');
    message.innerHTML = '비밀번호를 입력해 주세요';
    message.classList.add('text-error');
    pwdCtr.append(message)
    pwd.classList.add('error')
  }
}

id.addEventListener('focusout', checkId);
pwd.addEventListener('focusout', checkPwd);


// focusin : 에러메세지 초기화
function removeId() {
  const erase = idCtr.querySelector('.text-error')
  if (erase) {
    erase.remove();
    id.classList.remove('error')
  } 
}


function removePwd() {
  const erase = pwdCtr.querySelector('.text-error')
  if (erase) {
    erase.remove();
    pwd.classList.remove('error');
  } 
}

id.addEventListener('focusin', removeId);
pwd.addEventListener('focusin', removePwd);


// click, keypress : 로그인 정보 전송
function submit() {
  const adminAccount = {
    id: 'test@codeit.com',
    pwd: 'codeit101'
  };

  if (adminAccount[id] === id.value && adminAccount[pwd] === pwd.value) {
    window.location.href = '/folder'
  }
  id.value=''
  pwd.value=''
}


function submitByEnter(e) {
  if (e.key === 'Enter') {
    submit();
  }
}

btn.addEventListener('click', submit)
form.addEventListener('keypress', submitByEnter);


// click : 눈 아이콘 토글 시 비밀번호 숨기기 & 보이기 기능 추가
function togglePassword() {
  if (pwd.getAttribute('type') ==='password') {
    pwd.setAttribute('type', 'text');
    pwdToggle.classList.remove('eye-slash');
    pwdToggle.classList.add('eye');
  } else {
    pwd.setAttribute('type', 'password');
    pwdToggle.classList.remove('eye');
    pwdToggle.classList.add('eye-slash');
  }
}

pwdToggle.addEventListener('click', togglePassword)


