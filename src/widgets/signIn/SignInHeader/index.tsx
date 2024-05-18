import Image from "next/image";
import styles from "../Auth.module.css";
import logoSvg from "@/src/assets/svg/Linkbrary.svg";
import Link from "next/link";

function SignInHeader() {
  return (
    <div className={styles.loginHeader}>
      <h2 className={styles.loginLogo}>
        <Link href="./">
          <Image src={logoSvg} alt="Linkbrary" />
        </Link>
      </h2>
      <p>
        회원이 아니신가요?
        <Link href="./signup" className="underline">
          회원 가입하기
        </Link>
      </p>
    </div>
  );
}

export default SignInHeader;
