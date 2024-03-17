const form = document.querySelector('.form');
const id = document.querySelector('#username');
const pwd = document.querySelector('#password');
const repeat = document.querySelector('#password_repeat')
const btn = document.querySelector('.btn');
const idCtr = document.querySelector('.username-container');
const pwdCtr = document.querySelector('.password-container');
const repeatCtr = document.querySelector('.repeat-container')
const emailRegExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
const pwdToggle = document.querySelector('.password-toggle');
const repeatToggle = document.querySelector('.repeat-toggle');
const adminAccount = {
  id: 'test@codeit.com',
  pwd: 'codeit101'
};



// focusout : 이메일, 비밀번호, 비밀번호 확인 유효성 검사
function checkId() {
  // 공란
  if (id.value==='') {  
    const showMsg = idCtr.lastElementChild;
    showMsg.style.display = 'block';
    id.classList.toggle('error');
  // 이메일 형식
  } else if (emailRegExp.test(id.value) === false) {
    const showMsg = idCtr.lastElementChild;
    showMsg.style.display = 'block';
    showMsg.innerHTML = '올바른 이메일 주소가 아닙니다';
    id.classList.toggle('error');
  // test@codeit.com 중복
  } else if (adminAccount.id === id.value) {
    const showMsg = idCtr.lastElementChild;
    showMsg.style.display = 'block';
    showMsg.innerHTML = '이미 사용 중인 이메일입니다.';
    id.classList.toggle('error');
  }
}


function checkPwd() {
  // 공란
  if (pwd.value==='') {
    const showMsg = pwdCtr.lastElementChild;
    showMsg.style.display = 'block';
    pwd.classList.toggle('error');
  // 비밀번호 8자 이상, 숫자영문 조합 
  } else if (passwordRegExp.test(pwd.value) === false) {
    const showMsg = pwdCtr.lastElementChild;
    showMsg.style.display = 'block';
    showMsg.innerHTML = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
    pwd.classList.toggle('error');
  }
}


function checkRepeat() {
  // 공란
  if (repeat.value==='') {
    const showMsg = repeatCtr.lastElementChild;
    showMsg.style.display = 'block';
    repeat.classList.toggle('error');
  // 비밀번호, 비밀번호 재입력 값 다를 경우
  } else if (pwd.value !== repeat.value) {
    const showMsg = repeatCtr.lastElementChild;
    showMsg.style.display = 'block';
    showMsg.innerHTML = '비밀번호가 일치하지 않아요.'
    repeat.classList.toggle('error');
  }
}

id.addEventListener('focusout', checkId);
pwd.addEventListener('focusout', checkPwd);
repeat.addEventListener('focusout', checkRepeat);



// focusin : 에러메세지 초기화
function resetId() {
  const resetMsg = idCtr.lastElementChild
  resetMsg.style.display = 'none'
  resetMsg.innerHTML = '이메일을 입력해주세요.';
  id.classList.remove('error')
}

function resetPwd() {
  const resetMsg = pwdCtr.lastElementChild
  resetMsg.style.display = 'none'
  pwd.classList.remove('error')
}

function resetRepeat() {
  const resetMsg = repeatCtr.lastElementChild
  resetMsg.style.display = 'none'
  repeat.classList.remove('error')
}

id.addEventListener('focusin', resetId);
pwd.addEventListener('focusin', resetPwd);
repeat.addEventListener('focusin', resetRepeat)




// click : 눈 아이콘 토글 시 비밀번호 숨기기 & 보이기 기능 추가
// 비밀번호 input
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

// 비밀번호 재입력 input 
function toggleRepeat() {
  if (repeat.getAttribute('type') ==='password') {
    repeat.setAttribute('type', 'text');
    repeatToggle.classList.remove('eye-slash');
    repeatToggle.classList.add('eye');
  } else {
    repeat.setAttribute('type', 'password');
    repeatToggle.classList.remove('eye');
    repeatToggle.classList.add('eye-slash');
  }
}

pwdToggle.addEventListener('click', togglePassword)
repeatToggle.addEventListener('click', toggleRepeat)


// click, keypress : 로그인 정보 전송
// click
function submit() {
  // id, pwd 가 유효한 경우 '/folder' 로 이동
    window.location.href = '/folder';
    id.value='';
    pwd.value='';
    repeat.value='';
}

// keypress
function submitByEnter(e) {
  if (e.key === 'Enter') {
    submit();
  }
}

btn.addEventListener('click', submit);
form.addEventListener('keypress', submitByEnter);