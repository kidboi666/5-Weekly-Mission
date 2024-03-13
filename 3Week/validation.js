let elInputUsername = document.querySelector('.sign-input'); // 이메일 입력
let elFailureMessage = document.querySelector('.failure-message'); // 이메일을 입력해주세요
let elFailureMessage2 = document.querySelector('.failure-message2'); // 올바른 이메일 주소가 아닙니다.
let elFailureMessage3 = document.querySelector('.failure-message3'); // 이메일을 확인해주세요

let loginForm = document.querySelector('.sign-form'); // 로그인 폼
let loginButton = document.querySelector('.cta'); // 로그인 버튼

let elInputPassword = document.querySelector('.sign-input-password'); // 비밀번호 입력
let elFailurePasswordMessage = document.querySelector('.failure-password-message'); // 비밀번호를 입력해 주세요
let elFailurePasswordMessage2 = document.querySelector('.failure-password-message2'); // 비밀번호를 확인헤주세요

function showErrorBorder(inputElement) {
  inputElement.classList.add('error-border'); // inputElement에 클래스 추가
}

function hideErrorBorder(inputElement) {
  inputElement.classList.remove('error-border'); // inputElement에 클래스 제거
}

function emailCheck() {
  let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // 이메일 정규식

  if (!elInputUsername.value.trim()) {
    elFailureMessage2.classList.add('hide');
    elFailureMessage3.classList.add('hide');
    showErrorBorder(elInputUsername);
    // console.log('아무것도 없을 때');
  } else {
    if (!email_regex.test(elInputUsername.value)) {
      elFailureMessage2.classList.remove('hide');
      elFailureMessage3.classList.add('hide');
      showErrorBorder(elInputUsername);
      // console.log('올바르지 않은 이메일 주소');
    } else {
      elFailureMessage2.classList.add('hide');
      hideErrorBorder(elInputUsername);
      // console.log('올바른 이메일 주소');
    }
  }
}

function checkValueFocusOut(el, messageElement) {
  el.addEventListener('focusout', function () {
    if (!el.value.trim()) {
      messageElement.classList.remove('hide');
      showErrorBorder(el);
    } else {
      messageElement.classList.add('hide');
      hideErrorBorder(el);
    }
  });
}

elInputUsername.addEventListener('focusout', emailCheck);

function login() {
  if (elInputUsername.value !== 'test@codeit.com' || elInputPassword.value !== 'codeit101') {
    elFailureMessage3.classList.remove('hide');
    elFailurePasswordMessage2.classList.remove('hide');
    elFailureMessage2.classList.add('hide');
    elFailurePasswordMessage.classList.add('hide');
    showErrorBorder(elInputUsername);
  } else {
    elFailureMessage3.classList.add('hide');
    elFailurePasswordMessage2.classList.add('hide');
    hideErrorBorder(elInputUsername);
    location.href = '/folder.html';
  }
}

loginButton.addEventListener('click', function (e) {
  e.preventDefault();
  login();
});

loginForm.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    login();
  }
});

checkValueFocusOut(elInputUsername, elFailureMessage);
checkValueFocusOut(elInputPassword, elFailurePasswordMessage);
