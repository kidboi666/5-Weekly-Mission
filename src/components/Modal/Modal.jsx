import "./Modal.css";
import CloseImg from "../../assets/icon/close.png";
import { useContext } from "react";
import ModalContext from "./ModalContext";

function renderModal(modalType, modalTypeLabels) {
  return (
    (modalType === "add" && (
      <div className="modal-form1">
        <h2>{modalTypeLabels[modalType]}</h2>
        <div className="con-wrap">
          <input type="text" className="modal-input" placeholder="내용 입력" />
          <button className="btn-form01">변경하기</button>
        </div>
      </div>
    )) ||
    (modalType === "edit" && (
      <div className="modal-form2">
        <h2>{modalTypeLabels[modalType]}</h2>
      </div>
    )) ||
    (modalType === "folderDelete" && (
      <div className="modal-form3">
        <h2>{modalTypeLabels[modalType]}</h2>
      </div>
    )) ||
    (modalType === "linkDelete" && (
      <div className="modal-form3">
        <h2>{modalTypeLabels[modalType]}</h2>
      </div>
    )) ||
    null
  );
}

function Modal({ modalType }) {
  const { isOpen, closeModal } = useContext(ModalContext);

  const modalTypeLabels = {
    add: "폴터 추가",
    edit: "폴더 이름 변경",
    folderDelete: "폴더 삭제",
    linkDelete: "링크 삭제",
  };

  return (
    <>
      {isOpen && (
        <div className="modal-wrap">
          <div className="modal-bg"></div>
          <div className="modal-con">
            {renderModal(modalType, modalTypeLabels)}
            <div className="modal-exit">
              <button>
                <img src={CloseImg} alt="모달 닫기" onClick={closeModal} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
