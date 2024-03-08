
// 4. 비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해 주세요.” 에러 메세지를 보입니다.
// 5. 이외의 로그인 시도의 경우, 이메일 input 아래에 “이메일을 확인해 주세요.”, 비밀번호 input 아래에 “비밀번호를 확인해 주세요.” 에러 메세지를 보입니다.


const TESTEMAIL = document.querySelector('#EMAIL');
const TESTPW = document.querySelector('#PW');
const TESTJOIN =document.querySelector('.errortestJOIN');

const btn = document.querySelector('.sign-btn');

const errormessage = document.querySelector('.errortestemail');
const errorNOmessage = document.querySelector('.errortestNOemail');

const data = [{email: 'test@codeit.com', password: 'codeit101'}];

function login(e) {  // 사용자 포커스 인
  console.log('사용자 포커스 인', this.value);
  console.log('--------------------------');
}

function logout(e) {  // 사용자 포커스 아웃
  const test = this.value;
  console.log('사용자 포커스 아웃', test);
  console.log(test.indexOf('@'));
  console.log(test);

  if (test.length > 0) {
    errorNOmessage.style.display = "none"

    if (test.indexOf('@') !== -1) {
      errormessage.style.display = "none"
      console.log('@ 포함되어 있음');
      console.log('--------------------------');
    } else {
      // 2. 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 아래에 “올바른 이메일 주소가 아닙니다.” 에러 메세지를 보입니다.
      // @ 포함되지 않은 이메일 입력일 경우
      console.log('다시 입력이 필요');
      console.log(errormessage);
      errormessage.style.display = "block"
      console.log('--------------------------');
    }
  } else {
    // 1. 이메일 input에서 focus out 할 때, 값이 없을 경우 아래에 “이메일을 입력해 주세요.” 에러 메세지를 보입니다.
    console.log('다시 입력이 필요');
    console.log(errorNOmessage);
    errorNOmessage.style.display = "block"
    console.log('--------------------------');
  }
}




TESTEMAIL.addEventListener('focus', login);
TESTEMAIL.addEventListener('blur', logout);
// TESTPW.addEventListener('blur', logout);

