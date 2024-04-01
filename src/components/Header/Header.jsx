import './Header.css';
import logo from '../../assets/images/logo.svg';
import { useEffect, useState } from 'react';
import { getUserInfo } from '../../utils/api';
import Account from '../Account/Account';
import Button from '../Button/Button';

const STYLE_MAIN_HEADER_CLASS_NAME = 'main-header';
const STYLE_LOGO_IMG_CLASS_NAME = 'logo-img';
const STYLE_BLIND_CLASS_NAME = 'blind';

const LOGO_ALT_MESSAGE = 'Linkbrary';

export default function Header() {
  const [userInfo, setUserInfo] = useState(null);

  const handleLoadHeader = async () => {
    let result;
    try {
      result = await getUserInfo();
      setUserInfo(result);
    } catch (error) {}
  };

  useEffect(() => {
    handleLoadHeader();
  });

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
          profileImgSource={userInfo.profileImageSource}
          userEmail={userInfo.email}
        />
      ) : (
        <Button>로그인</Button>
      )}
    </header>
  );
}
