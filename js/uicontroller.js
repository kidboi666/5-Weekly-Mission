export{
  removeErrorMessage,
  togglePasswordVisibility
}

/*에러메세지가 떠 있는 경우 다시 focus했을 때 에러메세지 제거*/

function removeErrorMessage(errorMessageSelector) {
  const errorMessageEl = document.querySelector(errorMessageSelector);
  if (errorMessageEl) {
    errorMessageEl.textContent = '';
  }
}

/*눈 모양 아이콘 함수*/

function togglePasswordVisibility(inputField, toggleBtn) {
  if (inputField.type === "password") {
    inputField.type = "text";
    toggleBtn.innerHTML = '<img src="../image/eye-on.jpg" />';
  } else {
    inputField.type = "password";
    toggleBtn.innerHTML = '<img src="../image/eye-off.jpg" />';
  }
}