import React from "react";
import styles from "./SignUp.module.css";
import Image from "next/image";
import Link from "next/link";
import Input from "../Input/Input";

function SignUp() {
    return (
        <main className={styles.body}>
            <div className={styles.sign_container}>
                <div className={styles.logo_container}>
                    <Link href='/' className={styles.logo}>
                        <Image src='/assets/logo.svg' width={210} height={38} alt='logo' />
                    </Link>
                    <p className={styles.question_p}>
                        이미 회원이신가요?{" "}
                        <Link href='/signin'>
                            <span>로그인 하기</span>
                        </Link>
                    </p>
                </div>
                <div className={styles.input_container}>
                    <label htmlFor='email'>이메일</label>
                    <Input id='email' placeholder='이메일을 입력해 주세요' type='email' />
                </div>
                <div className={styles.input_container}>
                    <label htmlFor='password'>비밀번호</label>
                    <Input
                        id='password'
                        placeholder='영문, 숫자를 조합해 8자 이상 입력해 주세요.'
                        type='password'
                    />
                </div>
                <div className={styles.input_container}>
                    <label htmlFor='password'>비밀번호 확인</label>
                    <Input
                        id='password_check'
                        placeholder='비밀번호와 일치하는 값을 입력해 주세요.'
                        type='password'
                    />
                </div>
                <button className={`${styles.submit_btn} button`}>회원가입</button>
                <div className={styles.other_div}>
                    <p>다른 방식으로 가입하기</p>
                    <div className={styles.other_icons}>
                        <Link href='https://www.google.com/'>
                            <Image
                                src='/assets/google.svg'
                                width={42}
                                height={42}
                                alt='google_icon'
                            />
                        </Link>
                        <Link href='https://www.kakaocorp.com/page/'>
                            <Image
                                src='/assets/kakaoLogin.svg'
                                width={42}
                                height={42}
                                alt='kakao_login_icon'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SignUp;
