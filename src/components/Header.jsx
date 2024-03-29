import header_logo from '../assets/header.svg';
import '../styles/Header.css';

function Header() {
  return (
    <header className="Header">
      <img src={header_logo} alt="Header Logo" className="Header__img" />
      <p className="Header__text">@코드잇</p>
      <h2 className="Header__title">⭐ 즐겨찾기</h2>
    </header>
  );
}

export default Header;
