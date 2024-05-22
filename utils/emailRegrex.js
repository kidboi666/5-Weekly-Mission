const emailRegrex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

//이메일 검사
export default function validateEmail(email) {
  return new RegExp(emailRegrex).test(email);
}
