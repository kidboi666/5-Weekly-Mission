import styles from '@/styles/Nav.module.css';
import GradientButton from '../Button/GradientButton';
import Profile from './Profile';
import styled from 'styled-components';

function Nav({ userInfo, isfixed = true }) {
  const { email, imgUrl } = userInfo;
  const isSingin = email && imgUrl ? true : false;

  return (
    <StyledNav $isfixed={isfixed}>
      <button className={styles.logo}></button>
      {!isSingin ? <GradientButton size="medium">로그인</GradientButton> : null}
      {isSingin ? <Profile email={email} imgUrl={imgUrl} /> : null}
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: ${({ $isfixed }) => ($isfixed ? 'sticky' : 'relative')};
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 200px;
  background-color: var(--bg-color);
  z-index: 10;

  @media screen and (max-width: 1124px) {
    justify-content: center;
    gap: 450px;
    padding: 20px 32px;
  }

  @media screen and (max-width: 767px) {
    justify-content: space-between;
    gap: 0;
  }
`;

export default Nav;
