import styles from "./Nav.module.css";
import Link from "next/link";
import { Profile } from "../Profile/Profile";
import { LOGO_IMAGE, TEXT } from "./constant";
import { ProfileData } from "@/types";

export const Nav = ({ profile }: { profile?: ProfileData | null }) => {
  return (
    <div className={styles.wrapNav}>
      <div className={styles.navItems}>
        <Link href="/">
          <img src={LOGO_IMAGE} alt="로고이미지" />
        </Link>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <Link href="/signin" className="btn-primary btn-sm">
            {TEXT.login}
          </Link>
        )}
      </div>
    </div>
  );
};
