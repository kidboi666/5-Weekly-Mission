const emailInput = document.querySelector("#user-email");
const passwordInput = document.querySelector("#password");

function checkEmail() {
  const parent = emailInput.parentElement;
  const inputValue = emailInput.value;
  if (inputValue === "") {
    let newP = document.createElement("P");
    newP.textContent = "이메일을 입력해주세요";
    newP.className = "error-message";
    parent.appendChild(newP);
  }
}

function handleFocusIn(event) {
  const target = event.target;
  removeErrorMessage(target);
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
