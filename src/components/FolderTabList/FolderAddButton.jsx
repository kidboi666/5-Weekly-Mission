import "./FolderAddButton.css";
import addBtnImg from "../../assets/icon/svg/add-button-img.svg";
import ModalContext from "../Modal/ModalContext";
import { useContext } from "react";

function FolderAddButton() {
  const { openModal } = useContext(ModalContext);

  return (
    <button className="folder-add-button" onClick={openModal}>
      폴더 추가 <img src={addBtnImg} alt="" />
    </button>
  );
}

export default FolderAddButton;
