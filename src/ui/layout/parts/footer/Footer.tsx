import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { ROUTE } from "@/src/util";
import { TEXT } from "./constant";
import { forwardRef } from "react";

const cx = classNames.bind(styles);

const snsLinks = [
  {
    href: "https://www.facebook.com/",
    src: "images/facebook.svg",
    alt: "facebook 홈페이지로 연결된 facebook 로고",
  },
  {
    href: "https://twitter.com/",
    src: "images/twitter.svg",
    alt: "twitter 홈페이지로 연결된 twitter 로고",
  },
  {
    href: "https://www.youtube.com/",
    src: "images/youtube.svg",
    alt: "youtube 홈페이지로 연결된 youtube 로고",
  },
  {
    href: "https://www.instagram.com/",
    src: "images/instagram.svg",
    alt: "instagram 홈페이지로 연결된 instagram 로고",
  },
];

export const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className={cx("container")}>
      <div className={cx("items")}>
        <span className={cx("copyright")}>{TEXT.codeit}</span>
        <div className={cx("links")}>
          <a className={cx("link")} href={ROUTE.개인정보처리방침}>
            {TEXT.privacyPolicy}
          </a>
          <a className={cx("link")} href={ROUTE.FAQ}>
            {TEXT.faq}
          </a>
        </div>
        <div className={cx("sns")}>
          {snsLinks.map(({ href, src, alt }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer">
              <img src={src} alt={alt} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
});
