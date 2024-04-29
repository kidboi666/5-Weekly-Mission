import "./FolderAddButton.css";
import addBtnImg from "../../assets/icon/svg/add-button-img.svg";
import ModalContext from "../Modal/ModalContext";
import { useContext } from "react";

function FolderAddButton() {
  const { openModal, setModalType } = useContext(ModalContext);

  const onClickButton = () => {
    setModalType("add");
    openModal();
  };

  return (
    <button className="folder-add-button" onClick={onClickButton}>
      폴더 추가 <img src={addBtnImg} alt="" />
    </button>
  );
}

export default FolderAddButton;
