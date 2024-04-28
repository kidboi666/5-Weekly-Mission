import "./Modal.css";
import CloseImg from "../../assets/icon/close.png";
import folderCheckImg from "../../assets/icon/svg/folder-check.svg";
import { useContext } from "react";
import ModalContext from "./ModalContext";

function renderModal(modalType, modalTypeLabels, folderTabDataList, userFolderDataList) {
  console.log(userFolderDataList);
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
    (modalType === "folderAdd" && (
      <div className="modal-form1">
        <h2>{modalTypeLabels[modalType]}</h2>
        <div className="con-wrap">
          <div className="folder-link-wrap">
            https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=u
          </div>
          <ul className="add-folder-wrap">
            {folderTabDataList.map(({ id, link, name }) => {
              return (
                <li key={id}>
                  <button>
                    <h3>
                      {name} <span>{link.count}개 링크</span>
                      <img src={folderCheckImg} alt="" />
                    </h3>
                  </button>
                </li>
              );
            })}
          </ul>
          <button className="btn-form01">추가하기</button>
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
      <div className="modal-form1 modal-delete">
        <h2>{modalTypeLabels[modalType]}</h2>
        <div className="con-wrap">
          <div className="folder-link-wrap">
            https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=u
          </div>
        </div>
        <button className="btn-form01">삭제하기</button>
      </div>
    )) ||
    null
  );
}

function Modal({ modalType, folderTabDataList, userFolderDataList }) {
  const { isOpen, closeModal } = useContext(ModalContext);

  const modalTypeLabels = {
    add: "폴더 추가",
    folderAdd: "폴더에 추가",
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
            {renderModal(modalType, modalTypeLabels, folderTabDataList, userFolderDataList)}
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
