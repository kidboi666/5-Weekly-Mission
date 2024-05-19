import { useEffect, useRef } from "react";
import styles from "./AddFolderModal.module.scss";
import classNames from "classnames/bind";
import { COLSE_ICON } from "./constant";

const cx = classNames.bind(styles);

export const AddFolderModal = ({ modal, setModal, url, folders }) => {
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
      <div className={cx("content")} ref={modalRef}>
        <div className={cx("title")}>
          <h2>폴더에 추가</h2>
          <p>{url}</p>
          <div className={cx("folder-block")}>
            {folders.map((item) => {
              return (
                <button
                  key={item.id}
                  // onClick={() => clickButton(item, index)}
                  type="button"
                >
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>

          <button className={cx("add-button")} type="button">
            추가하기
          </button>
        </div>
      </div>
    </div>
  );
};
