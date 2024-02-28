
// 회원가입 로직(유효성 검사 및 )
document.addEventListener("DOMContentLoaded", function () {
	const emailInput = document.getElementById("emailInput");
	const passwordInput = document.getElementById("passwordInput");
	const emailError = document.getElementById("emailError");
	const passwordError = document.getElementById("passwordError");
	const passwordCheck = document.getElementById("passwordCheck");
	const signupForm = document.getElementById("signupForm");
	const passwordCheckError = document.getElementById("passwordCheckError");
	

	emailInput.addEventListener("focusout", function () {  // focusout시 입력 형식 올바른지 검사
		if (emailInput.value === "test@codeit.com") {  //이미 존재하는 아이디
			emailError.textContent = "이미 사용 중인 이메일입니다.";
			emailInput.classList.remove('auth__input-border--default');
			emailInput.classList.add('auth__input-border--error');
		}
	});

	passwordInput.addEventListener("focusout", function () {

		const hasLetters = /[a-zA-Z]/.test(passwordInput.value);  // 문자열이 없을 경우(영문이 조합에 없음) -> 숫자만 있다
		const hasNumbers = /\d/.test(passwordInput.value);  // 숫자가 없을 경우(숫자가 조합에 없음) -> 문자열만 있다
		const isLongEnough = passwordInput.value.length >= 8;  //  값이 8자 미만 
	
		// 비밀번호 검증 로직 
		if ((!isLongEnough || !hasLetters || !hasNumbers) && (passwordInput.value)) {
			// 조건을 충족하지 못하는 경우 에러 메시지 표시
			passwordError.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
			passwordInput.classList.remove('auth__input-border--default');
			passwordInput.classList.add('auth__input-border--error');
		}

	});

    passwordCheck.addEventListener("focusout", function () {  // focusout시 입력 형식 올바른지 검사
		if (!passwordInput.value) {  // 비밀번호를 입력 안 한 경우
			passwordCheckError.textContent = "비밀번호를 입력해 주세요.";
			passwordCheck.classList.remove('auth__input-border--default');
			passwordCheck.classList.add('auth__input-border--error');
		} else {  // 올바른 형식의 입력
			passwordCheckError.textContent = "";
			passwordCheck.classList.remove('auth__input-border--error');
			passwordCheck.classList.add('auth__input-border--default');
		}
	});

	passwordCheck.addEventListener("focusin", function () {  // focusin시 입력을 아예 안했던 상황이면 에러메시지 제거
		if (!passwordInput.value) {  // 비밀번호를 입력 안 한 경우
			passwordCheckError.textContent = "";
			passwordCheck.classList.remove('auth__input-border--error');
			passwordCheck.classList.add('auth__input-border--default');
		}

	});

	signupForm.addEventListener("submit", function (event) {  //폼 제출 시 로그인 시도 
		event.preventDefault(); // 폼 기본 제출 동작 방지
		const hasLetters = /[a-zA-Z]/.test(passwordInput.value);  // 문자열이 없을 경우(영문이 조합에 없음) -> 숫자만 있다
		const hasNumbers = /\d/.test(passwordInput.value);  // 숫자가 없을 경우(숫자가 조합에 없음) -> 문자열만 있다
		const isLongEnough = passwordInput.value.length >= 8;  //  값이 8자 미만 
		var isValid = 1;  // 회원가입에 유효한 입력인지 검사 -> 이게 마지막에 1이면 제출 성공 아니면 실패

		if (!emailInput.value) {  // 이메일 넣지 않은 경우
			emailError.textContent = "이메일을 입력해 주세요.";
			emailInput.classList.remove('auth__input-border--default');
			emailInput.classList.add('auth__input-border--error');
			isValid = 0
		} else if (!/\S+@\S+\.\S+/.test(emailInput.value)) { // 이메일 형식에 맞지 않은 경우
			emailError.textContent = "올바른 이메일 주소가 아닙니다.";
			emailInput.classList.remove('auth__input-border--default');
			emailInput.classList.add('auth__input-border--error');
			isValid = 0
		} else if (emailInput.value === "test@codeit.com") {  //이미 존재하는 아이디
			emailError.textContent = "이미 사용 중인 이메일입니다.";
			emailInput.classList.remove('auth__input-border--default');
			emailInput.classList.add('auth__input-border--error');
			isValid = 0
		}

		// 비밀번호 검증 로직 
		if (!passwordInput.value) {  // 비밀번호를 입력 안 한 경우
			passwordError.textContent = "비밀번호를 입력해 주세요.";
			passwordInput.classList.remove('auth__input-border--default');
			passwordInput.classList.add('auth__input-border--error');
			isValid = 0
		} else if ((!isLongEnough || !hasLetters || !hasNumbers)) {
			// 조건을 충족하지 못하는 경우 에러 메시지 표시
			passwordError.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
			passwordInput.classList.remove('auth__input-border--default');
			passwordInput.classList.add('auth__input-border--error');
			isValid = 0
		}

		if(passwordCheck.value !== passwordInput.value){
			passwordCheckError.textContent = "비밀번호가 일치하지 않아요.";
			passwordCheck.classList.remove('auth__input-border--default');
			passwordCheck.classList.add('auth__input-border--error');
			isValid = 0
		}

		if (isValid === 1){ // isValid가 1일 때, 즉 오차가 없을 시 -> 폼 제출 성공
			window.location.href = "folder.html";
		}
	});



});