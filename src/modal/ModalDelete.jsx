import closeIcon from '../assets/_close.svg';

import './modalDelete.css';

export default function ModalDelete({
  title,
  DeleteName,
  onClose,
  isModalOpen,
}) {
  const handleCloseModal = () => {
    onClose(false);
  };

  return (
    isModalOpen && (
      <div className="modal">
        <div className="modal__content">
          <div className="modal__content__header">{title}</div>

          <div className="modal__content__body">{DeleteName}</div>
          <button className="delete-action-button">삭제하기</button>

          <button className="exit_button" onClick={handleCloseModal}>
            <img src={closeIcon} alt="닫기버튼" />
          </button>
        </div>
      </div>
    )
  );
}
