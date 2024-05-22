import Link from "next/link";
import styles from "../styles/sign.module.scss";
import classNames from "classnames/bind";
import { SinginForm } from "../components/SinginForm/SinginForm";
import { SocalLogin } from "../components/SocalLogin/SocalLogin";

const cx = classNames.bind(styles);

function singInPage() {
  return (
    <div className={cx("page-container")}>
      <div className={cx("contents")}>
        <div className={cx("title")}>
          <Link href="/">
            <img className={cx("logo")} src="/images/logo.svg" alt="로고" />
          </Link>
          <h2>
            회원이 아니신가요?
            <Link className={cx("singin-link")} href="./signup">
              회원가입하기
            </Link>
          </h2>
        </div>
        <SinginForm />
        <SocalLogin />
      </div>
    </div>
  );
}

export default singInPage;
