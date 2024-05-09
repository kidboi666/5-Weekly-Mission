import CloseImg from "../../assets/icon/close.png";
import { useContext } from "react";
import ModalContext from "./ModalContext";
import ShareModal from "./ShareModal";
import FolderAddModal from "./FolderAddModal/FolderAddModal";
import styles from "@/src/components/Modal/Modal.module.css";
import Image from "next/image";

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
  folderTabName: string | null;
}

function renderModal(
  modalType: string,
  modalTypeLabels: Record<string, string>,
  folderTabDataList: UserFolderdataList["data"][],
  cardUrl: string,
  folderTabName: string | null
) {
  return (
    (modalType === "add" && (
      <div className={styles.modalForm1}>
        <h2>{modalTypeLabels && modalTypeLabels[modalType]}</h2>
        <div className={styles.conWrap}>
          <input type="text" className={styles.modalInput} placeholder="내용 입력" />
          <button className="btnForm01">추가하기</button>
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
      <div className={styles.modalForm1}>
        <h2>{modalTypeLabels && modalTypeLabels[modalType]}</h2>
        <div className={styles.conWrap}>
          <input type="text" className={styles.modalInput} placeholder="내용 입력" />
          <button className="btnForm01">변경하기</button>
        </div>
      </div>
    )) ||
    (modalType === "folderDelete" && (
      <div className={`${styles.modalForm1} ${styles.modalDelete}`}>
        <h2>{modalTypeLabels && modalTypeLabels[modalType]}</h2>
        <div className={styles.conWrap}>
          <div className={styles.folderLinkWrap}>{folderTabName}</div>
        </div>
        <button className="btnForm01">삭제하기</button>
      </div>
    )) ||
    (modalType === "linkDelete" && (
      <div className={`${styles.modalForm1} ${styles.modalDelete}`}>
        <h2>{modalTypeLabels && modalTypeLabels[modalType]}</h2>
        <div className={styles.conWrap}>
          <div className={styles.folderLinkWrap}>{cardUrl}</div>
        </div>
        <button className="btnForm01">삭제하기</button>
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
        <div className={styles.modalWrap}>
          <div className={styles.modalBg}></div>
          <div className={styles.modalCon}>
            {renderModal(modalType, modalTypeLabels, folderTabDataList, cardUrl, folderTabName)}
            <div className={styles.modalExit}>
              <button>
                <Image width={24} height={24} src={CloseImg} alt="모달 닫기" onClick={closeModal} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
