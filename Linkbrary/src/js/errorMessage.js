export default function generateErrorMessage(target, errorText) {
  removeErrorMessage(target);
  const newP = document.createElement("P");
  newP.textContent = errorText;
  newP.className = "error-message";
  target.appendChild(newP);
  target.querySelector(".sign-input").classList.add("wrong-input");
}

export function removeErrorMessage(element) {
  const errorMessage = element.querySelector(".error-message");
  if (errorMessage) {
    element.removeChild(errorMessage);
  }
  element.querySelector(".sign-input").classList.remove("wrong-input");
}
