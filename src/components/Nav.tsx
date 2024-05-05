import { Link } from "react-router-dom";
import logoImg from "../assets/logo.svg";
import "./Nav.css";
import Profile from "./Profile";

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/shared">
            <img className="nav__logo" src={logoImg} alt="로고 이미지" />
          </Link>
        </li>
        <li>
          <Profile />
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
