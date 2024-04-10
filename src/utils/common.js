import { CHECK_EMAIL, CHECK_PASSWORD } from '../constants/path';

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
    } else if (!CHECK_EMAIL.test(emailValue)) {
        setEmailError('이메일 형식이 아닙니다.');
    } else {
        setEmailError('');
    }
};

export const handlePasswordFocusOut = (e, setPasswordError) => {
    const passwordValue = e.target.value;
    if (passwordValue === '') {
        setPasswordError('비밀번호를 입력해주세요.');
    } else if (!CHECK_PASSWORD.test(passwordValue)) {
        setPasswordError('비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    } else {
        setPasswordError('');
    }
};

export const getTimeDifference = (createdAt) => {
    const currentTime = new Date();
    const createdTime = new Date(createdAt);
    const seconds = Math.floor((currentTime - createdTime) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 120) {
        return '1 minute ago';
    } else if (minutes < 60) {
        return `${minutes} minutes ago`;
    } else if (hours < 2) {
        return '1 hour ago';
    } else if (hours < 24) {
        return `${hours} hours ago`;
    } else if (days < 2) {
        return '1 day ago';
    } else if (days <= 30) {
        return `${days} days ago`;
    } else if (days < 365) {
        if (months <= 1) {
            return '1 month ago';
        } else {
            return `${months} months ago`;
        }
    } else if (years === 1) {
        return '1 year ago';
    } else {
        const flooredYears = Math.floor(months / 12);
        return `${flooredYears} years ago`;
    }
};

export const formatDate = (value) => {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`;
};
