export default function generateErrorMessage(target, errorText) {
  let newP = document.createElement("P");
  newP.textContent = errorText;
  newP.className = "error-message";
  target.appendChild(newP);
  let t = target.querySelector(".sign-input").classList.add("wrong-input");
  return false;
}

export function removeErrorMessage(element) {
  const parent = element.parentElement;
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach(function (em) {
    if (em.parentElement === parent) {
      parent.removeChild(em);
    }
  });
  parent.querySelector(".sign-input").classList.remove("wrong-input");
}
