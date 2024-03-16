export{
  removeErrorMessage,
  togglePasswordVisibility
}

/*에러메세지가 떠 있는 경우 다시 focus했을 때 에러메세지 제거*/

function removeErrorMessage() {
  const emailErrorMessageEl = document.querySelector('.error-message-email');
  const passwordErrorMessageEl = document.querySelector('.error-message-password');

  emailErrorMessageEl.textContent = '';
  passwordErrorMessageEl.textContent = '';
}

/*눈 모양 아이콘 함수*/
function togglePasswordVisibility() {
  const passwordInputEls = document.querySelectorAll('.password-input, .password-confirm-input');
  const eyeButtonEls = document.querySelectorAll('.eye-button');

  passwordInputEls.forEach((passwordInputEl, index) => {
    const eyeButtonEl = eyeButtonEls[index];

    if (passwordInputEl.type === "password") {
      passwordInputEl.type = "text";
      eyeButtonEl.innerHTML = '<img src="../image/eye-on.jpg" />';
    } else {
      passwordInputEl.type = "password";
      eyeButtonEl.innerHTML = '<img src="../image/eye-off.jpg" />';
    }
  });
}