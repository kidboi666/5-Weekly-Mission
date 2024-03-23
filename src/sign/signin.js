const TEST_USER = {
  email: "test@codeit.com",
  password: "sprint101",
};

// 이메일 검사
function validateEmail(email) {
  const validate = /\S+@\S+\.\S+/;
  return validate.test(email);
}

// 이메일 및 비밀번호 검사 함수
function hasInput(inputValue, errorElement, errorMessage) {
  const trimmedValue = inputValue.trim();
  if (!trimmedValue) {
    errorElement.textContent = errorMessage;
    return false;
  }

  errorElement.textContent = "";
  return true;
}

// 이메일 검사
document.getElementById("email").addEventListener("focusout", function () {
  const email = this.value.trim();
  const emailError = document.getElementById("email_error");
  if (!hasInput(email, emailError, "이메일을 입력해 주세요.")) {
    return;
  }

  if (!validateEmail(email)) {
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    return;
  }
});

// 비밀번호 검사
document.getElementById("password").addEventListener("focusout", function () {
  const password = this.value.trim();
  const passwordError = document.getElementById("password_error");
  hasInput(password, passwordError, "비밀번호를 입력해 주세요.");
});

// submit
// 로그인 fetch
function signIn(email, password) {
  return fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
}

function submitUser() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // fetch 요청 보내기
  signIn(email, password)
    .then((response) => {
      if (response.ok) {
        if (email === TEST_USER.email && password === TEST_USER.password) {
          location.href = "../folder.html";
        } else {
          throw new Error("로그인에 실패했습니다.");
        }
      } else {
        // 응답이 실패했을 경우
        const emailError = document.getElementById("email_error");
        const passwordError = document.getElementById("password_error");

        emailError.textContent = "이메일을 확인해 주세요.";
        passwordError.textContent = "비밀번호를 확인해 주세요.";
      }
    })
    .catch((error) => {
      console.error("Error : ", error);
    });
}

// 로그인 성공 시 처리
function handleLoginSuccess(response) {
  // 토큰 추출
  const accessToken = response.data.accessToken;

  // 로컬 스토리지에 액세스 토큰 저장
  window.localStorage.setItem("accessToken", accessToken);

  location.href = "../folder.html";
}

// 페이지 로드 시 실행
document.addEventListener("DOMContentLoaded", () => {
  // 로그인 페이지에 접근한 경우 로컬 스토리지에서 토큰 확인
  const accessToken = window.localStorage.getItem("accessToken");

  // 토큰이 존재하는 경우
  if (accessToken) {
    location.href = "../folder.html";
  }

  document.querySelector(".submit_btn").addEventListener("click", submitUser);
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      submitUser();
    }
  });
});

// password eye toggle
const eyeToggle = document.getElementById("eye_toggle");
const passwordInput = document.getElementById("password");

eyeToggle.addEventListener("click", function () {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  if (type === "text") {
    eyeToggle.classList.add("on");
  } else {
    eyeToggle.classList.remove("on");
  }
});
