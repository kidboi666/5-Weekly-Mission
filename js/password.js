const loginPasswordInput = document.getElementById("login__pw__input"); // login input
const loginToggleButton = document.querySelector(".login__btn-pw"); // login button
const signUpPasswordInput = document.getElementById("form__pw"); // join pass1 input
const signUpToggleButton = document.querySelector(".signup__btn-pw"); // join pass1 button
const confirmPasswordInput = document.getElementById("form__pw__confirm"); // join pass2 input
const confirmToggleButton = document.querySelector(".signup__btn-pw2"); // join pass2 button
const passWrodError = document.getElementById("error__pw__text");
const signUpForm = document.querySelector("form");


// 비밀번호 보이고, 안보이고
function togglePassword(inputField, toggleButton) {
  if( toggleButton === null ) {
    return false;
  }

  toggleButton.addEventListener("click", function() {
    if (inputField.type === "password") {
      inputField.type = "text";
      toggleButton.classList.remove("btn__pw__off");
      toggleButton.classList.add("btn__pw__on");
    } else {
      inputField.type = "password";
      toggleButton.classList.remove("btn__pw__on");
      toggleButton.classList.add("btn__pw__off")
    }
  });
}

// 로그인 비밀번호 토글
togglePassword(loginPasswordInput, loginToggleButton);
togglePassword(signUpPasswordInput, signUpToggleButton);
togglePassword(confirmPasswordInput, confirmToggleButton);


 // 비밀번호가 일치하는지 확인하는 기능
 function validatePasswordsMatch(password, confirmPassword) {
  if(password === null) {
    return false;
  }
  return password.value === confirmPassword.value;
}

// 비밀번호 확인 필드에서 focus가 빠져나갈 때마다 비밀번호를 확인하고 에러 메시지를 표시
confirmPasswordInput.addEventListener("blur", function() {
  if (!validatePasswordsMatch(signUpPasswordInput, confirmPasswordInput)) {
    passWrodError.style.display = "block";
    passWrodError.closest('.form__box ').classList.add("error")
  } else {
    passWrodError.style.display = "none";
    passWrodError.closest('.form__box ').classList.remove("error")
  }
});

// 회원가입 폼의 submit 이벤트를 가로채서 비밀번호가 일치하는지 확인하고 에러 메시지를 표시
signUpForm.addEventListener("submit", function(event) {
  if (!validatePasswordsMatch(signUpPasswordInput, confirmPasswordInput)) {
    passWrodError.style.display = "block";
    passWrodError.closest('.form__box ').classList.add("error")
  } else {
    passWrodError.style.display = "none";
    passWrodError.closest('.form__box ').classList.remove("error")
  }
});