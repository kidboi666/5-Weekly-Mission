// 비밀번호의 문자열이 가려질 때는 눈 모양 아이콘에는 사선이 그어져있고, 
// 비밀번호의 문자열이 보일 때는 사선이 없는 눈 모양 아이콘이 보이도록 합니다.

const eyebtn = document.querySelector('.sign__pw-eye-off');
const eyeimg = document.querySelector('.eye-offtest');

//import로 가져오는 걸로 수정
const TESTPW = document.querySelector('#PW');

function eyechange () {
  eyeimg.classList.toggle('addeye');
  
  if (TESTPW.type === "password") {
    TESTPW.type = "text";
  } else {
    TESTPW.type = "password";
  }
}

eyebtn.addEventListener('click', eyechange);