import "./AddLinkForm.css";
import React from "react";
import LinkIcon from "../../assets/icon/link.png";
import { useContext } from "react";
import ModalContext from "../Modal/ModalContext";

function AddLinkForm() {
  const { openModal, setModalType } = useContext(ModalContext)!;
  const onClickModalOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openModal();
    setModalType("folderAdd");
  };
  return (
    <div className="link-wrap">
      <form className="link-add-form">
        <div className="link-con-wrap">
          <img src={LinkIcon} alt="" />
          <input className="link-input" type="text" placeholder="링크를 추가해보세요." />
          <button className="link-button" onClick={onClickModalOpen}>
            추가하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddLinkForm;
