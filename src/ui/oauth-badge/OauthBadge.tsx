import styles from "./OauthBadge.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type OauthBadgeProps = {
  href: string;
  imageSource: string;
  alt: string;
};
/**
 * OauthBadge 컴포넌트는 OAuth 로그인 배지를 이미지로 렌더링합니다.
 * 이 컴포넌트는 소셜 로그인을 위한 경로 이동을 위해 존재하는 컴포넌트 입니다
 * @component
 * @example
 * const href = "https://example.com/oauth";
 * const imageSource = "/path/to/image.png";
 * const alt = "OAuth 배지";
 * 
 * return (
 *   <OauthBadge href={href} imageSource={imageSource} alt={alt} />
 * );
 *
 * @param {Object} props - 속성 객체입니다.
 * @param {string} props.href - 배지를 클릭했을 때 이동할 URL입니다.
 * @param {string} props.imageSource - 배지 이미지의 소스 URL입니다.
 * @param {string} props.alt - 배지 이미지에 대한 대체 텍스트입니다.
 * 
 * @returns {JSX.Element} 렌더링된 OAuth 배지 컴포넌트입니다.
 */
export const OauthBadge = ({ href, imageSource, alt }: OauthBadgeProps) => {
  return (
    <a href={href} rel="noopener noreferrer">
      <img className={cx("badge")} src={imageSource} alt={alt} />
    </a>
  );
};
