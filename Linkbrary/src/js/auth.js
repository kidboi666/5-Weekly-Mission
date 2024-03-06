function handleFocusIn(event) {
  const target = event.target;
  removeErrorMessage(target);
}

function handleFocusOut(event) {
  const parent = event.target.parentElement;
  const targetId = event.target.id;

  switch (targetId) {
    case "user-email":
      checkEmail(parent, event.target);
      break;
    case "password":
      checkPassword(parent, event.target);
      break;
  }
}

function checkEmail(parent, emailInput) {
  const inputValue = emailInput.value;

  inputValue.length === 0
    ? generateErrorMessage(parent, "이메일을 입력해주세요")
    : isValidEmail(inputValue)
    ? {}
    : generateErrorMessage(parent, "올바른 이메일 주소가 아닙니다.");
}

function isValidEmail(inputValue) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(inputValue);
}

function checkPassword(parent, passwordInput) {
  const inputValue = passwordInput.value;
  if (inputValue.length === 0)
    generateErrorMessage(parent, "비밀번호를 입력해주세요");
}

function generateErrorMessage(parent, errorText) {
  let newP = document.createElement("P");
  newP.textContent = errorText;
  newP.className = "error-message";
  parent.appendChild(newP);
  return true;
}

function removeErrorMessage(element) {
  const parent = element.parentElement;
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach(function (em) {
    if (em.parentElement === parent) {
      parent.removeChild(em);
    }
  });
}
document.addEventListener("focus", handleFocusIn, true);
document.addEventListener("focusout", handleFocusOut);
