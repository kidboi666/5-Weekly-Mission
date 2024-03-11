const form = document.querySelector('.form')
const id = document.querySelector('#username')
const pwd = document.querySelector('#password')
const btn = document.querySelector('.btn')
const idCtr = document.querySelector('.username-container');
const pwdCtr = document.querySelector('.password-container');
const emailTest = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;


function checkId() {
  if (id.value==='') {
    const message = document.createElement('div');
    message.classList.add('text-error');
    message.innerHTML='이메일을 입력해 주세요';
    idCtr.append(message);
    id.classList.toggle('error')
  
    // console.log('이메일을 입력해 주세요')
    
  } else if (emailTest.test(id.value) === false) {
    const message = document.createElement('div');
    message.innerHTML = '올바른 이메일 주소가 아닙니다.';
    message.classList.add('text-error');
    idCtr.append(message);
    id.classList.add('error')

    // console.log(id.value)
    // console.log('올바른 이메일 주소가 아닙니다.')
  } 
}


function checkPwd() {
  if (pwd.value==='') {
    const message = document.createElement('div');
    message.innerHTML = '비밀번호를 입력해 주세요';
    message.classList.add('text-error');
    pwdCtr.append(message)
    pwd.classList.add('error')
    
    // console.log('비밀번호를 입력해 주세요')
  }
}

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


function submit() {
  if (id.value==='test@codeit.com' && pwd.value === 'codeit101') {
    window.location.href = '/folder'
  }
  // console.log('로그인')
}

function submitByEnter(e) {
  if (e.key === 'Enter') {
    submit();
  }
}

id.addEventListener('focusout', checkId);
pwd.addEventListener('focusout', checkPwd);
id.addEventListener('focusin', removeId);
pwd.addEventListener('focusin', removePwd);
btn.addEventListener('click', submit)
// form.addEventListener('keypress', submitByEnter);

