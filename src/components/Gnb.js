import React, { useEffect, useState } from 'react';
import Logo from './logo';
import CTA from './cta';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.svg';
import { getProfile } from '../api/api';
import '../styles/gnb.css';

function GNB() {
    const [data, setData] = useState();

    const LinkStyle = {
        textDecoration: 'none',
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getProfile();
                setData(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <header>
            <div className="header-container">
                <Link to="/">
                    <Logo />
                </Link>
                {data ? (
                    <div className="header-profile">
                        <img src={profileImg} alt="프로필" />
                        <p>{data.email}</p>
                    </div>
                ) : (
                    <Link to="/sign-in" style={LinkStyle}>
                        <CTA text={'로그인'} />
                    </Link>
                )}
            </div>
        </header>
    );
}

export default GNB;
