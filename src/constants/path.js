//이메일 유효성 검사
const CHECK_EMAIL = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+$/;
//비밀번호 유효성 검사
const CHECK_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//서버 경로
const API_PATH = 'https://bootcamp-api.codeit.kr';

export { CHECK_EMAIL, CHECK_PASSWORD, API_PATH };
