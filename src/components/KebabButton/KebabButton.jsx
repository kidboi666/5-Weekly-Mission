import { useState } from "react";
import kebabIcon from "../../assets/kebab.svg";
import "../KebabButton/KebabButton.css";
import { LinkDeletModal } from "../../sharing/ui-modal-layout/LinkDeletModal";

function KebabButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [addModal, setAddModal] = useState(false);

  const kebabPopover = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteModal = () => {
    setModalIsOpen(true);
  };

  const handleAddModal = () => {
    setAddModal(true);
  };

  return (
    <div className="kebab-container">
      <div onClick={kebabPopover}>
        <img src={kebabIcon} alt="kebab" />
      </div>
      {isOpen && (
        <ul className="kebab-popover">
          <button className="kebab-text" onClick={handleDeleteModal}>
            삭제하기
          </button>
          <li className="kebab-text" onClick={handleAddModal}>
            폴더에 추가
          </li>
        </ul>
      )}
      {modalIsOpen && <LinkDeletModal />}
      {addModal && <p>hi</p>}
    </div>
  );
}

export default KebabButton;
