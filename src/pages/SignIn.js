import { Link } from 'react-router-dom';
import '../styles/signin.css';
import Logo from '../components/logo';
import KakaoImg from '../assets/kakaoLogin.png';
import GoogleImg from '../assets/googleLogin.png';
import { useState } from 'react';
import { getLogin } from '../api/api';
import { handleEmailChange, handlePasswordChange, handleIdFocusOut, handlePasswordFocusOut } from '../utils/common';
import Eyes from '../components/eyes';

function SignIn() {
    const LinkStyle = {
        textDecoration: 'none',
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isPasswordShowing, setIsPasswordShowing] = useState(true);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        getLogin({ email, password, setEmailError, setPasswordError });
    };

    return (
        <div className="signin-body">
            <div className="signin-container">
                <div className="signin-login">
                    <div className="signin-first-area">
                        <Logo />
                        <p className="signin-signup-text">
                            회원이 아니신가요?
                            <Link to="/sign-up" style={LinkStyle}>
                                <p className="signin-signup-go">회원 가입하기</p>
                            </Link>
                        </p>
                    </div>
                    <form onSubmit={handleLoginSubmit} className="signin-form">
                        <div className="signin-second-area">
                            <label className="signin-label">
                                <p>이메일</p>
                                <input
                                    className={emailError === '' ? 'signin-id' : 'signin-id active'}
                                    type="text"
                                    value={email}
                                    name="id"
                                    placeholder="이메일 입력"
                                    onChange={(e) => {
                                        handleEmailChange(e, setEmail);
                                    }}
                                    onBlur={(e) => {
                                        handleIdFocusOut(e, setEmailError);
                                    }}
                                />
                                <p className="signin-email-notice">{emailError}</p>
                            </label>
                            <label className="signin-label">
                                <p>비밀번호</p>
                                <input
                                    className={passwordError === '' ? 'signin-password' : 'signin-password active'}
                                    type={isPasswordShowing ? 'password' : 'text'}
                                    value={password}
                                    name="password"
                                    placeholder="비밀번호 입력"
                                    onChange={(e) => {
                                        handlePasswordChange(e, setPassword);
                                    }}
                                    onBlur={(e) => {
                                        handlePasswordFocusOut(e, setPasswordError);
                                    }}
                                />
                                <Eyes isShowing={isPasswordShowing} setIsShowing={setIsPasswordShowing} />
                                <p className="signin-password-notice">{passwordError}</p>
                            </label>
                        </div>
                        <button className="signin-login-btn">로그인</button>
                    </form>
                </div>
                <div className="signin-sns-login">
                    <p>소셜 로그인</p>
                    <div className="signin-sns-icon">
                        <a href="https://www.google.com/" className="signin-google-login">
                            <img src={GoogleImg} alt="구글 로그인" />
                        </a>
                        <a href="https://www.kakaocorp.com/page/" className="signin-kakao-login">
                            <img src={KakaoImg} alt="카카오 로그인" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
