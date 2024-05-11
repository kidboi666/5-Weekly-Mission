import React from "react";
import FaceBookIco from "../../assets/icon/share-facebook-ico.png";
import KakaoIco from "../../assets/icon/share-kakao-ico.png";
import LinkIco from "../../assets/icon/share-link-ico.png";
import styles from "@/src/components/Modal/Modal.module.css";
import Image from "next/image";
import { RenderModalType } from "./Modal";

function ShareModal({
  modalTypeLabels,
  modalType,
  folderTabName,
}: Omit<RenderModalType, "folderTabDataList" | "cardUrl">) {
  return (
    <div className={styles.modalForm1}>
      <h2>{modalTypeLabels && modalTypeLabels[modalType]}</h2>
      <div className={styles.conWrap}>
        <div className={styles.folderLinkWrap}>{folderTabName}</div>
        <ul className={styles.folderShareWrap}>
          <li>
            <button>
              <Image width={42} height={42} src={KakaoIco} alt="카카오톡 공유하기" />
              <h3>카카오톡</h3>
            </button>
          </li>
          <li>
            <button>
              <Image width={42} height={42} src={FaceBookIco} alt="페이스북 공유하기" />
              <h3>페이스북</h3>
            </button>
          </li>
          <li>
            <button>
              <Image width={42} height={42} src={LinkIco} alt="링크 복사하기" />
              <h3>링크 복사</h3>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ShareModal;
