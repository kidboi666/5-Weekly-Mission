const signinForm = document.querySelector('.login__wrap form');
const signinEmail = document.querySelector('#login__email');
const signinPassword = document.querySelector('#login__pw__input');

const users = [
  {email:'test@codeit.com', pw:'codeit101'},
]

function signin (e)  {
  e.preventDefault();

  if(signinEmail.value !== '' && signinPassword.value !== '') {
    const user = users.find(user => user.email === signinEmail.value && user.pw === signinPassword.value )

    if(user){
      location.href='/folder.html'
    }else {
      signinEmail.closest('.form__box').classList.add('error');
      signinPassword.closest('.form__box').classList.add('error');
      signinEmail.closest('.form__box').querySelector('.error__text').innerText = '이메일을 확인해 주세요.';
      signinPassword.closest('.form__box').querySelector('.error__text').innerText = '비밀번호를 확인해 주세요.';
    }
  } 
  
  return false;
}

signinForm.addEventListener('submit',signin)