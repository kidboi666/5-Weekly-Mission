const form = document.querySelector('.form');
const id = document.querySelector('#username');
const pwd = document.querySelector('#password');
const repeat = document.querySelector('#password_repeat')
const btn = document.querySelector('.btn');
const idCtr = document.querySelector('.username-container');
const pwdCtr = document.querySelector('.password-container');
const repeatCtr = document.querySelector('.repeat-container')
const emailTest = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const pwdToggle = document.querySelector('.password-toggle');
const repeatToggle = document.querySelector('.repeat-toggle');



// focusout : 공란이거나 잘못된 이메일 형식 입력하면 에러메세지
function checkId() {
  if (id.value==='') {
    // 메세지 보이게
    const showMsg = idCtr.lastElementChild;
    showMsg.style.display = 'block';
    // 이메일 박스 빨간테두리 추가
    id.classList.toggle('error');

  } else if (emailTest.test(id.value) === false) {
    // 메세지 보이게
    const showMsg = idCtr.lastElementChild;
    showMsg.style.display = 'block';
    // 메세지 내용 바꿈
    showMsg.innerHTML = '올바른 이메일 주소가 아닙니다';
    // 이메일 박스 빨간테두리
    id.classList.toggle('error');
  }
}

function checkPwd() {
  if (pwd.value==='') {
    // 메세지 보이게
    const showMsg = pwdCtr.lastElementChild;
    showMsg.style.display = 'block';
    // 이메일 박스 빨간테두리
    pwd.classList.toggle('error');
  }
}


function checkRepeat() {
  if (repeat.value==='') {
    // 메세지 보이게
    const showMsg = repeatCtr.lastElementChild;
    showMsg.style.display = 'block';
    // 이메일 박스 빨간테두리
    repeat.classList.toggle('error');

  }
}

id.addEventListener('focusout', checkId);
pwd.addEventListener('focusout', checkPwd);
repeat.addEventListener('focusout', checkRepeat);



// focusin : 에러메세지 초기화
function resetId() {
  // 메세지 안보이게
  const resetMsg = idCtr.lastElementChild
  resetMsg.style.display = 'none'
  // 메세지 내용 원상복구
  resetMsg.innerHTML = '이메일을 입력해주세요.';
  // 이메일 박스 테두리 원상복구
  id.classList.remove('error')
}


function resetPwd() {
  // 메세지 안보이게
  const resetMsg = pwdCtr.lastElementChild
  resetMsg.style.display = 'none'
  // 이메일 박스 테두리 원상복구
  pwd.classList.remove('error')
}

function resetRepeat() {
  // 메세지 안보이게
  const resetMsg = repeatCtr.lastElementChild
  resetMsg.style.display = 'none'
  // 이메일 박스 테두리 원상복구
  repeat.classList.remove('error')
}


id.addEventListener('focusin', resetId);
pwd.addEventListener('focusin', resetPwd);
repeat.addEventListener('focusin', resetRepeat)


// click, keypress : 로그인 정보 전송
function submit() {
  const adminAccount = {
    id: 'test@codeit.com',
    pwd: 'codeit101'
  };

  if (adminAccount[id] === id.value && adminAccount[pwd] === pwd.value) {
    window.location.href = '/folder';
  }
  id.value='';
  pwd.value='';
  repeat.value='';
}


function submitByEnter(e) {
  if (e.key === 'Enter') {
    submit();
  }
}

btn.addEventListener('click', submit);
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

