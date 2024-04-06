import { useCallback, useEffect, useState } from 'react';
import logo from '../../assets/images/logo.svg';
import { getUserInfo } from '../../utils/api';
import Account from '../Account/Account';
import Button from '../Button/Button';
import { convertObjectKeysToCamelCase } from '../../utils/convertObjectKeysToCamelCase';
import styles from './Header.module.css';

const Header = () => {
  const [userInfo, setUserInfo] = useState({});

  const handleLoadHeader = useCallback(async () => {
    try {
      const result = await getUserInfo();
      const convertedResult = convertObjectKeysToCamelCase(result);
      setUserInfo(convertedResult);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  }, []);

  useEffect(() => {
    handleLoadHeader();
  }, [handleLoadHeader]);

  return (
    <header className={styles.mainHeader}>
      <h1>
        <a href="/">
          <img src={logo} alt="Linkbrary" className={styles.logoImg} />
        </a>
        <span className={styles.blind}>Linkbrary</span>
      </h1>
      {userInfo ? (
        <Account
          profileImgSource={userInfo.imageSource}
          userEmail={userInfo.email}
        />
      ) : (
        <Button>로그인</Button>
      )}
    </header>
  );
};

export default Header;
