import { APIPATH } from '../constants/path';
import { attemptSignup } from './signup';

export const checkEmailDuplication = async ({ email, password, setEmailError, setPasswordError }) => {
    try {
        const response = await fetch(`${APIPATH}/api/check-email`, {
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
