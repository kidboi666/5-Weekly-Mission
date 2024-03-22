async function signIn(email, password) {
  const user = {
    email: email,
    password: password,
  };

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      console.log("Sign-in successful");
      location.href = "./folder.html"; // 로그인 성공 시 이동할 URL
    } else {
      // 서버에서 받은 오류 메시지 출력
      const errorMessage = await response.text();
      console.error("Sign-in failed:", errorMessage);
    }
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

const signform = document.querySelector(".sign-form");

signform.addEventListener("submit", function (event) {
  event.preventDefault(); // 폼 제출 방지
  const email = signform.querySelector(".email-input").value;
  const password = signform.querySelector(".password-input").value;
  signIn(email, password);
});
