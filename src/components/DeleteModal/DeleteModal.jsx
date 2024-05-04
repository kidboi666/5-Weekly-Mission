import { useEffect, useRef } from "react";
import styles from "./DeleteModal.module.scss";
import classNames from "classnames/bind";
import { COLSE_ICON } from "./constant";

const cx = classNames.bind(styles);

export const DeleteModal = ({ modal, setModal, link }) => {
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
        <div className={cx("link")}>
          <h2>링크 삭제</h2>
          <p>{link}</p>
        </div>

        <button type="button">삭제하기</button>
      </div>
    </div>
  );
};
