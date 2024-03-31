//이메일 유효성 검사
const CHECKEMAIL = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+$/;

//비밀번호 유효성 검사
const CHECKPASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//서버 경로
const APIPATH = 'https://bootcamp-api.codeit.kr';

export { CHECKEMAIL, CHECKPASSWORD, APIPATH };
