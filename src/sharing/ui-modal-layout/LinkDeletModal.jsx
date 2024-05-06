import styles from "./LinkDeletModal.module.scss";
import classNames from "classnames/bind";
import closeBtn from "../../assets/close.png";
import { useState } from "react";

const cx = classNames.bind(styles);

export const LinkDeletModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClosedClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className={cx("container")}>
          <div className={cx("modal-box")}>
            <div className={cx("icon-box")}>
              <button onClick={handleClosedClick}>
                <img className={cx("close-icon")} src={closeBtn} alt="close" />
              </button>
            </div>
            <div className={cx("items")}>
              <div className={cx("text-box")}>
                <h1 className={cx("modal-title")}>링크 삭제</h1>
              </div>
              <div className={cx("btn-box")}>
                <button className={cx("delete-btn")}>삭제하기</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
