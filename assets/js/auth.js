function checkEmailPattern(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return emailPattern.test(email) ? true : false;
}

function checkPasswordPattern(password) {
  const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return passwordPattern.test(password) ? true : false;
}

function createError(target, content) {
  target.classList.add("error");
  const parentField = target.closest(".form__field");
  const error = parentField.querySelector(".error-message");
  error.textContent = content;
}

function removeError(target) {
  target.classList.remove("error");
  const parentField = target.closest(".form__field");
  const error = parentField.querySelector(".error-message");
  error.textContent = "";
}

function validate({ $email, $password, $passwordConfirm }) {
  const result = { ok: true };
  const email = $email && $email.value;
  const password = $password && $password.value;
  const passwordConfirm = $passwordConfirm && $passwordConfirm.value;
  const isSignup = document.querySelector("#signupForm");

  if ($email) {
    if (email === "") {
      result.ok = false;
      result.email = "이메일을 입력해 주세요.";
    } else if (!checkEmailPattern(email)) {
      result.ok = false;
      result.email = "올바른 이메일 주소가 아닙니다.";
    } else if (isSignup && email === "test@codeit.com") {
      result.ok = false;
      result.email = "이미 사용 중인 이메일입니다.";
    }
  }

  if ($password) {
    if (password === "") {
      result.ok = false;
      result.password = "비밀번호를 입력해 주세요.";
    } else if (isSignup && !checkPasswordPattern(password)) {
      result.ok = false;
      result.password = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    }
  }

  if ($passwordConfirm && passwordConfirm !== password) {
    result.ok = false;
    result.passwordConfirm = "비밀번호가 일치하지 않아요.";
  }

  return result;
}

function handleEmail(event) {
  const $email = event.target;
  const validated = validate({ $email });
  if (!validated.ok) {
    createError($email, validated.email);
  } else {
    removeError($email);
  }
}

function handlePassword(event) {
  const $password = event.target;
  const validated = validate({ $password });
  if (!validated.ok) {
    createError($password, validated.password);
  } else {
    removeError($password);
  }
}

function handlePasswordConfirm(event) {
  const $passwordConfirm = event.target;
  const $password = $passwordConfirm
    .closest(".form")
    .querySelector("#password");
  if ($passwordConfirm.value !== $password.value) {
    createError($passwordConfirm, "비밀번호가 일치하지 않아요.");
  } else {
    removeError($passwordConfirm);
  }
}

function handleLogin(event) {
  event.preventDefault();
  const adminId = "test@codeit.com";
  const adminPassword = "codeit101";
  const $email = event.target.email;
  const $password = event.target.password;
  const validated = validate({ $email, $password });
  if (!validated.ok) {
    validated.email && createError($email, validated.email);
    validated.password && createError($password, validated.password);
  } else if ($email.value === adminId && $password.value === adminPassword) {
    location.assign("/folder");
  } else {
    createError($email, "이메일을 확인해 주세요.");
    createError($password, "비밀번호를 확인해 주세요.");
  }
}

function handleSignup(event) {
  event.preventDefault();
  const $email = event.target.email;
  const $password = event.target.password;
  const $passwordConfirm = event.target.passwordConfirm;
  const validated = validate({ $email, $password, $passwordConfirm });
  if (!validated.ok) {
    validated.email && createError($email, validated.email);
    validated.password && createError($password, validated.password);
    validated.passwordConfirm && createError($passwordConfirm, validated.passwordConfirm);
  } else {
    location.assign("/folder");
  }
}

function togglePasswordType(event) {
  const currentPassword = event.target
    .closest(".form__pw-wp")
    .querySelector(".form__input");
  event.target.classList.toggle("off");
  if (currentPassword.type === "password") {
    currentPassword.type = "text";
    return;
  }
  currentPassword.type = "password";
}

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");
const signinForm = document.querySelector("#signinForm");
const signupForm = document.querySelector("#signupForm");
const passwordEyeButton = document.querySelector("#passwordEyeButton");
const passwordConfirmEyeButton = document.querySelector(
  "#passwordConfirmEyeButton"
);

email && email.addEventListener("focusout", handleEmail);
password && password.addEventListener("focusout", handlePassword);
passwordConfirm &&
  passwordConfirm.addEventListener("focusout", handlePasswordConfirm);
signinForm && signinForm.addEventListener("submit", handleLogin);
signupForm && signupForm.addEventListener("submit", handleSignup);
passwordEyeButton &&
  passwordEyeButton.addEventListener("click", togglePasswordType);
passwordConfirmEyeButton &&
  passwordConfirmEyeButton.addEventListener("click", togglePasswordType);
