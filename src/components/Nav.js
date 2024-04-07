import Cta from './Cta'
import UserContext, { useUser } from '../contexts/UserContext';
import styled from 'styled-components';
import { useContext } from 'react';

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    width: 100%;
    background-color: #edf7ff;

    .gnb{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 6.3rem;
        padding: 0 3.2rem;
      
        @media (min-width: 768px) {
          height: 9.4rem;
          max-width: 86.3rem;
        }
      
        @media (min-width: 1200px) {
          height: 9.4rem;
          max-width: 192rem;
          padding: 0 20rem;
        }
    }
`



function Nav() {
    const user = useContext(UserContext);
    const accountStyle ={
        "display": "flex",
        "align-items": "center",
        "gap": "6px"
    }
    const profileImgStyle = {
        "height":"28px",
        "width":"28px",
        "border-radius":"999px"
    }
    const userEmailStyle ={
        "color": "#373740",
        "font-family": "Pretendard",
        "font-size": "14px"
    }
    return (
        <>
            <StyledNav>
                <div class="gnb">
                    <a href="index.html">
                        <img class="logo" src="./images/logo.svg" alt="Linkbrary 로고" />
                    </a>
                    <div style={accountStyle}>
                    { user ? (
                    <>
                        <img src={user.profileImageSource} style={profileImgStyle} alt="userProfile"/> <span style={userEmailStyle}>{user.email}</span>
                    </>
                    ) : (
                        <Cta>로그인</Cta>
                    )}
                    </div>
                </div>
            </StyledNav>
        </>
    )
}

export default Nav