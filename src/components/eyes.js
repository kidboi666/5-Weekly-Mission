import React from 'react';
import styled from 'styled-components';
import eyesOffImg from '../assets/noeyes.svg';
import eyesOnImg from '../assets/eyes.svg';

const EyeIcon = styled.img`
    width: 16px;
    height: 16px;
    fill: #fff;
    position: absolute;
    margin-top: 47px;
    margin-left: 365px;
    cursor: pointer;
`;

function Eyes({ isShowing, setIsShowing }) {
    const handleShowPassword = () => {
        setIsShowing(!isShowing);
    };

    return (
        <>
            {isShowing ? (
                <EyeIcon
                    src={eyesOffImg}
                    alt="비밀번호 보기"
                    className="signin-eyes password-eyes"
                    onClick={handleShowPassword}
                />
            ) : (
                <EyeIcon
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
