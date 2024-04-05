import logoImg from "../assets/logo.svg";
import "./Nav.css";
import Profile from "./Profile";

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/">
            <img className="nav__logo" src={logoImg} alt="로고 이미지" />
          </a>
        </li>
        <li>
          <Profile />
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
