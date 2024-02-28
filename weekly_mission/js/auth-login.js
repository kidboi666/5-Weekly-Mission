
document.addEventListener("DOMContentLoaded", function () {
	const emailInput = document.getElementById("emailInput");
	const passwordInput = document.getElementById("passwordInput");
	const emailError = document.getElementById("emailError");
	const passwordError = document.getElementById("passwordError");
	const loginForm = document.getElementById("loginForm");

	loginForm.addEventListener("submit", function (event) {  //폼 제출 시 로그인 시도 
		event.preventDefault(); // 폼 기본 제출 동작 방지

		if (emailInput.value === "test@codeit.com" && passwordInput.value === "codeit101") {  //로그인 성공
			window.location.href = "folder.html";
		} else {

			// 아이디 비번에 대해 각각 검사 (에러 원인 찾기)

			if (!emailInput.value) {  // 이메일 넣지 않은 경우
				emailError.textContent = "이메일을 입력해 주세요.";
				emailInput.classList.remove('auth__input-border--default');
				emailInput.classList.add('auth__input-border--error');
			} else if (!/\S+@\S+\.\S+/.test(emailInput.value)) { // 이메일 형식에 맞지 않은 경우
				emailError.textContent = "올바른 이메일 주소가 아닙니다.";
				emailInput.classList.remove('auth__input-border--default');
				emailInput.classList.add('auth__input-border--error');
			} else if (emailInput.value !== "test@codeit.com") {  // 이메일 틀림
				emailError.textContent = "이메일을 확인해 주세요.";
				emailInput.classList.remove('auth__input-border--default');
				emailInput.classList.add('auth__input-border--error');
			}

			if (!passwordInput.value) {  // 비밀번호를 입력 안 한 경우
				passwordError.textContent = "비밀번호를 입력해 주세요.";
				passwordInput.classList.remove('auth__input-border--default');
				passwordInput.classList.add('auth__input-border--error');
			} else if (passwordInput.value !== "codeit101") {  // 비밀번호 틀림
				passwordError.textContent = "비밀번호를 확인해 주세요.";
				passwordInput.classList.remove('auth__input-border--default');
				passwordInput.classList.add('auth__input-border--error');
			}
			
		}
	});
});