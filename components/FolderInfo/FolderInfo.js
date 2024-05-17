import styles from "./FolderInfo.module.scss";
import Image from "next/image";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function FolderInfo({ user }) {
  return (
    <div className={cx("folder-info-block")}>
      <div className={cx("folder-info")}>
        <div className={cx("icon-wrapper")}>
          <img src="./images/white.svg" alt="icon-img" />
        </div>
        <p className={cx("user-name")}>@{user.name}</p>
        <p className={cx("folder-name")}>⭐️ 즐겨찾기</p>
      </div>
    </div>
  );
}
