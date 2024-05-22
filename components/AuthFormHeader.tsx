import Logo from "@/public/logo.svg";
import styles from "./AuthFormHeader.module.css";
import Link from "next/link";
import Image from "next/image";

interface AuthFormHeaderProps {
  message: string;
  link: string;
  linkMassege: string;
}

function AuthFormHeader({ message, link, linkMassege }: AuthFormHeaderProps) {
  return (
    <header className={styles.AuthFormHeader}>
      <Link href="/">
        <div className={styles.logoWrap}>
          <Image fill src={Logo} alt="링크브러리 로고" />
        </div>
      </Link>
      <div className={styles.AuthFormMessage}>
        {message}
        <Link href={link}>{linkMassege}</Link>
      </div>
    </header>
  );
}

export default AuthFormHeader;
