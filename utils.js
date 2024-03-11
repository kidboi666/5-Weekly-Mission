export function emailErr(email, emailMsg, text) {
  email.classList.add("err-input");
  emailMsg.classList.add("err-on");
  emailMsg.textContent = text;
}
export function pwdErr(password, pwdMsg, text) {
  password.classList.add("err-input");
  pwdMsg.classList.add("err-on");
  pwdMsg.textContent = text;
}
export function errChecked(type, typeMsg, text) {
  type.classList.remove("err-input");
  typeMsg.classList.remove("err-on");
  typeMsg.textContent = text;
}
