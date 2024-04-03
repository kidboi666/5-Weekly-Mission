import logoImg from "../../assets/logo.svg";
import styles from "./index.module.css";
import { useFetch } from "../../utils/hooks/useFetch";

const BASE_URL_USER = "https://bootcamp-api.codeit.kr/api/users/1";

function Navigation() {
  const Userprofile = useFetch(BASE_URL_USER);

  return (
    <div className={styles.Navigation}>
      <div className={styles.Container}>
        <a href="/shared">
          <img
            className={styles.NavigationLogo}
            src={logoImg}
            alt="Linkbrary 로고"
          />
        </a>
        {Userprofile ? (
          <div className={styles.userProfile}>
            <img
              src={Userprofile.data[0].image_source}
              alt="유저 프로필사진"
              className={styles.userProfileImg}
            />
            <span className={styles.userProfileId}>
              {Userprofile.data[0].email}
            </span>
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

export default Navigation;
