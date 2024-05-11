import styles from "./Nav.module.css";
import Link from "next/link";
import { Profile } from "../Profile/Profile";
import { ROUTE } from "@/utils/constant";
import { LOGO_IMAGE, TEXT } from "./constant";

export const Nav = ({ profile }) => {
  return (
    <div className={styles.wrapNav}>
      <div className={styles.navItems}>
        <Link href="/">
          <img src={LOGO_IMAGE} alt="로고이미지" />
        </Link>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <Link href={ROUTE.로그인} className="btn-primary btn-sm">
            {TEXT.login}
          </Link>
        )}
      </div>
    </div>
  );
};
