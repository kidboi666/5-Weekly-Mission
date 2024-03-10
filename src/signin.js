// 이메일 입력폼 객체
const emailInputForm = document.querySelector('.input-email');
// 비밀번호 입력폼 객체
const passwordInputForm = document.querySelector('.input-pw');

// 이메일 에러 메세지 객체
const emailErrorMessage = document.querySelector('.error-email');
// 비밀번호 에러 메세지 객체
const pwErrorMessage = document.querySelector('.error-pw');

// 로그인 성공 기준 아이디, 비밀번호
const successLoginEmail = 'test@codeit.com';
const successLoginPassword = 'codeit101';

// 이메일 입력폼의 focusout 이벤트에 이벤트 리스너(핸들러) 추가
emailInputForm.addEventListener('focusout', ({ target })=> {
  // 이메일 형식 검사에 필요한 변수
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  
  // 이메일 입력폼이 비어있을 경우
  if (target.value === '') {
    // 에러메세지 표시
    emailErrorMessage.innerHTML = '이메일을 입력해주세요.';
    emailErrorMessage.style.display = 'block';
  
  // 이메일 형식이 맞지 않을 경우
  } else if (pattern.test(target.value)===false) {
    emailErrorMessage.innerHTML = '올바른 이메일 주소가 아닙니다.';
    emailErrorMessage.style.display = 'block';
  
  // 문제 없을 경우
  } else {
    emailErrorMessage.style.display = 'none';
  }
});

// 비밀번호 입력폼의 focusout 이벤트에 이벤트 리스너(핸들러) 추가
passwordInputForm.addEventListener('focusout', ({ target })=> {
  // 비밀번호 입력폼이 비어있을 경우
  if (target.value === '') {
    pwErrorMessage.innerHTML = '비밀번호를 입력해주세요.';
    pwErrorMessage.style.display = 'block';

  // 문제 없을 경우
  } else {
    pwErrorMessage.style.display = 'none';
  }
});

// 로그인 시도 할 시 실행되는 함수
function login(e) {
  e.preventDefault();

  // 이메일이 틀렸을 경우
  if (successLoginEmail !== emailInputForm.value) {
    emailErrorMessage.innerHTML = '이메일을 확인해 주세요.';
    emailErrorMessage.style.display = 'block';

  // 비밀번호 틀렸을 경우
  } else if (successLoginPassword !== passwordInputForm.value) {
    pwErrorMessage.innerHTML = '비밀번호를 입력해주세요';
    pwErrorMessage.style.display = 'block';

  // 둘 다 맞을 경우
  } else {
    window.location.href='/folder.html'; 
  }
}