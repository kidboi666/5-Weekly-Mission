const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#errorText");

function inputFocusOut() {
  if (!emailInput.value == "") {
    emailError.classList.add("error");
  } else {
    emailError.classList.remove("error");
  }
}
emailInput.addEventListener("focusout", inputFocusOut);
