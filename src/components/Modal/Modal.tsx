import CloseImg from "../../assets/icon/close.png";
import { useContext } from "react";
import ModalContext from "./ModalContext";
import ShareModal from "./ShareModal";
import FolderAddModal from "./FolderAddModal/FolderAddModal";
import styles from "@/src/components/Modal/Modal.module.css";
import Image from "next/image";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
import FolderDeleteModal from "./FolderDeleteModal";
import LinkDeleteModal from "./LinkDeleteModal";

interface UserFolderdataList {
  data: {
    id: number;
    name: string;
    link: {
      count: number;
    };
  };
}

export interface RenderModalType {
  modalType: string;
  modalTypeLabels: Record<string, string>;
  folderTabDataList: UserFolderdataList["data"][];
  cardUrl: string;
  folderTabName: string | null;
}

function renderModal({
  modalType,
  modalTypeLabels,
  folderTabDataList,
  cardUrl,
  folderTabName,
}: RenderModalType) {
  return (
    (modalType === "add" && <AddModal modalTypeLabels={modalTypeLabels} modalType={modalType} />) ||
    (modalType === "folderAdd" && (
      <FolderAddModal
        modalTypeLabels={modalTypeLabels}
        modalType={modalType}
        cardUrl={cardUrl}
        folderTabDataList={folderTabDataList}
      />
    )) ||
    (modalType === "edit" && (
      <EditModal modalTypeLabels={modalTypeLabels} modalType={modalType} />
    )) ||
    (modalType === "folderDelete" && (
      <FolderDeleteModal
        modalTypeLabels={modalTypeLabels}
        modalType={modalType}
        folderTabName={folderTabName}
      />
    )) ||
    (modalType === "linkDelete" && (
      <LinkDeleteModal modalType={modalType} modalTypeLabels={modalTypeLabels} cardUrl={cardUrl} />
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

function Modal({
  modalType,
  folderTabDataList,
  cardUrl,
  folderTabName,
}: Omit<RenderModalType, "modalTypeLabels">) {
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
            {renderModal({ modalType, modalTypeLabels, folderTabDataList, cardUrl, folderTabName })}
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
