import { ReactNode } from "react";
import styles from "./ContentDescription.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ContentDescriptionProps = {
  children: ReactNode;
};

/**
 * ContentDescription 컴포넌트는 모달 창에 대한 설명 텍스트를 렌더링합니다.
 *
 * @component
 * @example
 * return (
 *   <ContentDescription>
 *     이곳에 설명 텍스트가 들어갑니다.
 *   </ContentDescription>
 * );
 *
 * @param {Object} props - 속성 객체입니다.
 * @param {ReactNode} props.children - 설명 텍스트로 렌더링될 요소입니다.
 *
 * @returns {JSX.Element} 설명 텍스트를 렌더링하는 컴포넌트입니다.
 */
export const ContentDescription = ({ children }: ContentDescriptionProps) => {
  return <p className={cx("description")}>{children}</p>;
};
