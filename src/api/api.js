import { API_PATH } from '../constants/path';

// 회원가입
export const attemptSignup = async ({ email, password, setEmailError, setPasswordError }) => {
    try {
        const response = await fetch(`${API_PATH}/api/sign-up`, {
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

// 이메일 중복확인

export const checkEmailDuplication = async ({ email, password, setEmailError, setPasswordError }) => {
    try {
        const response = await fetch(`${API_PATH}/api/check-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
            }),
        });

        if (!response.ok) {
            throw new Error('이미 사용중인 이메일입니다.');
        }
        attemptSignup({ email, password, setEmailError, setPasswordError });
    } catch (error) {
        setEmailError('이미 사용중인 이메일입니다.');
    }
};

// 로그인
export const getLogin = async ({ email, password, setEmailError, setPasswordError }) => {
    try {
        const response = await fetch(`${API_PATH}/api/sign-in`, {
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
            throw new Error('로그인 실패');
        }

        const data = await response.json();
        localStorage.setItem('accessToken', data.data.accessToken);
    } catch (error) {
        console.error(error);
        setEmailError('이메일을 확인해주세요.');
        setPasswordError('비밀번호를 확인해주세요.');
    }
};

// 프로필 불러오기
export const getProfile = async () => {
    try {
        const response = await fetch(`${API_PATH}/api/sample/user`);

        if (!response.ok) {
            throw new Error('회원 불러오기 실패');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

// 카드 데이터 불러오기
export const getCardData = async () => {
    try {
        const response = await fetch(`${API_PATH}/api/sample/folder`);

        if (!response.ok) {
            throw new Error('데이터 불러오기 실패');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
