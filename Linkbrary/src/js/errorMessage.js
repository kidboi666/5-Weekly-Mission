export default function generateErrorMessage(target, errorText) {
  removeErrorMessage(target);
  let newP = document.createElement("P");
  newP.textContent = errorText;
  newP.className = "error-message";
  target.appendChild(newP);
  let t = target.querySelector(".sign-input").classList.add("wrong-input");
  return false;
}

export function removeErrorMessage(element) {
  const errorMessage = element.querySelector(".error-message");
  if (errorMessage) {
    element.removeChild(errorMessage);
  }
  element.querySelector(".sign-input").classList.remove("wrong-input");
}
