import Link from "next/link";
import logoImg from "@/public/logo.svg";
import styles from "./Nav.module.css";
import Profile from "./Profile";
import Image from "next/image";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/shared">
            <div className={styles.nav__logo}>
              <Image fill src={logoImg} alt="로고 이미지" />
            </div>
          </Link>
        </li>
        <li>
          <Profile />
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
