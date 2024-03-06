/**
 * 이메일 input에서 focus out 할 때, 값이 없을 경우 아래에 “이메일을 입력해 주세요.” 에러 메세지를 보입니다.
 * 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 아래에 “올바른 이메일 주소가 아닙니다.” 에러 메세지를 보입니다.
 */
const email = document.querySelector('#email');
// 오류메세지 출력 엘리먼트
const emailError = document.querySelector('.hide-error-email');
// 입력 된 이메일 값
let emailValue = '';

email.addEventListener('focusout', (event) => {
    // 이메일 체크 정규식
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    
    // 입력 된 이메일 값
    emailValue = email.value;

    // 빈 값일 때
    if(emailValue === '') {
        emailError.textContent = "이메일을 입력해 주세요."
        event.target.classList.add("wrong");
    } else if(!regex.test(emailValue)) { // 올바른 이메일 형식이 아닐 때
        emailError.textContent = "올바른 이메일 주소가 아닙니다."
        event.target.classList.add("wrong");
    }else{ // 정상적인 값 입력 시
        emailError.textContent = ""
        event.target.classList.remove("wrong");
    }
});

/**
 * 비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해 주세요.” 에러 메세지를 보입니다.
 */
const password = document.querySelector('#password');
// 오류메세지 출력 엘리먼트
const passwordError = document.querySelector('.hide-error-password');
// 입력 된 비밀번호 값
let passwordValue = '';

password.addEventListener('focusout', (event) => {
    // 입력 된 비밀번호 값
    passwordValue = password.value;
    
    // 빈 값일 때
    if(passwordValue === '') {
        passwordError.textContent = "비밀번호를 입력해 주세요."
        event.target.classList.add("wrong");
    }else{ // 정상적인 값 입력 시
        passwordError.textContent = ""
        event.target.classList.remove("wrong");
    }
});

/**
 * 이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도할 경우, “/folder” 페이지로 이동합니다.
 * 이외의 로그인 시도의 경우, 이메일 input 아래에 “이메일을 확인해 주세요.”, 비밀번호 input 아래에 “비밀번호를 확인해 주세요.” 에러 메세지를 보입니다.
 * 로그인 버튼 클릭 또는 Enter키 입력으로 로그인 실행돼야 합니다.
 */

const form = document.querySelector('#form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (emailValue === "test@codeit.com" && passwordValue === "codeit101") {
        location.href="/folder.html";
    }else {
        emailError.textContent = "이메일을 확인해 주세요."
        passwordError.textContent = "비밀번호를 확인해 주세요."
    }
});


/**
 * 눈 모양 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지기도 합니다.
 * 비밀번호의 문자열이 가려질 때는 눈 모양 아이콘에는 사선이 그어져있고, 비밀번호의 문자열이 보일 때는 사선이 없는 눈 모양 아이콘이 보이도록 합니다.
 */

const passwordHidden = document.querySelector('#passwordHidden');
passwordHidden.addEventListener('click', (event) => {
    if(password.type == "password") {
        password.type="text";
        document.querySelector('.eye-off').classList.add("disable");
        document.querySelector('.eye-on').classList.remove("disable");
        document.querySelector('.eye-on').classList.add("active");
    }else {
        password.type="password";
        document.querySelector('.eye-on').classList.add("disable");
        document.querySelector('.eye-off').classList.remove("disable");
        document.querySelector('.eye-off').classList.add("active");
    }
});
