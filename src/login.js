const emailInput = document.querySelector("#emailInput");
const emailError = document.querySelector("#email-error");
const pwInput = document.querySelector("#pwInput");
const pwError = document.querySelector("#pw-error");

// 이메일 input에 값이 없을 경우 + 유효성 검사
emailInput.addEventListener("focusout", function(){
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(emailInput.value.trim() === "") {
        emailError.textContent = "이메일을 입력해 주세요";
    } else {
        if(!emailPattern.test(emailInput.value)) {
            emailError.textContent = "올바른 이메일 주소가 아닙니다."
        }
    }
});

// 비밀번호 input에 값이 없을 경우
pwInput.addEventListener("focusout", function(){
    if(pwInput.value.trim() === "") {
        pwError.textContent = "비밀번호를 입력해주세요";
    }
})

