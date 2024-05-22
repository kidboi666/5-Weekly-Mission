import { ROUTE } from "@/src/util";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import styles from "./SignHeader.module.scss";
import classNames from "classnames/bind";
import LinkbraryIcon from "public/images/linkbrary.svg";

const cx = classNames.bind(styles);

type SignHeaderProps = {
  message: string;
  link: {
    href: Url;
    text: string;
  };
};

/**
 * SignHeader 컴포넌트는 로그인 및 회원가입 페이지 상단에 표시되는 헤더를 렌더링합니다.
 *
 * @component
 * @example
 * const message = "계정이 없으신가요?";
 * const link = { href: "/signup", text: "회원가입" };
 * 
 * return (
 *   <SignHeader
 *     message={message}
 *     link={link}
 *   />
 * );
 *
 * @param {Object} props - 속성 객체입니다.
 * @param {string} props.message - 헤더에 표시될 메시지입니다.
 * @param {Object} props.link - 링크 객체입니다.
 * @param {Url} props.link.href - 링크의 URL입니다.
 * @param {string} props.link.text - 링크에 표시될 텍스트입니다.
 * 
 * @returns {JSX.Element} 로그인 및 회원가입 페이지 상단에 표시되는 헤더 컴포넌트입니다.
 */
export const SignHeader = ({ message, link }: SignHeaderProps) => {
  const { href, text } = link;
  return (
    <div className={cx("container")}>
      <Link href={ROUTE.랜딩}>
        <LinkbraryIcon className={cx("logo")} />
      </Link>
      <p className={cx("message-box")}>
        <span className={cx("message")}>{message}</span>
        <Link className={cx("link")} href={href}>
          {text}
        </Link>
      </p>
    </div>
  );
};
