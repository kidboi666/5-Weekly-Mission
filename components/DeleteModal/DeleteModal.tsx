import { useEffect, useRef } from "react";
import styles from "./DeleteModal.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import { COLSE_ICON } from "./constant";

const cx = classNames.bind(styles);

export const DeleteModal = ({ modal, setModal, children }) => {
  const modalRef = useRef(null);

  // 모달 영역 밖 클릭 시 닫기
  useEffect(() => {
    const handleModal = (event) => {
      if (modal && !modalRef.current?.contains?.(event.target)) {
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
      <Image className={cx("image")} src={COLSE_ICON} alt="모달 닫기 아이콘" width={100} height={100}/>

      <div className={cx("content")} ref={modalRef}>
        <div className={cx("title")}>{children}</div>
        <button type="button">삭제하기</button>
      </div>
    </div>
  );
};
