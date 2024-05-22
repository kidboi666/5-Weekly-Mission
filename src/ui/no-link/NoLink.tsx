import styles from "./NoLink.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

/**
 * NoLink 컴포넌트는 폴더에 저장된 링크가 없을 때 기본적으로 표시되는 화면을 렌더링합니다.
 *
 * @component
 * @example
 * return (
 *   <NoLink />
 * );
 *
 * @returns {JSX.Element} 저장된 링크가 없을 때 표시되는 메시지를 포함하는 컨테이너입니다.
 * 
 * @description
 * 이 컴포넌트는 사용자가 폴더에 링크를 저장하지 않았을 때, 
 * "저장된 링크가 없습니다"라는 메시지를 표시하는 간단한 UI를 제공합니다.
 * 
 */
export const NoLink = () => {
  return (
    <div className={cx("container")}>
      <span className={cx("message")}>저장된 링크가 없습니다</span>
    </div>
  );
};
