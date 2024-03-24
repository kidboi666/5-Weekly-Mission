const input = document.querySelector(".sign-input-email");
const emailError = document.querySelector(".email-error");
const input2 = document.querySelector(".sign-input-password");
const pwError = document.querySelector(".pw-error");
const input3 = document.querySelector(".sign-input-password-check");
const pwCheckError = document.querySelector(".pw-check-error");
const form = document.querySelector(".sign-form");

input.addEventListener("focusout", async function (e) {
  const isDuplicate = await emailDuplicateCheck();

  if (!e.target.value) {
    emailError.innerHTML = "이메일을 입력해주세요.";
    emailError.style.display = "block";
    e.target.style.border = "1px solid #FF5B56";
  } else if (emailCheck(e.target.value) === false) {
    emailError.innerHTML = "올바른 이메일 주소가 아닙니다.";
    emailError.style.display = "block";
    e.target.style.border = "1px solid #FF5B56";
  } else if (isDuplicate) {
    emailError.innerHTML = "이미 사용 중인 이메일입니다.";
    emailError.style.display = "block";
    e.target.style.border = "1px solid #FF5B56";
  } else {
    emailError.innerHTML = "";
    emailError.style.display = "none";
    e.target.style.border = "1px solid #CCD5E3";
  }
});

function emailCheck(email_address) {
  email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (!email_regex.test(email_address)) {
    return false;
  } else {
    return true;
  }
}

input2.addEventListener("focusout", function (e) {
  let regPass = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  if (!regPass.test(input2.value)) {
    pwError.innerHTML = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    pwError.style.display = "block";
    input2.style.border = "1px solid #FF5B56";
  } else {
    pwError.innerHTML = "";
    pwError.style.display = "none";
    input2.style.border = "1px solid #CCD5E3";
  }
});

input3.addEventListener("focusout", function (e) {
  if (input2.value !== input3.value) {
    pwCheckError.innerHTML = "비밀번호가 일치하지 않아요.";
    pwCheckError.style.display = "block";
    input3.style.border = "1px solid #FF5B56";
  } else {
    pwCheckError.innerHTML = "";
    pwCheckError.style.display = "none";
    input3.style.border = "1px solid #CCD5E3";
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    emailError.innerHTML === "" &&
    pwError.innerHTML === "" &&
    pwCheckError.innerHTML === ""
  ) {
    window.location.href = "/folder.html";
  }
});

async function emailDuplicateCheck() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/check-email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: input.value,
      }),
    }
  );

  return response.status === 200 ? false : true;
}
