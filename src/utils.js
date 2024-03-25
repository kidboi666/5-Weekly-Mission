export function eyeToggleButton(input, toggleBtn) {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    toggleBtn
      .getElementsByTagName("img")[0]
      .setAttribute("src", "./img/signin/eye-on.svg");
    return;
  }
  input.setAttribute("type", "password");
  toggleBtn
    .getElementsByTagName("img")[0]
    .setAttribute("src", "./img/signin/eye-off.svg");
}
