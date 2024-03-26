import React from "react";
import "./Header.css";
import Button from "./utils/Button";
import logoImg from "../assets/logo.svg";

export default function Header() {
  return (
    <header className='header'>
      <div className='header__inner'>
        <a className='header__link-home' href='/'>
          <img className='header__logo' src={logoImg} alt='linkbrary logo' />
        </a>
        <Button
          className='header__link-login'
          link='/signin.html'
          text='로그인'
        />
      </div>
    </header>
  );
}
