import './Header.css';
import logo from '../../assets/images/logo.svg';
import { useCallback, useEffect, useState } from 'react';
import { getUserInfo } from '../../utils/api';
import Account from '../Account/Account';
import Button from '../Button/Button';
import { convertObjectKeysToCamelCase } from '../../utils/convertObjectKeysToCamelCase';

const STYLE_MAIN_HEADER_CLASS_NAME = 'main-header';
const STYLE_LOGO_IMG_CLASS_NAME = 'logo-img';
const STYLE_BLIND_CLASS_NAME = 'blind';

const LOGO_ALT_MESSAGE = 'Linkbrary';

export default function Header() {
  const [userInfo, setUserInfo] = useState({});

  const handleLoadHeader = useCallback(async () => {
    let result;
    try {
      result = await getUserInfo();
    } catch (error) {}
    const convertedResult = convertObjectKeysToCamelCase(result);
    setUserInfo(convertedResult);
  }, []);

  useEffect(() => {
    handleLoadHeader();
  }, [handleLoadHeader]);

  return (
    <header className={STYLE_MAIN_HEADER_CLASS_NAME}>
      <h1>
        <a href="/">
          <img
            src={logo}
            alt={LOGO_ALT_MESSAGE}
            className={STYLE_LOGO_IMG_CLASS_NAME}
          />
        </a>
        <span className={STYLE_BLIND_CLASS_NAME}>Linkbrary</span>
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
}
