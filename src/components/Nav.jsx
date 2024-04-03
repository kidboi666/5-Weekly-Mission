import logoImg from "../assets/logo.svg";
import profileImg from "../assets/profile img.svg";
import "./Nav.css";
import { getUserData } from "../api/Api";
import useData from "../hooks/useData";

function Nav() {
  const userData = useData(getUserData);

  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/">
            <img className="nav__logo" src={logoImg} alt="로고 이미지" />
          </a>
        </li>
        <li>
          {userData ? (
            <div className="nav__profile">
              <img
                className="nav__ProfileImg"
                src={profileImg}
                alt="Profile Info"
              />
              <span className="nav__ProfileEmail">{userData.email}</span>
            </div>
          ) : (
            <a href="/signin.html" className="nav__signinBtn">
              로그인
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
