import logoImg from "../../assets/logo.svg";
import styles from "./index.module.css";
import { useFetch } from "../hooks/useFetch";

function Nav() {
  const Userprofile = useFetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );

  return (
    <div className={styles.Navigation}>
      <div className={styles.Container}>
        <a href="/">
          <img
            className={styles.NavigationLogo}
            src={logoImg}
            alt="Linkbrary 로고"
          />
        </a>
        {Userprofile ? (
          <div className={styles.userProfile}>
            <img
              src={Userprofile.profileImageSource}
              alt="유저 프로필사진"
              className={styles.userProfileImg}
            />
            <span className={styles.userProfileId}>{Userprofile.email}</span>
          </div>
        ) : (
          <button className={`${styles.signButton} ${styles.signButtonShort}`}>
            로그인
          </button>
        )}
      </div>
    </div>
  );
}

export default Nav;
