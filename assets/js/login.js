// inpuut 가져오기 
const TESTEMAIL = document.querySelector('#EMAIL');
const TESTPW = document.querySelector('#PW');

// 버튼
const btn = document.querySelector('.sign-btn');

// 에러메시지
const errorNOmessage = document.querySelector('.errortestNOemail'); //이메일
const errorNOPW = document.querySelector('.errortestNOPW'); //비밀번호

// 테스트 데이터
const data = [{email: 'test@codeit.com', password: 'codeit101'}];

 // 에러 메시지 div 만들기
const addtext = document.createElement('div');
addtext.classList.add('error_message');

const addtextPW = document.createElement('div');
addtextPW.classList.add('error_message');

 // 에러 텍스트 추가
let addmessage = document.createTextNode('');

// ----------------------------------------------------------------
// 사용자 email 포커스 아웃
function emailIogout() {  
  const testemail = this.value;
  console.log('email 포커스 아웃', testemail);
  addtext.innerText = '';
  
  if (testemail.length > 0) {
    const emailTEST = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

    if (!emailTEST.test(testemail)) {
      // 2. 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 아래에 “올바른 이메일 주소가 아닙니다.” 에러 메세지를 보입니다.
      // @ 포함되지 않은 이메일 입력일 경우
      console.log('다시 입력이 필요');
      // 에러 텍스트 추가
      addmessage = document.createTextNode('올바른 이메일 주소가 아닙니다.');
      addtext.appendChild(addmessage);

      // 부모div에 추가
      errorNOmessage.appendChild(addtext);
      console.log('--------------------------');
    } else {
      // 적합한 이메일 형식
      console.log('@ 포함되어 있음');
      console.log('--------------------------');
    }
  } else {
    // 1. 이메일 input에서 focus out 할 때, 값이 없을 경우 아래에 “이메일을 입력해 주세요.” 에러 메세지를 보입니다.
    console.log('다시 입력이 필요');

    // 에러 텍스트 추가
    addmessage = document.createTextNode('이메일을 입력해 주세요.');
    addtext.appendChild(addmessage);

    // 부모div에 추가
    errorNOmessage.appendChild(addtext);

    console.log('--------------------------');
  }
}

// ----------------------------------------------------------------
// 4. 비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해 주세요.” 에러 메세지를 보입니다.
// 사용자 pw 포커스 아웃


// ----------------------------------------------------------------
// 3. 이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도할 경우, “/folder” 페이지로 이동합니다.
// 6. 로그인 버튼 클릭 또는 Enter키 입력으로 로그인 실행돼야 합니다.
// 변수 이름 수정
function login() {
  // 사용자 input을 변수에 담기
  const userinputEmail = TESTEMAIL.value;
  const userinputPW = TESTPW.value;

  const user = data.find((d, i) => {
    console.log(i);
    return d.email === userinputEmail && d.password === userinputPW;
  });

// 5. 이외의 로그인 시도의 경우, 이메일 input 아래에 “이메일을 확인해 주세요.”, 
//    비밀번호 input 아래에 “비밀번호를 확인해 주세요.” 에러 메세지를 보입니다.

  const message = user 
    ? window.location.href = "/folder.html"
    : 
      // 에러 텍스트 추가
      addtext.innerText = '';
      addmessage = document.createTextNode('이메일을 확인해 주세요.');
      addtext.appendChild(addmessage);
      // 에러 텍스트 추가
      addtextPW.innerText = '';
      addmessage = document.createTextNode('비밀번호를 확인해 주세요.');
      addtextPW.appendChild(addmessage);

      // 부모div에 추가
      errorNOmessage.appendChild(addtext);
      // 부모div에 추가
      errorNOPW.appendChild(addtextPW);
    ;

  console.log(message);
}

// ----------------------------------------------------------------
// 에러 메시지 출력
TESTEMAIL.addEventListener('blur', emailIogout);
TESTPW.addEventListener('blur', PWIogout);

//로그인 버튼(enter) 클릭
btn.addEventListener('click', login);
TESTEMAIL.addEventListener('keypress', (e) => e.code === 'Enter' && login());
TESTPW.addEventListener('keypress', (e) => e.code === 'Enter' && login());
