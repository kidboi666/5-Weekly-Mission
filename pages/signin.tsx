import Image from "next/image";
import styles from "@/styles/signin.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";

export default function signin() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("body")}>
      <main className={cx("section")}>
        <div className={cx("content")}>
          <section className={cx("title")}>
            <Link href="/">
              <Image
                width={210}
                height={38}
                className={cx("logo-img")}
                src="/img/logo.svg"
                alt=""
              />
            </Link>
            <div className={cx("question")}>
              <div className={cx("question-text")}>회원이 아니신가요?</div>
              <Link className={cx("signupLink")} href="/signup">
                회원 가입하기
              </Link>
            </div>
          </section>
          <form className={cx("input")}>
            <div className={cx("input__section")}>
              <label className={cx("text")}>
                이메일
                <br />
              </label>
              <input
                id="email"
                className={cx("user-input")}
                type="email"
                name="email"
              />
              <div
                id="email-errorText"
                className={cx("errortext", "error")}
              ></div>
            </div>
            <div className={cx("input__section", "password-section")}>
              <label className={cx("text")}>
                비밀번호
                <br />
              </label>
              <input
                id="password"
                className={cx("user-input")}
                type="password"
                name="password"
              />
              <i className={cx("i", "fa", "fa-eye", "fa-lg")}></i>
              <div
                id="password-errorText"
                className={cx("errortext", "error")}
              ></div>
            </div>
            <button type="submit" id="btn" className={cx("button", "signin")}>
              로그인
            </button>
          </form>
          <div className={cx("social")}>
            <div className={cx("social-text")}>소셜 로그인</div>
            <div className={cx("social-link")}>
              <Link href="https://www.google.com/">
                <Image
                  width={42}
                  height={42}
                  src="/img/google.svg"
                  alt="Google icon"
                />
              </Link>
              <Link href="https://www.kakaocorp.com/page/">
                <Image
                  width={42}
                  height={42}
                  src="/img/kakao.svg"
                  alt="Kakao icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
