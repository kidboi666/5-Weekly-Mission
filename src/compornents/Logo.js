import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../imgs/logo.svg';

function Logo() {
    return (
        <div className="logo-compornent">
            <Link to="/">
                <img src={LogoImg} alt="로고 이미지" />
            </Link>
        </div>
    );
}

export default Logo;
