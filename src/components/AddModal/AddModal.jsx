import { useEffect, useRef, useState } from "react";
import { COLSE_ICON } from "./constant";
import styles from "./AddModal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const AddModal = ({ modal, setModal, folderName, children }) => {
  const modalRef = useRef(null);

  // 모달 영역 밖 클릭 시 닫기
  useEffect(() => {
    const handleTest = (event) => {
      if (modal && !modalRef.current.contains(event.target)) {
        setModal(false);
      }
    };

    document.addEventListener("mousedown", handleTest);

    return () => {
      document.removeEventListener("mousedown", handleTest);
    };
  }, [modal, modalRef]);

  return (
    <div className={cx("container")}>
      <img src={COLSE_ICON} alt="모달 닫기 아이콘" />

      <div className={cx("content")} ref={modalRef}>
        <div className={cx("title")}>{children}</div>
      </div>
    </div>
  );
};
