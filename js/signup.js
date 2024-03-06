
import {auth} from "./auth.js"

// 회원가입 로직(유효성 검사 및 )
document.addEventListener("DOMContentLoaded", function () {

	auth.emailFocusEvent()
	auth.passwordFocusEvent()
	auth.IsDefaultAccount()
	auth.passwordFormatChecker()
	auth.passwordCheckFocusEvent()
	auth.signupSubmissionChecker()

});