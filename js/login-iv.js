
import {auth} from "./auth.js"

document.addEventListener("DOMContentLoaded", function () {

	auth.emailFocusEvent(); // 이메일 영역 focus in, focus out 이벤트
	auth.passwordFocusEvent(); // 패스워드 영역 focus in, focus out 이벤트
	auth.loginSubmissionChecker();
	
});