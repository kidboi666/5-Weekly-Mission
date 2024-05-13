import Link from "next/link";
import Image from "next/image";
import profileImage from "@/public/images/profileimg.jpg";
import LinkbraryImage from "@/public/images/Linkbrary.png";
import useProfileData from "@/pages/api/useProfileData";
import styles from "./Nav.module.css";

const Nav = () => {
  const profileData = useProfileData();

  return (
    <nav className={styles.NavContainer}>
      <div className={styles.Gnb}>
        <div className={styles.GnbLogo}>
          <Link href="/">
            <Image
              src={LinkbraryImage}
              width={133}
              height={24}
              alt="Linkbrary Logo"
            />
          </Link>
        </div>
        {profileData ? (
          <div className={styles.ProfileInfo}>
            <Image src={profileImage} alt="프로필 이미지" />
            <span>{profileData.email}</span>
          </div>
        ) : (
          <Link href="/signin">
            <button className={styles.GnbButton}>로그인</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
