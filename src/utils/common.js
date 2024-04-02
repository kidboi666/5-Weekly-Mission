import { CHECKEMAIL, CHECKPASSWORD } from '../constants/path';

export const handleEmailChange = (e, setEmail) => {
    setEmail(e.target.value);
};

export const handlePasswordChange = (e, setPassword) => {
    setPassword(e.target.value);
};

export const handleIdFocusOut = (e, setEmailError) => {
    const emailValue = e.target.value;
    if (emailValue === '') {
        setEmailError('이메일을 입력해주세요.');
    } else if (!CHECKEMAIL.test(emailValue)) {
        setEmailError('이메일 형식이 아닙니다.');
    } else {
        setEmailError('');
    }
};

export const handlePasswordFocusOut = (e, setPasswordError) => {
    const passwordValue = e.target.value;
    if (passwordValue === '') {
        setPasswordError('비밀번호를 입력해주세요.');
    } else if (!CHECKPASSWORD.test(passwordValue)) {
        setPasswordError('비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    } else {
        setPasswordError('');
    }
};
