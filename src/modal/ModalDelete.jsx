import closeIcon from '../assets/_close.svg';
import { useState } from 'react';
import './modalDelete.css';

export default function ModalDelete({ title, DeleteName }) {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    isModalOpen && (
      <div className="modal">
        <div className="modal__content">
          <div className="modal__content__header">{title}</div>

          <div className="modal__content__body">{DeleteName}</div>
          <button className="action-button">삭제하기</button>

          <button className="exit_button" onClick={handleCloseModal}>
            <img src={closeIcon} alt="닫기버튼" />
          </button>
        </div>
      </div>
    )
  );
}
