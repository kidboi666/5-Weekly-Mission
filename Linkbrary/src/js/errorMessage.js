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
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach(function (em) {
    if (em.parentElement === element) {
      element.removeChild(em);
    }
  });
  element.querySelector(".sign-input").classList.remove("wrong-input");
}
