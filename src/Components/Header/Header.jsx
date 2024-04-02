// Header.js
import { useFetch } from "../../hooks/useFetch";
import { BASE_URL } from "../../constants/baseURL";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

function Header() {
  const profileData = useFetch(`${BASE_URL}user`);

  return (
    <header className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src={logo} width="133" height="24" alt="Linkbrary" />
      </Link>
      {profileData ? (
        <div className={styles.profile}>
          <img
            src={profileData.profileImageSource}
            alt="profile"
            className={styles.profile_img}
          />
          <span>{profileData.email}</span>
        </div>
      ) : (
        <Link to="../sign/signin.html" className={styles.login_button}>
          로그인
        </Link>
      )}
    </header>
  );
}

export default Header;
