import GoogleIcon from "../public/Google.svg";
import KakaoIcon from "../public/Kakao.svg";
import styles from "./SocialAuthForm.module.css";
import Link from "next/link";
import Image from "next/image";

interface SocialAuthFormProps {
  message: string;
}

function SocialAuthForm({ message }: SocialAuthFormProps) {
  return (
    <div className={styles.socialAuthForm}>
      {message}
      <div className={styles.socialAuthIcons}>
        <Link
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.socialAuthIcon}>
            <Image fill src={GoogleIcon} alt="구글계정 연동하기" />
          </div>
        </Link>
        <Link
          href="https://www.kakaocorp.com/page/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.socialAuthIcon}>
            <Image fill src={KakaoIcon} alt="카카오톡계정 연결하기" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SocialAuthForm;
