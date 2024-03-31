import { APIPATH } from '../constants/path';

export const attemptSignup = async ({ email, password, setEmailError, setPasswordError }) => {
    try {
        const response = await fetch(`${APIPATH}/api/sign-up`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        if (!response.ok) {
            throw new Error('회원가입 실패');
        }

        const data = await response.json();
        localStorage.setItem('accessToken', data.data.accessToken);
    } catch (error) {
        console.error(error);
        setEmailError('이메일을 확인해주세요.');
        setPasswordError('비밀번호를 확인해주세요.');
    }
};
