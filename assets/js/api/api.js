const api = "https://bootcamp-api.codeit.kr/api";

export const requestTest = async (email, password) => {
  try {
    const response = await fetch(`${api}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.ok) {
      console.log(200);
      window.location.href = "/folder.html";
    }

    if (!response.ok) {
      // 수정 필요
      const emailErrorMessage = document.querySelector(".email-error-message");
      const pwErrorMessage = document.querySelector(".pw-error-message");
      const inputEmail = document.querySelector("#input-email");
      const inputPassword = document.querySelector("#input-pw");

      inputEmail.classList.add("error-border");
      inputPassword.classList.add("error-border");
      emailErrorMessage.innerHTML = "이메일을 확인해 주세요.";
      pwErrorMessage.innerHTML = "비밀번호를 확인해 주세요.";
    }
  } catch (error) {}
};

// 이메일 중복 확인 409
export const emailTest = async (email) => {
  try {
    const response = await fetch(`${api}/check-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    if (response.ok) {
      window.location.href = "/folder.html";
    }

    if (response.status === 409) {
      alert(response.status);
      return false;
    }
  } catch (error) {
    alert(`에러가 발생했습니다`);
  }
};

// 유효한 회원가입
export const joinTest = async (email, password, passwordConfirm) => {
  try {
    const response = await fetch(`${api}/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
      }),
    });

    if (response.ok) {
      console.log(200);
      window.location.href = "/folder.html";
    }

    if (response.status === 409) {
      alert(response.status);
      return false;
    }
  } catch (error) {
    alert(`에러가 발생했습니다`);
  }
};
