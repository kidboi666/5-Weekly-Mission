// 이메일, 비밀번호 에러 메시지 보내기
const inputEmail = document.querySelector("#input-email");
const emailError = document.querySelector("#email-error-massage");
const inputPw = document.querySelector("#input-pw");
const pwError = document.querySelector("#pw-error-massage")

// 이메일
inputEmail.addEventListener("focusout", function() {
    var emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(inputEmail.value === "") {
        emailError.textContent="이메일을 입력해 주세요"
    }  else {
        emailError.textContent ="";
    };

    if(!emailValid.test(inputEmail.value)) {
        emailError.textContent = "올바른 이메일 주소가 아닙니다."
    } else {
        emailError.textContent ="";
    };
});

// 비밀번호
pwError.addEventListener("focsout", function() {
    if(inputPw.value === "") {
        pwError.textContent = "비밀번호를 입력해 주세요"
    } else {
        pwError.textContent = "";
    }
})


// 올바른 정보 입력시 페이지 이동
const emailInfo = "test@codeint.com"
const pwInfo = "codeit 101";

if(inputEmail == emailInfo && inputPw == pwInfo) {
    location.href = "/foler"
} else {
    emailError.textContent = "이메일을 확인해 주세요"
    pwError.textContent = "비밀번호를 확인해 주세요"
}
