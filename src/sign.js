const email = document.querySelector(".email");
const emailInput = document.querySelector("#email");
const password = document.querySelector(".password");
const passwordInput = document.querySelector("#password");
const submitBtn = document.querySelector(".loginBtn");
const eyeOn = document.querySelector(".eyeOn");
const eyeOff = document.querySelector(".eye-off");
const eyeBtn = document.querySelector(".eyeBtn");

// Test 계정
const TEST_EMAIL = "test@codeit.com";
const TEST_PASSWORD = "codeit101";

// 에러 메세지 생성 후 추가 함수
const createErrMsg = (element, message) => {
  const lastElement = element.lastElementChild;
  if (lastElement.tagName === "P") lastElement.remove();

  const errMsgTag = document.createElement("p");
  errMsgTag.textContent = message;
  element.appendChild(errMsgTag);
};

// 에러 메세지 제거 함수
const removeErrMsg = (element) => {
  const err_msg = element.querySelector("p");
  if (err_msg) {
    err_msg.remove();
  }
};

// 이메일 검사 함수
const emailValidator = ({ target }) => {
  let emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!target.value) {
    createErrMsg(email, "이메일을 입력해 주세요.");
    emailInput.classList.add("err");
    return;
  }

  if (!emailRegExp.test(target.value)) {
    createErrMsg(email, "올바른 이메일 주소가 아닙니다.");
    emailInput.classList.add("err");
    return;
  }

  if (target.value) {
    removeErrMsg(email);
    emailInput.classList.remove("err");
    return;
  }
};

// 비밀번호 검사 함수
const passwordValidator = ({ target }) => {
  if (!target.value) {
    createErrMsg(password, "비밀번호를 입력해 주세요.");
    passwordInput.classList.add("err");
  } else {
    removeErrMsg(password);
    passwordInput.classList.remove("err");
  }
};

// 로그인 버튼 클릭 시 이벤트 함수
const submitLogin = () => {
  const emailValue = document.querySelector("#email").value;
  const passwordValue = document.querySelector("#password").value;
  if (emailValue === TEST_EMAIL && passwordValue === TEST_PASSWORD) {
    location.href = "/folder.html";
  } else {
    createErrMsg(email, "이메일을 확인해 주세요.");
    createErrMsg(password, "비밀번호를 확인해 주세요.");
  }
};

// 비밀번호 눈 아이콘 클릭 시 이벤트 함수
const handleToPasswordEye = () => {
  const passwordType = passwordInput.getAttribute("type");

  passwordType === "password"
    ? (passwordInput.setAttribute("type", "text"), eyeOff.classList.toggle("none"), eyeOn.classList.toggle("none"))
    : (passwordInput.setAttribute("type", "password"), eyeOff.classList.toggle("none"), eyeOn.classList.toggle("none"));
};

// Event Listener 등록
emailInput.addEventListener("focusout", emailValidator);
passwordInput.addEventListener("focusout", passwordValidator);
submitBtn.addEventListener("click", submitLogin);
eyeBtn.addEventListener("click", handleToPasswordEye);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    submitLogin();
  }
});
