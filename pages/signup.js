import Link from "next/link";
import styles from "../styles/sign.module.scss";
import classNames from "classnames/bind";
import { SocalLogin } from "../components/SocalLogin/SocalLogin";
import { SingupForm } from "../components/SingupForm/SingupForm";

const cx = classNames.bind(styles);

function singupPage() {
  return (
    <div className={cx("page-container")}>
      <div className={cx("contents")}>
        <div className={cx("title")}>
          <Link href="/">
            <img className={cx("logo")} src="/images/logo.svg" alt="로고" />
          </Link>
          <h2>
            이미 회원이신가요?
            <Link className={cx("singin-link")} href="./signin">
              로그인하기
            </Link>
          </h2>
        </div>
        <SingupForm />
        <SocalLogin />
      </div>
    </div>
  );
}

export default singupPage;
