import './Header.css';
import logo from '../../assets/images/logo.svg';
import { useEffect, useState } from 'react';
import { getUserInfo } from '../../utils/api';
import Account from '../Account/Account';
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
    <header className='main-header'>
      <h1>
        <a href='#'>
          <img src={logo} alt='Linkbrary' className='logo-img' />
        </a>
        <span className='blind'>Linkbrary</span>
      </h1>
      {userInfo ? (
        <Account
          profileImgSource={userInfo.profileImageSource}
          userEmail={userInfo.email}
        />
      ) : (
        <a href='/'>로그인</a>
      )}
    </header>
  );
}
