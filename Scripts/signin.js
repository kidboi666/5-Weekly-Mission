import * as enums from "./enums.js";
import * as sign from "./sign.js";
import * as regex from "./regex.js";

const email = document.querySelector("#email");
const pw = document.querySelector("#pw");
const eyeIcon = document.querySelector(".eyeIcon");
const form = document.querySelector("form");

// Input focusout 시
function formFocusOut(e) {
  const targetName = e.target.name;
  const targetValue = e.target.value;
  // 이메일
  if (targetName === "email") {
    // 입력 값이 없을 때
    if (targetValue === "") {
      sign.makeWarningMsg(enums.warningMsg.EMAIL_NULL, e.target);
      e.target.classList.add("warningForm");
    }
    // 올바른 형식이 아닐 때
    else if (regex.emailFormat.test(targetValue) === false) {
      sign.makeWarningMsg(enums.warningMsg.EMAIL_INVALID, e.target);
      e.target.classList.add("warningForm");
    }
  }
  // 비밀번호
  else {
    // 입력 값이 없을 때
    if (targetValue === "") {
      sign.makeWarningMsg(enums.warningMsg.PW_NULL, e.target);
      e.target.classList.add("warningForm");
    }
  }
}

// Form 제출 시
function submitForm(e) {
  e.preventDefault();
  email.dispatchEvent(new Event("focusin"));
  pw.dispatchEvent(new Event("focusin"));
  // 올바른 이메일, 비밀번호 입력했는지 확인
  checkUser();
}

const checkUser = async function () {
  try {
    const response = await fetch(`${enums.urls.BASE_URL}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: `${email.value}`,
        password: `${pw.value}`,
      }),
    });
    if (!response.ok) {
      throw new Error("존재하지 않는 계정입니다.");
    }
    const result = await response.json();
    const signinToken = result.data.accessToken;
    localStorage.setItem("signinToken", signinToken);
    location.href = "../folder.html";
  } catch (error) {
    console.log(error);
    sign.makeWarningMsg(enums.warningMsg.EMAIL_WRONG, email);
    sign.makeWarningMsg(enums.warningMsg.PW_WRONG, pw);
    email.classList.add("warningForm");
    pw.classList.add("warningForm");
  }
};

function checkSigninToken() {
  const token = localStorage.getItem("signinToken");
  if (token) {
    location.href = "../folder.html";
  }
}

checkSigninToken();
email.addEventListener("focusout", formFocusOut);
email.addEventListener("focusin", sign.removeWarningMsg);
pw.addEventListener("focusout", formFocusOut);
pw.addEventListener("focusin", sign.removeWarningMsg);
eyeIcon.addEventListener("click", sign.visible);
form.addEventListener("submit", submitForm);
