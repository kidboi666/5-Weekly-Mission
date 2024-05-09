import logoImg from '@/public/logo.svg';
import styles from './index.module.css';
import { useFetch } from '@/hooks/useFetch';
import Image from 'next/image';

interface UserProfile {
  data: {
    email: string;
    image_source: string;
  }[];
}

const BASE_URL_USER = 'https://bootcamp-api.codeit.kr/api/users/1';

function Navigation() {
  const userProfile = useFetch<UserProfile>(BASE_URL_USER);

  return (
    <div className={styles.Navigation}>
      <div className={styles.Container}>
        <a href="/shared">
          <Image
            className={styles.NavigationLogo}
            src={logoImg}
            alt="Linkbrary 로고"
          />
        </a>
        {userProfile ? (
          <div className={styles.userProfile}>
            <img
              src={userProfile.data[0].image_source}
              alt="유저 프로필사진"
              className={styles.userProfileImg}
            />
            <span className={styles.userProfileId}>
              {userProfile.data[0].email}
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
