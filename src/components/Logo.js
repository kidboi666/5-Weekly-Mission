import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.svg';

function Logo() {
    return (
        <div className="logo-component">
            <Link to="/">
                <img src={logoImg} alt="로고 이미지" />
            </Link>
        </div>
    );
}

export default Logo;
