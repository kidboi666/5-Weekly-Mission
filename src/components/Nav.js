import logoImg from "../assets/logo.svg";
import profileImg from "../assets/profile img.svg";
import styles from "./Nav.module.css";
import { getUserData } from "../api/Api";
import useData from "../hooks/useData";

function Nav() {
  const userData = useData(getUserData);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="/">
            <img className={styles.nav__logo} src={logoImg} alt="로고 이미지" />
          </a>
        </li>
        <li>
          {userData ? (
            <div className={styles.nav__profile}>
              <img
                className={styles.nav__ProfileImg}
                src={profileImg}
                alt="Profile Image"
              />
              <span>{userData.email}</span>
            </div>
          ) : (
            <a href="/signin.html" className={styles.nav__signinBtn}>
              로그인
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
