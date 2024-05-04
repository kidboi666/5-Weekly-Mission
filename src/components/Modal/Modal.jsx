import { useRef } from "react";
import styles from "./Modal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Modal = ({ modal, setModal, link }) => {
  const modalRef = useRef(null);

  const handleTest = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      console.log("zz");
    }
  };

  return (
    <div className={cx("container")} onClick={handleTest}>
      <div className={cx("content")}>
        <h2>링크 삭제</h2>
        <span>{link}</span>

        <button type="button">삭제하기</button>
      </div>
    </div>
  );
};
