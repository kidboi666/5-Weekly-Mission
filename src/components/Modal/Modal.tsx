import React from "react";
import "./Modal.css";
import CloseImg from "../../assets/icon/close.png";
import { useContext } from "react";
import ModalContext from "./ModalContext";
import ShareModal from "./ShareModal";
import FolderAddModal from "./FolderAddModal/FolderAddModal";

interface UserFolderdataList {
  data: {
    id: number;
    name: string;
    link: {
      count: number;
    };
  };
}

interface RenderModalType {
  modalType: string;
  modalTypeLabels?: Record<string, string>;
  folderTabDataList: UserFolderdataList["data"][];
  cardUrl: string;
  folderTabName: string;
}

function renderModal(
  modalType: string,
  modalTypeLabels: Record<string, string>,
  folderTabDataList: UserFolderdataList["data"][],
  cardUrl: string,
  folderTabName: string
) {
  return (
    (modalType === "add" && (
      <div className="modal-form1">
        <h2>{modalTypeLabels && modalTypeLabels[modalType]}</h2>
        <div className="con-wrap">
          <input type="text" className="modal-input" placeholder="내용 입력" />
          <button className="btn-form01">추가하기</button>
        </div>
      </div>
    )) ||
    (modalType === "folderAdd" && (
      <FolderAddModal
        modalTypeLabels={modalTypeLabels}
        modalType={modalType}
        cardUrl={cardUrl}
        folderTabDataList={folderTabDataList}
      />
    )) ||
    (modalType === "edit" && (
      <div className="modal-form1">
        <h2>{modalTypeLabels && modalTypeLabels[modalType]}</h2>
        <div className="con-wrap">
          <input type="text" className="modal-input" placeholder="내용 입력" />
          <button className="btn-form01">변경하기</button>
        </div>
      </div>
    )) ||
    (modalType === "folderDelete" && (
      <div className="modal-form1 modal-delete">
        <h2>{modalTypeLabels && modalTypeLabels[modalType]}</h2>
        <div className="con-wrap">
          <div className="folder-link-wrap">{folderTabName}</div>
        </div>
        <button className="btn-form01">삭제하기</button>
      </div>
    )) ||
    (modalType === "linkDelete" && (
      <div className="modal-form1 modal-delete">
        <h2>{modalTypeLabels && modalTypeLabels[modalType]}</h2>
        <div className="con-wrap">
          <div className="folder-link-wrap">{cardUrl}</div>
        </div>
        <button className="btn-form01">삭제하기</button>
      </div>
    )) ||
    (modalType === "share" && (
      <ShareModal
        modalTypeLabels={modalTypeLabels}
        modalType={modalType}
        folderTabName={folderTabName}
      />
    )) ||
    null
  );
}

function Modal({ modalType, folderTabDataList, cardUrl, folderTabName }: RenderModalType) {
  const { isOpen, closeModal } = useContext(ModalContext)!;

  const modalTypeLabels = {
    add: "폴더 추가",
    folderAdd: "폴더에 추가",
    edit: "폴더 이름 변경",
    folderDelete: "폴더 삭제",
    linkDelete: "링크 삭제",
    share: "폴더 공유",
  };

  return (
    <>
      {isOpen && (
        <div className="modal-wrap">
          <div className="modal-bg"></div>
          <div className="modal-con">
            {renderModal(modalType, modalTypeLabels, folderTabDataList, cardUrl, folderTabName)}
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
