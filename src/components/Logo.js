import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.svg';

function Logo() {
    return (
        <Link to="/">
            <img src={logoImg} alt="로고 이미지" />
        </Link>
    );
}

export default Logo;
