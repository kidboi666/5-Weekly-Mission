import { MouseEventHandler, ReactNode } from "react";
import styles from "./ContentButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ContentButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  themeColor?: "blue" | "red";
};

/**
 * ContentButton 컴포넌트는 클릭 가능한 버튼을 렌더링합니다.
 *
 * @component
 * @example
 * return (
 *   <ContentButton onClick={() => console.log("Button Clicked")} themeColor="red">
 *     버튼 텍스트
 *   </ContentButton>
 * );
 *
 * @param {Object} props - 속성 객체입니다.
 * @param {ReactNode} props.children - 버튼 내부에 렌더링될 요소입니다.
 * @param {MouseEventHandler<HTMLButtonElement>} props.onClick - 버튼 클릭 시 호출되는 함수입니다.
 * @param {"blue" | "red"} [props.themeColor="blue"] - 버튼의 테마 색상을 설정합니다. 기본값은 "blue"입니다.
 * 
 * @returns {JSX.Element} 클릭 가능한 버튼을 렌더링하는 컴포넌트입니다.
 */
export const ContentButton = ({
  children,
  onClick,
  themeColor = "blue",
}: ContentButtonProps) => {
  return (
    <button className={cx("button", themeColor)} onClick={onClick}>
      {children}
    </button>
  );
};
