import { useEffect, useRef } from "react";
import styles from "./ShareModal.module.scss";
import classNames from "classnames/bind";
import { KAKAO_ICON, FACEBOOK_ICON, LINK_ICON } from "./constant";

const cx = classNames.bind(styles);

export const ShareModal = ({ modal, setModal, children }) => {
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
      <div className={cx("content")} ref={modalRef}>
        <div className={cx("title")}>{children}</div>

        <div className={cx("icon-block")}>
          <div className={cx("text")}>
            <img src={KAKAO_ICON} alt="카카오톡" />
            <p>카카오톡</p>
          </div>

          <div className={cx("text")}>
            <img src={FACEBOOK_ICON} alt="페이스북" />
            <p>페이스북</p>
          </div>

          <div className={cx("text")}>
            <img src={LINK_ICON} alt="링크 복사" />
            <p>링크 복사</p>
          </div>
        </div>
      </div>
    </div>
  );
};
