import { Link } from 'react-router-dom';
import '../styles/signup.css';
import Logo from '../components/Logo';
import KakaoImg from '../assets/kakaoLogin.png';
import GoogleImg from '../assets/googleLogin.png';
import EyesImg from '../assets/eyes.svg';
import EyesNoImg from '../assets/noeyes.svg';
import { useState } from 'react';
import { handleEmailChange, handlePasswordChange, handleIdFocusOut, handlePasswordFocusOut } from '../utils/common';
import { checkEmailDuplication } from '../api/emailduplication';

function SignUp() {
    const LinkStyle = {
        textDecoration: 'none',
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verify, setVerify] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [verifyError, setVerifyError] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [showVerify, setShowVerify] = useState(true);

    const handleVerifyChange = (e) => {
        setVerify(e.target.value);
    };

    const handleVerifyFocusOut = () => {
        if (password !== verify) {
            setVerifyError('비밀번호가 일치하지 않습니다.');
        } else {
            setVerifyError('');
        }
    };

    const handleShowPassword = (e) => {
        setShowPassword(!showPassword);
    };

    const handleShowVerify = (e) => {
        setShowVerify(!showVerify);
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        if (password === verify) {
            checkEmailDuplication({ email, password, setEmailError, setPasswordError });
        } else {
            setVerifyError('비밀번호가 일치하지 않습니다.');
        }
    };

    return (
        <div className="signup-body">
            <div className="signup-container">
                <div className="signup">
                    <div className="signup-first-area">
                        <Logo />
                        <p className="signup-text">
                            이미 회원이신가요?
                            <Link to="/sign-in" style={LinkStyle}>
                                <p className="signup-signin-go">로그인 하기</p>
                            </Link>
                        </p>
                    </div>
                    <form onSubmit={handleSignupSubmit}>
                        <div className="signup-second-area">
                            <label className="signup-label">
                                <p>이메일</p>
                                <input
                                    className={emailError === '' ? 'signup-id' : 'signup-id active'}
                                    type="text"
                                    name="id"
                                    placeholder="이메일 입력"
                                    onChange={(e) => {
                                        handleEmailChange(e, setEmail);
                                    }}
                                    onBlur={(e) => {
                                        handleIdFocusOut(e, setEmailError);
                                    }}
                                />
                                <p className="signup-email-notice">{emailError}</p>
                            </label>
                            <label className="signup-label">
                                <p>비밀번호</p>
                                <input
                                    className={passwordError === '' ? 'signup-password' : 'signup-password active'}
                                    type={showPassword ? 'password' : 'text'}
                                    name="password"
                                    placeholder="비밀번호 입력"
                                    onChange={(e) => {
                                        handlePasswordChange(e, setPassword);
                                    }}
                                    onBlur={(e) => {
                                        handlePasswordFocusOut(e, setPasswordError);
                                    }}
                                />
                                <img
                                    src={showPassword ? EyesNoImg : EyesImg}
                                    className="signup-eyes password-eyes"
                                    alt="비밀번호"
                                    onClick={handleShowPassword}
                                />
                                <p className="signup-password-notice">{passwordError}</p>
                            </label>
                            <label className="signup-label">
                                <p>비밀번호 확인</p>
                                <input
                                    className={
                                        verifyError === '' ? 'signup-verify-password' : 'signup-verify-password active'
                                    }
                                    type={showVerify ? 'password' : 'text'}
                                    name="passwordCheck"
                                    placeholder="비밀번호 확인"
                                    onChange={handleVerifyChange}
                                    onBlur={handleVerifyFocusOut}
                                />
                                <img
                                    src={showVerify ? EyesNoImg : EyesImg}
                                    className="signup-eyes signup-verify-eyes"
                                    alt="비밀번호 확인"
                                    onClick={handleShowVerify}
                                />
                                <p className="signup-verify-notice">{verifyError}</p>
                            </label>
                        </div>
                        <button className="signup-btn">회원가입</button>
                    </form>
                </div>
                <div className="signup-sns-signup">
                    <p>다른 방식으로 가입하기</p>
                    <div className="signup-icon">
                        <a href="https://www.google.com/" className="signup-google-signup">
                            <img src={GoogleImg} alt="구글 회원가입" />
                        </a>
                        <a href="https://www.kakaocorp.com/page/" className="signup-kakao-signup">
                            <img src={KakaoImg} alt="카카오 회원가입" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
