const signupFomeInput = document.querySelectorAll('.signup__form input');
const signinFomeInput = document.querySelectorAll('.login__wrap input');

function validateEmpty ( target ) { // input Empty
  const id = target.id;
  let massage = '';
  switch(id){
    case 'form__email':
      massage = '이메일을 입력해 주세요.' 
      break;
    case 'login__email':
      massage = '이메일을 입력해 주세요.' 
      break;
    case 'form__pw':
      massage = '비밀번호를 입력해 주세요.' 
      break;
    case 'form__pw__confirm':
      massage = '비밀번호 확인을 입력해 주세요.' 
      break;
    case 'login__pw__input':
      massage = '비밀번호를 입력해 주세요.' 
      break;
    default:
      massage = ''
  }
  return massage;
}

function validateEmail ( target ) { // email 
  const {value} = target;
  const regex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
  return regex.test(value)
}

function validatePassWordConfirm ( target ) { //password-confirm
  const {value} = target;
  const password = document.querySelector('#form__pw').value;
  return password === value;
}

function errorInputAdd (parent, massage) { // error massage add
  parent.classList.add('error');
  parent.querySelector('.error__text').innerText = massage;
}

function errorInputRemove (parent) { // error massage remove
  parent.classList.remove('error');
  parent.querySelector('.error__text').innerText = ''
}

function validateForm (e) { // form handler
  const { target , target: {value} } = e;
  const parent = target.closest('.form__box');
  const errorMsgEmpty = validateEmpty(target);

  if(value === ''){ // empty
    errorInputAdd(parent, errorMsgEmpty)
    return false;
  }
  errorInputRemove(parent);
 
  if(target.id === 'form__email') { //email
    if(validateEmail(target)) {
      errorInputRemove(parent)
    }else{
      errorInputAdd(parent,'올바른 이메일 주소가 아닙니다.')
    }
  }

  if(target.id === 'form__pw__confirm') { //password
    if(validatePassWordConfirm(target)){
      errorInputRemove(parent)
    }else {
      errorInputAdd(parent,'비밀번호가 다릅니다.')
    }
  }
}


for (const signup of signupFomeInput) { // 회원가입
  signup.addEventListener('focusout', validateForm);
}

for (const signin of signinFomeInput) { // 로그인
  signin.addEventListener('focusout', login);
};
