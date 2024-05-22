import { MouseEventHandler, ReactNode } from "react";
import styles from "./Template.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type TemplateProps = {
  children: ReactNode;
  onMouseOver: MouseEventHandler<HTMLDivElement>;
  onMouseLeave: MouseEventHandler<HTMLDivElement>;
};

/**
 * Template 컴포넌트는 자식 요소를 포함하며, 마우스 오버 및 마우스 리브 이벤트 핸들러를 처리하는 컨테이너를 렌더링합니다.
 *
 * @component
 * @example
 * return (
 *   <Template
 *     onMouseOver={() => console.log("Mouse Over")}
 *     onMouseLeave={() => console.log("Mouse Leave")}
 *   >
 *     <div>내용</div>
 *   </Template>
 * );
 *
 * @param {Object} props - 컴포넌트의 props입니다.
 * @param {ReactNode} props.children - Template 컴포넌트 내부에 렌더링될 자식 요소들입니다.
 * @param {MouseEventHandler<HTMLDivElement>} props.onMouseOver - 마우스 오버 이벤트를 처리하는 함수입니다.
 * @param {MouseEventHandler<HTMLDivElement>} props.onMouseLeave - 마우스 리브 이벤트를 처리하는 함수입니다.
 * 
 * @returns {JSX.Element} 자식 요소를 포함하며 마우스 이벤트를 처리하는 컨테이너 컴포넌트입니다.
 */
export const Template = ({
  children,
  onMouseOver,
  onMouseLeave,
}: TemplateProps) => {
  return (
    <div
      className={cx("container")}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};
