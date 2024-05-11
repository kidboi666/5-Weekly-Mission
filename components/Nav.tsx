import Link from "next/link";
import logoImg from "@/public/logo.svg";
import styles from "./Nav.module.css";
import Profile from "./Profile";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/shared">
            <img className={styles.nav__logo} src={logoImg} alt="로고 이미지" />
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
