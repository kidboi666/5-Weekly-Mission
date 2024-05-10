import styles from "./AddFolderButton.module.scss";
import classNames from "classnames/bind";
import { ReactComponent as AddIcon } from "./add.svg";

const cx = classNames.bind(styles);

export const AddFolderButton = ({ onClick }) => {
  return (
    <button className={cx("container")} onClick={onClick}>
      <span>폴더 추가</span>
      <AddIcon className={cx("icon")} />
    </button>
  );
};

/* !!! React-app.d.ts 에서 컴포넌트로 선언된 SVG. 이건 타입스크립트 공부하고 다시보자 */
