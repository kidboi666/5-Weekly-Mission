import styles from "./profile.module.css";
import Link from "next/link";
import { getUserData } from "@/api/Api";
import useData from "@/hooks/useData";
import Btn from "./InputBtn";
import Image from "next/image";

function Profile() {
  const userData = useData(getUserData);

  return userData ? (
    <div className={styles.nav__profile}>
      <div className={styles.nav__ProfileImg}>
        <Image
          fill
          src={userData?.data[0].image_source}
          alt="Profile Info"
          sizes="28px"
        />
      </div>
      <span className={styles.nav__ProfileEmail}>
        {userData?.data[0].email}
      </span>
    </div>
  ) : (
    <Link href={"/signin.html"}>
      <Btn> 로그인</Btn>
    </Link>
  );
}

export default Profile;
