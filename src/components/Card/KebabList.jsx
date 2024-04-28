import "./KebabList.css";
import { useContext } from "react";
import ModalContext from "../Modal/ModalContext";

function KebabList() {
  const { openModal, setModalType } = useContext(ModalContext);

  const onClickDeleteLinkModalOpen = (e) => {
    e.preventDefault();
    setModalType("linkDelete");
    openModal();
  };

  const onClickAddFolderModalOpen = (e) => {
    e.preventDefault();
    setModalType("folderAdd");
    openModal();
  };
  return (
    <ul className="Kebab-list">
      <li>
        <button onClick={onClickDeleteLinkModalOpen}>삭제하기</button>
      </li>
      <li>
        <button onClick={onClickAddFolderModalOpen}>폴더에 추가</button>
      </li>
    </ul>
  );
}

export default KebabList;
