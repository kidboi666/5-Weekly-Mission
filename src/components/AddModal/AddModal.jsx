import { useEffect, useRef } from "react";
import styles from "./AddModal.module.scss";
import classNames from "classnames/bind";
import { COLSE_ICON } from "./constant";

const cx = classNames.bind(styles);

export const AddModal = ({ modal, setModal, children }) => {
  const modalRef = useRef(null);

  // 모달 영역 밖 클릭 시 닫기
  useEffect(() => {
    const handleModal = (event) => {
      if (modal && !modalRef.current.contains(event.target)) {
        setModal(false);
      }
    };

    document.addEventListener("mousedown", handleModal);

    return () => {
      document.removeEventListener("mousedown", handleModal);
    };
  }, [modal, setModal, modalRef]);

  return (
    <div className={cx("container")}>
      <img src={COLSE_ICON} alt="모달 닫기 아이콘" />

      <div className={cx("content")} ref={modalRef}>
        <div className={cx("title")}>{children}</div>
      </div>
    </div>
  );
};
