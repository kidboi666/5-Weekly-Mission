const emailInput = document.querySelector("#user-email");
const passwordInput = document.querySelector("#password");

function checkEmail() {
  const parent = emailInput.parentElement;
  const inputValue = emailInput.value;
  const isEmpty =
    inputValue === ""
      ? generateErrorMessage(parent, "이메일을 입력해주세요")
      : false;

  if (!isEmpty && !isValidEmail(inputValue)) {
    generateErrorMessage(parent, "올바른 이메일 주소가 아닙니다.");
  }
}

function handleFocusIn(event) {
  const target = event.target;
  removeErrorMessage(target);
}

function isValidEmail(inputValue) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(inputValue);
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
    console.log(em.parentElement);
    if (em.parentElement === parent) {
      parent.removeChild(em);
    }
  });
}

emailInput.addEventListener("focusout", checkEmail);
emailInput.addEventListener("focus", handleFocusIn);
