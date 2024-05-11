import CloseImg from "../../assets/icon/close.png";
import { ReactNode, useContext } from "react";
import ModalContext from "./ModalContext";
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

export interface RenderModalType {
  modalType: string;
  modalTypeLabels: Record<string, string>;
  folderTabDataList: UserFolderdataList["data"][];
  cardUrl?: string;
  folderTabName?: string | null;
  children?: ReactNode;
}

function Modal({ children }: Partial<RenderModalType>) {
  const { isOpen, closeModal } = useContext(ModalContext)!;

  return (
    <>
      {isOpen && (
        <div className={styles.modalWrap}>
          <div className={styles.modalBg}></div>
          <div className={styles.modalCon}>
            {children}
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
