document.addEventListener("DOMContentLoaded", function () {
	const emailInput = document.getElementById("emailInput");
	const passwordInput = document.getElementById("passwordInput");
	const emailError = document.getElementById("emailError");
	const passwordError = document.getElementById("passwordError");
	const loginForm = document.getElementById("loginForm");

	emailInput.addEventListener("focusin", function () {  // focusin시 입력을 아예 안했던 상황이면 에러메시지 제거
		if (!emailInput.value) {  // 이메일 넣지 않은 경우
			emailError.textContent = "";
			emailInput.classList.remove('input-border-error');
			emailInput.classList.add('input-border-default');
		}
	});

	passwordInput.addEventListener("focusin", function () {  // focusin시 입력을 아예 안했던 상황이면 에러메시지 제거
		if (!passwordInput.value) {  // 비밀번호를 입력 안 한 경우
			passwordError.textContent = "";
			passwordInput.classList.remove('input-border-error');
			passwordInput.classList.add('input-border-default');
		}
	});

	emailInput.addEventListener("focusout", function () {  // focusout시 입력 형식 올바른지 검사
		if (!emailInput.value) {  // 이메일 넣지 않은 경우
			emailError.textContent = "이메일을 입력해 주세요.";
			emailInput.classList.remove('input-border-default');
			emailInput.classList.add('input-border-error');
		} else if (!/\S+@\S+\.\S+/.test(emailInput.value)) { // 이메일 형식에 맞지 않은 경우
			emailError.textContent = "올바른 이메일 주소가 아닙니다.";
			emailInput.classList.remove('input-border-default');
			emailInput.classList.add('input-border-error');
		} else {  // 올바른 형식의 입력
			emailError.textContent = "";
			emailInput.classList.remove('input-border-error');
			emailInput.classList.add('input-border-default');
		}
	});

	passwordInput.addEventListener("focusout", function () {  // focusout시 입력 형식 올바른지 검사
		if (!passwordInput.value) {  // 비밀번호를 입력 안 한 경우
			passwordError.textContent = "비밀번호를 입력해 주세요.";
			passwordInput.classList.remove('input-border-default');
			passwordInput.classList.add('input-border-error');
		} else {  // 올바른 형식의 입력
			passwordError.textContent = "";
			passwordInput.classList.remove('input-border-error');
			passwordInput.classList.add('input-border-default');
		}
	});

	loginForm.addEventListener("submit", function (event) {  //폼 제출 시 로그인 시도 
		event.preventDefault(); // 폼 기본 제출 동작 방지

		const email = emailInput.value;
		const password = passwordInput.value;

		if (email === "test@codeit.com" && password === "codeit101") {  //로그인 성공
			window.location.href = "folder.html";
		} else {

			// 아이디 비번에 대해 각각 검사 (에러 원인 찾기)

			if (!emailInput.value) {  // 이메일 넣지 않은 경우
				emailError.textContent = "이메일을 입력해 주세요.";
				emailInput.classList.remove('input-border-default');
				emailInput.classList.add('input-border-error');
			} else if (!/\S+@\S+\.\S+/.test(emailInput.value)) { // 이메일 형식에 맞지 않은 경우
				emailError.textContent = "올바른 이메일 주소가 아닙니다.";
				emailInput.classList.remove('input-border-default');
				emailInput.classList.add('input-border-error');
			} else if (email !== "test@codeit.com") {  // 이메일이 틀린 경우
				emailError.textContent = "이메일을 확인해 주세요.";
				emailInput.classList.remove('input-border-default');
				emailInput.classList.add('input-border-error');
			}

			//비밀번호에 대한 유효성 검사
			if (!passwordInput.value) {  // 비밀번호를 입력 안 한 경우
				passwordError.textContent = "비밀번호를 입력해 주세요.";
				passwordInput.classList.remove('input-border-default');
				passwordInput.classList.add('input-border-error');
			} else if (password !== "codeit101") {  // 비밀번호가 틀린 경우
				passwordError.textContent = "비밀번호를 확인해 주세요.";
				passwordInput.classList.remove('input-border-default');
				passwordInput.classList.add('input-border-error');
			}

		}
	});
});