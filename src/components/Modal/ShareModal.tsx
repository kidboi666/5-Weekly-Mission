import React from "react";
import FaceBookIco from "../../assets/icon/share-facebook-ico.png";
import KakaoIco from "../../assets/icon/share-kakao-ico.png";
import LinkIco from "../../assets/icon/share-link-ico.png";

interface ShareModalType {
  modalType: string;
  modalTypeLabels?: Record<string, string>;
  folderTabName: string;
}

function ShareModal({ modalTypeLabels, modalType, folderTabName }: ShareModalType) {
  return (
    <div className="modal-form1">
      <h2>{modalTypeLabels && modalTypeLabels[modalType]}</h2>
      <div className="con-wrap">
        <div className="folder-link-wrap">{folderTabName}</div>
        <ul className="folder-share-wrap">
          <li>
            <button>
              <img src={KakaoIco} alt="카카오톡 공유하기" />
              <h3>카카오톡</h3>
            </button>
          </li>
          <li>
            <button>
              <img src={FaceBookIco} alt="페이스북 공유하기" />
              <h3>페이스북</h3>
            </button>
          </li>
          <li>
            <button>
              <img src={LinkIco} alt="링크 복사하기" />
              <h3>링크 복사</h3>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ShareModal;
