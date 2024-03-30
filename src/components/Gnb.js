import React, { useState } from 'react';
import Logo from './Logo';
import CTA from './Cta';
import { Link } from 'react-router-dom';

function GNB() {
    const [headerState, setHeaderState] = useState('default');

    const LinkStyle = {
        textDecoration: 'none',
    };

    const headerStyle = {
        display: 'flex',
        padding: '20px 200px',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        alignSelf: 'stretch',
        backgroundColor: 'var(--gray-color-lightest, #f0f6ff)',
        position: 'sticky',
        top: '0',
    };

    const headerContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
    };

    return (
        <>
            <header className="header" style={headerStyle}>
                <div className="header-container" style={headerContainerStyle}>
                    <Link to="/">
                        <Logo />
                    </Link>
                    {headerState === 'default' ? (
                        <Link to="/sign-in" style={LinkStyle}>
                            <CTA text={'로그인'} />
                        </Link>
                    ) : (
                        <div>나는 빡빡이다.</div>
                    )}
                </div>
            </header>
        </>
    );
}

export default GNB;
