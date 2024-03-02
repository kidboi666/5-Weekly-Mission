
// 로그인, 회원가입 공통로직(유효성 검사)
document.addEventListener("DOMContentLoaded", function () {
	const emailInput = document.getElementById("emailInput");
	const passwordInput = document.getElementById("passwordInput");
	const emailError = document.getElementById("emailError");
	const passwordError = document.getElementById("passwordError");

	emailInput.addEventListener("focusout", function () {  // focusout시 입력 형식 올바른지 검사
		if (!emailInput.value) {  // 이메일 넣지 않은 경우
			emailError.textContent = "이메일을 입력해 주세요.";
			emailInput.classList.remove('auth__input-border--default');
			emailInput.classList.add('auth__input-border--error');
		} else if (!/\S+@\S+\.\S+/.test(emailInput.value)) { // 이메일 형식에 맞지 않은 경우
			emailError.textContent = "올바른 이메일 주소가 아닙니다.";
			emailInput.classList.remove('auth__input-border--default');
			emailInput.classList.add('auth__input-border--error');
		} else {  // 올바른 형식의 입력
			emailError.textContent = "";
			emailInput.classList.remove('auth__input-border--error');
			emailInput.classList.add('auth__input-border--default');
		} 
	});

	emailInput.addEventListener("focusin", function () {  // focusin시 입력을 아예 안했던 상황이면 에러메시지 제거
		if (!emailInput.value) {  // 이메일 넣지 않은 경우
			emailError.textContent = "";
			emailInput.classList.remove('auth__input-border--error');
			emailInput.classList.add('auth__input-border--default');
		}
	});

	passwordInput.addEventListener("focusout", function () {  // focusout시 입력 형식 올바른지 검사
		if (!passwordInput.value) {  // 비밀번호를 입력 안 한 경우
			passwordError.textContent = "비밀번호를 입력해 주세요.";
			passwordInput.classList.remove('auth__input-border--default');
			passwordInput.classList.add('auth__input-border--error');
		} else {  // 올바른 형식의 입력
			passwordError.textContent = "";
			passwordInput.classList.remove('auth__input-border--error');
			passwordInput.classList.add('auth__input-border--default');
		}
	});

	passwordInput.addEventListener("focusin", function () {  // focusin시 입력을 아예 안했던 상황이면 에러메시지 제거
		if (!passwordInput.value) {  // 비밀번호를 입력 안 한 경우
			passwordError.textContent = "";
			passwordInput.classList.remove('auth__input-border--error');
			passwordInput.classList.add('auth__input-border--default');
		}

	});


});