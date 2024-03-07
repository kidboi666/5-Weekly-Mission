function handleFocusIn(event) {
  const target = event.target;
  removeErrorMessage(target);
}

function handleFocusOut(event) {
  switch (event.target.id) {
    case "user-email":
      isValidEmail(event.target);
      break;
    case "password":
      isValidPassword(event.target);
      break;
  }
}

function isValidEmail(emailInput) {
  if (emailInput.value.length === 0) {
    generateErrorMessage(emailInput.parentElement, "이메일을 입력해주세요");
    return false;
  }
  if (!isEmailForm(inputValue)) {
    generateErrorMessage(
      emailInput.parentElement,
      "올바른 이메일 주소가 아닙니다."
    );
    return false;
  }
  return true;
}

function isEmailForm(inputValue) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(inputValue);
}

function isValidPassword(passwordInput) {
  const inputValue = passwordInput.value;
  if (inputValue.length === 0) {
    generateErrorMessage(passwordInput.parent, "비밀번호를 입력해주세요");
    return false;
  }
  return true;
}

function generateErrorMessage(target, errorText) {
  let newP = document.createElement("P");
  newP.textContent = errorText;
  newP.className = "error-message";
  target.appendChild(newP);
  return false;
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

function handleSubmit(event) {
  event.preventDefault();
  validateLogin();
}

function validateLogin() {
  const emailInput = document.querySelector("#user-email");
  const passwordInput = document.querySelector("#password");

  if (!isValidInput(emailInput, passwordInput)) {
    return;
  }

  if (!isCorrectInput(emailInput, passwordInput)) {
    generateErrorMessage(emailParent, "이메일을 확인해 주세요");
    generateErrorMessage(passwordParent, "비밀번호를 확인해 주세요");
    return;
  }

  //TODO: Make a Link to folder.html
}

function isValidInput(emailInput, passwordInput) {
  return (
    isValidEmail(emailInput.parentElement, emailInput) &&
    isValidPassword(passwordInput.parentElement, passwordInput)
  );
}

function isCorrectInput(emailInput, passwordInput) {
  const email = "test@codeit.com";
  const password = "codeit101";
  return email === emailInput.value && password === passwordInput.value;
}

document.addEventListener("focus", handleFocusIn, true);
document.addEventListener("focusout", handleFocusOut);
document.addEventListener("submit", handleSubmit);
