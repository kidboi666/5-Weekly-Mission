// signup.js
const signupForm = document.querySelector('.signup__wrap form');
const signupEmailInput = document.querySelector('#form__email');
const signupPasswordInput = document.querySelector('#form__pw');
const signupPasswordConfirmInput = document.querySelector('#form__pw__confirm');
const signupButton = document.querySelector('.signup__wrap .btn_signup');

// 이메일 중복 확인 함수
async function checkEmailAvailability(email) {
    try {
        const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        });

      return response
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}

// 입력값 검증 함수
function validateInput(input) {
    const inputValue = input.value.trim();

    switch (input.id) {
        case 'form__email':
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
        case 'form__pw':
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
        case 'form__pw__confirm':
            const password = signupPasswordInput.value.trim();
            if (inputValue === '') {
                addInputMessage(input, '비밀번호를 다시 입력해주세요.');
                return false;
            } else if (inputValue !== password) {
                addInputMessage(input, '비밀번호가 일치하지 않아요.');
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
signupEmailInput.addEventListener('blur', async () => {
    if (!validateInput(signupEmailInput)) return;

    const emailAvailable = await checkEmailAvailability(signupEmailInput.value);
    if (!emailAvailable.ok) {
        addInputMessage(signupEmailInput, '이미 사용 중인 이메일입니다.');
    }
});

signupPasswordInput.addEventListener('blur', () => {
  console.log('signupPasswordInput',validateInput(signupPasswordInput))
    validateInput(signupPasswordInput);
});

signupPasswordConfirmInput.addEventListener('blur', () => {
  console.log('signupPasswordConfirmInput', validateInput(signupPasswordConfirmInput))
    validateInput(signupPasswordConfirmInput);
});

// 폼 제출 이벤트 핸들러
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateInput(signupEmailInput) || !validateInput(signupPasswordInput) || !validateInput(signupPasswordConfirmInput)) {
        return;
    }

    const emailAvailable = await checkEmailAvailability(signupEmailInput.value);
    if (!emailAvailable.ok) {
        addInputMessage(signupEmailInput, '이미 사용 중인 이메일입니다.');
        return;
    }

    try {
        const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: signupEmailInput.value,
                password: signupPasswordInput.value
            })
        });
        console.log(response.accessToken)
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('accessToken', data.accessToken);
          window.location.href = '/folder.html';
            
        } else {
            alert('회원가입에 실패했습니다.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
