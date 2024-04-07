import React from 'react';
import eyesOffImg from '../assets/noeyes.svg';
import eyesOnImg from '../assets/eyes.svg';

function Eyes({ isShowing, setIsShowing }) {
    const handleShowPassword = (e) => {
        setIsShowing(!isShowing);
    };

    return (
        <>
            {isShowing ? (
                <img
                    src={eyesOffImg}
                    alt="비밀번호 보기"
                    className="signin-eyes password-eyes"
                    onClick={handleShowPassword}
                />
            ) : (
                <img
                    src={eyesOnImg}
                    alt="비밀번호 보기"
                    className="signin-eyes password-eyes"
                    onClick={handleShowPassword}
                />
            )}
        </>
    );
}

export default Eyes;
