
import {auth} from "./auth.js"

// 회원가입 로직(유효성 검사 및 )
document.addEventListener("DOMContentLoaded", function () {
	auth.emailFocusEvent() // 이메일 영역 focus in, focus out 이벤트
	auth.passwordFocusEvent() // 패스워드 영역 focus in, focus out 이벤트
	auth.IsDefaultAccount() // 
	auth.passwordFormatChecker()
	auth.passwordCheckFocusEvent()
	auth.signupSubmissionChecker()
});