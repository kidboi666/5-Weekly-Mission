import "./KebabList.css";
import { useContext } from "react";
import ModalContext from "../Modal/ModalContext";

function KebabList({ url, setDisplay }) {
  const { openModal, setModalType, setCardUrl } = useContext(ModalContext);

  const onClickDeleteLinkModalOpen = (e) => {
    e.preventDefault();
    setModalType("linkDelete");
    setCardUrl(url);
    openModal();
    setDisplay();
  };

  const onClickAddFolderModalOpen = (e) => {
    e.preventDefault();
    setModalType("folderAdd");
    setCardUrl(url);
    openModal();
    setDisplay();
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
