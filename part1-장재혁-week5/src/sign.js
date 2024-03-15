const signModule = {
    // 유효성 검사 상수, 테스트 이메일
    EMAIL_CHECK : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PASSWORD_CHECK : /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
    TEST_EMAIL : 'test@codeit.com',
    TEST_PASSWORD : 'codeit101',

    // 이메일 유효성 검사 함수
    emailValidChecker : (email) => {
        return signModule.EMAIL_CHECK.test(email) === false
    },

    // 오류 메시지 추가 함수
    addWarningMessage : function (inputBox, message, messageType) {
        messageType.textContent = message;
        inputBox.classList.add('invalid'); 
    },
    
    // 인풋 박스 이벤트 리스너
    emailInputEvent : (emailInput, errorEmail) => {
        if(emailInput.value === ''){
            signModule.addWarningMessage(emailInput, '이메일을 입력해 주세요.', errorEmail) 
            return
        }
        if(!(signModule.emailValidChecker(emailInput.value))){
            signModule.addWarningMessage(emailInput, '올바른 이메일 주소가 아닙니다.', errorEmail)
            return
        }
    },

    // 키다운 에러메세지 초기화 이벤트 리스너
    removeWarningMessage : (inputBox, messageType) => {
        messageType.textContent = '';
        inputBox.classList.remove('invalid');
    },

    // 눈 버튼 이벤트 리스너
    eyeButtonEvent: (eyeButton) => {
        eyeButton.addEventListener('mousedown', () => {
            Array.from(eyeOffs).forEach(eyeOff => eyeOff.classList.add('seePassword'));
            passwordInput.setAttribute('type', 'text')
        });
        eyeButton.addEventListener('mouseup', () => {
            Array.from(eyeOffs).forEach(eyeOff => eyeOff.classList.remove('seePassword'));
            passwordInput.setAttribute('type', 'password')
        });
    }
}

export default signModule;