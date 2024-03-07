const loginForm = document.querySelector('.login__wrap form');

const users = [
  {email:'test@codeit.com', pw:'codeit101'},
]

function login (e) {
  e.preventDefault();
  const user = users.find(user => user.email === this.email.value && user.pw === this.pw.value )
  if(user){
    location.href='/folder.html'
  }else {
    this.email.closest('.form__box').classList.add('error');
    this.pw.closest('.form__box').classList.add('error');
    this.email.closest('.form__box').querySelector('.error__text').innerText = '이메일을 확인해 주세요.';
    this.pw.closest('.form__box').querySelector('.error__text').innerText = '비밀번호를 확인해 주세요.';
  }
}

loginForm.addEventListener('submit',login)