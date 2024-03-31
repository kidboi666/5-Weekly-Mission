import { Link } from 'react-router-dom';
import styles from '../styles/signin.module.css'; // 스타일 파일 import
import Logo from '../components/Logo';
import KakaoImg from '../assets/kakaoLogin.png';
import GoogleImg from '../assets/googleLogin.png';
import EyesImg from '../assets/eyes.svg';
import EyesNoImg from '../assets/noeyes.svg';
import { useState } from 'react';
import { GetLogin } from '../api/login';
import { handleEmailChange, handlePasswordChange, handleIdFocusOut, handlePasswordFocusOut } from '../utils/common';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(true);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        GetLogin({ email, password, setEmailError, setPasswordError });
    };

    const handleShowPassword = (e) => {
        setShowPassword(!showPassword); // 상태를 반전시킴
    };

    return (
        <div className={styles.body}>
            <div className={styles.signinContainer}>
                <div className={styles.login}>
                    <div className={styles.firstArea}>
                        <Logo />
                        <p className={styles.signupText}>
                            회원이 아니신가요?
                            <Link to="/sign-up" style={{ textDecoration: 'none' }}>
                                <p className={styles.signupBtn}>회원 가입하기</p>
                            </Link>
                        </p>
                    </div>
                    <form onSubmit={handleLoginSubmit}>
                        <div className={styles.secondArea}>
                            <label className={styles.label}>
                                <p>이메일</p>
                                <input
                                    className={`${styles.id} ${emailError !== '' && styles.active}`}
                                    type="text"
                                    name="id"
                                    placeholder="이메일 입력"
                                    onChange={(e) => handleEmailChange(e, setEmail)}
                                    onBlur={(e) => handleIdFocusOut(e, setEmailError)}
                                />
                                <p className={styles.emailNotice}>{emailError}</p>
                            </label>
                            <label className={styles.label}>
                                <p>비밀번호</p>
                                <input
                                    className={`${styles.password} ${passwordError !== '' && styles.active}`}
                                    type={showPassword ? 'password' : 'text'}
                                    name="password"
                                    placeholder="비밀번호 입력"
                                    onChange={(e) => handlePasswordChange(e, setPassword)}
                                    onBlur={(e) => handlePasswordFocusOut(e, setPasswordError)}
                                />
                                <img
                                    src={showPassword ? EyesNoImg : EyesImg}
                                    alt="비밀번호 보기"
                                    className={styles.eyes}
                                    onClick={handleShowPassword}
                                />
                                <p className={styles.passwordNotice}>{passwordError}</p>
                            </label>
                        </div>
                        <button className={styles.loginBtn}>로그인</button>
                    </form>
                </div>
                <div className={styles.snsLogin}>
                    <p>소셜 로그인</p>
                    <div className={styles.snsIcon}>
                        <a href="https://www.google.com/" className={styles.googleLogin}>
                            <img src={GoogleImg} alt="구글 로그인" />
                        </a>
                        <a href="https://www.kakaocorp.com/page/" className={styles.kakaoLogin}>
                            <img src={KakaoImg} alt="카카오 로그인" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
