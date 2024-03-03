import {auth} from "./auth.js"

document.addEventListener("DOMContentLoaded", function () {

	auth.emailFocusEvent();
	auth.passwordFocusEvent();
	auth.loginSubmissionChecker();
	
});