// 이메일 input
const email = document.querySelector('.id');
const emailTag = document.querySelector('.emailTag');
// 비밀번호 input
const pw = document.querySelector('.password');
const passwordTag = document.querySelector('.passwordTag');
// 예시 아이디 비밀번호
const testId = 'test@codeit.com';
const testPassword = 'codeit101';
//이메일 유효성 검사
const emailCheck = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+$/;

export { email, emailTag, pw, passwordTag, testId, testPassword, emailCheck };
