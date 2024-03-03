
export const auth = {

	emailInput: document.getElementById("emailInput"),
	passwordInput: document.getElementById("passwordInput"),
	emailError: document.getElementById("emailError"),
	passwordError: document.getElementById("passwordError"),

	toggleErr: function (inputField, errField, message) {
		errField.textContent = message;
		inputField.classList.remove('auth__input-border--default');
		inputField.classList.add('auth__input-border--error');
	},

	toggleDefault: function (inputField, errField) {
		errField.textContent = "";
		inputField.classList.remove('auth__input-border--error');
		inputField.classList.add('auth__input-border--default');
	},

	isEmpty: function (inputField) {
		if (!inputField.value) {
			return true;
		} else {
			return false;
		}
	},

	checkEmailFormat: function () {
		const { emailInput, emailError } = this;
		emailInput.addEventListener("focusout", () => {  // focusout시 입력 형식 올바른지 검사
			if (this.isEmpty(emailInput)) {  // 이메일 넣지 않은 경우
				this.toggleErr(emailInput, emailError, "이메일을 입력해 주세요.");
			} else if (!/\S+@\S+\.\S+/.test(emailInput.value)) { // 이메일 형식에 맞지 않은 경우
				this.toggleErr(emailInput, emailError, "올바른 이메일 주소가 아닙니다.");
			} else {  // 올바른 형식의 입력
				this.toggleDefault(emailInput, emailError);
			}
		});
		emailInput.addEventListener("focusin", () => {  // focusin시 입력을 아예 안했던 상황이면 에러메시지 제거
			if (this.isEmpty(emailInput)) {  // 이메일 넣지 않은 경우
				this.toggleDefault(emailInput, emailError);
			}
		});
	},

	checkPasswordEmpty: function() {
		const { passwordInput, passwordError } = this;
		passwordInput.addEventListener("focusout", () => {  // focusout시 입력 형식 올바른지 검사
			if (this.isEmpty(passwordInput)) {  // 비밀번호를 입력 안 한 경우
				this.toggleErr(passwordInput, passwordError, "비밀번호를 입력해 주세요.");
			} else {  // 올바른 형식의 입력
				this.toggleDefault(passwordInput, passwordError);
			}
		});
		passwordInput.addEventListener("focusin", () => {  // focusin시 입력을 아예 안했던 상황이면 에러메시지 제거
			if (this.isEmpty(passwordInput)) {  // 비밀번호를 입력 안 한 경우
				this.toggleDefault(passwordInput, passwordError);
			}
		});
	}

}
