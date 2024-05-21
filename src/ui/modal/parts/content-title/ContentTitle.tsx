import { ReactNode } from "react";
import styles from "./ContentTitle.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ContentTitleProps = {
  children: ReactNode;
};

/**
 * ContentTitle 컴포넌트는 모달창에 대한 제목 텍스트를 렌더링합니다.
 *
 * @component
 * @example
 * return (
 *   <ContentTitle>
 *     이곳에 제목 텍스트가 들어갑니다.
 *   </ContentTitle>
 * );
 *
 * @param {Object} props - 속성 객체입니다.
 * @param {ReactNode} props.children - 제목 텍스트로 렌더링될 요소입니다.
 * 
 * @returns {JSX.Element} 제목 텍스트를 렌더링하는 컴포넌트입니다.
 */
export const ContentTitle = ({ children }: ContentTitleProps) => {
  return <h2 className={cx("title")}>{children}</h2>;
};
