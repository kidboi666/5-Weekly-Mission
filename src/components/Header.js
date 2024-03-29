import React, { useContext } from "react";
import "./Header.css";
import Button from "./utils/Button";
import logoImg from "../assets/logo.svg";
import { UserContext } from "../contexts/UserContext";
import ProfileImage from "./utils/ProfileImage";

export default function Header() {
  const { user, setUser } = useContext(UserContext);

  return (
    <header className='header'>
      <div className='header__inner'>
        <a className='header__link-home' href='/'>
          <img className='header__logo' src={logoImg} alt='linkbrary logo' />
        </a>
        {!user && (
          <Button
            className='header__login-button'
            link='/signin.html'
            text='로그인'
          />
        )}
        {user && (
          <div className='header__profile'>
            <ProfileImage src={user.profileImageSource} size='28' />
            <p>{user.email}</p>
          </div>
        )}
      </div>
    </header>
  );
}
