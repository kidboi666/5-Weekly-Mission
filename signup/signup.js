// css 선택자로 요소 선택
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordCheckInput = document.querySelector('#password_check');
const emailErrorMsg = document.querySelector('#email-error');
const passwordErrorMsg = document.querySelector('#password-error');
const passwordCheckErrorMsg = document.querySelector('#password-check-error');
const btn = document.querySelector('#button');
const passwordEyeOn = document.querySelector('#password-eye-on');
const passwordCheckEyeOn = document.querySelector('#password-check-eye-on');

// 이벤트 핸들러
// email input 이벤트
function emailHandler(event) {
  //1. 이메일 input에서 focus out 할 때, 값이 없을 경우 “이메일을 입력해주세요.” 에러 메세지를 보입니다.
  if (event.target.value === '') {
    emailErrorMsg.textContent = '이메일을 입력해주세요.';
    emailErrorMsg.classList.add('error-msg-on');
    return;
  }
  //2. 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 “올바른 이메일 주소가 아닙니다.” 에러 메세지를 보입니다.
  //★ 정규표현식으로 변경해야함
  if (event.target.value.indexOf('@') === -1) {
    emailErrorMsg.textContent = '올바른 이메일 주소가 아닙니다.';
    emailErrorMsg.classList.add('error-msg-on');
    return;
  }
  //3. 이메일 input에서 focus out 할 때, input 값이 test@codeit.com 일 경우, “이미 사용 중인 이메일입니다.” 에러 메세지를 보입니다.
  if (event.target.value === 'test@codeit.com') {
    emailErrorMsg.textContent = '이미 사용 중인 이메일입니다.';
    emailErrorMsg.classList.add('error-msg-on');
    return;
  }
  if (event.target.value !== '') {
    emailErrorMsg.textContent = '';
  }
}

// password input 이벤트
function passwordHandler(event) {
  if (passwordInput.value === '') {
    passwordErrorMsg.textContent = '비밀번호를 입력해 주세요.';
    passwordErrorMsg.classList.add('error-msg-on');
    return;
  }
  //★4. 비밀번호 input에서 focus out 할 때, 값이 8자 미만으로 있거나 문자열만 있거나 숫자만 있는 경우, “비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.” 에러 메세지를 보입니다.
  if (passwordInput.value !== '') {
    passwordErrorMsg.textContent = '';
  }
}

function passwordCheckHandler(event) {
  //5. 비밀번호 input과 비밀번호 확인 input의 값이 다른 경우, 비밀번호 확인 input 아래에 “비밀번호가 일치하지 않아요.” 에러 메세지를 보입니다
  if (passwordInput.value !== passwordCheckInput.value) {
    passwordCheckErrorMsg.textContent = '비밀번호가 일치하지 않아요.';
    passwordCheckErrorMsg.classList.add('error-msg-on');
  }
  if (passwordInput.value === passwordCheckInput.value) {
    passwordCheckErrorMsg.textContent = '';
  }
}

// 비밀번호 토글 이벤트
function passwordToggle(event) {
  // password input에 있는 눈모양 토글
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordEyeOn.src = '../img/eye_off.svg';
    return;
  }
  if (passwordInput.type === 'text') {
    passwordInput.type = 'password';
    passwordEyeOn.src = '../img/eye_on.svg';
    return;
  }
}

function passwordCheckToggle(event) {
  // passwordCheck input에 있는 눈모양 토글
  if (passwordCheckInput.type === 'password') {
    passwordCheckInput.type = 'text';
    passwordCheckEyeOn.src = '../img/eye_off.svg';
    return;
  }
  if (passwordCheckInput.type === 'text') {
    passwordCheckInput.type = 'password';
    passwordCheckEyeOn.src = '../img/eye_on.svg';
    return;
  }
}

// button 이벤트
function button(event) {
  if (
    // ★정규표현식으로 변경 필요
    // ★비밀번호 정규표현식 추가해야함.
    emailInput.value.indexOf('@') !== -1 &&
    passwordInput.value === passwordCheckInput.value
  ) {
    //7. 이외의 유효한 회원가입 시도의 경우, “/folder”로 이동합니다.
    location.href = '/folder/folder.html';
  } else {
    //6. 회원가입 버튼 클릭 또는 Enter키 입력으로 회원가입 실행돼야 합니다.
    emailErrorMsg.textContent = '이메일을 확인해 주세요.';
    emailErrorMsg.classList.add('error-msg-on');
    passwordErrorMsg.textContent = '비밀번호를 확인해 주세요.';
    passwordErrorMsg.classList.add('error-msg-on');
    passwordCheckErrorMsg.textContent = '비밀번호를 확인해 주세요.';
    passwordCheckErrorMsg.classList.add('error-msg-on');
  }
}

// enter 이벤트
// 8. 회원가입 버튼 클릭 또는 Enter키 입력으로 회원가입 실행돼야 합니다.
function enter(event) {
  if (
    // ★정규표현식으로 변경 필요
    // ★비밀번호 정규표현식 추가해야함.
    emailInput.value.indexOf('@') !== -1 &&
    passwordInput.value === passwordCheckInput.value
  ) {
    if (event.keyCode === 13) {
      //7. 이외의 유효한 회원가입 시도의 경우, “/folder”로 이동합니다.
      location.href = '/folder/folder.html';
    }
  }
  if (
    // ★정규표현식으로 변경 필요
    // ★비밀번호 정규표현식 추가해야함.
    emailInput.value.indexOf('@') === -1 &&
    passwordInput.value !== passwordCheckInput.value
  ) {
    if (event.keyCode === 13) {
      //6. 회원가입 버튼 클릭 또는 Enter키 입력으로 회원가입 실행돼야 합니다.
      emailErrorMsg.textContent = '이메일을 확인해 주세요.';
      emailErrorMsg.classList.add('error-msg-on');
      passwordErrorMsg.textContent = '비밀번호를 확인해 주세요.';
      passwordErrorMsg.classList.add('error-msg-on');
      passwordCheckErrorMsg.textContent = '비밀번호를 확인해 주세요.';
      passwordCheckErrorMsg.classList.add('error-msg-on');
    }
  }
}

// input 이벤트리스너
emailInput.addEventListener('focusout', emailHandler);
passwordInput.addEventListener('focusout', passwordHandler);
passwordCheckInput.addEventListener('focusout', passwordCheckHandler);
// 눈모양 토글 이벤트 리스너
passwordEyeOn.addEventListener('click', passwordToggle);
passwordCheckEyeOn.addEventListener('click', passwordCheckToggle);
// button 클릭 이벤트 리스너
btn.addEventListener('click', button);
// enter 이벤트 리스너
emailInput.addEventListener('keydown', enter);
passwordInput.addEventListener('keydown', enter);
passwordCheckInput.addEventListener('keydown', enter);
