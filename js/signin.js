// signin.js
const signinForm = document.querySelector('.signin__wrap form');
const signinEmailInput = document.querySelector('#signin__email');
const signinPasswordInput = document.querySelector('#signin__pw__input');
const signinButton = document.querySelector('.signin__wrap .btn_signin');

// 입력값 검증 함수
function validateInput(input) {
    const inputValue = input.value.trim();

    switch (input.id) {
        case 'signin__email':
            if (inputValue === '') {
                addInputMessage(input, '이메일을 입력해주세요.');
                return false;
            } else if (!validateEmail(inputValue)) {
                addInputMessage(input, '올바른 이메일 주소가 아닙니다.');
                return false;
            } else {
                removeInputMessage(input);
                return true;
            }
        case 'signin__pw__input':
            if (inputValue === '') {
                addInputMessage(input, '비밀번호를 입력해주세요.');
                return false;
            } else if (!validatePassword(inputValue)) {
                addInputMessage(input, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
                return false;
            } else {
                removeInputMessage(input);
                return true;
            }
        default:
            return true;
    }
}

// 입력값 변화 및 포커스 아웃 이벤트 핸들러 등록
signinEmailInput.addEventListener('blur', () => {
    validateInput(signinEmailInput);
});

signinPasswordInput.addEventListener('blur', () => {
    validateInput(signinPasswordInput);
});

// 폼 제출 이벤트 핸들러
signinForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateInput(signinEmailInput) || !validateInput(signinPasswordInput)) {
        return;
    }

    try {
        const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: signinEmailInput.value,
                password: signinPasswordInput.value
            })
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('accessToken', data.accessToken);
            window.location.href = '/folder.html';
        } else {
          addInputMessage(signinEmailInput, '이메일을 확인해 주세요');
          addInputMessage(signinPasswordInput, '비밀번호를 확인해 주세요');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
