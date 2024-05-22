import { ReactNode } from "react";
import styles from "./Cta.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type CtaProps = {
  children: ReactNode;
};

/**
 * Cta 컴포넌트는 Call to Action(CTA) 요소를 렌더링합니다.
 *
 * @component
 * @example
 * return (
 *   <Cta>
 *     <button>클릭하세요</button>
 *   </Cta>
 * );
 *
 * @param {Object} props - 컴포넌트의 props입니다.
 * @param {ReactNode} props.children - Cta 컴포넌트 내부에 렌더링될 자식 요소들입니다.
 * 
 * @returns {JSX.Element} Call to Action(CTA) 요소를 렌더링하는 컴포넌트입니다.
 */
export const Cta = ({ children }: CtaProps) => {
  return <div className={cx("container")}>{children}</div>;
};
