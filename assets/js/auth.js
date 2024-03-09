const email = document.querySelector('#email');
const password = document.querySelector('#password');

function noticeEnterInput(e) {
  if(!e.target.value) {
    if(!e.target.nextElementSibling) {
      const notice = document.createElement('div');
      notice.classList.add('auth-form__notice-enter-input');
      notice.textContent = '이메일을 입력해 주세요.';
      e.target.after(notice);
      e.target.classList.add('input-border--red');
    }
    e.target.focus();
  } else {
    if(e.target.nextElementSibling) {
      e.target.nextElementSibling.remove();
      e.target.classList.remove('input-border--red');
    }
  }
}

email.addEventListener('focusout', noticeEnterInput);