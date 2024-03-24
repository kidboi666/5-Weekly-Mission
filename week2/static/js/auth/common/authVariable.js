// ============ 이메일 ============ //
// 입력 된 이메일 값
const $email = document.querySelector('#email');
// 오류메세지 출력 엘리먼트
const $emailError = document.querySelector('#emailErrorText');

// ============ 비밀번호 ============ //
// 입력 된 비밀번호 값
const $password = document.querySelector('#password');
// 오류메세지 출력 엘리먼트
const $passwordError = document.querySelector('#passwordErrorText');
// 비밀번호 문자열 on/off 아이콘 버튼
const $passWordIconBtn = document.querySelectorAll('.password-icon-btn');

// ============ 비밀번호 확인 ============ //
// 입력 된 비밀번호 확인 값
const $passwordCheck = document.querySelector('#passwordCheck');
// 오류메세지 출력 엘리먼트
const $passwordCheckError = document.querySelector('#passwordCheckErrorText');

// ============ 로그인 ============ //
const $loginForm = document.querySelector('#loginForm');

// ============ 회원가입 ============ //
const $joinForm = document.querySelector('#joinForm');
const checkJoinData = {
    email: false,
    password: false,
    passwordCheck: false
};

// ============ 테스트 데이터 ============ //
const $loginEmail = "test@codeit.com";
const $loginPassword = "codeit101";


export {
    $email,
    $emailError,
    $password,
    $passwordError,
    $passWordIconBtn,
    $passwordCheck,
    $passwordCheckError,
    $loginForm,
    $joinForm,
    $loginEmail,
    $loginPassword,
    checkJoinData
};