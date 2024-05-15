import styles from "./NoLink.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

/**
 * 
 * @returns 폴더에 저장된 링크가 없을 시 디폴트로 띄우는 화면
 */
export const NoLink = () => {
  return (
    <div className={cx("container")}>
      <span className={cx("message")}>저장된 링크가 없습니다</span>
    </div>
  );
};
