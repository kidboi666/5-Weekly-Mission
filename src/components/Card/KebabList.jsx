import "./KebabList.css";
import { useContext } from "react";
import ModalContext from "../Modal/ModalContext";

function KebabList() {
  const { openModal } = useContext(ModalContext);

  const onClickModalOpen = (e) => {
    e.preventDefault();
    openModal();
  };
  return (
    <ul className="Kebab-list">
      <li>
        <button onClick={onClickModalOpen}>삭제하기</button>
      </li>
      <li>
        <button onClick={onClickModalOpen}>폴더에 추가</button>
      </li>
    </ul>
  );
}

export default KebabList;
