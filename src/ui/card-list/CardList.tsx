import { ReactNode, forwardRef } from "react";
import styles from "./CardList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

/**
 * CardList 컴포넌트는 자식 요소들을 포함하는 카드 리스트 컨테이너를 렌더링합니다.
 *
 * @component
 * @example
 * return (
 *   <CardList>
 *     <div>카드 1</div>
 *     <div>카드 2</div>
 *     <div>카드 3</div>
 *   </CardList>
 * );
 *
 * @param {Object} props - 컴포넌트의 props입니다.
 * @param {ReactNode} props.children - 카드 리스트 컨테이너 내부에 렌더링될 자식 요소들입니다.
 * @param {React.Ref<HTMLDivElement>} ref - 카드 리스트 컨테이너 요소에 전달할 ref입니다.
 * 
 * @returns {JSX.Element} 자식 요소들을 포함하는 카드 리스트 컨테이너 컴포넌트입니다.
 */
export const CardList = forwardRef<HTMLDivElement, { children: ReactNode }>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className={cx("container")}>
        {children}
      </div>
    );
  }
);
