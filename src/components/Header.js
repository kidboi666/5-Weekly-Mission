import React, { useContext } from "react";
import "./Header.css";
import Button from "./utils/Button";
import logoImg from "../assets/logo.svg";
import { UserContext } from "../contexts/UserContext";
import ProfileImage from "./utils/ProfileImage";
import { Link } from "react-router-dom";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <header className='header'>
      <div className='header__inner'>
        <Link to='/' className='header__link-home'>
          <img className='header__logo' src={logoImg} alt='linkbrary logo' />
        </Link>
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
            <p className='header__profile-text'>{user.email}</p>
          </div>
        )}
      </div>
    </header>
  );
}
