export function inputErr(input, inputMsg, text) {
  input.classList.add("err-input");
  inputMsg.classList.add("err-on");
  inputMsg.textContent = text;
}

export function errChecked(type, typeMsg, text) {
  type.classList.remove("err-input");
  typeMsg.classList.remove("err-on");
  typeMsg.textContent = text;
}

export function validEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.value);
}
